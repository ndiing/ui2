import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTelField extends MDElement {
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
        this.type = "tel";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-tel-field__label">
                    <label class="md-tel-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-tel-field__container">
                <input 
                    class="md-tel-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleTelFieldNativeFocus}"
                    @blur="${this.handleTelFieldNativeBlur}"
                    @input="${this.handleTelFieldNativeInput}"
                    @invalid="${this.handleTelFieldNativeInvalid}"
                    @reset="${this.handleTelFieldNativeReset}"
                >
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-tel-field__text">
                    <div class="md-tel-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tel-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tel-field");
    }

    updated(changedProperties) {}

    get telFieldNative() {
        return this.querySelector(".md-tel-field__native");
    }

    handleTelFieldNativeFocus(event) {
        this.emit("onTelFieldNativeFocus", event);
    }

    handleTelFieldNativeBlur(event) {
        this.emit("onTelFieldNativeBlur", event);
    }

    handleTelFieldNativeInput(event) {
        this.emit("onTelFieldNativeInput", event);
    }

    handleTelFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.telFieldNative.validity.valid;
        this.validationMessage = this.telFieldNative.validationMessage;
        this.emit("onTelFieldNativeInvalid", event);
    }

    handleTelFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onTelFieldNativeReset", event);
    }
}
customElements.define("md-tel-field", MDTelField);
export { MDTelField };
