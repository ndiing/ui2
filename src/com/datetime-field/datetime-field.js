import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDDatetimeField extends MDElement {
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

    get datetimeFieldNative() {
        return this.querySelector(".md-datetime-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-datetime-field__label">${this.label}</div>
            `:nothing}
            <div class="md-datetime-field__container">
                <input 
                    class="md-datetime-field__native"
                    type="datetime-local"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleDatetimeFieldNativeFocus}"
                    @blur="${this.handleDatetimeFieldNativeBlur}"
                    @input="${this.handleDatetimeFieldNativeInput}"
                    @invalid="${this.handleDatetimeFieldNativeInvalid}"
                    @reset="${this.handleDatetimeFieldNativeReset}"
                >
                <div class="md-datetime-field__actions"><md-icon-button class="md-datetime-field__action" .icon="${"calendar_clock"}" @click="${this.handleDatetimeFieldActionClick}"></md-icon-button>${this.error?html`<md-icon class="md-datetime-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-datetime-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    handleDatetimeFieldActionClick(event){
        this.datetimeFieldNative.showPicker()
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-datetime-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-datetime-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["filled", "outlined"].forEach((ui) => {
                this.classList.remove("md-datetime-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-datetime-field--" + ui);
                });
            }
        }
    }

    handleDatetimeFieldNativeFocus(event) {
        this.classList.add("md-datetime-field--focus");
        this.emit("onDatetimeFieldNativeFocus", event);
    }

    handleDatetimeFieldNativeBlur(event) {
        this.classList.remove("md-datetime-field--focus");
        this.emit("onDatetimeFieldNativeBlur", event);
    }

    handleDatetimeFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onDatetimeFieldNativeInput", event);
    }

    handleDatetimeFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onDatetimeFieldNativeInvalid", event);
    }

    handleDatetimeFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onDatetimeFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.datetimeFieldNative.value) {
            this.classList.add("md-datetime-field--populated");
        } else {
            this.classList.remove("md-datetime-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.datetimeFieldNative.validity.valid;
        this.validationMessage = this.datetimeFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-datetime-field--error");
        } else {
            this.classList.remove("md-datetime-field--error");
        }
    }

    resetClassPopulated() {
        this.datetimeFieldNative.value = this.datetimeFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-datetime-field--error");
    }
}

customElements.define("md-datetime-field", MDDatetimeField);

export { MDDatetimeField };
