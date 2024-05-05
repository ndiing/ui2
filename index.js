const fs = require("fs");
const path = require("path");

const [, , method, type, name, template] = process.argv;

function write(file, data) {
    const dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(file, data);
}

function toPascalCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9])([a-zA-Z])/g, ($, $1, $2) => $2.toUpperCase());
}

function toCamelCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9])([a-zA-Z])/g, ($, $1, $2,$0) => $0===0?$2.toLowerCase():$2.toUpperCase());
}

function devTpl(name) {
    const className = toPascalCase(name);
    let code = "";
    code += `import { MDElement } from "../../lib/element/element";\r\n`;
    code += `import { html } from "lit";\r\n`;
    code += `import { msg } from "@lit/localize";\r\n`;
    code += `\r\n`;
    code += `class Dev${className} extends MDElement {\r\n`;
    code += `    render() {\r\n`;
    code += `        // prettier-ignore\r\n`;
    code += `        return html\`\r\n`;
    code += `            <div class="md-layout--column">\r\n`;
    code += `                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">\r\n`;
    code += `                    <md-${name}>search</md-${name}>\r\n`;
    code += `                </div>\r\n`;
    code += `                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>\r\n`;
    code += `                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>\r\n`;
    code += `            </div>\r\n`;
    code += `        \`;\r\n`;
    code += `    }\r\n`;
    code += `}\r\n`;
    code += `\r\n`;
    code += `customElements.define("dev-${name}", Dev${className});\r\n`;
    code += `\r\n`;
    code += `export default document.createElement("dev-${name}");\r\n`;
    return code;
}

