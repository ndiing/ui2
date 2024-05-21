function generateCustomElementsInfo(codeSnippet) {
    const propertiesRegex = /static\s+get\s+properties\s*\(\)\s*\{\s*return\s*\{([^]*?)\};\s*\}/g;
    const tagNameRegex = /customElements\.define\("([^"]+)",\s*(\w+)\);/g;
    const classRegex = /class\s+(\w+)\s+extends\s+(\w+)\s*\{([^]*?)\}\s*customElements/g;
    const methodRegex = /(?:(async|get|set|static)\s+)?(\w+)\s*\(([^)]*)\)\s*\{/g;
    const emitRegex = /this\.emit\("([^"]+)",\s*([^)]+)\);/g;

    const excludedMethodNames = new Set(["if", "for", "while", "switch"]);

    let classMatch;

    const elements = [];

    // Extract each class
    while ((classMatch = classRegex.exec(codeSnippet)) !== null) {
        const className = classMatch[1];
        const extendName = classMatch[2];
        const classContent = classMatch[3];
        const propertiesArray = [];
        const methodsArray = [];
        const eventsArray = [];

        // Extract properties from class
        const propertiesMatch = propertiesRegex.exec(classContent);
        if (propertiesMatch) {
            const propertiesContent = propertiesMatch[1].trim();
            const propertyRegex = /(\w+):\s*\{\s*type:\s*(\w+)\s*\},?/g;
            let propertyMatch;
            while ((propertyMatch = propertyRegex.exec(propertiesContent)) !== null) {
                const name = propertyMatch[1];
                const type = propertyMatch[2];
                propertiesArray.push({ name: name, type: type });
            }
        }

        // Extract methods and events from class
        let methodMatch;
        while ((methodMatch = methodRegex.exec(classContent)) !== null) {
            const methodType = methodMatch[1] || "";
            const methodName = methodMatch[2];
            if (excludedMethodNames.has(methodName)) {
                continue; // Skip excluded method names
            }
            const methodArgs = methodMatch[3]
                .split(",")
                .map((arg) => arg.trim())
                .filter((arg) => arg);
            methodsArray.push({
                type: methodType,
                name: methodName,
                args: methodArgs,
            });

            // Extract events from methods
            let emitMatch;
            const methodContent = classContent.slice(methodMatch.index, classContent.indexOf("}", methodMatch.index));
            while ((emitMatch = emitRegex.exec(methodContent)) !== null) {
                const eventName = emitMatch[1];
                eventsArray.push({ name: eventName, args: emitMatch[2].split(",").map((arg) => arg.trim()) });
            }
        }

        elements.push({ className, extendName, properties: propertiesArray, methods: methodsArray, events: eventsArray });
    }

    // Extract all custom element tag names and link them with the properties and methods
    let tagNameMatch;
    while ((tagNameMatch = tagNameRegex.exec(codeSnippet)) !== null) {
        const tagName = tagNameMatch[1];
        const className = tagNameMatch[2];
        const element = elements.find((el) => el.className === className);
        if (element) {
            element.tagName = tagName;
        }
    }

    return elements.map((element) => ({
        interface: element.className,
        inherit: element.extendName,
        element: element.tagName,
        properties: element.properties,
        methods: element.methods,
        events: element.events,
    }));
}

function generateMarkdown(data) {
    let markdown = `# ${data.interface} Component\n\n`;

    markdown += `## Element\n\n`;
    markdown += `Dalam penggunaan sehari-hari, ${data.interface} digunakan sebagai elemen \`${data.element}\`. Perhatikan bahwa elemen kustom seperti ini mungkin tidak memerlukan tag penutup terpisah seperti elemen HTML standar.\n\n`;

    markdown += `## Properties\n\n`;
    markdown += "| Nama | Tipe |\n";
    markdown += "| --- | --- |\n";
    for (let prop of data.properties) {
        markdown += `| ${prop.name} | \`${prop.type}\` |\n`;
    }
    markdown += "\n";

    markdown += `## Methods\n\n`;
    markdown += "| Nama | Argumen |\n";
    markdown += "| --- | --- |\n";
    for (let method of data.methods) {
        markdown += `| ${method.name} | ${method.args.join(", ")} |\n`;
    }
    markdown += "\n";

    markdown += `## Events\n\n`;
    markdown += "| Nama | Argumen |\n";
    markdown += "| --- | --- |\n";
    for (let event of data.events) {
        markdown += `| ${event.name} | ${event.args.join(", ")} |\n`;
    }
    markdown += "\n";

    return markdown;
}

const fs = require("fs");
const path = require("path");

function bacaFileJS(folderPath) {
    // Membaca isi direktori
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error("Error membaca direktori:", err);
            return;
        }

        // Iterasi melalui setiap file/direktori
        files.forEach((file) => {
            const filePath = path.join(folderPath, file);

            // Mengambil info file
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error("Error mendapatkan info file:", err);
                    return;
                }

                // Memeriksa apakah file atau direktori
                if (stats.isFile()) {
                    // Memeriksa apakah file adalah file JavaScript
                    if (path.extname(filePath) === ".js") {
                        // Membaca isi file jika adalah file JavaScript
                        fs.readFile(filePath, "utf8", (err, data) => {
                            if (err) {
                                console.error("Error membaca file:", err);
                                return;
                            }
                            generateCustomElementsInfo(data).map((data) => {
                                let content = generateMarkdown(data);
                                fs.writeFileSync(`./docs/${file.replace('.js','.md')}`,content)
                            }); // Lakukan apa yang ingin Anda lakukan dengan isi file di sini
                        });
                    }
                } else if (stats.isDirectory()) {
                    // Jika direktori, panggil kembali fungsi untuk membaca direktori tersebut secara rekursif
                    bacaFileJS(filePath);
                }
            });
        });
    });
}

// Contoh pemanggilan fungsi
const folderPath = "./src/com";
bacaFileJS(folderPath);
