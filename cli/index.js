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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const commands = ["create component <name>", "delete component <name>", "create controller <name>", "delete controller <name>", "create dev <name>", "delete dev <name>", "create app <name>", "delete app <name>"];

function printWelcomeMessage() {
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
    console.log(`Creating component: ${name}`);
    // Implement your logic to create a component
}

function deleteComponent(name) {
    console.log(`Deleting component: ${name}`);
    // Implement your logic to delete a component
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

// createController("example");

function deleteController(name) {
    var fileJs = `./src/lib/${name}/${name}.js`;
    var fileScss = `./src/lib/${name}/${name}.scss`;
    var dir = path.dirname(fileJs)

    var exist = fs.existsSync(fileJs);
    if (!exist) {
        console.log(`Controller: ${Name} None`);
    } else {
        console.log(`Deleting controller: ${name}`);

        removeDir(dir)

        var indexJs = read("./src/lib/index.js");
        var listJs = indexJs.split(/\r\n/).filter(Boolean);
        var js = `import "./${name}/${name}.js";`;
        var indexJs = listJs.indexOf(js);
        listJs.splice(indexJs,1)
        indexJs = listJs.join("\r\n");
        write("./src/lib/index.js", indexJs);

        var indexScss = read("./src/lib/index.scss");
        var listScss = indexScss.split(/\r\n/).filter(Boolean);
        var scss = `@import "./${name}/${name}.scss";`;
        var indexScss = listScss.indexOf(scss);
        listScsslistJs.splice(indexScss,1)
        indexScss = listScss.join("\r\n");
        write("./src/lib/index.scss", indexScss);
    }
}

function createDev(name) {
    console.log(`Creating development environment: ${name}`);
    // Implement your logic to create a development environment
}

function deleteDev(name) {
    console.log(`Deleting development environment: ${name}`);
    // Implement your logic to delete a development environment
}

function createApp(name) {
    console.log(`Creating application: ${name}`);
    // Implement your logic to create an application
}

function deleteApp(name) {
    console.log(`Deleting application: ${name}`);
    // Implement your logic to delete an application
}

printWelcomeMessage();

rl.question("Enter command: ", (answer) => {
    processCommand(answer);
    rl.close();
});

//
// CLI
//
