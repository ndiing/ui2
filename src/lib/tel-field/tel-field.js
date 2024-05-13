import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTelField extends MDElement {
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

    get telFieldNative() {
        return this.querySelector(".md-tel-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-tel-field__label">${this.label}</div>
            `:nothing}
            <div class="md-tel-field__container">
                <input 
                    class="md-tel-field__native"
                    type="tel"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleTelFieldNativeFocus}"
                    @blur="${this.handleTelFieldNativeBlur}"
                    @input="${this.handleTelFieldNativeInput}"
                    @invalid="${this.handleTelFieldNativeInvalid}"
                    @reset="${this.handleTelFieldNativeReset}"
                >
                <div class="md-tel-field__actions">${this.error?html`<md-icon class="md-tel-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-tel-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-tel-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tel-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["filled", "outlined"].forEach((ui) => {
                this.classList.remove("md-tel-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-tel-field--" + ui);
                });
            }
        }
    }

    handleTelFieldNativeFocus(event) {
        this.classList.add("md-tel-field--focus");
        this.emit("onTelFieldNativeFocus", event);
    }

    handleTelFieldNativeBlur(event) {
        this.classList.remove("md-tel-field--focus");
        this.emit("onTelFieldNativeBlur", event);
    }

    handleTelFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onTelFieldNativeInput", event);
    }

    handleTelFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onTelFieldNativeInvalid", event);
    }

    handleTelFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onTelFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.telFieldNative.value) {
            this.classList.add("md-tel-field--populated");
        } else {
            this.classList.remove("md-tel-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.telFieldNative.validity.valid;
        this.validationMessage = this.telFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-tel-field--error");
        } else {
            this.classList.remove("md-tel-field--error");
        }
    }

    resetClassPopulated() {
        this.telFieldNative.value = this.telFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-tel-field--error");
    }
}

customElements.define("md-tel-field", MDTelField);

export { MDTelField };
