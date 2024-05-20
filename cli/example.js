const fs = require("fs");
const path = require("path");

function getAllFiles(dirPath) {
    let files = [];

    function recursiveReadDir(currentPath) {
        const entries = fs.readdirSync(currentPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);
            if (entry.isDirectory()) {
                recursiveReadDir(fullPath);
            } else if (entry.isFile() && path.extname(entry.name) === ".js") {
                files.push(fullPath);
            }
        }
    }

    recursiveReadDir(dirPath);
    return files;
}

function generateCustomElementHtml(codeSnippet) {
    const propertiesRegex = /static\s+get\s+properties\s*\(\)\s*\{\s*return\s*\{([^]*?)\};\s*\}/;
    const propertiesMatch = codeSnippet.match(propertiesRegex);

    const propertiesArray = [];
    if (propertiesMatch) {
        const propertiesContent = propertiesMatch[1].trim();

        const propertyRegex = /(\w+):\s*\{\s*type:\s*(\w+)\s*\},?/g;
        let match;

        while ((match = propertyRegex.exec(propertiesContent)) !== null) {
            const name = match[1];
            const type = match[2];
            propertiesArray.push({ name: name, type: eval(type) });
        }
    }

    const tagNameRegex = /customElements\.define\("([^"]+)",\s*\w+\);/;
    const tagNameMatch = codeSnippet.match(tagNameRegex);

    let tagName = null;
    if (tagNameMatch) {
        tagName = tagNameMatch[1];
    }

    if (tagName) {
        let htmlString = `<${tagName}`;
        propertiesArray.forEach((prop) => {
            if (prop.type === Boolean) {
                htmlString += `\n    ${prop.name}`;
            } else {
                htmlString += `\n    ${prop.name}="${prop.name === "label" ? "Title" : prop.name === "icon" ? "image" : ""}"`;
            }
        });
        htmlString += `\n></${tagName}>`;

        return htmlString;
    }

    return "";
}

function readAllFiles(filePaths) {
    let code = "";
    code += `<div class="md-layout-column" style="margin: 24px;">\r\n`
    
    for (const filePath of filePaths) {
        const content = fs.readFileSync(filePath, "utf-8");
        
        const html = generateCustomElementHtml(content);
        if (html) {
            code += `    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\r\n`
            code += html.replace(/^/gm,'        ') + "\r\n";
            code += `    </div>\r\n`
        }
    }
    code += `</div>\r\n`
    return code;
}

const jsFiles = getAllFiles("./src/com");
const jsFilesContents = readAllFiles(jsFiles);

fs.writeFileSync('./cli/example.html',jsFilesContents)