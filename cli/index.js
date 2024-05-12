const fs = require("fs");
const path = require("path");
const readline = require("readline");

//
// HELPER
//

function read(file, data) {
    try {
        data = fs.readFileSync(file, { encoding: "utf8" });
    } catch (error) {
        write(file, data);
    }
    return data;
}

function write(file, data) {
    const dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(file, data);
}

function removeDir(dir) {
    const exist = fs.existsSync(dir);
    if (exist) {
        fs.rmdirSync(dir, { recursive: true });
    }
}

function removeFile(file) {
    const exist = fs.existsSync(file);
    if (exist) {
        fs.unlinkSync(file);
    }
}

function toPascalCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9])([a-zA-Z])/g, function ($, $1, $2) {
        return $2.toUpperCase();
    });
}

function toCamelCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9])([a-zA-Z])/g, function ($, $1, $2, $x) {
        return $x == 0 ? $2.toLowerCase() : $2.toUpperCase();
    });
}

function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, function ($, $1, $2) {
            return $1 + "-" + $2;
        })
        .toLowerCase();
}

//
// HELPER
//

//
// CLI
//

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const commands = ["create component <name>", "delete component <name>", "create controller <name>", "delete controller <name>", "create dev <name>", "delete dev <name>", "create app <name>", "delete app <name>"];

function print() {
    console.log("Welcome to My CLI!");
    console.log("Available commands:");
    commands.forEach((command) => console.log(command));
}

function processCommand(answer) {
    const [command, itemType, itemName] = answer.trim().split(" ");

    switch (command) {
        case "create":
            switch (itemType) {
                case "component":
                    createComponent(itemName);
                    break;
                case "controller":
                    createController(itemName);
                    break;
                case "dev":
                    createDev(itemName);
                    break;
                case "app":
                    createApp(itemName);
                    break;
                default:
                    console.log("Invalid item type");
            }
            break;
        case "delete":
            switch (itemType) {
                case "component":
                    deleteComponent(itemName);
                    break;
                case "controller":
                    deleteController(itemName);
                    break;
                case "dev":
                    deleteDev(itemName);
                    break;
                case "app":
                    deleteApp(itemName);
                    break;
                default:
                    console.log("Invalid item type");
            }
            break;
        default:
            console.log("Invalid command");
    }
}

function createComponent(name) {
    var fileJs = `./src/lib/${name}/${name}.js`;
    var fileScss = `./src/lib/${name}/${name}.scss`;

    var exist = fs.existsSync(fileJs);
    if (exist) {
        console.log(`Component: ${name} already exists`);
    } else {
        console.log(`Creating component: ${name}`);

        var templateJs = read("./cli/component/template.js");
        templateJs = templateJs.replaceAll("template", name).replaceAll("Template", toPascalCase(name));
        write(fileJs, templateJs);

        var templateScss = read("./cli/component/template.scss");
        templateScss = templateScss.replaceAll("template", name).replaceAll("Template", toPascalCase(name));
        write(fileScss, templateScss);

        var indexJs = read("./src/lib/index.js");
        var listJs = indexJs.split(/\r\n/).filter(Boolean);
        var js = `import "./${name}/${name}.js";`;
        listJs.push(js);
        indexJs = listJs.join("\r\n");
        write("./src/lib/index.js", indexJs);

        var indexScss = read("./src/lib/index.scss");
        var listScss = indexScss.split(/\r\n/).filter(Boolean);
        var scss = `@import "./${name}/${name}.scss";`;
        listScss.push(scss);
        indexScss = listScss.join("\r\n");
        write("./src/lib/index.scss", indexScss);
    }
}

function deleteComponent(name) {
    var fileJs = `./src/lib/${name}/${name}.js`;
    var fileScss = `./src/lib/${name}/${name}.scss`;
    var dir = path.dirname(fileJs);

    var exist = fs.existsSync(fileJs);
    if (!exist) {
        console.log(`Component: ${Name} None`);
    } else {
        console.log(`Deleting component: ${name}`);

        removeDir(dir);

        var indexJs = read("./src/lib/index.js");
        var listJs = indexJs.split(/\r\n/).filter(Boolean);
        var js = `import "./${name}/${name}.js";`;
        var iJs = listJs.indexOf(js);
        if (iJs >= -1) {
            listJs.splice(iJs, 1);
        }
        indexJs = listJs.join("\r\n");
        write("./src/lib/index.js", indexJs);

        var indexScss = read("./src/lib/index.scss");
        var listScss = indexScss.split(/\r\n/).filter(Boolean);
        var scss = `@import "./${name}/${name}.scss";`;
        var iScss = listScss.indexOf(scss);
        if (iScss >= -1) {
            listScss.splice(iScss, 1);
        }
        indexScss = listScss.join("\r\n");
        write("./src/lib/index.scss", indexScss);
    }
}

