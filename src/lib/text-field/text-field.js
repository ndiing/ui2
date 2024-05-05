import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTextField extends MDElement {
    static get properties() {
        return {
            label: { type: String },
            
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

    get textFieldNative() {
        return this.querySelector(".md-text-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-text-field__label">${this.label}</div>
            `:nothing}
            <div class="md-text-field__container">
                <input 
                    class="md-text-field__native"
                    type="text"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleTextFieldNativeFocus}"
                    @blur="${this.handleTextFieldNativeBlur}"
                    @input="${this.handleTextFieldNativeInput}"
                    @invalid="${this.handleTextFieldNativeInvalid}"
                    @reset="${this.handleTextFieldNativeReset}"
                >
                <div class="md-text-field__actions">${this.error?html`<md-icon class="md-text-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-text-field__text">${this.validationMessage??this.text}</div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-text-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    updateClassPopulated() {
        if (this.textFieldNative.value) {
            this.classList.add('md-text-field--populated');
        } else {
            this.classList.remove('md-text-field--populated');
        }
    }

    handleTextFieldNativeFocus(event) {
        this.classList.add('md-text-field--focus')

        this.emit("onTextFieldNativeFocus", event);
    }
    
    handleTextFieldNativeBlur(event) {
        this.classList.remove('md-text-field--focus')

        this.emit("onTextFieldNativeBlur", event);
    }

    handleTextFieldNativeInput(event) {
        this.updateClassPopulated();

        this.error=!this.textFieldNative.validity.valid
        if(this.error){
            this.classList.add('md-text-field--error')
        }else{
            this.classList.remove('md-text-field--error')
        }

        this.emit("onTextFieldNativeInput", event);
    }

    handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        this.error=!this.textFieldNative.validity.valid
        this.validationMessage = this.textFieldNative.validationMessage;
        this.classList.add('md-text-field--error')

        this.emit("onTextFieldNativeInvalid", event);
    }
    
    handleTextFieldNativeReset(event) {
        this.error=false
        this.validationMessage = undefined;
        this.classList.remove('md-text-field--error')

        this.textFieldNative.value=this.textFieldNative.defaultValue
        this.updateClassPopulated();

        this.emit("onTextFieldNativeReset", event);
    }
}
customElements.define("md-text-field", MDTextField);
export { MDTextField };
