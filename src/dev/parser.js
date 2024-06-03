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
const content = read("./src/com/data-table/data-table.js");
content
    .split("class ")
    .slice(1)
    .forEach((content) => {
        parse("class " + content);
    });
function parse(content) {
    const className = content.match(/^class (\w+)/)?.[1];
    const inheritName = content.match(/extends (\w+)/)?.[1];
    const tagName = content.match(/customElements.define\("([^"]+)",/)?.[1];

    const methods = [];
    for (const [, static, async, , accessor, name, parameters] of content.matchAll(/^    (static )?(async )?((get|set) )?(\w+)\(([^\)]+)?\) \{/gm)) {
        methods.push({ static, async, accessor, name, parameters });
    }

    const events = [];
    for (const [, name, parameters] of content.matchAll(/this\.emit\("([^"]+)", ([^)]+)\)/gm)) {
        events.push({ name, parameters });
    }

    const content2 = content.match(/static get properties\(\) \{[\s\S]+?return \{([\s\S]+?)\};[\s\S]+?\}/)?.[1];

    const properties = [];
    if (content2) {
        for (const [, name, type] of content2.matchAll(/(\w+): { type: (\w+)/gm)) {
            properties.push({ name, type });
        }
    }

    console.log({
        className,
        inheritName,
        tagName,
        properties,
        methods,
        events,
    });
}
