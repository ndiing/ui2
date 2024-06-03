import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

class MDPasswordFieldComponent extends MDElement {
    static get properties() {
        return {
            type: { type: String },
            autocomplete: { type: String },
            disabled: { type: Boolean },
            form: { type: String },
            name: { type: String },
            readonly: { type: Boolean },
            required: { type: Boolean },
            value: { type: String },
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
        this.type = "password";
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.label?html`<div class="md-password-field__label">${this.label}</div>`:nothing}
            <div class="md-password-field__container">
                ${this.leadingIcon?html`<md-icon class="md-password-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-password-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-password-field__native"
                    .type="${this.type}"
                    .autocomplete="${ifDefined(this.autocomplete)}"
                    .disabled="${ifDefined(this.disabled)}"
                    .form="${ifDefined(this.form)}"
                    .name="${ifDefined(this.name)}"
                    .readonly="${ifDefined(this.readonly)}"
                    .required="${ifDefined(this.required)}"
                    .value="${ifDefined(this.value)}"
                    .maxlength="${ifDefined(this.maxlength)}"
                    .minlength="${ifDefined(this.minlength)}"
                    .pattern="${ifDefined(this.pattern)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .size="${ifDefined(this.size)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handlePasswordFieldNativeFocus}"
                    @blur="${this.handlePasswordFieldNativeBlur}"
                    @input="${this.handlePasswordFieldNativeInput}"
                    @invalid="${this.handlePasswordFieldNativeInvalid}"
                    @reset="${this.handlePasswordFieldNativeReset}"
                />
                ${this.trailingMeta?html`<div class="md-password-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-password-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-password-field__icon">error</md-icon>`:nothing}
                <div class="md-password-field__actions">
                    ${this.trailingActions?.map(action => html`
                        <md-icon-button @click="${this.handlePasswordFieldNativeActionClick}" class="md-password-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                    `)}
                    <md-icon-button @click="${this.handlePasswordFieldNativeActionVisibilityClick}" class="md-password-field__action" .icon="${this.type=='password'?'visibility_off':'visibility'}"></md-icon-button>
                </div>
            </div>
            ${this.validationMessage||this.text?html`<div class="md-password-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-password-field");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-password-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-password-field__meta,.md-password-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-password-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-password-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-password-field--" + ui);
                });
            }
        }
    }

    get numberFieldNative() {
        return this.querySelector(".md-password-field__native");
    }

    handlePasswordFieldNativeActionClick(event) {
        this.emit("onPasswordFieldNativeActionClick", event);
    }

    handlePasswordFieldNativeActionVisibilityClick(event) {
        if (this.type == "password") {
            this.type = "text";
        } else {
            this.type = "password";
        }
        this.emit("onPasswordFieldNativeActionVisibilityClick", event);
    }

    handlePasswordFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onPasswordFieldNativeFocus", event);
    }

    handlePasswordFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onPasswordFieldNativeBlur", event);
    }

    handlePasswordFieldNativeInput(event) {
        this.value = this.numberFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.numberFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onPasswordFieldNativeInput", event);
    }

    handlePasswordFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.numberFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onPasswordFieldNativeInvalid", event);
    }

    handlePasswordFieldNativeReset(event) {
        this.numberFieldNative.value = this.defaultValue;
        this.value = this.numberFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onPasswordFieldNativeReset", event);
    }
}

customElements.define("md-password-field", MDPasswordFieldComponent);

export { MDPasswordFieldComponent };
