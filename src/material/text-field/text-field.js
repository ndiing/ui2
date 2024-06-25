import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

class MDTextFieldComponent extends MDComponent {
    static properties = {
        label: { type: String },
        icon: { type: String },
        prefix: { type: String },
        suffix: { type: String },
        actions: { type: Array },
        text: { type: String },

        accept: { type: String },
        // alt: { type: String },
        autocomplete: { type: String },
        // autofocus: { type: Boolean },
        // checked: { type: Boolean },
        // defaultChecked: { type: Boolean },
        disabled: { type: Boolean },
        // files: { type: FileList },
        // form: { type: Object },
        // formAction: { type: String },
        // formEnctype: { type: String },
        // formMethod: { type: String },
        // formNoValidate: { type: Boolean },
        // formTarget: { type: String },
        // height: { type: Number },
        // indeterminate: { type: Boolean },
        // list: { type: Object },
        max: { type: String },
        maxLength: { type: Number },
        min: { type: String },
        minLength: { type: Number },
        multiple: { type: Boolean },
        name: { type: String },
        pattern: { type: String },
        placeholder: { type: String },
        readOnly: { type: Boolean },
        required: { type: Boolean },
        size: { type: Number },
        src: { type: String },
        step: { type: String },
        type: { type: String },
        defaultValue: { type: String },
        value: { type: String },
        // width: { type: Number },
        // inputMode: { type: String },
        // selectionDirection: { type: String },
        // selectionEnd: { type: Number },
        // selectionStart: { type: Number },
        // align: { type: String },
        // useMap: { type: String },
        cols: { type: Number },
        rows: { type: Number },
        // spellcheck: { type: Boolean },
        // wrap: { type: String },
        // length: { type: Number },
        // selectedIndex: { type: Number },
        // selectedOptions: { type: HTMLCollection },
        options: { type: Array },

        errorText: { type: String },
        error: { type: Boolean },

        variant: { type: String },
    };

    variants = ["filled", "outlined", "rounded"];

    get native() {
        return this.querySelector(".md-text-field__native");
    }

    constructor() {
        super();

        this.type = "text";
        this.autocomplete = "off";

        this.renderIconButton = this.renderIconButton.bind(this);
    }

    renderInput() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-text-field__native"
                .accept="${ifDefined(this.accept)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .max="${ifDefined(this.max)}"
                .maxLength="${ifDefined(this.maxLength)}"
                .min="${ifDefined(this.min)}"
                .minLength="${ifDefined(this.minLength)}"
                .multiple="${ifDefined(this.multiple)}"
                .name="${ifDefined(this.name)}"
                .pattern="${ifDefined(this.pattern)}"
                .placeholder="${ifDefined(this.placeholder)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .required="${ifDefined(this.required)}"
                .size="${ifDefined(this.size)}"
                .src="${ifDefined(this.src)}"
                .step="${ifDefined(this.step)}"
                .type="${ifDefined(this.type)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
        `;
    }

    renderTextarea() {
        /* prettier-ignore */
        return html`
            <textarea 
                class="md-text-field__native"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .maxLength="${ifDefined(this.maxLength)}"
                .minLength="${ifDefined(this.minLength)}"
                .name="${ifDefined(this.name)}"
                .placeholder="${ifDefined(this.placeholder)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .required="${ifDefined(this.required)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                .cols="${ifDefined(this.cols)}"
                .rows="${ifDefined(this.rows)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            ></textarea>
        `;
    }

    renderSelect() {
        /* prettier-ignore */
        return html`
            <select 
                class="md-text-field__native"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .multiple="${ifDefined(this.multiple)}"
                .name="${ifDefined(this.name)}"
                .required="${ifDefined(this.required)}"
                .size="${ifDefined(this.size)}"
                .value="${ifDefined(this.value)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
                ${this.options?.map(option => html`
                    <option 
                        .disabled="${ifDefined(option.disabled)}"
                        .label="${ifDefined(option.label)}"
                        .selected="${ifDefined(option.selected)}"
                        .value="${ifDefined(option.value)}"
                        .text="${ifDefined(option.text)}"
                    ></option>
                `)}
            </select>
        `;
    }

    renderNative(){
        return choose(this.type,[
            ['textarea', () => this.renderTextarea()],
            ['select', () => this.renderSelect()],
        ],() => this.renderInput())
    }

    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                class="md-text-field__icon-button"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
            ></md-icon-button>
        `;
    }

    renderAction(item) {
        /* prettier-ignore */
        return this.renderIconButton(item)
    }

    renderActions(item) {
        /* prettier-ignore */
        return this.actions?.length||this.error?html`
            <div class="md-text-field__actions">
                ${this.error?html`<md-icon class="md-text-field__icon md-text-field__icon--error">error</md-icon>`:nothing}
                ${this.actions?.map(item=>this.renderAction(item))}
            </div>
        `:nothing
    }

    render() {
        /* prettier-ignore */
        return html`
            <label class="md-text-field__inner">
                ${this.label?html`<div class="md-text-field__label">${this.label}</div>`:html`<div class="md-text-field__nolabel">Label</div>`}
                <div class="md-text-field__container">
                    ${this.icon?html`<md-icon class="md-text-field__icon">${this.icon}</md-icon>`:nothing}
                    ${this.prefix?html`<div class="md-text-field__meta">${this.prefix}</div>`:nothing}
                    ${this.renderNative()}
                    ${this.suffix?html`<div class="md-text-field__meta">${this.suffix}</div>`:nothing}
                    ${this.renderActions()}
                </div>
                ${this.errorText||this.text?html`<div class="md-text-field__text">${this.errorText||this.text}</div>`:nothing}
            </label>
        `
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");

        await this.updateComplete;
        this.value = this.value || this.native.value;
        this.defaultValue = this.value;
        this.populate();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`${this.localName}--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }

        if (changedProperties.has("icon")) {
            window.requestAnimationFrame(() => {
                this.style.setProperty("--md-comp-text-field-offset-left", this.native.offsetLeft + "px");
            });
        }
    }

    handleTextFieldNativeFocus(event) {
        this.classList.add("md-text-field--focused");
        this.emit("onTextFieldNativeFocus", event);
    }

    handleTextFieldNativeBlur(event) {
        this.classList.remove("md-text-field--focused");
        this.emit("onTextFieldNativeBlur", event);
    }

    handleTextFieldNativeInput(event) {
        if (this.type !== "file") {
            this.value = this.native.value;
        }
        this.populate();
        this.validate();

        this.emit("onTextFieldNativeInput", event);
    }

    handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        this.validate();

        this.emit("onTextFieldNativeInvalid", event);
    }

    handleTextFieldNativeReset(event) {
        if (this.type !== "file") {
            this.native.value = this.defaultValue;
            this.value = this.defaultValue;
        }

        this.populate();
        this.validate();

        this.emit("onTextFieldNativeReset", event);
    }

    populate() {
        this.classList.toggle("md-text-field--populated", !!this.value || this.type == "file");
    }

    validate() {
        this.errorText = this.native.validationMessage;
        this.error = !!this.errorText;
        this.classList.toggle("md-text-field--error", this.error);
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
