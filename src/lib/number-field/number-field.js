import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDNumberField extends MDElement {
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
        this.type = "number";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-number-field__label">
                    <label class="md-number-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-number-field__container">
                <input 
                    class="md-number-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleNumberFieldNativeFocus}"
                    @blur="${this.handleNumberFieldNativeBlur}"
                    @input="${this.handleNumberFieldNativeInput}"
                    @invalid="${this.handleNumberFieldNativeInvalid}"
                    @reset="${this.handleNumberFieldNativeReset}"
                >
                <div class="md-number-field__actions">
                    <div 
                        class="md-number-field__action"
                        @click="${this.handleNumberFieldActionClick}"
                    >remove</div>
                    <div 
                        class="md-number-field__action"
                        @click="${this.handleNumberFieldActionClick}"
                    >add</div>
                </div>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-number-field__text">
                    <div class="md-number-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-number-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-number-field");
    }

    updated(changedProperties) {}

    get numberFieldNative() {
        return this.querySelector(".md-number-field__native");
    }

    handleNumberFieldNativeFocus(event) {
        this.emit("onNumberFieldNativeFocus", event);
    }

    handleNumberFieldNativeBlur(event) {
        this.emit("onNumberFieldNativeBlur", event);
    }

    handleNumberFieldNativeInput(event) {
        this.emit("onNumberFieldNativeInput", event);
    }

    handleNumberFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.numberFieldNative.validity.valid;
        this.validationMessage = this.numberFieldNative.validationMessage;
        this.emit("onNumberFieldNativeInvalid", event);
    }

    handleNumberFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onNumberFieldNativeReset", event);
    }

    handleNumberFieldActionClick(event) {
        if(event.currentTarget.textContent==='add'){
            this.numberFieldNative.stepUp();
        }else{
            this.numberFieldNative.stepDown();
        }
    }
}
customElements.define("md-number-field", MDNumberField);
export { MDNumberField };
