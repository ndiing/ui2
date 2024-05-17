const fs = require("fs");
const path = require("path");

const [,,name] = process.argv


function generateCustomElementHtml(codeSnippet) {
    const propertiesRegex = /static\s+get\s+properties\s*\(\)\s*\{\s*return\s*\{([^]*?)\};\s*\}/;
    const propertiesMatch = codeSnippet.match(propertiesRegex);

    const propertiesArray = [];
    if (propertiesMatch) {
        const propertiesContent = propertiesMatch[1].trim();

        const propertyRegex = /(\w+):\s*\{\s*type:\s*(\w+)\s*\},?/g;
        let match;

        while ((match = propertyRegex.exec(propertiesContent)) !== null) {
            const name = match[1];
            const type = match[2];
            propertiesArray.push({ name: name, type: eval(type) });
        }
    }

    const tagNameRegex = /customElements\.define\("([^"]+)",\s*\w+\);/;
    const tagNameMatch = codeSnippet.match(tagNameRegex);

    let tagName = null;
    if (tagNameMatch) {
        tagName = tagNameMatch[1];
    }

    if (tagName) {
        let htmlString = `<${tagName}`;
        propertiesArray.forEach((prop) => {
            if (prop.type === Boolean) {
                htmlString += `\n    ${prop.name}`;
            } else {
                htmlString += `\n    ${prop.name}="${prop.name === "label" ? "Title" : prop.name === "icon" ? "image" : ""}"`;
            }
        });
        htmlString += `\n></${tagName}>`;

        return htmlString;
    }

    return "";
}

var data = fs.readFileSync(`./src/lib/${name}/${name}.js`, { encoding: "utf8" });
var properties = [];
var methods = [];
var events = [];
for (let [, methodName, args, methodInner] of data.matchAll(/ (\w+)\((.*?)\).*?\{([\s\S]+?)\}\r\n/g)) {
    methodName = methodName.trim();
    args = args
        .split(",")
        .map((arg) => arg.trim())
        .filter(Boolean);
    // console.log(methodName, args);
    if (methodName == "properties") {
        let props = [];
        for (const [, propertyName, propertyInner] of methodInner.matchAll(/(\w+).*?:.*?\{([\s\S]+?)\}/g)) {
            const [, , value] = propertyInner.match(/(\w+):.*?(\w+)/) || [];
            props.push({ name: propertyName, type: value });
        }
        properties = props;
    }
    if (!["properties", "constructor", "render", "firstUpdated", "updated", "connectedCallback", "disconnectedCallback", "handle", "update"].some((key) => new RegExp(key).test(methodName))) {
        methods.push({ name: methodName, args });
    }
}

for (let [, , name, , args] of data.matchAll(/emit\(("|')(\w+)('|"),?(.*?)\)/g)) {
    name = name.trim();
    args = args
        .split(",")
        .map((arg) => arg.trim())
        .filter(Boolean);
    events.push({ name, args });
}

const [, className, ,extendsName] = data.match(/class (\w+)( extends (\w+))?/);

let example=generateCustomElementHtml(data)

let code = ``

code += `# ${className} => ${extendsName}\r\n`
code += `\r\n`
code += `## Example\r\n`
code += `\`\`\`html\r\n`
code += `${example}\r\n`
code += `\`\`\`\r\n`
code += `\r\n`
code += `## Properties\r\n`
code += `Name | Type | Description\r\n`
code += `--- | --- | ---\r\n`
for(const {name,type} of properties){
    code += `${name} | ${type} | no description\n`

}
code += `\r\n`
code += `## Methods\r\n`
code += `Name | Arguments | Description\r\n`
code += `--- | --- | ---\r\n`
for(const {name,args} of methods){
    code += `${name} | ${args.length?args:"no args"} | no description\n`
}
code += `\r\n`
code += `## Events\r\n`
code += `Name | Details | Description\r\n`
code += `--- | --- | ---\r\n`
for(const {name,args} of events){
    code += `${name} | ${args.length?args:"no args"} | no description\n`
}
code += `\r\n`

fs.writeFileSync(`./docs/${name}.md`,code)