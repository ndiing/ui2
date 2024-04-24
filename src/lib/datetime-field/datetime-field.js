import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDDatetimeField extends MDElement {
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
        this.type = "datetime-local";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-datetime-field__label">
                    <label class="md-datetime-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-datetime-field__container">
                <input 
                    class="md-datetime-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleDatetimeFieldNativeFocus}"
                    @blur="${this.handleDatetimeFieldNativeBlur}"
                    @input="${this.handleDatetimeFieldNativeInput}"
                    @invalid="${this.handleDatetimeFieldNativeInvalid}"
                    @reset="${this.handleDatetimeFieldNativeReset}"
                >
                <div class="md-datetime-field__actions">
                    <div 
                        class="md-datetime-field__action"
                        @click="${this.handleDatetimeFieldActionClick}"
                    >calendar_clock</div>
                </div>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-datetime-field__text">
                    <div class="md-datetime-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-datetime-field");
    }

    updated(changedProperties) {}

    get datetimeFieldNative() {
        return this.querySelector(".md-datetime-field__native");
    }

    handleDatetimeFieldNativeFocus(event) {
        this.emit("onDatetimeFieldNativeFocus", event);
    }

    handleDatetimeFieldNativeBlur(event) {
        this.emit("onDatetimeFieldNativeBlur", event);
    }

    handleDatetimeFieldNativeInput(event) {
        this.emit("onDatetimeFieldNativeInput", event);
    }

    handleDatetimeFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.datetimeFieldNative.validity.valid;
        this.validationMessage = this.datetimeFieldNative.validationMessage;
        this.emit("onDatetimeFieldNativeInvalid", event);
    }

    handleDatetimeFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onDatetimeFieldNativeReset", event);
    }

    handleDatetimeFieldActionClick(event) {
        this.datetimeFieldNative.showPicker();
    }
}
customElements.define("md-datetime-field", MDDatetimeField);
export { MDDatetimeField };
