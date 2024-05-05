import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDNumberField extends MDElement {
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

    get numberFieldNative() {
        return this.querySelector(".md-number-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-number-field__label">${this.label}</div>
            `:nothing}
            <div class="md-number-field__container">
                <input 
                    class="md-number-field__native"
                    type="number"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleNumberFieldNativeFocus}"
                    @blur="${this.handleNumberFieldNativeBlur}"
                    @input="${this.handleNumberFieldNativeInput}"
                    @invalid="${this.handleNumberFieldNativeInvalid}"
                    @reset="${this.handleNumberFieldNativeReset}"
                >
                <div class="md-number-field__actions"><md-icon-button class="md-number-field__action" .icon="${"remove"}" @click="${this.handleNumberFieldActionClick}"></md-icon-button><md-icon-button class="md-number-field__action" .icon="${"add"}" @click="${this.handleNumberFieldActionClick}"></md-icon-button>${this.error?html`<md-icon class="md-number-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-number-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    handleNumberFieldActionClick(event){
        if(event.currentTarget.icon==='add'){this.numberFieldNative.stepUp()}
        else{this.numberFieldNative.stepDown()}
        this.updateClassPopulated()
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-number-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-number-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["filled", "outlined"].forEach((ui) => {
                this.classList.remove("md-text-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-text-field--" + ui);
                });
            }
        }
    }

    handleNumberFieldNativeFocus(event) {
        this.classList.add("md-number-field--focus");
        this.emit("onNumberFieldNativeFocus", event);
    }

    handleNumberFieldNativeBlur(event) {
        this.classList.remove("md-number-field--focus");
        this.emit("onNumberFieldNativeBlur", event);
    }

    handleNumberFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onNumberFieldNativeInput", event);
    }

    handleNumberFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onNumberFieldNativeInvalid", event);
    }

    handleNumberFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onNumberFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.numberFieldNative.value) {
            this.classList.add("md-number-field--populated");
        } else {
            this.classList.remove("md-number-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.numberFieldNative.validity.valid;
        this.validationMessage = this.numberFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-number-field--error");
        } else {
            this.classList.remove("md-number-field--error");
        }
    }

    resetClassPopulated() {
        this.numberFieldNative.value = this.numberFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-number-field--error");
    }
}

customElements.define("md-number-field", MDNumberField);

export { MDNumberField };
