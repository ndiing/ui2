const fs = require("fs");
const path = require("path");

function open(pathname) {
    for (const dir of fs.readdirSync(pathname, { withFileTypes: true })) {
        const pathname2 = pathname + "/" + dir.name;
        if (dir.isDirectory()) {
            open(pathname2);
        } else {
            if (dir.name.endsWith(".js")) {
                const content = read(pathname2);
                parse(content);
            }
        }
    }
}
// open('./src/com')
function read(file, content) {
    try {
        content = fs.readFileSync(file, { encoding: "utf8" });
    } catch (error) {}
    return content;
}
const content = read("./src/com/button/button.js");
// content.split("class ").forEach((content) => {
//     if (content.includes("class") || content.includes("function")) {
//         if (content.includes("class")) {
//             content = "class " + content;
//         }
//         parse(content);
//     }
// });
parse(content);
function parse(content) {
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

    content = content.replace(/^class /gm, () => {
        let data = "";
        data += `/**\r\n`;
        data += ` * @class\r\n`;
        data += ` */\r\n`;
        data += `class `;
        return data;
    });

    fs.writeFileSync("./src/dev/example.cjs", content);
}
