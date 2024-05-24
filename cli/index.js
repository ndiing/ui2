const fs = require("fs");
const path = require("path");

const [, , method, type, name, template = "component"] = process.argv;

// cli create component button
// cli create controller button
// cli create dev button
// cli create app button

const component_path = "./src/com";
const controller_path = "./src/com";
const dev_path = "./src/dev";

const helper = {
    toPascalCase: (string) => {
        return string.replace(/(^|[^a-zA-Z0-9])([a-zA-Z])/g, ($, $1, $2, $x) => {
            return $2.toUpperCase();
        });
    },
    toCamelCase: (string) => {
        return string.replace(/(^|[^a-zA-Z0-9])([a-zA-Z])/g, ($, $1, $2, $x) => {
            return $x == 0 ? $2.toLowerCase() : $2.toUpperCase();
        });
    },
    toKebabCase: (string) => {
        return string
            .replace(/([a-z])([A-Z])/g, ($, $1, $2, $x) => {
                return $1 + "-" + $2;
            })
            .toLowerCase();
    },

    read: (file, content) => {
        try {
            content = fs.readFileSync(file, {
                encoding: "utf8",
            });
        } catch (error) {}
        return content;
    },
    write: (file, content) => {
        let dir = path.dirname(file);
        try {
            fs.readdirSync(dir);
        } catch (error) {
            fs.mkdirSync(dir, {
                recursive: true,
            });
        }
        fs.writeFileSync(file, content);
    },
};

// console.log([
//     'lorem-ipsum-dolor-sit-amet',
//     'loremIpsumDolorSitAmet',
//     'LoremIpsumDolorSitAmet',
// ].map(helper.toKebabCase))

