const fs = require("fs");
const path = require("path");

const [, , method, type, name] = process.argv;

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

function componentTpl(name) {
    const className = toPascalCase(name);
    let code = "";
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
    return code;
}

function controllerTpl(name) {
    const className = toPascalCase(name);
    let code = "";
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
        create: (name) => {
            const file = `./src/lib/${name}/${name}.js`;
            const data = componentTpl(name);
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
    controller: {
        create: (name) => {
            const file = `./src/lib/${name}/${name}.js`;
            const data = controllerTpl(name);
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

stacks[type][method](name);
