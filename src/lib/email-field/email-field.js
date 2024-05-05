import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDEmailField extends MDElement {
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

    get emailFieldNative() {
        return this.querySelector(".md-email-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-email-field__label">${this.label}</div>
            `:nothing}
            <div class="md-email-field__container">
                <input 
                    class="md-email-field__native"
                    type="email"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleEmailFieldNativeFocus}"
                    @blur="${this.handleEmailFieldNativeBlur}"
                    @input="${this.handleEmailFieldNativeInput}"
                    @invalid="${this.handleEmailFieldNativeInvalid}"
                    @reset="${this.handleEmailFieldNativeReset}"
                >
                <div class="md-email-field__actions">${this.error?html`<md-icon class="md-email-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-email-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-email-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-email-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    handleEmailFieldNativeFocus(event) {
        this.classList.add("md-email-field--focus");
        this.emit("onEmailFieldNativeFocus", event);
    }

    handleEmailFieldNativeBlur(event) {
        this.classList.remove("md-email-field--focus");
        this.emit("onEmailFieldNativeBlur", event);
    }

    handleEmailFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onEmailFieldNativeInput", event);
    }

    handleEmailFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onEmailFieldNativeInvalid", event);
    }

    handleEmailFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onEmailFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.emailFieldNative.value) {
            this.classList.add("md-email-field--populated");
        } else {
            this.classList.remove("md-email-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.emailFieldNative.validity.valid;
        this.validationMessage = this.emailFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-email-field--error");
        } else {
            this.classList.remove("md-email-field--error");
        }
    }

    resetClassPopulated() {
        this.emailFieldNative.value = this.emailFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-email-field--error");
    }
}

customElements.define("md-email-field", MDEmailField);

export { MDEmailField };
