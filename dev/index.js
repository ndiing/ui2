const fs = require("fs");
const path = require("path");

const [,,name] = process.argv

function read(file, data) {
    try {
        data = fs.readFileSync(file, {
            encoding: "utf8",
        });
    } catch (error) {}
    return data;
}
function write(file, data) {
    let dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, {
            recursive: true,
        });
    }
    fs.writeFileSync(file, data);
}

let content = read("./src/material/"+name+"/"+name+".js");

content=content.replace(/\/\*\*[\s\S]+?\*\//gm, ($,) => {
    return''
})

let emits = [];

content = content.replace(/(^    (static )?(async )?((get|set) )?(\w+)\((.*?)\) \{([\s\S]+?)^    \})/gm, ($, text, staticFunction, asyncFunction, x, accessorFunction, methodName, methodParameter, methodBody) => {
    let fires = [];
    for (let [, eventName, eventParameter] of methodBody.matchAll(/this\.emit\("(\w+)", (.*?)\)/gm)) {
        fires.push({
            eventName,
            eventParameter,
        });
        emits.push({
            eventName,
            eventParameter,
        });
    }
    let code = "";
    code += `    /**\r\n`;
    code += `     * \r\n`;
    code += `     */\r\n`;
    code += text;
    if (![/^render/, /^handle/, /^firstUpdate/, /^updated/, /^connected/, /^disconnected/, /^constructor/, /style$/i].some((regexp) => regexp.test(methodName))) {
        return code;
    }
    return text;
});

content = content.replace(/(^    (static )?(\w+) = \{([\s\S]+?)^    \})/gm, ($, text, staticProperty, propertyName, propertyBody) => {
    let props = [];
    for (let [, propertyName, propertyType] of propertyBody.matchAll(/(\w+)\: \{ type: (\w+)/gm)) {
        props.push({
            propertyName,
            propertyType,
        });
    }
    let code = "";
    code += `    /**\r\n`;
    for (let doc of props) {
        code += `     * @property {${doc.propertyType}} ${doc.propertyName} - \r\n`;
    }
    code += `     */\r\n`;
    code += text;
    return code;
});

let inheritName = content.match(/extends (\w+)/)[1];
let tagName = content.match(/define\("(.*?)"/)[1];
content = content.replace(/(class (\w+))/, ($, text, className) => {
    let code = "";
    code += `/**\r\n`;

    code += ` * @extends ${inheritName}\r\n`;
    code += ` * @tagname ${tagName}\r\n`;
    for (let doc of emits) {
        code += ` * @fires ${className}#${doc.eventName} - \r\n`;
    }
    code += ` */\r\n`;
    code += text;
    return code;
});

write("./src/material/"+name+"/"+name+".js",content)
