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

                content = content.replace(/\/\*\*(?:.|\n)*?\*\//gm, "");

                content = parse(content);
                write(pathname2, content);
            }
        }
    }
}
open("./src/com");
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

// content=content.replace(/\/\*\*(?:.|\n)*?\*\//gm,'')

// content=parse(content);
// write("./src/dev/example.cjs", content);
function parse(content) {
    content = content.replace(/^(class.*?\{)([\s\S]+?)(^\})/gm, ($, $1, $2, $3) => {
        let content = $1 + $2 + $3;
        const className = content.match(/^class (\w+)/m)?.[1];
        const inheritName = content.match(/extends (\w+)/)?.[1];
        const tagName = content.match(/^customElements.define\("([^"]+)",/m)?.[1];

        const methods = [];
        for (const [, static, async, , accessor, name, parameters] of content.matchAll(/^    (static )?(async )?((get|set) )?(\w+)\(([^\)]+)?\) \{/gm)) {
            methods.push({ static, async, accessor, name, parameters });
        }

        const events = [];
        for (const [, name, parameters] of content.matchAll(/this\.emit\("([^"]+)", ([^)]+)\)/gm)) {
            events.push({ name, parameters });
        }

        const content2 = content.match(/^    static get properties\(\) \{[\s\S]+?return \{([\s\S]+?)\};[\s\S]+?\}/)?.[1];

        const properties = [];
        if (content2) {
            for (const [, name, type] of content2.matchAll(/(\w+): { type: (\w+)/gm)) {
                properties.push({ name, type });
            }
        }

        const functions = [];
        for (const [, name, parameters] of content.matchAll(/^function (\w+)\(([^\)]+)?\) \{/gm)) {
            functions.push({ name, parameters });
        }

        const content3 = content.match(/\[([^\]]+)\]\.forEach\(\(ui\)/m)?.[1];

        const variants = [];
        if (content3) {
            for (const [, name] of content3.matchAll(/"([^"]+)"/gm)) {
                variants.push({ name });
            }
        }

        // console.log({
        //     className,
        //     inheritName,
        //     tagName,
        //     properties,
        //     methods,
        //     events,
        //     functions,
        //     variants,
        // });

        content = content.replace(/(class )/, ($, $1) => {
            let data = "";
            data += `/**\r\n`;
            data += ` *\r\n`;
            if (className) {
                data += ` * @class ${className}\r\n`;
            }
            if (inheritName) {
                data += ` * @extends ${inheritName}\r\n`;
            }
            data += ` */\r\n`;
            data += $1;
            return data;
        });

        content = content.replace(/^    (static )?(async )?((get|set) )?(\w+)\(([^\)]+)?\) \{([\s\S]+?)^    \}/gm, ($, $static, $async, $accessor, $accessor2, $name, $parameters, content2) => {
            const properties = [];
            for (const [, name, type] of content2.matchAll(/(\w+): { type: (\w+)/gm)) {
                properties.push({ name, type });
            }

            const events = [];
            for (const [, name, parameters] of content2.matchAll(/this\.emit\("([^"]+)", ([^)]+)\)/gm)) {
                events.push({ name, parameters });
            }

            let data = "";
            data += `    /**\r\n`;
            data += `     *\r\n`;
            for (const { name, type } of properties) {
                if (name == "ui") {
                    data += `     * @property {${type}} [${name}] - @variant\r\n`;
                } else {
                    data += `     * @property {${type}} [${name}] - \r\n`;
                }
            }
            for (const { name, type } of events) {
                data += `     * @fires ${className}#${name} \r\n`;
            }
            data += `     */\r\n`;
            data += `    ${$static ?? ""}${$async ?? ""}${$accessor ?? ""}${$name}(${$parameters ?? ""}) {`;
            data += content2;
            data += `    }`;
            return data;
        });

        content = content.replace(
            "@variant",
            variants.map((doc) => doc.name),
        );

        return content;
    });
    //
    return content;
}
