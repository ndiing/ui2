const fs = require('fs')
const path = require('path')
const {JSDOM} = require('jsdom')

const content=fs.readFileSync('./src/dev/response.html',{
    encoding:'utf8'
})
const {window} = new JSDOM(content)
const {document}=window

let a=[]
for(const el of document.querySelectorAll('.token-list .token .token-name')){
    a.push(el.textContent.trim().replace('content_copy',''))
}
let b=[]
let i=0
let code=''
let j=[]
for(const el of document.querySelectorAll('.token-list .token .token-value:last-child')){
    b.push(el.textContent.trim().replace('content_copy',''))
    let [name,value] = ([a[i],b[i]])
    ++i
    // if(j.includes(name)){continue}
    // j.push(name)
    // console.log(j)
    code+=`--${name.replace(/[^\w]/g,'-')}: ${value.replace(/(\d)pt/g,'$1px')};\n`
}
console.log(code)
