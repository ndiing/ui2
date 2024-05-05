import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDWeekField extends MDElement {
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

    get weekFieldNative() {
        return this.querySelector(".md-week-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-week-field__label">${this.label}</div>
            `:nothing}
            <div class="md-week-field__container">
                <input 
                    class="md-week-field__native"
                    type="week"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleWeekFieldNativeFocus}"
                    @blur="${this.handleWeekFieldNativeBlur}"
                    @input="${this.handleWeekFieldNativeInput}"
                    @invalid="${this.handleWeekFieldNativeInvalid}"
                    @reset="${this.handleWeekFieldNativeReset}"
                >
                <div class="md-week-field__actions"><md-icon-button class="md-week-field__action" .icon="${"date_range"}" @click="${this.handleWeekFieldActionClick}"></md-icon-button>${this.error?html`<md-icon class="md-week-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-week-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    handleWeekFieldActionClick(event){
        this.weekFieldNative.showPicker()
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-week-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    handleWeekFieldNativeFocus(event) {
        this.classList.add("md-week-field--focus");
        this.emit("onWeekFieldNativeFocus", event);
    }

    handleWeekFieldNativeBlur(event) {
        this.classList.remove("md-week-field--focus");
        this.emit("onWeekFieldNativeBlur", event);
    }

    handleWeekFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onWeekFieldNativeInput", event);
    }

    handleWeekFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onWeekFieldNativeInvalid", event);
    }

    handleWeekFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onWeekFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.weekFieldNative.value) {
            this.classList.add("md-week-field--populated");
        } else {
            this.classList.remove("md-week-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.weekFieldNative.validity.valid;
        this.validationMessage = this.weekFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-week-field--error");
        } else {
            this.classList.remove("md-week-field--error");
        }
    }

    resetClassPopulated() {
        this.weekFieldNative.value = this.weekFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-week-field--error");
    }
}

customElements.define("md-week-field", MDWeekField);

export { MDWeekField };