const cli = {
    component: {
        create: (name, template = "component") => {
            if (fs.existsSync(component_path + "/" + name + "/" + name + ".js")) {
                console.log(name + " exists");
                return;
            }

            let content_js = helper.read(component_path + "/" + template + "/" + template + ".js");
            content_js = content_js.replaceAll(template, name).replaceAll(helper.toPascalCase(template), helper.toPascalCase(name));

            // console.log(content_js)

            let content_scss = helper.read(component_path + "/" + template + "/" + template + ".scss");
            content_scss = content_scss.replaceAll(template, name).replaceAll(helper.toPascalCase(template), helper.toPascalCase(name));

            // console.log(content_scss)

            helper.write(component_path + "/" + name + "/" + name + ".js", content_js);
            helper.write(component_path + "/" + name + "/" + name + ".scss", content_scss);

            let content_js2 = helper.read(component_path + "/index.js");
            content_js2=content_js2.split(/\r\n/)
            content_js2.push('import "./'+name+'/'+name+'.js";',)
            content_js2=content_js2.join('\r\n')
            helper.write(component_path + "/index.js",content_js2);
            

            let content_scss2 = helper.read(component_path + "/index.scss");
            content_scss2=content_scss2.split(/\r\n/)
            content_scss2.push('@import "./'+name+'/'+name+'.scss";',)
            content_scss2=content_scss2.join('\r\n')
            helper.write(component_path + "/index.scss",content_scss2);
            

        },
        delete: (name) => {
            if (!fs.existsSync(component_path + "/" + name + "/" + name + ".js")) {
                console.log(name + " not exists");
                return;
            }

            fs.rmSync(component_path + "/" + name, { recursive: true });

        
            let content_js2 = helper.read(component_path + "/index.js");
            content_js2=content_js2.split(/\r\n/)
            let index_js2= content_js2.indexOf('import "./'+name+'/'+name+'.js";',)
            if(index_js2!==-1){
                content_js2.splice(index_js2,1)
            }
            content_js2=content_js2.join('\r\n')
            helper.write(component_path + "/index.js",content_js2);
            

            let content_scss2 = helper.read(component_path + "/index.scss");
            content_scss2=content_scss2.split(/\r\n/)
            let index_scss2= content_scss2.indexOf('@import "./'+name+'/'+name+'.scss";',)
            if(index_scss2!==-1){
                content_scss2.splice(index_scss2,1)
            }
            content_scss2=content_scss2.join('\r\n')
            helper.write(component_path + "/index.scss",content_scss2);
            
        },
    },
    controller: {
        create: (name, template = "controller") => {
            if (fs.existsSync(controller_path + "/" + name + "/" + name + ".js")) {
                console.log(name + " exists");
                return;
            }

            let content_js = helper.read(controller_path + "/" + template + "/" + template + ".js");
            content_js = content_js.replaceAll(template, name).replaceAll(helper.toPascalCase(template), helper.toPascalCase(name));

            // console.log(content_js)

            let content_scss = helper.read(controller_path + "/" + template + "/" + template + ".scss");
            content_scss = content_scss.replaceAll(template, name).replaceAll(helper.toPascalCase(template), helper.toPascalCase(name));

            // console.log(content_scss)

            helper.write(controller_path + "/" + name + "/" + name + ".js", content_js);
            helper.write(controller_path + "/" + name + "/" + name + ".scss", content_scss);

            let content_js2 = helper.read(controller_path + "/index.js");
            content_js2=content_js2.split(/\r\n/)
            content_js2.push('import "./'+name+'/'+name+'.js";',)
            content_js2=content_js2.join('\r\n')
            helper.write(controller_path + "/index.js",content_js2);
            

            let content_scss2 = helper.read(controller_path + "/index.scss");
            content_scss2=content_scss2.split(/\r\n/)
            content_scss2.push('@import "./'+name+'/'+name+'.scss";',)
            content_scss2=content_scss2.join('\r\n')
            helper.write(controller_path + "/index.scss",content_scss2);
            

        },
        delete: (name) => {
            if (!fs.existsSync(controller_path + "/" + name + "/" + name + ".js")) {
                console.log(name + " not exists");
                return;
            }

            fs.rmSync(controller_path + "/" + name, { recursive: true });

        
            let content_js2 = helper.read(controller_path + "/index.js");
            content_js2=content_js2.split(/\r\n/)
            let index_js2= content_js2.indexOf('import "./'+name+'/'+name+'.js";',)
            if(index_js2!==-1){
                content_js2.splice(index_js2,1)
            }
            content_js2=content_js2.join('\r\n')
            helper.write(controller_path + "/index.js",content_js2);
            

            let content_scss2 = helper.read(controller_path + "/index.scss");
            content_scss2=content_scss2.split(/\r\n/)
            let index_scss2= content_scss2.indexOf('@import "./'+name+'/'+name+'.scss";',)
            if(index_scss2!==-1){
                content_scss2.splice(index_scss2,1)
            }
            content_scss2=content_scss2.join('\r\n')
            helper.write(controller_path + "/index.scss",content_scss2);
            
        },
    },
    dev: {
        create: (name, template = "component") => {
            if (fs.existsSync(dev_path + "/" + name + "/" + name + ".js")) {
                console.log(name + " exists");
                return;
            }

            let content_js = helper.read(dev_path + "/" + template + "/" + template + ".js");
            content_js = content_js.replaceAll(template, name).replaceAll(helper.toPascalCase(template), helper.toPascalCase(name));

            // console.log(content_js)

            let content_scss = helper.read(dev_path + "/" + template + "/" + template + ".scss");
            content_scss = content_scss.replaceAll(template, name).replaceAll(helper.toPascalCase(template), helper.toPascalCase(name));

            // console.log(content_scss)

            helper.write(dev_path + "/" + name + "/" + name + ".js", content_js);
            helper.write(dev_path + "/" + name + "/" + name + ".scss", content_scss);
        },
        delete: (name) => {
            if (!fs.existsSync(dev_path + "/" + name + "/" + name + ".js")) {
                console.log(name + " not exists");
                return;
            }

            fs.rmSync(dev_path + "/" + name, { recursive: true });
        },
    },
};

cli[type][method](name, template);
