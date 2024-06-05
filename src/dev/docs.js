const fs = require("fs");
const path = require("path");
const {execSync} = require('child_process');

function open(pathname) {
    for (const dir of fs.readdirSync(pathname, { withFileTypes: true })) {
        const pathname2 = pathname + "/" + dir.name;
        if (dir.isDirectory()) {
            open(pathname2);
        } else {
            if (dir.name.endsWith(".js")) {
                // let content = read(pathname2, "");

                let cmd=(
                    'jsdoc2md '+pathname2+' > '+
                    './docs/'+dir.name.replace('.js','.md')
                )
                let out=execSync(cmd)
                console.log(out)
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