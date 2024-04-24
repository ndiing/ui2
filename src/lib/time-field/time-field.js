import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";
class MDTimeField extends MDElement {
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
        this.type = "time";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-time-field__label">
                    <label class="md-time-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-time-field__container">
                <input 
                    class="md-time-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleTimeFieldNativeFocus}"
                    @blur="${this.handleTimeFieldNativeBlur}"
                    @input="${this.handleTimeFieldNativeInput}"
                    @invalid="${this.handleTimeFieldNativeInvalid}"
                    @reset="${this.handleTimeFieldNativeReset}"
                >
                <div class="md-time-field__actions">
                    <div 
                        class="md-time-field__action"
                        @click="${this.handleTimeFieldActionClick}"
                    >schedule</div>
                </div>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-time-field__text">
                    <div class="md-time-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-time-field");
    }

    updated(changedProperties) {}

    get timeFieldNative() {
        return this.querySelector(".md-time-field__native");
    }

    handleTimeFieldNativeFocus(event) {
        this.emit("onTimeFieldNativeFocus", event);
    }

    handleTimeFieldNativeBlur(event) {
        this.emit("onTimeFieldNativeBlur", event);
    }

    handleTimeFieldNativeInput(event) {
        this.emit("onTimeFieldNativeInput", event);
    }

    handleTimeFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.timeFieldNative.validity.valid;
        this.validationMessage = this.timeFieldNative.validationMessage;
        this.emit("onTimeFieldNativeInvalid", event);
    }

    handleTimeFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onTimeFieldNativeReset", event);
    }

    handleTimeFieldActionClick(event) {
        this.timeFieldNative.showPicker();
    }
}
customElements.define("md-time-field", MDTimeField);
export { MDTimeField };
