const fs = require("fs");
const path = require("path");

const [, , name] = process.argv;

let code = "";

function open(pathname) {
    for (const dir of fs.readdirSync(pathname, { withFileTypes: true })) {
        let pathname2 = path.join(pathname, dir.name);
        if (dir.isDirectory()) {
            open(pathname2);
        } else {
            if (pathname2.endsWith(".js")) {
                const content = fs.readFileSync(pathname2, { encoding: "utf8" });
                const { tagName, properties, variants } = parse("class " + content.split(/^class /gm).slice(-1));
                if (tagName) {
                    for (const ui of variants) {
                        code += `<${tagName}\r\n`;
                        for (const { name } of properties) {
                            if (name == "ui") {
                                code += `    ${name}="${ui}"\r\n`;
                            } else {
                                // code += `    ${name}=""\r\n`;
                            }
                        }
                        code += `>`;
                        code += `</${tagName}>\r\n`;
                    }
                }
            }
        }
    }
}
open(path.join(process.cwd(), "src", "com"));
// console.log(code);
fs.writeFileSync(path.join(__dirname, "code"), code);

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
    code += `static|asynchronous|accessor|name|parameters\r\n`;
    code += `---|---|---|---|---\r\n`;
    for (const { static, asynchronous, accessor, name, parameters } of methods) {
        if (!(["properties", "constructor", "renderItem", "render", "connectedCallback", "disconnectedCallback", "updated", "firstUpdated"].includes(name) || /^(render|handle|update)/.test(name))) {
            code += `${static || "-"}|${asynchronous || "-"}|${accessor || "-"}|${name || "-"}|${parameters || "-"}\r\n`;
        }
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
