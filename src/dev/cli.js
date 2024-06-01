const fs = require("fs");
const path = require("path");

function read(file, content) {
    try {
        content = fs.readFileSync(file, {
            encoding: "utf8",
        });
    } catch (error) {}
    return content;
}
function write(file, content) {
    const dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, {
            recursive: true,
        });
    }
    fs.writeFileSync(file, content);
}

// write('./src/dev/test.js','')
// let content = read('./src/dev/test.js')
// console.log(content)

function toPascalCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2) => $2.toUpperCase()).replace(/[^a-zA-Z0-9]+$/g, "");
}
function toCamelCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => ($0 == 0 ? $2.toLowerCase() : $2.toUpperCase())).replace(/[^a-zA-Z0-9]+$/g, "");
}
function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + "-" + $2)
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
        .toLowerCase();
}
function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + "_" + $2)
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
        .toLowerCase();
}
function toTitleCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + " " + $2)
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2) => " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

// console.log(["lorem ipsum dolot sit amet", "lorem-ipsum-dolot-sit-amet", "lorem_ipsum_dolot_sit_amet", "loremIpsumDolotSitAmet", "LoremIpsumDolotSitAmet", " lorem ipsum dolot sit amet ", " _lorem-ipsum-dolot-sit-amet_ ", " -_lorem_ipsum_dolot_sit_amet_- ", " loremIpsumDolotSitAmet", " LoremIpsumDolotSitAmet"].map(toTitleCase));

const module_path = "./src/com";
const controller_path = "./src/com";
const component_path = "./src/com";
const app_path = "./src/app";

const [, , method, type, target, source] = process.argv;

// node src/dev/cli create module button carousel
// node src/dev/cli create controller button carousel
// node src/dev/cli create component image carousel
// node src/dev/cli create app button carousel

// node src/dev/cli remove module button carousel
// node src/dev/cli remove controller button carousel
// node src/dev/cli remove component button carousel
// node src/dev/cli remove app button carousel

