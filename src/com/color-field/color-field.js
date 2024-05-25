import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDColorField extends MDElement {
    static get properties() {
        return {
            label: { type: String },
            name: { type: String },
            placeholder: { type: String },
            required: { type: Boolean },
            readOnly: { type: Boolean },
            value: { type: String },
            defaultValue: { type: String },
            ui: { type: String },
            text: { type: String },
            validationMessage: { type: String },
            error: { type: Boolean },
        };
    }

    get textFieldNative() {
        return this.querySelector('input[type="text"].md-color-field__native');
    }

    get colorFieldNative() {
        return this.querySelector('input[type="color"].md-color-field__native');
    }

    constructor(){
        super()
        this.value='#000000'
        this.defaultValue='#000000'
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-color-field__label">${this.label}</div>
            `:nothing}
            <div class="md-color-field__container">
                <input 
                    class="md-color-field__native"
                    type="text"
                    .readOnly="${true}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                >
                <input 
                    class="md-color-field__native"
                    type="color"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleColorFieldNativeFocus}"
                    @blur="${this.handleColorFieldNativeBlur}"
                    @input="${this.handleColorFieldNativeInput}"
                    @invalid="${this.handleColorFieldNativeInvalid}"
                    @reset="${this.handleColorFieldNativeReset}"
                    @click="${this.handleColorFieldNativeClick}"
                >
                <div class="md-color-field__actions"><md-icon-button class="md-color-field__action" .icon="${"palette"}" @click="${this.handleColorFieldActionClick}"></md-icon-button>${this.error?html`<md-icon class="md-color-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-color-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    handleColorFieldActionClick(event){
        this.colorFieldNative.showPicker()
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-color-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-color-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["filled", "outlined"].forEach((ui) => {
                this.classList.remove("md-color-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-color-field--" + ui);
                });
            }
        }
    }

    handleColorFieldNativeFocus(event) {
        this.classList.add("md-color-field--focus");
        this.emit("onColorFieldNativeFocus", event);
    }

    handleColorFieldNativeBlur(event) {
        this.classList.remove("md-color-field--focus");
        this.emit("onColorFieldNativeBlur", event);
    }

    handleColorFieldNativeInput(event) {
        this.value=this.colorFieldNative.value
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onColorFieldNativeInput", event);
    }

    handleColorFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onColorFieldNativeInvalid", event);
    }

    handleColorFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onColorFieldNativeReset", event);
    }

    handleColorFieldNativeClick(event){
        event.preventDefault()
    }

    updateClassPopulated() {
        if (this.colorFieldNative.value) {
            this.classList.add("md-color-field--populated");
        } else {
            this.classList.remove("md-color-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.colorFieldNative.validity.valid;
        this.validationMessage = this.colorFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-color-field--error");
        } else {
            this.classList.remove("md-color-field--error");
        }
    }

    resetClassPopulated() {
        this.colorFieldNative.value = this.colorFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-color-field--error");
    }
}

customElements.define("md-color-field", MDColorField);

export { MDColorField };
