const fs = require("fs");
if (!Object.groupBy) {
    Object.groupBy = function (array, keyFn) {
        return array.reduce((result, current) => {
            const key = keyFn(current);
            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(current);
            return result;
        }, {});
    };
}

function open(pathname) {
    for (const dir of fs.readdirSync(pathname, { withFileTypes: true })) {
        const pathname2 = pathname + "/" + dir.name;
        if (dir.isDirectory()) {
            open(pathname2);
        } else {
            if (dir.name.endsWith(".md")) {
                let content = read(pathname2, "");
                let code = parse(content);
                write(pathname2,code)
            }
        }
    }
}
open('./docs')
function read(file, content) {
    try {
        content = fs.readFileSync(file, { encoding: "utf8" });
    } catch (error) {}
    return content;
}
// let content = read("./docs/list.md");
// parse(content);
function write(file, content) {
    try {
    } catch (error) {}
    fs.writeFileSync(file, content);
}
function parse(content) {
    try {
        let json = JSON.parse(content);
        
        let memberof = Object.groupBy(json, (data) => data.memberof || (data.kind == "class" && data.name));
    
        let code = ''
        
        for(const name in memberof){
            const value = memberof[name]
            
            let kind = Object.groupBy(value, (data) => data.kind);
    
            let class_ = (kind.class)
            let member_ = (kind.member)??[]
            let function_ = (kind.function)
    
            let scope = Object.groupBy(member_, (data) => data.scope);
            let instance_ = scope.instance
            let static_ = scope.static
    
            let fires=(value.filter(data=>data.fires))
    
            let {name:className,} = (class_?.[0]??{})
            // console.log(className)
            code +=`# ${className}\r\n`
            code +=`desc \r\n`
            code +=`\r\n`
    
            let {name:propertyName,properties}=(static_[0]??{})
            // console.log(propertyName)
            code +=`## Properties\r\n`
            code +=`desc \r\n`
            code +=`\r\n`
            code +=`name|type|description\r\n`
            code +=`---|---|---\r\n`
            
            for(const {name,type:{names}={},description} of properties??[]){
                // console.log(name,names,description)
                code +=`${name}|${names||'-'}|${description||'-'}\r\n`
            }
            code +=`\r\n`
    
            code +=`## Accessor\r\n`
            code +=`desc \r\n`
            code +=`\r\n`
            code +=`name|type|description\r\n`
            code +=`---|---|---\r\n`
            for(const {name,type:{names}={},description} of instance_??[]){
                 // console.log(name,names,description)
                 code +=`${name}|${names?.join('/')||'-'}|${description||'-'}\r\n`
            }
            code +=`\r\n`
    
            code +=`## Methods\r\n`
            code +=`desc \r\n`
            code +=`\r\n`
            code +=`name|params|description\r\n`
            code +=`---|---|---\r\n`
            for(const {name,params,description} of function_??[]){
                // console.log(name,params,description)
                code +=`${name}|${params?.join(',')||'-'}|${description||'-'}\r\n`
            }
            code +=`\r\n`
    
            code +=`## Events\r\n`
            code +=`desc \r\n`
            code +=`\r\n`
            code +=`name|params|description\r\n`
            code +=`---|---|---\r\n`
            for(const doc of fires??[]){
                for(const name of doc.fires){
                    // console.log(name)
                    code +=`${name}|-|-\r\n`
                }
            }
            code +=`\r\n`
    
        }
        return code
        
    } catch (error) {
        return content
    }
}
