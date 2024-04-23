import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDWeekField extends MDElement {
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

        this.type = "week";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-week-field__label">
                    <label class="md-week-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-week-field__container">
                <input 
                    class="md-week-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleWeekFieldNativeFocus}"
                    @blur="${this.handleWeekFieldNativeBlur}"
                    @input="${this.handleWeekFieldNativeInput}"
                    @invalid="${this.handleWeekFieldNativeInvalid}"
                    @reset="${this.handleWeekFieldNativeReset}"
                >
                <div class="md-week-field__actions">
                    <div 
                        class="md-week-field__action"
                        @click="${this.handleWeekFieldActionClick}"
                    >date_range</div>
                </div>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-week-field__text">
                    <div class="md-week-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-week-field");
    }

    updated(changedProperties) {}

    get weekFieldNative() {
        return this.querySelector(".md-week-field__native");
    }

    handleWeekFieldNativeFocus(event) {
        this.emit("onWeekFieldNativeFocus", event);
    }
    handleWeekFieldNativeBlur(event) {
        this.emit("onWeekFieldNativeBlur", event);
    }
    handleWeekFieldNativeInput(event) {
        this.emit("onWeekFieldNativeInput", event);
    }
    handleWeekFieldNativeInvalid(event) {
        event.preventDefault();

        this.valid = this.weekFieldNative.validity.valid;
        this.validationMessage = this.weekFieldNative.validationMessage;

        this.emit("onWeekFieldNativeInvalid", event);
    }
    handleWeekFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;

        this.emit("onWeekFieldNativeReset", event);
    }
    handleWeekFieldActionClick(event){
        this.weekFieldNative.showPicker()
    }
}

customElements.define("md-week-field", MDWeekField);

export { MDWeekField };
