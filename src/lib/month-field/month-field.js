import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDMonthField extends MDElement {
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

    get monthFieldNative() {
        return this.querySelector(".md-month-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-month-field__label">${this.label}</div>
            `:nothing}
            <div class="md-month-field__container">
                <input 
                    class="md-month-field__native"
                    type="month"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleMonthFieldNativeFocus}"
                    @blur="${this.handleMonthFieldNativeBlur}"
                    @input="${this.handleMonthFieldNativeInput}"
                    @invalid="${this.handleMonthFieldNativeInvalid}"
                    @reset="${this.handleMonthFieldNativeReset}"
                >
                <div class="md-month-field__actions"><md-icon-button class="md-month-field__action" .icon="${"calendar_month"}" @click="${this.handlMonthFieldActionClick}"></md-icon-button>${this.error?html`<md-icon class="md-month-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-month-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    handlMonthFieldActionClick(event){
        this.monthFieldNative.showPicker()
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-month-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-month-field");
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

    handleMonthFieldNativeFocus(event) {
        this.classList.add("md-month-field--focus");
        this.emit("onMonthFieldNativeFocus", event);
    }

    handleMonthFieldNativeBlur(event) {
        this.classList.remove("md-month-field--focus");
        this.emit("onMonthFieldNativeBlur", event);
    }

    handleMonthFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onMonthFieldNativeInput", event);
    }

    handleMonthFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onMonthFieldNativeInvalid", event);
    }

    handleMonthFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onMonthFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.monthFieldNative.value) {
            this.classList.add("md-month-field--populated");
        } else {
            this.classList.remove("md-month-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.monthFieldNative.validity.valid;
        this.validationMessage = this.monthFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-month-field--error");
        } else {
            this.classList.remove("md-month-field--error");
        }
    }

    resetClassPopulated() {
        this.monthFieldNative.value = this.monthFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-month-field--error");
    }
}

customElements.define("md-month-field", MDMonthField);

export { MDMonthField };
