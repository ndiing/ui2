const fs = require("fs");
const { JSDOM } = require("jsdom");
const { window } = new JSDOM(fs.readFileSync("./parser.html", { encoding: "utf8" }));
const { document } = window;

let code=''

let values=[]
for(const el of document.querySelectorAll(".token-value:last-child .text-value")){
    let text=el.textContent.trim()
    .replace('content_copy','')
    values.push(text)
}

let i=0
for(const el of document.querySelectorAll(".token-name .text-value")){
    let text=el.textContent.trim()
    .replace('content_copy','')
    .replace(/\./g,'-')
    code+=`--${text}: ${values[i]};\r\n`
    ++i
}


console.log(code)