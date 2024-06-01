const fs = require("fs");
const path = require("path");

const [, , name] = process.argv;

const content = fs.readFileSync("./src/com/" + name + "/" + name + ".js", { encoding: "utf8" });

let data = "";
content
    .split(/^class /gm)
    .slice(1)
    .forEach((content2) => {
        let content3 = "class " + content2;
        let { code } = parse(content3);
        data += code;
    });
fs.writeFileSync("./docs/" + name + ".md", data);

function parse(content) {
    let code = "";
    const className = content.match(/class (\w+)/)?.[1];
    const inheritName = content.match(/class \w+( extends (\w+))?/)?.[2];
    const tagName = content.match(/customElements.define\("([^"]+)",/)?.[1];

    const events = [];
    for (const [, name] of content.matchAll(/emit\("([^"]+)",/g)) {
        events.push(name);
    }

    const methodsRegex = /^(\s*)(static )?(async )?((get|set) )?(\w+)\((.*?)\) {/gm;
    const methods = [];
    let match;
    while ((match = methodsRegex.exec(content)) !== null) {
        const [, leadingWhitespace, staticKeyword, asyncKeyword, accessor, , name, parameters] = match;
        methods.push({
            block: leadingWhitespace,
            static: staticKeyword !== undefined,
            async: asyncKeyword !== undefined,
            accessor: accessor || "",
            name,
            parameters: parameters || "",
        });
    }

    const matchesProperties = content.match(/static get properties\(\) {[\s\S]+?return {([\s\S]+?)};[\s\S]+?}/)?.[1];
    const properties = [];
    if (matchesProperties) {
        for (const [, name, type] of matchesProperties.matchAll(/(\w+): \{ type: (\w+)/g)) {
            properties.push({ name, type });
        }
    }

    const matchesUi = content.match(/if \(changedProperties.has\("ui"\)\) {[\s\S]+?\[([\s\S]+?)\]\.forEach\(\(ui\)/)?.[1];
    const variants = [];
    if (matchesUi) {
        for (const [, name] of matchesUi.matchAll(/"([^"]+)"/g)) {
            variants.push(name);
        }
    }

    code += `# ${className}\r\n`;
    code += `The \`${className}\` interface provides special properties (beyond the regular \`${inheritName}\` interface it also has available to it by inheritance) for manipulating \`<${tagName}>\` elements.\r\n`;
    code += `\r\n`;
    code += `## Instance properties\r\n`;
    code += `\r\n`;
    code += `name|type|desc\r\n`;
    code += `---|---|---\r\n`;
    for (const { name, type } of properties) {
        if (name == "ui") {
            code += `${name}|\`${type}\`|possible values ${variants}\r\n`;
        } else {
            code += `${name}|\`${type}\`|-\r\n`;
        }
    }
    code += `\r\n`;
    code += `## Instance methods\r\n`;
    code += `\r\n`;
    code += `block|asynchronous|accessor|name|parameters\r\n`;
    code += `---|---|---|---|---\r\n`;
    for (const { block, asynchronous, accessor, name, parameters } of methods) {
        if (
            [
                //
                "properties",
                "constructor",
                "renderItem",
                "render",
                "connectedCallback",
                "disconnectedCallback",
                "updated",
                "firstUpdated",
            ].includes(name) ||
            /^(render|handle|update)/.test(name)
        )
            continue;
            code += `${block||'-'}|${asynchronous||'-'}|${accessor||'-'}|${name||'-'}|${parameters||'-'}\r\n`;
    }
    code += `\r\n`;
    code += `## Events\r\n`;
    code += `\r\n`;
    code += `name|desc\r\n`;
    code += `---|---\r\n`;
    for (const name of events) {
        code += `\`${name}\`|-\r\n`;
    }

    return {
        className,
        inheritName,
        tagName,
        properties,
        variants,
        methods,
        events,
        code,
    };
}