function componentTpl(name,tpl='default') {
    const className = toPascalCase(name);
    const methodName = toCamelCase(name);
    const typeName = name.split('-')?.[0];
    let code = "";
    if(tpl==='default'){

        code += `import { MDElement } from "../element/element";\r\n`;
        code += `import { html } from "lit";\r\n`;
        code += `import { msg } from "@lit/localize";\r\n`;
        // code += `import { Ripple } from "../ripple/ripple";\r\n`;
        code += `\r\n`;
        code += `class MD${className} extends MDElement {\r\n`;
        code += `    static get properties() {\r\n`;
        code += `        return {\r\n`;
        // code += `            label: { type: String },\r\n`;
        // code += `            type: { type: String },\r\n`;
        // code += `            ui: { type: String },\r\n`;
        code += `        };\r\n`;
        code += `    }\r\n`;
        code += `\r\n`;
        code += `    constructor() {\r\n`;
        code += `        super();\r\n`;
        // code += `        this.type = "${name}";\r\n`;
        code += `    }\r\n`;
        code += `\r\n`;
        code += `    render() {\r\n`;
        code += `        // prettier-ignore\r\n`;
        code += `        return html\`\r\n`;
        // code += `            <${name} class="md-${name}__native" .type="\${this.type}"></${name}>\r\n`;
        // code += `            <div class="md-${name}__label">\${this.label}</div>\r\n`;
        code += `        \`\r\n`;
        code += `    }\r\n`;
        code += `\r\n`;
        code += `    async connectedCallback() {\r\n`;
        code += `        super.connectedCallback();\r\n`;
        code += `        this.classList.add("md-${name}");\r\n`;
        // code += `        await this.updateComplete;\r\n`;
        // code += `        this.ripple = new Ripple(this, { ${name}: this.${name}Native });\r\n`;
        code += `    }\r\n`;
        code += `\r\n`;
        code += `    disconnectedCallback() {\r\n`;
        code += `        super.disconnectedCallback();\r\n`;
        code += `        this.classList.remove("md-${name}");\r\n`;
        // code += `        if (this.ripple) {\r\n`;
        // code += `            this.ripple.destroy();\r\n`;
        // code += `        }\r\n`;
        code += `    }\r\n`;
        // code += `\r\n`;
        // code += `    get ${name}Native() {\r\n`;
        // code += `        return this.querySelector(".md-${name}__native");\r\n`;
        // code += `    }\r\n`;
        code += `\r\n`;
        code += `    updated(changedProperties) {\r\n`;
        // code += `        if (changedProperties.has("ui")) {\r\n`;
        // code += `            if (this.ui) {\r\n`;
        // code += `                this.classList.add("md-${name}--" + this.ui);\r\n`;
        // code += `            } else {\r\n`;
        // code += `                ["filled", "filled-tonal"].forEach((ui) => {\r\n`;
        // code += `                    this.classList.remove("md-${name}--" + ui);\r\n`;
        // code += `                });\r\n`;
        // code += `            }\r\n`;
        // code += `        }\r\n`;
        code += `    }\r\n`;
        code += `}\r\n`;
        code += `\r\n`;
        code += `customElements.define("md-${name}", MD${className});\r\n`;
        code += `\r\n`;
        code += `export { MD${className} };\r\n`;
    }
    
    else if(tpl==='text-field'){
        code+=`import { MDElement } from "../element/element";\r\n`
        code+=`import { html, nothing } from "lit";\r\n`
        code+=`import { msg } from "@lit/localize";\r\n`
        code+=`import { ifDefined } from "lit/directives/if-defined.js";\r\n`
        code+=`\r\n`
        code+=`class MD${className} extends MDElement {\r\n`
        code+=`    static get properties() {\r\n`
        code+=`        return {\r\n`
        code+=`            label: { type: String },\r\n`
        code+=`            name: { type: String },\r\n`
        code+=`            placeholder: { type: String },\r\n`
        code+=`            required: { type: Boolean },\r\n`
        code+=`            readOnly: { type: Boolean },\r\n`
        code+=`            value: { type: String },\r\n`
        code+=`            defaultValue: { type: String },\r\n`
        code+=`            text: { type: String },\r\n`
        code+=`            validationMessage: { type: String },\r\n`
        code+=`            error: { type: Boolean },\r\n`
        code+=`        };\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    get ${methodName}Native() {\r\n`
        code+=`        return this.querySelector(".md-${name}__native");\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    render() {\r\n`
        code+=`        // prettier-ignore\r\n`
        code+=`        return html\`\r\n`
        code+=`            \${this.label?html\`\r\n`
        code+=`                <div class="md-${name}__label">\${this.label}</div>\r\n`
        code+=`            \`:nothing}\r\n`
        code+=`            <div class="md-${name}__container">\r\n`
        code+=`                <input \r\n`
        code+=`                    class="md-${name}__native"\r\n`
        code+=`                    type="${typeName}"\r\n`
        code+=`                    .name="\${ifDefined(this.name)}"\r\n`
        code+=`                    .placeholder="\${ifDefined(this.placeholder)}"\r\n`
        code+=`                    .required="\${ifDefined(this.required)}"\r\n`
        code+=`                    .readOnly="\${ifDefined(this.readOnly)}"\r\n`
        code+=`                    .value="\${ifDefined(this.value)}"\r\n`
        code+=`                    .defaultValue="\${ifDefined(this.defaultValue)}"\r\n`
        code+=`                    autocomplete="off"\r\n`
        code+=`                    @focus="\${this.handle${className}NativeFocus}"\r\n`
        code+=`                    @blur="\${this.handle${className}NativeBlur}"\r\n`
        code+=`                    @input="\${this.handle${className}NativeInput}"\r\n`
        code+=`                    @invalid="\${this.handle${className}NativeInvalid}"\r\n`
        code+=`                    @reset="\${this.handle${className}NativeReset}"\r\n`
        code+=`                >\r\n`
        code+=`                <div class="md-${name}__actions">\${this.error?html\`<md-icon class="md-${name}__icon">error</md-icon>\`:nothing}</div>\r\n`
        code+=`            </div>\r\n`
        code+=`            \${this.validationMessage||this.text?html\`\r\n`
        code+=`                <div class="md-${name}__text">\${this.validationMessage||this.text}</div>\r\n`
        code+=`            \`:nothing}\r\n`
        code+=`        \`\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    async connectedCallback() {\r\n`
        code+=`        super.connectedCallback();\r\n`
        code+=`        this.classList.add("md-${name}");\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    disconnectedCallback() {\r\n`
        code+=`        super.disconnectedCallback();\r\n`
        code+=`        this.classList.remove("md-${name}");\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    firstUpdated(changedProperties) {\r\n`
        code+=`        this.updateClassPopulated();\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    handle${className}NativeFocus(event) {\r\n`
        code+=`        this.classList.add("md-${name}--focus");\r\n`
        code+=`        this.emit("on${className}NativeFocus", event);\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    handle${className}NativeBlur(event) {\r\n`
        code+=`        this.classList.remove("md-${name}--focus");\r\n`
        code+=`        this.emit("on${className}NativeBlur", event);\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    handle${className}NativeInput(event) {\r\n`
        code+=`        this.updateClassPopulated();\r\n`
        code+=`        this.updateClassError();\r\n`
        code+=`        this.emit("on${className}NativeInput", event);\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    handle${className}NativeInvalid(event) {\r\n`
        code+=`        event.preventDefault();\r\n`
        code+=`        this.updateClassError();\r\n`
        code+=`        this.emit("on${className}NativeInvalid", event);\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    handle${className}NativeReset(event) {\r\n`
        code+=`        this.resetClassError();\r\n`
        code+=`        this.resetClassPopulated();\r\n`
        code+=`        this.emit("on${className}NativeReset", event);\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    updateClassPopulated() {\r\n`
        code+=`        if (this.${methodName}Native.value) {\r\n`
        code+=`            this.classList.add("md-${name}--populated");\r\n`
        code+=`        } else {\r\n`
        code+=`            this.classList.remove("md-${name}--populated");\r\n`
        code+=`        }\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    updateClassError() {\r\n`
        code+=`        this.error = !this.${methodName}Native.validity.valid;\r\n`
        code+=`        this.validationMessage = this.${methodName}Native.validationMessage;\r\n`
        code+=`\r\n`
        code+=`        if (this.error) {\r\n`
        code+=`            this.classList.add("md-${name}--error");\r\n`
        code+=`        } else {\r\n`
        code+=`            this.classList.remove("md-${name}--error");\r\n`
        code+=`        }\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    resetClassPopulated() {\r\n`
        code+=`        this.${methodName}Native.value = this.${methodName}Native.defaultValue;\r\n`
        code+=`        this.updateClassPopulated();\r\n`
        code+=`    }\r\n`
        code+=`\r\n`
        code+=`    resetClassError() {\r\n`
        code+=`        this.error = false;\r\n`
        code+=`        this.validationMessage = undefined;\r\n`
        code+=`        this.classList.remove("md-${name}--error");\r\n`
        code+=`    }\r\n`
        code+=`}\r\n`
        code+=`\r\n`
        code+=`customElements.define("md-${name}", MD${className});\r\n`
        code+=`\r\n`
        code+=`export { MD${className} };\r\n`
        
    }

    return code;
}

