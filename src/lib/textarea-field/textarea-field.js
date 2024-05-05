import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTextareaField extends MDElement {
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

    get textareaFieldNative() {
        return this.querySelector(".md-textarea-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-textarea-field__label">${this.label}</div>
            `:nothing}
            <div class="md-textarea-field__container">
                <textarea 
                    class="md-textarea-field__native"
                    type="textarea"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleTextareaFieldNativeFocus}"
                    @blur="${this.handleTextareaFieldNativeBlur}"
                    @input="${this.handleTextareaFieldNativeInput}"
                    @invalid="${this.handleTextareaFieldNativeInvalid}"
                    @reset="${this.handleTextareaFieldNativeReset}"
                ></textarea>
                <div class="md-textarea-field__actions">${this.error?html`<md-icon class="md-textarea-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-textarea-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-textarea-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-textarea-field");
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

    handleTextareaFieldNativeFocus(event) {
        this.classList.add("md-textarea-field--focus");
        this.emit("onTextareaFieldNativeFocus", event);
    }

    handleTextareaFieldNativeBlur(event) {
        this.classList.remove("md-textarea-field--focus");
        this.emit("onTextareaFieldNativeBlur", event);
    }

    handleTextareaFieldNativeInput(event) {
        this.textareaFieldNative.style.height = "0px";
        this.textareaFieldNative.style.height = this.textareaFieldNative.scrollHeight + "px";
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onTextareaFieldNativeInput", event);
    }

    handleTextareaFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onTextareaFieldNativeInvalid", event);
    }

    handleTextareaFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onTextareaFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.textareaFieldNative.value) {
            this.classList.add("md-textarea-field--populated");
        } else {
            this.classList.remove("md-textarea-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.textareaFieldNative.validity.valid;
        this.validationMessage = this.textareaFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-textarea-field--error");
        } else {
            this.classList.remove("md-textarea-field--error");
        }
    }

    resetClassPopulated() {
        this.textareaFieldNative.value = this.textareaFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-textarea-field--error");
    }
}

customElements.define("md-textarea-field", MDTextareaField);

export { MDTextareaField };
