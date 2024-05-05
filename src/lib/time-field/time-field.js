import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTimeField extends MDElement {
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

    get timeFieldNative() {
        return this.querySelector(".md-time-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-time-field__label">${this.label}</div>
            `:nothing}
            <div class="md-time-field__container">
                <input 
                    class="md-time-field__native"
                    type="time"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleTimeFieldNativeFocus}"
                    @blur="${this.handleTimeFieldNativeBlur}"
                    @input="${this.handleTimeFieldNativeInput}"
                    @invalid="${this.handleTimeFieldNativeInvalid}"
                    @reset="${this.handleTimeFieldNativeReset}"
                >
                <div class="md-time-field__actions"><md-icon-button class="md-time-field__action" .icon="${"schedule"}" @click="${this.handleTimeFieldActionClick}"></md-icon-button>${this.error?html`<md-icon class="md-time-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-time-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    handleTimeFieldActionClick(event){
        this.timeFieldNative.showPicker()
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-time-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    handleTimeFieldNativeFocus(event) {
        this.classList.add("md-time-field--focus");
        this.emit("onTimeFieldNativeFocus", event);
    }

    handleTimeFieldNativeBlur(event) {
        this.classList.remove("md-time-field--focus");
        this.emit("onTimeFieldNativeBlur", event);
    }

    handleTimeFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onTimeFieldNativeInput", event);
    }

    handleTimeFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onTimeFieldNativeInvalid", event);
    }

    handleTimeFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onTimeFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.timeFieldNative.value) {
            this.classList.add("md-time-field--populated");
        } else {
            this.classList.remove("md-time-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.timeFieldNative.validity.valid;
        this.validationMessage = this.timeFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-time-field--error");
        } else {
            this.classList.remove("md-time-field--error");
        }
    }

    resetClassPopulated() {
        this.timeFieldNative.value = this.timeFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-time-field--error");
    }
}

customElements.define("md-time-field", MDTimeField);

export { MDTimeField };
