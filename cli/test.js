const fs = require('fs')

const [,,name]=process.argv

let content=fs.readFileSync('./src/com/'+name+'/'+name+'.scss',{
    encoding:'utf8'
})
content=content
.split(/\r\n/)
.filter(Boolean)
.join('\r\n')
content=content.replace(/\/\*[\s\S]+?\*\//g,'')
content=content.replace(/(.*\{)/g,'\r\n$1')
// console.log(content)
fs.writeFileSync('./src/com/'+name+'/'+name+'.scss',content)