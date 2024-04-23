import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDEmailField extends MDElement {
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

        this.type = "email";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-email-field__label">
                    <label class="md-email-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-email-field__container">
                <input 
                    class="md-email-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleEmailFieldNativeFocus}"
                    @blur="${this.handleEmailFieldNativeBlur}"
                    @input="${this.handleEmailFieldNativeInput}"
                    @invalid="${this.handleEmailFieldNativeInvalid}"
                    @reset="${this.handleEmailFieldNativeReset}"
                >
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-email-field__text">
                    <div class="md-email-field__text-message">${this.validationMessage??this.text}</div>
                </div>
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

    updated(changedProperties) {}

    get EmailFieldNative() {
        return this.querySelector(".md-email-field__native");
    }

    handleEmailFieldNativeFocus(event) {
        this.emit("onEmailFieldNativeFocus", event);
    }
    handleEmailFieldNativeBlur(event) {
        this.emit("onEmailFieldNativeBlur", event);
    }
    handleEmailFieldNativeInput(event) {
        this.emit("onEmailFieldNativeInput", event);
    }
    handleEmailFieldNativeInvalid(event) {
        event.preventDefault();

        this.valid = this.EmailFieldNative.validity.valid;
        this.validationMessage = this.EmailFieldNative.validationMessage;

        this.emit("onEmailFieldNativeInvalid", event);
    }
    handleEmailFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;

        this.emit("onEmailFieldNativeReset", event);
    }
}

customElements.define("md-email-field", MDEmailField);

export { MDEmailField };
