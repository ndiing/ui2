const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
const { finished } = require('stream/promises');



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

var data=fs.readFileSync('./src/com/element/fonts.scss',{encoding:'utf8'})


// fetcher()
async function fetcher(){
    for(let [,url] of data.matchAll(/url\((.*?)\)/g)){
        url=new URL(url)
        let file= (`./src/com/element/fonts/${url.pathname}`)
        url=url.toString()
        write(file,'')
        const stream = fs.createWriteStream(file);
        const { body } = await fetch(url);
        await finished(Readable.fromWeb(body).pipe(stream));
    }
}