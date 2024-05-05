import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDUrlField extends MDElement {
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

    get urlFieldNative() {
        return this.querySelector(".md-url-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-url-field__label">${this.label}</div>
            `:nothing}
            <div class="md-url-field__container">
                <input 
                    class="md-url-field__native"
                    type="url"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleUrlFieldNativeFocus}"
                    @blur="${this.handleUrlFieldNativeBlur}"
                    @input="${this.handleUrlFieldNativeInput}"
                    @invalid="${this.handleUrlFieldNativeInvalid}"
                    @reset="${this.handleUrlFieldNativeReset}"
                >
                <div class="md-url-field__actions">${this.error?html`<md-icon class="md-url-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-url-field__text">${this.validationMessage||this.text}</div>
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

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    handleUrlFieldNativeFocus(event) {
        this.classList.add("md-url-field--focus");
        this.emit("onUrlFieldNativeFocus", event);
    }

    handleUrlFieldNativeBlur(event) {
        this.classList.remove("md-url-field--focus");
        this.emit("onUrlFieldNativeBlur", event);
    }

    handleUrlFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onUrlFieldNativeInput", event);
    }

    handleUrlFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onUrlFieldNativeInvalid", event);
    }

    handleUrlFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onUrlFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.urlFieldNative.value) {
            this.classList.add("md-url-field--populated");
        } else {
            this.classList.remove("md-url-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.urlFieldNative.validity.valid;
        this.validationMessage = this.urlFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-url-field--error");
        } else {
            this.classList.remove("md-url-field--error");
        }
    }

    resetClassPopulated() {
        this.urlFieldNative.value = this.urlFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-url-field--error");
    }
}

customElements.define("md-url-field", MDUrlField);

export { MDUrlField };
