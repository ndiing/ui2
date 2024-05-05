import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDFileField extends MDElement {
    static get properties() {
        return {
            label: { type: String },
            name: { type: String },
            placeholder: { type: String },
            required: { type: Boolean },
            readOnly: { type: Boolean },
            value: { type: String },
            defaultValue: { type: String },
            text: { type: String },
            validationMessage: { type: String },
            error: { type: Boolean },
        };
    }

    get fileFieldNative() {
        return this.querySelector(".md-file-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-file-field__label">${this.label}</div>
            `:nothing}
            <div class="md-file-field__container">
                <input 
                    class="md-file-field__native"
                    type="file"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleFileFieldNativeFocus}"
                    @blur="${this.handleFileFieldNativeBlur}"
                    @input="${this.handleFileFieldNativeInput}"
                    @invalid="${this.handleFileFieldNativeInvalid}"
                    @reset="${this.handleFileFieldNativeReset}"
                >
                <div class="md-file-field__actions"><md-icon-button class="md-file-field__action" .icon="${"upload"}" @click="${this.handleFileFieldActionClick}"></md-icon-button>${this.error?html`<md-icon class="md-file-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-file-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    handleFileFieldActionClick(event){
        this.fileFieldNative.showPicker()
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-file-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-file-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    handleFileFieldNativeFocus(event) {
        this.classList.add("md-file-field--focus");
        this.emit("onFileFieldNativeFocus", event);
    }

    handleFileFieldNativeBlur(event) {
        this.classList.remove("md-file-field--focus");
        this.emit("onFileFieldNativeBlur", event);
    }

    handleFileFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onFileFieldNativeInput", event);
    }

    handleFileFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onFileFieldNativeInvalid", event);
    }

    handleFileFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onFileFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.fileFieldNative.value) {
            this.classList.add("md-file-field--populated");
        } else {
            this.classList.remove("md-file-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.fileFieldNative.validity.valid;
        this.validationMessage = this.fileFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-file-field--error");
        } else {
            this.classList.remove("md-file-field--error");
        }
    }

    resetClassPopulated() {
        this.fileFieldNative.value = this.fileFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-file-field--error");
    }
}

customElements.define("md-file-field", MDFileField);

export { MDFileField };
