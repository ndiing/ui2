import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDPasswordField extends MDElement {
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
            validationMessage: { type: String },
            error: { type: Boolean },
        };
    }

    get passwordFieldNative() {
        return this.querySelector(".md-password-field__native");
    }

    constructor(){
        super()
        this.type='password'
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-password-field__label">${this.label}</div>
            `:nothing}
            <div class="md-password-field__container">
                <input 
                    class="md-password-field__native"
                    .type="${this.type}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handlePasswordFieldNativeFocus}"
                    @blur="${this.handlePasswordFieldNativeBlur}"
                    @input="${this.handlePasswordFieldNativeInput}"
                    @invalid="${this.handlePasswordFieldNativeInvalid}"
                    @reset="${this.handlePasswordFieldNativeReset}"
                >
                <div class="md-password-field__actions"><md-icon-button class="md-password-field__action" .icon="${this.type==='password'?'visibility_off':'visibility'}" @click="${this.handlePasswordFieldActionClick}"></md-icon-button>${this.error?html`<md-icon class="md-password-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-password-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    handlePasswordFieldActionClick(event){
        if(this.type==='password'){
            this.type='text'
        }else{
            this.type='password'
        }
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-password-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-password-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    handlePasswordFieldNativeFocus(event) {
        this.classList.add("md-password-field--focus");
        this.emit("onPasswordFieldNativeFocus", event);
    }

    handlePasswordFieldNativeBlur(event) {
        this.classList.remove("md-password-field--focus");
        this.emit("onPasswordFieldNativeBlur", event);
    }

    handlePasswordFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onPasswordFieldNativeInput", event);
    }

    handlePasswordFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onPasswordFieldNativeInvalid", event);
    }

    handlePasswordFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onPasswordFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.passwordFieldNative.value) {
            this.classList.add("md-password-field--populated");
        } else {
            this.classList.remove("md-password-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.passwordFieldNative.validity.valid;
        this.validationMessage = this.passwordFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-password-field--error");
        } else {
            this.classList.remove("md-password-field--error");
        }
    }

    resetClassPopulated() {
        this.passwordFieldNative.value = this.passwordFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-password-field--error");
    }
}

customElements.define("md-password-field", MDPasswordField);

export { MDPasswordField };
