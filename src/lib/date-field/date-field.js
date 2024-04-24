import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDDateField extends MDElement {
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
        this.type = "date";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-date-field__label">
                    <label class="md-date-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-date-field__container">
                <input 
                    class="md-date-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleDateFieldNativeFocus}"
                    @blur="${this.handleDateFieldNativeBlur}"
                    @input="${this.handleDateFieldNativeInput}"
                    @invalid="${this.handleDateFieldNativeInvalid}"
                    @reset="${this.handleDateFieldNativeReset}"
                >
                <div class="md-date-field__actions">
                    <div 
                        class="md-date-field__action"
                        @click="${this.handleDateFieldActionClick}"
                    >today</div>
                </div>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-date-field__text">
                    <div class="md-date-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-date-field");
    }

    updated(changedProperties) {}

    get dateFieldNative() {
        return this.querySelector(".md-date-field__native");
    }

    handleDateFieldNativeFocus(event) {
        this.emit("onDateFieldNativeFocus", event);
    }

    handleDateFieldNativeBlur(event) {
        this.emit("onDateFieldNativeBlur", event);
    }

    handleDateFieldNativeInput(event) {
        this.emit("onDateFieldNativeInput", event);
    }

    handleDateFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.dateFieldNative.validity.valid;
        this.validationMessage = this.dateFieldNative.validationMessage;
        this.emit("onDateFieldNativeInvalid", event);
    }

    handleDateFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onDateFieldNativeReset", event);
    }

    handleDateFieldActionClick(event) {
        this.dateFieldNative.showPicker();
    }
}
customElements.define("md-date-field", MDDateField);
export { MDDateField };