function componentStyleTpl(name,tpl='default'){
    let code=''
    if(tpl==='default'){}
    else if(tpl==='text-field'){
        code+=`:root {\r\n`
        code+=`    --md-${name}-height: calc(56px + (4px * var(--md-density)));\r\n`
        code+=`}\r\n`
        code+=`\r\n`
        code+=`.md-${name} {\r\n`
        code+=`    display: flex;\r\n`
        code+=`    flex-direction: column;\r\n`
        code+=`    gap: 4px;\r\n`
        code+=`    position: relative;\r\n`
        code+=`}\r\n`
        code+=`.md-${name}__label {\r\n`
        code+=`    padding: 0 16px;\r\n`
        code+=`    @extend .md-typography--body-large;\r\n`
        code+=`    color: var(--md-sys-color-on-surface-variant);\r\n`
        code+=`    position: absolute;\r\n`
        code+=`    padding: calc((var(--md-${name}-height) - 24px) / 2) 16px;\r\n`
        code+=`    pointer-events: none;\r\n`
        code+=`    transition-property: all;\r\n`
        code+=`    transition-duration: var(--md-sys-motion-duration-short4);\r\n`
        code+=`    transition-timing-function: var(--md-sys-motion-easing-standard);\r\n`
        code+=`}\r\n`
        code+=`.md-${name}__container {\r\n`
        code+=`    display: flex;\r\n`
        code+=`    align-items: center;\r\n`
        code+=`    border-radius: var(--md-sys-shape-corner-extra-small-top);\r\n`
        code+=`    background: var(--md-sys-color-surface-container-highest);\r\n`
        code+=`    color: var(--md-sys-color-on-surface);\r\n`
        code+=`    box-shadow: inset 0 -1px 0 0 var(--md-sys-color-on-surface-variant);\r\n`
        code+=`}\r\n`
        code+=`.md-${name}__native {\r\n`
        code+=`    height: var(--md-${name}-height);\r\n`
        code+=`    width: 100%;\r\n`
        code+=`    padding: calc((var(--md-${name}-height) - 24px) / 2) 16px;\r\n`
        code+=`    background: transparent;\r\n`
        code+=`    color: inherit;\r\n`
        code+=`    @extend .md-typography--body-large;\r\n`
        code+=`    // transition-property: all;\r\n`
        code+=`    // transition-duration: var(--md-sys-motion-duration-short4);\r\n`
        code+=`    // transition-timing-function: var(--md-sys-motion-easing-standard);\r\n`
        code+=`    &::placeholder {\r\n`
        code+=`        color: var(--md-sys-color-on-surface-variant);\r\n`
        code+=`    }\r\n`
        code+=`    + .md-${name}__actions {\r\n`
        code+=`        margin-left: -12px;\r\n`
        code+=`    }\r\n`
        code+=`}\r\n`
        code+=`.md-${name}__text {\r\n`
        code+=`    padding: 0 16px;\r\n`
        code+=`    @extend .md-typography--body-small;\r\n`
        code+=`    color: var(--md-sys-color-on-surface-variant);\r\n`
        code+=`}\r\n`
        code+=`.md-${name}__actions {\r\n`
        code+=`    display: inline-flex;\r\n`
        code+=`    align-items: center;\r\n`
        code+=`    padding: 16px 12px;\r\n`
        code+=`    gap: 0 8px;\r\n`
        code+=`    &:empty{\r\n`
        code+=`        padding: 0;\r\n`
        code+=`        margin: 0;\r\n`
        code+=`    }\r\n`
        code+=`    + .md-${name}__native {\r\n`
        code+=`        margin-left: -12px;\r\n`
        code+=`    }\r\n`
        code+=`}\r\n`
        code+=`// .md-${name}__action{}\r\n`
        code+=`\r\n`
        code+=`.md-${name}:not(.md-${name}--populated):not(.md-${name}--focus) {\r\n`
        code+=`    .md-${name}__native {\r\n`
        code+=`        &::placeholder {\r\n`
        code+=`            visibility: hidden;\r\n`
        code+=`        }\r\n`
        code+=`    }\r\n`
        code+=`}\r\n`
        code+=`.md-${name}--populated {\r\n`
        code+=`    .md-${name}__label {\r\n`
        code+=`        padding-top: calc(((var(--md-${name}-height) - 16px) / 2) - 8px);\r\n`
        code+=`        padding-bottom: calc(((var(--md-${name}-height) - 16px) / 2) + 8px);\r\n`
        code+=`        @extend .md-typography--body-small;\r\n`
        code+=`    }\r\n`
        code+=`    .md-${name}__native {\r\n`
        code+=`        padding-top: calc(((var(--md-${name}-height) - 24px) / 2) + 8px);\r\n`
        code+=`        padding-bottom: calc(((var(--md-${name}-height) - 24px) / 2) - 8px);\r\n`
        code+=`    }\r\n`
        code+=`}\r\n`
        code+=`.md-${name}--focus {\r\n`
        code+=`    @extend .md-${name}--populated;\r\n`
        code+=`    .md-${name}__label {\r\n`
        code+=`        color: var(--md-sys-color-primary);\r\n`
        code+=`    }\r\n`
        code+=`    .md-${name}__container {\r\n`
        code+=`        box-shadow: inset 0 -2px 0 0 var(--md-sys-color-primary);\r\n`
        code+=`    }\r\n`
        code+=`}\r\n`
        code+=`.md-${name}--error {\r\n`
        code+=`    .md-${name}__label {\r\n`
        code+=`        color: var(--md-sys-color-error);\r\n`
        code+=`    }\r\n`
        code+=`    .md-${name}__container {\r\n`
        code+=`        box-shadow: inset 0 -2px 0 0 var(--md-sys-color-error);\r\n`
        code+=`    }\r\n`
        code+=`    .md-${name}__icon {\r\n`
        code+=`        color: var(--md-sys-color-error);\r\n`
        code+=`    }\r\n`
        code+=`    .md-${name}__text {\r\n`
        code+=`        color: var(--md-sys-color-error);\r\n`
        code+=`    }\r\n`
        code+=`}\r\n`
        
    }
    return code
}

