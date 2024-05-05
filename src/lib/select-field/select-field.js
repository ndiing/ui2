import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDSelectField extends MDElement {
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

    get selectFieldNative() {
        return this.querySelector(".md-select-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-select-field__label">${this.label}</div>
            `:nothing}
            <div class="md-select-field__container">
                <input 
                    class="md-select-field__native"
                    type="text"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleSelectFieldNativeFocus}"
                    @blur="${this.handleSelectFieldNativeBlur}"
                    @input="${this.handleSelectFieldNativeInput}"
                    @invalid="${this.handleSelectFieldNativeInvalid}"
                    @reset="${this.handleSelectFieldNativeReset}"
                >
                <div class="md-select-field__actions">${this.error?html`<md-icon class="md-select-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-select-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-select-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-select-field");
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

    handleSelectFieldNativeFocus(event) {
        this.classList.add("md-select-field--focus");
        this.emit("onSelectFieldNativeFocus", event);
    }

    handleSelectFieldNativeBlur(event) {
        this.classList.remove("md-select-field--focus");
        this.emit("onSelectFieldNativeBlur", event);
    }

    handleSelectFieldNativeInput(event) {
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onSelectFieldNativeInput", event);
    }

    handleSelectFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onSelectFieldNativeInvalid", event);
    }

    handleSelectFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onSelectFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.selectFieldNative.value) {
            this.classList.add("md-select-field--populated");
        } else {
            this.classList.remove("md-select-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.selectFieldNative.validity.valid;
        this.validationMessage = this.selectFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-select-field--error");
        } else {
            this.classList.remove("md-select-field--error");
        }
    }

    resetClassPopulated() {
        this.selectFieldNative.value = this.selectFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-select-field--error");
    }
}

customElements.define("md-select-field", MDSelectField);

export { MDSelectField };
