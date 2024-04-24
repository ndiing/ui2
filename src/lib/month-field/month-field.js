import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDMonthField extends MDElement {
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
        this.type = "month";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-month-field__label">
                    <label class="md-month-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-month-field__container">
                <input 
                    class="md-month-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleMonthFieldNativeFocus}"
                    @blur="${this.handleMonthFieldNativeBlur}"
                    @input="${this.handleMonthFieldNativeInput}"
                    @invalid="${this.handleMonthFieldNativeInvalid}"
                    @reset="${this.handleMonthFieldNativeReset}"
                >
                <div class="md-month-field__actions">
                    <div 
                        class="md-month-field__action"
                        @click="${this.handleMonthFieldActionClick}"
                    >calendar_month</div>
                </div>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-month-field__text">
                    <div class="md-month-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-month-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-month-field");
    }

    updated(changedProperties) {}

    get monthFieldNative() {
        return this.querySelector(".md-month-field__native");
    }

    handleMonthFieldNativeFocus(event) {
        this.emit("onMonthFieldNativeFocus", event);
    }

    handleMonthFieldNativeBlur(event) {
        this.emit("onMonthFieldNativeBlur", event);
    }

    handleMonthFieldNativeInput(event) {
        this.emit("onMonthFieldNativeInput", event);
    }

    handleMonthFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.monthFieldNative.validity.valid;
        this.validationMessage = this.monthFieldNative.validationMessage;
        this.emit("onMonthFieldNativeInvalid", event);
    }

    handleMonthFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onMonthFieldNativeReset", event);
    }

    handleMonthFieldActionClick(event) {
        this.monthFieldNative.showPicker();
    }
}
customElements.define("md-month-field", MDMonthField);
export { MDMonthField };
