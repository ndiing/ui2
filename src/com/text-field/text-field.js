import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTextFieldComponent extends MDElement {
    static get properties() {
        return {
            autocapitalize: { type: Boolean },
            autocomplete: { type: String },
            disabled: { type: Boolean },
            form: { type: String },
            list: { type: String },
            name: { type: String },
            readonly: { type: Boolean },
            required: { type: Boolean },
            type: { type: String },
            value: { type: String },
            dirname: { type: String },
            maxlength: { type: Number },
            minlength: { type: Number },
            pattern: { type: String },
            placeholder: { type: String },
            size: { type: Number },
            defaultValue: { type: String },

            label: { type: String },
            leadingIcon: { type: String },
            leadingMeta: { type: String },
            trailingMeta: { type: String },
            trailingActions: { type: Array },
            trailingIcon: { type: String },
            text: { type: String },

            focused: { type: Boolean, reflect: true },
            populated: { type: Boolean, reflect: true },
            invalid: { type: Boolean, reflect: true },
            validationMessage: { type: String },

            ui: { type: String },
        };
    }

    constructor() {
        super();
    }

    /* prettier-ignore */

    render() {
        return html`
            ${this.label?html`<div class="md-text-field__label">${this.label}</div>`:nothing}
            <div class="md-text-field__container">
                ${this.leadingIcon?html`<md-icon class="md-text-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-text-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-text-field__native"
                    type="text"
                    .autocapitalize="${ifDefined(this.autocapitalize)}"
                    .autocomplete="${ifDefined(this.autocomplete??'off')}"
                    .disabled="${ifDefined(this.disabled)}"
                    .form="${ifDefined(this.form)}"
                    .list="${ifDefined(this.list)}"
                    .name="${ifDefined(this.name)}"
                    .readonly="${ifDefined(this.readonly)}"
                    .required="${ifDefined(this.required)}"
                    .type="${ifDefined(this.type)}"
                    .value="${ifDefined(this.value)}"
                    .dirname="${ifDefined(this.dirname)}"
                    .maxlength="${ifDefined(this.maxlength)}"
                    .minlength="${ifDefined(this.minlength)}"
                    .pattern="${ifDefined(this.pattern)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .size="${ifDefined(this.size)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleTextFieldNativeFocus}"
                    @blur="${this.handleTextFieldNativeBlur}"
                    @input="${this.handleTextFieldNativeInput}"
                    @invalid="${this.handleTextFieldNativeInvalid}"
                    @reset="${this.handleTextFieldNativeReset}"
                />
                ${this.trailingMeta?html`<div class="md-text-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-text-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-text-field__icon">error</md-icon>`:nothing}
                ${this.trailingActions?.length?html`
                    <div class="md-text-field__actions">
                        ${this.trailingActions.map(action => html`
                            <md-icon-button @click="${this.handleTextFieldNativeActionClick}" class="md-text-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                        `)}
                    </div>
                `:nothing}
            </div>
            ${this.validationMessage||this.text?html`<div class="md-text-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-text-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-text-field__meta,.md-text-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-text-field-offset-left", offsetLeft + "px");
        }
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete;
        this.defaultValue = this.value ?? "";
        this.populated = !!this.value;
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["filled", "outlined", "rounded"].forEach((ui) => {
                this.classList.remove("md-text-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-text-field--" + ui);
                });
            }
        }
    }

    get textFieldNative() {
        return this.querySelector(".md-text-field__native");
    }

    handleTextFieldNativeActionClick(event) {
        this.emit("onTextFieldNativeActionClick", event);
    }

    handleTextFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onTextFieldNativeFocus", event);
    }

    handleTextFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTextFieldNativeBlur", event);
    }

    handleTextFieldNativeInput(event) {
        this.value = this.textFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.textFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTextFieldNativeInput", event);
    }

    handleTextFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.textFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTextFieldNativeInvalid", event);
    }

    handleTextFieldNativeReset(event) {
        this.textFieldNative.value = this.defaultValue;
        this.value = this.textFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onTextFieldNativeReset", event);
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
