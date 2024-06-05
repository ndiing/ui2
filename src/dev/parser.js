const fs = require("fs");
const path = require("path");

function open(pathname) {
    for (const dir of fs.readdirSync(pathname, { withFileTypes: true })) {
        const pathname2 = pathname + "/" + dir.name;
        if (dir.isDirectory()) {
            open(pathname2);
        } else {
            if (dir.name.endsWith(".js")) {
                let content = read(pathname2, "");

                // content = content.replace(/\/\*\*[\s\S]+?\*\//gm, "");

                content = parse(content);
                // console.log(content);

                for (let content2 of content) {
                    if (content2.tagName) {
                        code += `            ["${content2.tagName}", () => html\`\r\n`;
                        code += `                <${content2.tagName}\r\n`;
                        let properties = content2.methods.find((m) => m.methodName == "properties")?.properties;
                        for (let { name } of properties || []) {
                            code += `                    .${name}="\${ifDefined(item.${name})}"\r\n`;
                        }
                        code += `                >\r\n`;
                        code += `                </${content2.tagName}>\r\n`;
                        code += `                \r\n`;
                        code += `            \`],\r\n`;
                    }
                }
                // write(pathname2, content);
            }
        }
    }
}

let code = "";

code += `function template(item) {\r\n`;
code += `    return choose(\r\n`;
code += `        item.tag,\r\n`;
code += `        [\r\n`;

open("./src/com");
code += `        ],\r\n`;
code += `        () => html\`\r\n`;
code += `            \r\n`;
code += `        \`,\r\n`;
code += `    );\r\n`;
code += `}\r\n`;
write("./code", code);

function read(file, content) {
    try {
        content = fs.readFileSync(file, { encoding: "utf8" });
    } catch (error) {}
    return content;
}
function write(file, content) {
    try {
    } catch (error) {}
    fs.writeFileSync(file, content);
}
// let content = read("./src/com/nested-list/nested-list.js");
// content = parse(content);
// console.log(content);
function parse(content) {
    let data = [];
    content.split(/^class /gm).forEach((content) => {
        let [, className, , inheritName] = content.match(/^(\w+)( extends (\w+))? \{/) || [];

        let [, tagName] = content.match(/customElements\.define\("([^"]+)",/) || [];

        let methods = [];
        for (let [, static, async, , accessor, methodName, parameters, content2] of content.matchAll(/    (static )?(async )?((get|set) )?(\w+)\(([^\)]+)?\) \{([\s\S]+?)^    }/gm) || []) {
            let properties = [];
            if (methodName == "properties") {
                for (let [, name, type] of content2.matchAll(/(\w+): \{ type: (\w+)/gm)) {
                    properties.push({ name, type });
                }
            }

            let uis = [];
            let [, content3] = content2.match(/\[([^\]]+)\]\.forEach\(\(ui\)/) || [];
            if (methodName == "updated" && content3) {
                for (let [, name] of content3.matchAll(/"([^"]+)"/gm)) {
                    uis.push({ name });
                }
            }

            let events = [];
            for (let [, name] of content2.matchAll(/this\.emit\("([^"]+)",/gm)) {
                events.push({ name });
            }

            methods.push({
                static,
                async,
                accessor,
                methodName,
                parameters,
                properties,
                uis,
                events,
            });
        }

        let functions = [];
        for (let [, name, parameters] of content.matchAll(/function (\w+)\(([^\)]+)\) \{/gm)) {
            functions.push({ name, parameters });
        }

        if (!((className == undefined || className == "import") && inheritName == undefined && tagName == undefined && methods.length == 0 && functions.length == 0))
            data.push({
                className,
                inheritName,
                tagName,
                methods,
                functions,
            });
    });
    // console.log(data);
    return data;
}