function controllerTpl(name, tpl='default') {
    const className = toPascalCase(name);
    const methodName = toCamelCase(name);
    let code = "";

    if(tpl==='default'){
        code += `class ${className} {\r\n`;
        code += `    constructor(host, options = {}) {\r\n`;
        code += `        this.options = { button: host, ...options };\r\n`;
        code += `        this.host = host;\r\n`;
        code += `        this.init();\r\n`;
        code += `    }\r\n`;
        code += `\r\n`;
        code += `    on(type, listener) {\r\n`;
        code += `        this.host.addEventListener(type, listener);\r\n`;
        code += `    }\r\n`;
        code += `\r\n`;
        code += `    off(type, listener) {\r\n`;
        code += `        this.host.removeEventListener(type, listener);\r\n`;
        code += `    }\r\n`;
        code += `\r\n`;
        code += `    emit(type, detail) {\r\n`;
        code += `        const event = new CustomEvent(type, { bubbles: true, cancelable: true, detail });\r\n`;
        code += `        this.host.dispatchEvent(event);\r\n`;
        code += `    }\r\n`;
        code += `\r\n`;
        code += `    init() {\r\n`;
        code += `        this.host.classList.add("md-${name}");\r\n`;
        // code += `\r\n`;
        // code += `        if (!this.options.size) {\r\n`;
        // code += `            this.rect = this.host.getBoundingClientRect();\r\n`;
        // code += `            this.options.size = (Math.sqrt(Math.pow(this.rect.width, 2) + Math.pow(this.rect.height, 2)) / this.rect.width) * 100;\r\n`;
        // code += `        }\r\n`;
        // code += `        this.host.style.setProperty("--md-${name}-size", this.options.size + "%");\r\n`;
        // code += `        this.options.button.setAttribute("tabIndex", 0);\r\n`;
        // code += `        this.options.button.classList.add("md-${name}__button");\r\n`;
        // code += `        this.handleMousedown = this.handleMousedown.bind(this);\r\n`;
        // code += `        this.handleMouseup = this.handleMouseup.bind(this);\r\n`;
        // code += `        this.handleMouseenter = this.handleMouseenter.bind(this);\r\n`;
        // code += `        this.handleMouseleave = this.handleMouseleave.bind(this);\r\n`;
        // code += `        this.handleFocus = this.handleFocus.bind(this);\r\n`;
        // code += `        this.handleBlur = this.handleBlur.bind(this);\r\n`;
        // code += `        this.options.button.addEventListener("mousedown", this.handleMousedown);\r\n`;
        // code += `        this.options.button.addEventListener("mouseenter", this.handleMouseenter);\r\n`;
        // code += `        this.options.button.addEventListener("mouseleave", this.handleMouseleave);\r\n`;
        // code += `        this.options.button.addEventListener("focus", this.handleFocus);\r\n`;
        // code += `        this.options.button.addEventListener("blur", this.handleBlur);\r\n`;
        code += `    }\r\n`;
        code += `\r\n`;
        code += `    destroy() {\r\n`;
        // code += `        this.host.classList.remove("md-${name}");\r\n`;
        // code += `        this.host.style.removeProperty("--md-${name}-size");\r\n`;
        // code += `        this.options.button.removeAttribute("tabIndex");\r\n`;
        // code += `        this.options.button.classList.remove("md-${name}__button");\r\n`;
        // code += `        this.options.button.removeEventListener("mousedown", this.handleMousedown);\r\n`;
        // code += `        this.options.button.removeEventListener("mouseup", this.handleMouseup);\r\n`;
        // code += `        this.options.button.removeEventListener("mouseenter", this.handleMouseenter);\r\n`;
        // code += `        this.options.button.removeEventListener("mouseleave", this.handleMouseleave);\r\n`;
        // code += `        this.options.button.removeEventListener("focus", this.handleFocus);\r\n`;
        // code += `        this.options.button.removeEventListener("blur", this.handleBlur);\r\n`;
        code += `    }\r\n`;
        code += `\r\n`;
        // code += `    handleMousedown(event) {\r\n`;
        // code += `        window.addEventListener("mouseup", this.handleMouseup);\r\n`;
        // code += `        this.host.classList.add("md-${name}--pressed");\r\n`;
        // code += `        this.rect = this.host.getBoundingClientRect();\r\n`;
        // code += `        const left = (event.clientX - this.rect.left) / this.rect.width;\r\n`;
        // code += `        const top = (event.clientY - this.rect.top) / this.rect.height;\r\n`;
        // code += `        const x = (0.5 - left) * (100 / this.options.size);\r\n`;
        // code += `        const y = (0.5 - top) * ((100 / this.options.size) * (this.rect.height / this.rect.width));\r\n`;
        // code += `        this.host.style.setProperty("--md-${name}-left", left * 100 + "%");\r\n`;
        // code += `        this.host.style.setProperty("--md-${name}-top", top * 100 + "%");\r\n`;
        // code += `        this.host.style.setProperty("--md-${name}-x", x * 100 + "%");\r\n`;
        // code += `        this.host.style.setProperty("--md-${name}-y", y * 100 + "%");\r\n`;
        // code += `    }\r\n`;
        // code += `\r\n`;
        // code += `    handleMouseup(event) {\r\n`;
        // code += `        this.host.classList.remove("md-${name}--pressed");\r\n`;
        // code += `        window.removeEventListener("mouseup", this.handleMouseup);\r\n`;
        // code += `    }\r\n`;
        // code += `\r\n`;
        // code += `    handleMouseenter(event) {\r\n`;
        // code += `        this.host.classList.add("md-${name}--hover");\r\n`;
        // code += `    }\r\n`;
        // code += `\r\n`;
        // code += `    handleMouseleave(event) {\r\n`;
        // code += `        this.host.classList.remove("md-${name}--hover");\r\n`;
        // code += `    }\r\n`;
        // code += `\r\n`;
        // code += `    handleFocus(event) {\r\n`;
        // code += `        this.host.classList.add("md-${name}--focus");\r\n`;
        // code += `    }\r\n`;
        // code += `\r\n`;
        // code += `    handleBlur(event) {\r\n`;
        // code += `        this.host.classList.remove("md-${name}--focus");\r\n`;
        // code += `    }\r\n`;
        code += `}\r\n`;
        code += `export { ${className} };\r\n`;
    }

    return code;
}

