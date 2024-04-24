import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDColorField extends MDElement {
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
        this.type = "color";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-color-field__label">
                    <label class="md-color-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-color-field__container">
                <input 
                    class="md-text-field__native"
                    .type="${"text"}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${true}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                >
                <input 
                    class="md-color-field__native"
                    .type="${"color"}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleColorFieldNativeFocus}"
                    @blur="${this.handleColorFieldNativeBlur}"
                    @input="${this.handleColorFieldNativeInput}"
                    @invalid="${this.handleColorFieldNativeInvalid}"
                    @reset="${this.handleColorFieldNativeReset}"
                >
                <div class="md-color-field__actions">
                    <div 
                        class="md-color-field__action"
                        @click="${this.handleColorFieldActionClick}"
                    >palette</div>
                </div>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-color-field__text">
                    <div class="md-color-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-color-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-color-field");
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete
        this.value=this.colorFieldNative.value
        this.defaultValue=this.colorFieldNative.value
    }

    updated(changedProperties) {}

    get textFieldNative() {
        return this.querySelector(".md-text-field__native");
    }

    get colorFieldNative() {
        return this.querySelector(".md-color-field__native");
    }

    handleColorFieldNativeFocus(event) {
        this.emit("onColorFieldNativeFocus", event);
    }

    handleColorFieldNativeBlur(event) {
        this.emit("onColorFieldNativeBlur", event);
    }

    handleColorFieldNativeInput(event) {
        this.value=this.colorFieldNative.value
        this.emit("onColorFieldNativeInput", event);
    }

    handleColorFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.colorFieldNative.validity.valid;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.emit("onColorFieldNativeInvalid", event);
    }

    handleColorFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onColorFieldNativeReset", event);
    }

    handleColorFieldActionClick(event) {
        this.colorFieldNative.showPicker();
    }
}
customElements.define("md-color-field", MDColorField);
export { MDColorField };
