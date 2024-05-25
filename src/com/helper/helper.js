const toPascalCase = (string) => {
    return string
    .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g,($,$1,$2)=>{
        return $2.toUpperCase()
    })
    .replace(/[^a-zA-Z0-9]+$/,'')
}
const toCamelCase = (string) => {
    return string
    .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g,($,$1,$2,$0)=>{
        return $0==0?
        $2.toLowerCase():
        $2.toUpperCase()
    })
    .replace(/[^a-zA-Z0-9]+$/,'')
}
const toKebabCase = (string) => {
    return string
    .replace(/([a-z])([A-Z])/g,($,$1,$2)=>{
        return $1+'-'+$2
    })
    .replace(/[^a-zA-Z0-9]/g,'-')
    .toLowerCase()
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g,'')
}
const toSnakeCase = (string) => {
    return string
    .replace(/([a-z])([A-Z])/g,($,$1,$2)=>{
        return $1+'_'+$2
    })
    .replace(/[^a-zA-Z0-9]/g,'_')
    .toLowerCase()
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g,'')
}
const toTitleCase = (string) => {
    return string
    .replace(/([a-z])([A-Z])/g,($,$1,$2)=>{
        return $1+' '+$2
    })
    .replace(/[^a-zA-Z0-9]/g,' ')
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g,'')
    .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g,($,$1,$2)=>{
        return $1+$2.toUpperCase()
    })
}

// console.log(JSON.stringify([
//     'lorem ipsum dolot sit amet',
//     'lorem_ipsum_dolot_sit_amet',
//     'lorem-ipsum-dolot-sit-amet',
//     'loremIpsumDolotSitAmet',
//     'LoremIpsumDolotSitAmet',
//     ' lorem ipsum dolot sit amet ',
//     '-lorem_ipsum_dolot_sit_amet-',
//     '_lorem-ipsum-dolot-sit-amet_',
//     ' _loremIpsumDolotSitAmet_ ',
//     ' -LoremIpsumDolotSitAmet- ',
// ].map(toTitleCase),null,4))

export{
    toPascalCase,
    toCamelCase,
    toKebabCase,
    toSnakeCase,
    toTitleCase,
}