const cli = {
    module: {
        create: (target, source) => {
            const exists = fs.existsSync(`${module_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`);
            if (exists) {
                console.log(`module ${target} exists`);
                return;
            }

            let content = read(`${module_path}/${toKebabCase(source)}/${toKebabCase(source)}.js`);
            content = content
            .replaceAll(toKebabCase(source), toKebabCase(target))
            // // .replaceAll(toCamelCase(source), toCamelCase(target))
            .replaceAll(toPascalCase(source), toPascalCase(target))
            // console.log(content)

            let content2 = read(`${module_path}/index.js`);
            content2 = content2.split(/\r?\n/);
            content2.push(`import "./${toKebabCase(target)}/${toKebabCase(target)}.js";`);
            content2 = content2.join("\r\n");

            write(`${module_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`, content);

            write(`${module_path}/index.js`, content2);
        },
        remove: (target) => {
            const exists = fs.existsSync(`${module_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`);
            if (!exists) {
                console.log(`module ${target} not exists`);
                return;
            }

            let content2 = read(`${module_path}/index.js`);
            content2 = content2.split(/\r?\n/);
            const index = content2.indexOf(`import "./${toKebabCase(target)}/${toKebabCase(target)}.js";`);
            if(index!==-1){
                content2.splice(index, 1);
            }
            content2 = content2.join("\r\n");

            fs.rmSync(`${module_path}/${toKebabCase(target)}`, { recursive: true });

            write(`${module_path}/index.js`, content2);
        },
    },
    controller: {
        create: (target, source) => {
            const exists = fs.existsSync(`${controller_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`);
            if (exists) {
                console.log(`controller ${target} exists`);
                return;
            }

            let content = read(`${controller_path}/${toKebabCase(source)}/${toKebabCase(source)}.js`);
            content = content
            .replaceAll(toKebabCase(source), toKebabCase(target))
            // // .replaceAll(toCamelCase(source), toCamelCase(target))
            .replaceAll(toPascalCase(source), toPascalCase(target))
            // console.log(content)

            let content2 = read(`${controller_path}/index.js`);
            content2 = content2.split(/\r?\n/);
            content2.push(`import "./${toKebabCase(target)}/${toKebabCase(target)}.js";`);
            content2 = content2.join("\r\n");

            write(`${controller_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`, content);

            write(`${controller_path}/index.js`, content2);
        },
        remove: (target) => {
            const exists = fs.existsSync(`${controller_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`);
            if (!exists) {
                console.log(`controller ${target} not exists`);
                return;
            }

            let content2 = read(`${controller_path}/index.js`);
            content2 = content2.split(/\r?\n/);
            const index = content2.indexOf(`import "./${toKebabCase(target)}/${toKebabCase(target)}.js";`);
            if(index!==-1){
                content2.splice(index, 1);
            }
            content2 = content2.join("\r\n");

            fs.rmSync(`${controller_path}/${toKebabCase(target)}`, { recursive: true });

            write(`${controller_path}/index.js`, content2);
        },
    },
    component: {
        create: (target, source) => {
            const exists = fs.existsSync(`${component_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`);
            if (exists) {
                console.log(`component ${target} exists`);
                return;
            }

            let content = read(`${component_path}/${toKebabCase(source)}/${toKebabCase(source)}.js`);
            content = content
            .replaceAll(toKebabCase(source), toKebabCase(target))
            // // .replaceAll(toCamelCase(source), toCamelCase(target))
            .replaceAll(toPascalCase(source), toPascalCase(target))
            // console.log(content)

            let content2 = read(`${component_path}/index.js`);
            content2 = content2.split(/\r?\n/);
            content2.push(`import "./${toKebabCase(target)}/${toKebabCase(target)}.js";`);
            content2 = content2.join("\r\n");

            let content3 = read(`${component_path}/${toKebabCase(source)}/${toKebabCase(source)}.scss`);
            content3 = content3.replaceAll(toPascalCase(source), toPascalCase(target))
            // // .replaceAll(toCamelCase(source), toCamelCase(target))
            .replaceAll(toKebabCase(source), toKebabCase(target))
            // console.log(content3)

            let content4 = read(`${component_path}/index.scss`);
            content4 = content4.split(/\r?\n/);
            content4.push(`@import "./${toKebabCase(target)}/${toKebabCase(target)}.scss";`);
            content4 = content4.join("\r\n");

            write(`${component_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`, content);

            write(`${component_path}/index.js`, content2);

            write(`${component_path}/${toKebabCase(target)}/${toKebabCase(target)}.scss`, content3);

            write(`${component_path}/index.scss`, content4);
        },
        remove: (target) => {
            const exists = fs.existsSync(`${component_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`);
            if (!exists) {
                console.log(`component ${target} not exists`);
                return;
            }

            let content2 = read(`${component_path}/index.js`);
            content2 = content2.split(/\r?\n/);
            const index = content2.indexOf(`import "./${toKebabCase(target)}/${toKebabCase(target)}.js";`);
            if(index!==-1){
                content2.splice(index, 1);
            }
            content2 = content2.join("\r\n");

            let content3 = read(`${component_path}/index.scss`);
            content3 = content3.split(/\r?\n/);
            const index3 = content3.indexOf(`@import "./${toKebabCase(target)}/${toKebabCase(target)}.scss";`);
            if(index3!==-1){
                content3.splice(index3, 1);
            }
            content3 = content3.join("\r\n");

            fs.rmSync(`${component_path}/${toKebabCase(target)}`, { recursive: true });

            write(`${component_path}/index.js`, content2);
            write(`${component_path}/index.scss`, content3);
        },
    },
    app: {
        create: (target, source) => {
            const exists = fs.existsSync(`${app_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`);
            if (exists) {
                console.log(`app ${target} exists`);
                return;
            }

            let content = read(`${app_path}/${toKebabCase(source)}/${toKebabCase(source)}.js`);
            content = content
            .replaceAll(toKebabCase(source), toKebabCase(target))
            // // .replaceAll(toCamelCase(source), toCamelCase(target))
            .replaceAll(toPascalCase(source), toPascalCase(target))
            // console.log(content)

            write(`${app_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`, content);

        },
        remove: (target) => {
            const exists = fs.existsSync(`${app_path}/${toKebabCase(target)}/${toKebabCase(target)}.js`);
            if (!exists) {
                console.log(`app ${target} not exists`);
                return;
            }

            fs.rmSync(`${app_path}/${toKebabCase(target)}`, { recursive: true });

        },
    },
};
cli[type][method](target, source);