const stacks = {
    dev: {
        create: (name) => {
            const file = `./src/dev/${name}/${name}.js`;
            const data = devTpl(name);
            write(file, data);
        },
        delete: (name) => {
            const dir = `./src/dev/${name}`;
            try {
                fs.rmSync(dir, { recursive: true });
            } catch (error) {}
        },
    },
    component: {
        create: (name,template) => {
            const file = `./src/lib/${name}/${name}.js`;
            const data = componentTpl(name,template);
            write(file, data);

            const file2 = `./src/lib/${name}/${name}.scss`;
            const data2 = componentStyleTpl(name,template);
            write(file2, data2);
        },
        delete: (name) => {
            const dir = `./src/lib/${name}`;
            try {
                fs.rmSync(dir, { recursive: true });
            } catch (error) {}
        },
    },
    controller: {
        create: (name,template) => {
            const file = `./src/lib/${name}/${name}.js`;
            const data = controllerTpl(name,template);
            write(file, data);

            const file2 = `./src/lib/${name}/${name}.scss`;
            const data2 = '';
            write(file2, data2);
        },
        delete: (name) => {
            const dir = `./src/lib/${name}`;
            try {
                fs.rmSync(dir, { recursive: true });
            } catch (error) {}
        },
    },
};

stacks[type][method](name,template);
