
const attributesData = [
    { attribute: "autocapitalize", type: ["all"], except: ["url", "email", "password"] },
    { attribute: "autocomplete", type: ["all"], except: ["checkbox", "radio", "button"] },
    { attribute: "disabled", type: ["all"], except: [] },
    { attribute: "form", type: ["all"], except: [] },
    { attribute: "list", type: ["all"], except: ["hidden", "password", "checkbox", "radio", "button"] },
    { attribute: "name", type: ["all"], except: [] },
    { attribute: "readonly", type: ["all"], except: ["hidden", "range", "color", "checkbox", "radio", "button"] },
    { attribute: "required", type: ["all"], except: ["hidden", "range", "color", "button"] },
    { attribute: "type", type: ["all"], except: [] },
    { attribute: "value", type: ["all"], except: ["image"] },
    { attribute: "accept", type: ["file"], except: [] },
    { attribute: "capture", type: ["file"], except: [] },
    { attribute: "multiple", type: ["email", "file"], except: [] },
    { attribute: "checked", type: ["checkbox", "radio"], except: [] },
    { attribute: "dirname", type: ["hidden", "text", "search", "url", "tel", "email"], except: [] },
    { attribute: "max", type: ["date", "month", "week", "time", "datetime-local", "number", "range"], except: [] },
    { attribute: "maxlength", type: ["text", "search", "url", "tel", "email", "password"], except: [] },
    { attribute: "min", type: ["date", "month", "week", "time", "datetime-local", "number", "range"], except: [] },
    { attribute: "minlength", type: ["text", "search", "url", "tel", "email", "password"], except: [] },
    { attribute: "pattern", type: ["text", "search", "url", "tel", "email", "password"], except: [] },
    { attribute: "placeholder", type: ["text", "search", "url", "tel", "email", "password", "number"], except: [] },
    { attribute: "size", type: ["text", "search", "url", "tel", "email", "password"], except: [] },
    { attribute: "step", type: ["date", "month", "week", "time", "datetime-local", "number", "range"], except: [] },
    { attribute: "popovertarget", type: ["button"], except: [] },
    { attribute: "popovertargetaction", type: ["button"], except: [] },
    { attribute: "alt", type: ["image"], except: [] },
    { attribute: "formaction", type: ["image", "submit"], except: [] },
    { attribute: "formenctype", type: ["image", "submit"], except: [] },
    { attribute: "formmethod", type: ["image", "submit"], except: [] },
    { attribute: "formnovalidate", type: ["image", "submit"], except: [] },
    { attribute: "formtarget", type: ["image", "submit"], except: [] },
    { attribute: "height", type: ["image"], except: [] },
    { attribute: "src", type: ["image"], except: [] },
    { attribute: "width", type: ["image"], except: [] },
    { attribute: "defaultValue", type: ["all"], except: [] },
    { attribute: "defaultChecked", type: ["checkbox", "radio"], except: [] },
    { attribute: "indeterminate", type: ["checkbox", "radio"], except: [] },
];
function getAllAttribute(type) {
    return attributesData.filter((attr) => (attr.type.includes(type) || attr.type.includes("all")) && !attr.except.includes(type)).map((attr) => attr.attribute);
}

let [,,type]=process.argv
let code=``
code+=`<input\r\n`
code+=`    type="${type}"\r\n`
for(const attribute of getAllAttribute(type)){
    code+=`    ${attribute}=""\r\n`
    
}
code+=`/>\r\n`
console.log(code)
