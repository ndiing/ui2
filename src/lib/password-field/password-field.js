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
            valid: { type: Boolean },
            validationMessage: { type: String },
            toggle: { type: Boolean },
        };
    }

    constructor() {
        super();

        // this.type = "text";
        this.type = "password";

        // visibility
        // visibility_off

        // on=text
        // on=visibility

        // on=password
        // on=visibility_off
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-password-field__label">
                    <label class="md-password-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-password-field__container">
                <input 
                    class="md-password-field__native"
                    .type="${ifDefined(this.toggle?'text':'password')}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handlePasswordFieldNativeFocus}"
                    @blur="${this.handlePasswordFieldNativeBlur}"
                    @input="${this.handlePasswordFieldNativeInput}"
                    @invalid="${this.handlePasswordFieldNativeInvalid}"
                    @reset="${this.handlePasswordFieldNativeReset}"
                >
                <div class="md-password-field__actions">
                    <div 
                        class="md-password-field__action"
                        @click="${this.handlePasswordFieldActionToggle}"
                    >${this.toggle?'visibility':'visibility_off'}</div>
                </div>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-password-field__text">
                    <div class="md-password-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-password-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-password-field");
    }

    updated(changedProperties) {}

    get PasswordFieldNative() {
        return this.querySelector(".md-password-field__native");
    }

    handlePasswordFieldNativeFocus(event) {
        this.emit("onPasswordFieldNativeFocus", event);
    }
    handlePasswordFieldNativeBlur(event) {
        this.emit("onPasswordFieldNativeBlur", event);
    }
    handlePasswordFieldNativeInput(event) {
        this.emit("onPasswordFieldNativeInput", event);
    }
    handlePasswordFieldNativeInvalid(event) {
        event.preventDefault();

        this.valid = this.PasswordFieldNative.validity.valid;
        this.validationMessage = this.PasswordFieldNative.validationMessage;

        this.emit("onPasswordFieldNativeInvalid", event);
    }
    handlePasswordFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;

        this.emit("onPasswordFieldNativeReset", event);
    }

    handlePasswordFieldActionToggle(event){
        this.toggle=!this.toggle
        
        this.emit('onPasswordFieldActionToggle',event)
    }
}

customElements.define("md-password-field", MDPasswordField);

export { MDPasswordField };
