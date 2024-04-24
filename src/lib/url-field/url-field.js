import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDUrlField extends MDElement {
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
        this.type = "url";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-url-field__label">
                    <label class="md-url-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-url-field__container">
                <input 
                    class="md-url-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleUrlFieldNativeFocus}"
                    @blur="${this.handleUrlFieldNativeBlur}"
                    @input="${this.handleUrlFieldNativeInput}"
                    @invalid="${this.handleUrlFieldNativeInvalid}"
                    @reset="${this.handleUrlFieldNativeReset}"
                >
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-url-field__text">
                    <div class="md-url-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-url-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-url-field");
    }

    updated(changedProperties) {}

    get urlFieldNative() {
        return this.querySelector(".md-url-field__native");
    }

    handleUrlFieldNativeFocus(event) {
        this.emit("onUrlFieldNativeFocus", event);
    }

    handleUrlFieldNativeBlur(event) {
        this.emit("onUrlFieldNativeBlur", event);
    }

    handleUrlFieldNativeInput(event) {
        this.emit("onUrlFieldNativeInput", event);
    }

    handleUrlFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.urlFieldNative.validity.valid;
        this.validationMessage = this.urlFieldNative.validationMessage;
        this.emit("onUrlFieldNativeInvalid", event);
    }

    handleUrlFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onUrlFieldNativeReset", event);
    }
}
customElements.define("md-url-field", MDUrlField);
export { MDUrlField };
