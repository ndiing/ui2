import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTextField extends MDElement {
    static get properties() {
        return {
            label: { type: String },
            type: { type: String },
            name: { type: String },
            placeholder: { type: String },
            required: { type: Boolean },
            readOnly: { type: Boolean },
            value: { type: String },
            defaultValue: { type: String },
            text: { type: String },
            valid: { type: Boolean },
            validationMessage: { type: String },
        };
    }

    constructor() {
        super();
        this.type = "text";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-text-field__label">
                    <label class="md-text-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-text-field__container">
                <input 
                    class="md-text-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleTextFieldNativeFocus}"
                    @blur="${this.handleTextFieldNativeBlur}"
                    @input="${this.handleTextFieldNativeInput}"
                    @invalid="${this.handleTextFieldNativeInvalid}"
                    @reset="${this.handleTextFieldNativeReset}"
                >
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-text-field__text">
                    <div class="md-text-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-text-field");
    }

    updated(changedProperties) {}

    get textFieldNative() {
        return this.querySelector(".md-text-field__native");
    }

    handleTextFieldNativeFocus(event) {
        this.emit("onTextFieldNativeFocus", event);
    }

    handleTextFieldNativeBlur(event) {
        this.emit("onTextFieldNativeBlur", event);
    }

    handleTextFieldNativeInput(event) {
        this.emit("onTextFieldNativeInput", event);
    }

    handleTextFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.textFieldNative.validity.valid;
        this.validationMessage = this.textFieldNative.validationMessage;
        this.emit("onTextFieldNativeInvalid", event);
    }

    handleTextFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onTextFieldNativeReset", event);
    }
}
customElements.define("md-text-field", MDTextField);
export { MDTextField };