function createController(name) {
    var fileJs = `./src/lib/${name}/${name}.js`;
    var fileScss = `./src/lib/${name}/${name}.scss`;

    var exist = fs.existsSync(fileJs);
    if (exist) {
        console.log(`Controller: ${name} already exists`);
    } else {
        console.log(`Creating controller: ${name}`);

        var templateJs = read("./cli/controller/template.js");
        templateJs = templateJs.replaceAll("template", name).replaceAll("Template", toPascalCase(name));
        write(fileJs, templateJs);

        var templateScss = read("./cli/controller/template.scss");
        templateScss = templateScss.replaceAll("template", name).replaceAll("Template", toPascalCase(name));
        write(fileScss, templateScss);

        var indexJs = read("./src/lib/index.js");
        var listJs = indexJs.split(/\r\n/).filter(Boolean);
        var js = `import "./${name}/${name}.js";`;
        listJs.push(js);
        indexJs = listJs.join("\r\n");
        write("./src/lib/index.js", indexJs);

        var indexScss = read("./src/lib/index.scss");
        var listScss = indexScss.split(/\r\n/).filter(Boolean);
        var scss = `@import "./${name}/${name}.scss";`;
        listScss.push(scss);
        indexScss = listScss.join("\r\n");
        write("./src/lib/index.scss", indexScss);
    }
}

function deleteController(name) {
    var fileJs = `./src/lib/${name}/${name}.js`;
    var fileScss = `./src/lib/${name}/${name}.scss`;
    var dir = path.dirname(fileJs);

    var exist = fs.existsSync(fileJs);
    if (!exist) {
        console.log(`Controller: ${Name} None`);
    } else {
        console.log(`Deleting controller: ${name}`);

        removeDir(dir);

        var indexJs = read("./src/lib/index.js");
        var listJs = indexJs.split(/\r\n/).filter(Boolean);
        var js = `import "./${name}/${name}.js";`;
        var iJs = listJs.indexOf(js);
        if (iJs >= -1) {
            listJs.splice(iJs, 1);
        }
        indexJs = listJs.join("\r\n");
        write("./src/lib/index.js", indexJs);

        var indexScss = read("./src/lib/index.scss");
        var listScss = indexScss.split(/\r\n/).filter(Boolean);
        var scss = `@import "./${name}/${name}.scss";`;
        var iScss = listScss.indexOf(scss);
        if (iScss >= -1) {
            listScss.splice(iScss, 1);
        }
        indexScss = listScss.join("\r\n");
        write("./src/lib/index.scss", indexScss);
    }
}

function createDev(name) {
    var fileJs = `./src/dev/${name}/${name}.js`;
    var fileScss = `./src/dev/${name}/${name}.scss`;

    var exist = fs.existsSync(fileJs);
    if (exist) {
        console.log(`Dev: ${name} already exists`);
    } else {
        console.log(`Creating dev: ${name}`);

        var templateJs = read("./cli/dev/template.js");
        templateJs = templateJs.replaceAll("template", name).replaceAll("Template", toPascalCase(name));
        write(fileJs, templateJs);

        var templateScss = read("./cli/dev/template.scss");
        templateScss = templateScss.replaceAll("template", name).replaceAll("Template", toPascalCase(name));
        write(fileScss, templateScss);
    }
}

function deleteDev(name) {
    var fileJs = `./src/dev/${name}/${name}.js`;
    var fileScss = `./src/dev/${name}/${name}.scss`;
    var dir = path.dirname(fileJs);

    var exist = fs.existsSync(fileJs);
    if (!exist) {
        console.log(`Dev: ${Name} None`);
    } else {
        console.log(`Deleting dev: ${name}`);

        removeDir(dir);
    }
}

function createApp(name) {
    var fileJs = `./src/app/${name}/${name}.js`;
    var fileScss = `./src/app/${name}/${name}.scss`;

    var exist = fs.existsSync(fileJs);
    if (exist) {
        console.log(`App: ${name} already exists`);
    } else {
        console.log(`Creating app: ${name}`);

        var templateJs = read("./cli/app/template.js");
        templateJs = templateJs.replaceAll("template", name).replaceAll("Template", toPascalCase(name));
        write(fileJs, templateJs);

        var templateScss = read("./cli/app/template.scss");
        templateScss = templateScss.replaceAll("template", name).replaceAll("Template", toPascalCase(name));
        write(fileScss, templateScss);
    }
}

function deleteApp(name) {
    var fileJs = `./src/app/${name}/${name}.js`;
    var fileScss = `./src/app/${name}/${name}.scss`;
    var dir = path.dirname(fileJs);

    var exist = fs.existsSync(fileJs);
    if (!exist) {
        console.log(`App: ${Name} None`);
    } else {
        console.log(`Deleting app: ${name}`);

        removeDir(dir);
    }
}

// print();

// rl.question("Enter command: ", (answer) => {
//     processCommand(answer);
//     rl.close();
// });

//
// CLI
//

const [,,method,type,name] = process.argv

const cli={
    createComponent,
    deleteComponent,
    createController,
    deleteController,
    createDev,
    deleteDev,
    createApp,
    deleteApp,
}

cli[toCamelCase([method,type].join())](name)
