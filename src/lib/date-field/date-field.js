import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDDateField extends MDElement {
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

    get dateFieldNative() {
        return this.querySelector(".md-date-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-date-field__label">${this.label}</div>
            `:nothing}
            <div class="md-date-field__container">
                <input 
                    class="md-date-field__native"
                    type="date"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleDateFieldNativeFocus}"
                    @blur="${this.handleDateFieldNativeBlur}"
                    @input="${this.handleDateFieldNativeInput}"
                    @invalid="${this.handleDateFieldNativeInvalid}"
                    @reset="${this.handleDateFieldNativeReset}"
                >
                <div class="md-date-field__actions"><md-icon-button class="md-date-field__action" .icon="${"today"}" @click="${this.handleDateFieldActionClick}"></md-icon-button>${this.error?html`<md-icon class="md-date-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-date-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
            
        `
    }

    handleDateFieldActionClick(event){
        this.dateFieldNative.showPicker()
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-date-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    handleDateFieldNativeFocus(event) {
        this.classList.add("md-date-field--focus");
        this.emit("onDateFieldNativeFocus", event);
    }

    handleDateFieldNativeBlur(event) {
        this.classList.remove("md-date-field--focus");
        this.emit("onDateFieldNativeBlur", event);
    }

    handleDateFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onDateFieldNativeInput", event);
    }

    handleDateFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onDateFieldNativeInvalid", event);
    }

    handleDateFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onDateFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.dateFieldNative.value) {
            this.classList.add("md-date-field--populated");
        } else {
            this.classList.remove("md-date-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.dateFieldNative.validity.valid;
        this.validationMessage = this.dateFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-date-field--error");
        } else {
            this.classList.remove("md-date-field--error");
        }
    }

    resetClassPopulated() {
        this.dateFieldNative.value = this.dateFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-date-field--error");
    }
}

customElements.define("md-date-field", MDDateField);

export { MDDateField };
