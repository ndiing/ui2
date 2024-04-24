import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTextareaField extends MDElement {
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
                <div class="md-textarea-field__label">
                    <label class="md-textarea-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-textarea-field__container">
                <textarea
                    class="md-textarea-field__native"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleTextareaFieldNativeFocus}"
                    @blur="${this.handleTextareaFieldNativeBlur}"
                    @input="${this.handleTextareaFieldNativeInput}"
                    @invalid="${this.handleTextareaFieldNativeInvalid}"
                    @reset="${this.handleTextareaFieldNativeReset}"
                ></textarea>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-textarea-field__text">
                    <div class="md-textarea-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-textarea-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-textarea-field");
    }

    updated(changedProperties) {}

    get textareaFieldNative() {
        return this.querySelector(".md-textarea-field__native");
    }

    handleTextareaFieldNativeFocus(event) {
        this.emit("onTextareaFieldNativeFocus", event);
    }

    handleTextareaFieldNativeBlur(event) {
        this.emit("onTextareaFieldNativeBlur", event);
    }

    handleTextareaFieldNativeInput(event) {
        this.textareaFieldNative.style.setProperty("height", "0px");
        const height = this.textareaFieldNative.scrollHeight;
        this.textareaFieldNative.style.setProperty("height", height + "px");
        this.emit("onTextareaFieldNativeInput", event);
    }

    handleTextareaFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.textareaFieldNative.validity.valid;
        this.validationMessage = this.textareaFieldNative.validationMessage;
        this.emit("onTextareaFieldNativeInvalid", event);
    }

    handleTextareaFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.textareaFieldNative.style.removeProperty("height");
        this.emit("onTextareaFieldNativeReset", event);
    }
}
customElements.define("md-textarea-field", MDTextareaField);
export { MDTextareaField };
