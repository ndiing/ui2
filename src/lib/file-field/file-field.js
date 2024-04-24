import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDFileField extends MDElement {
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
        this.type = "file";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-file-field__label">
                    <label class="md-file-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-file-field__container">
                <input 
                    class="md-file-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    @focus="${this.handleFileFieldNativeFocus}"
                    @blur="${this.handleFileFieldNativeBlur}"
                    @input="${this.handleFileFieldNativeInput}"
                    @invalid="${this.handleFileFieldNativeInvalid}"
                    @reset="${this.handleFileFieldNativeReset}"
                >
                <div class="md-file-field__actions">
                    <div 
                        class="md-file-field__action"
                        @click="${this.handleFileFieldActionClick}"
                    >upload</div>
                </div>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-file-field__text">
                    <div class="md-file-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-file-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-file-field");
    }

    updated(changedProperties) {}

    get fileFieldNative() {
        return this.querySelector(".md-file-field__native");
    }

    handleFileFieldNativeFocus(event) {
        this.emit("onFileFieldNativeFocus", event);
    }

    handleFileFieldNativeBlur(event) {
        this.emit("onFileFieldNativeBlur", event);
    }

    handleFileFieldNativeInput(event) {
        this.emit("onFileFieldNativeInput", event);
    }

    handleFileFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.fileFieldNative.validity.valid;
        this.validationMessage = this.fileFieldNative.validationMessage;
        this.emit("onFileFieldNativeInvalid", event);
    }

    handleFileFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onFileFieldNativeReset", event);
    }

    handleFileFieldActionClick(event) {
        this.fileFieldNative.showPicker();
    }
}
customElements.define("md-file-field", MDFileField);
export { MDFileField };
