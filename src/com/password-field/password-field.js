import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDPasswordFieldComponent extends MDElement {
    /**
     *
     * @property {String} [type] -
     * @property {String} [autocomplete] -
     * @property {Boolean} [disabled] -
     * @property {String} [form] -
     * @property {String} [name] -
     * @property {Boolean} [readonly] -
     * @property {Boolean} [required] -
     * @property {String} [value] -
     * @property {Number} [maxlength] -
     * @property {Number} [minlength] -
     * @property {String} [pattern] -
     * @property {String} [placeholder] -
     * @property {Number} [size] -
     * @property {String} [defaultValue] -
     * @property {String} [label] -
     * @property {String} [leadingIcon] -
     * @property {String} [leadingMeta] -
     * @property {String} [trailingMeta] -
     * @property {Array} [trailingActions] -
     * @property {String} [trailingIcon] -
     * @property {String} [text] -
     * @property {Boolean} [focused] -
     * @property {Boolean} [populated] -
     * @property {Boolean} [invalid] -
     * @property {String} [validationMessage] -
     * @property {String} [ui] - filled,outlined,rounded
     */
    static get properties() {
        return {
            type: { type: String },
            name: { type: String },
            placeholder: { type: String },
            maxlength: { type: Number },
            minlength: { type: Number },
            readonly: { type: Boolean },
            disabled: { type: Boolean },
            required: { type: Boolean },
            pattern: { type: String },
            autocomplete: { type: String },
            autofocus: { type: Boolean },
            spellcheck: { type: Boolean },
            value: { type: String },
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

    /**
     *
     */
    constructor() {
        super();
        this.type = "password";
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <label  class="md-password-field__a11y">

                ${this.label?html`<div class="md-password-field__label">${this.label}</div>`:nothing}
                <div class="md-password-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-password-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-password-field__meta">${this.leadingMeta}</div>`:nothing}
                    <input
                        class="md-password-field__native"
                        .type="${this.type}"
                        .name="${ifDefined(this.name)}"
                        .placeholder="${ifDefined(this.placeholder)}"
                        .maxlength="${ifDefined(this.maxlength)}"
                        .minlength="${ifDefined(this.minlength)}"
                        .readonly="${ifDefined(this.readonly)}"
                        .disabled="${ifDefined(this.disabled)}"
                        .required="${ifDefined(this.required)}"
                        .pattern="${ifDefined(this.pattern)}"
                        .autocomplete="${ifDefined(this.autocomplete)}"
                        .autofocus="${ifDefined(this.autofocus)}"
                        .spellcheck="${ifDefined(this.spellcheck)}"
                        .value="${ifDefined(this.value)}"
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
            </label>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-password-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-password-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-password-field__meta,.md-password-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-password-field-offset-left", offsetLeft + "px");
        }
    }

    /**
     *
     */
    async firstUpdated(changedProperties) {
        await this.updateComplete;
        this.defaultValue = this.value ?? "";
        this.populated = !!this.value;
    }

    /**
     *
     */
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

    /**
     *
     */
    get passwordFieldNative() {
        return this.querySelector(".md-password-field__native");
    }

    /**
     *
     * @fires MDPasswordFieldComponent#onPasswordFieldNativeActionClick
     */
    handlePasswordFieldNativeActionClick(event) {
        this.emit("onPasswordFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDPasswordFieldComponent#onPasswordFieldNativeActionVisibilityClick
     */
    handlePasswordFieldNativeActionVisibilityClick(event) {
        if (this.type == "password") {
            this.type = "text";
        } else {
            this.type = "password";
        }
        this.emit("onPasswordFieldNativeActionVisibilityClick", event);
    }

    /**
     *
     * @fires MDPasswordFieldComponent#onPasswordFieldNativeFocus
     */
    handlePasswordFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onPasswordFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDPasswordFieldComponent#onPasswordFieldNativeBlur
     */
    handlePasswordFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onPasswordFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDPasswordFieldComponent#onPasswordFieldNativeInput
     */
    handlePasswordFieldNativeInput(event) {
        this.value = this.passwordFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.passwordFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onPasswordFieldNativeInput", event);
    }

    /**
     *
     * @fires MDPasswordFieldComponent#onPasswordFieldNativeInvalid
     */
    handlePasswordFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.passwordFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onPasswordFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDPasswordFieldComponent#onPasswordFieldNativeReset
     */
    handlePasswordFieldNativeReset(event) {
        this.passwordFieldNative.value = this.defaultValue;
        this.value = this.passwordFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onPasswordFieldNativeReset", event);
    }
}

customElements.define("md-password-field", MDPasswordFieldComponent);

export { MDPasswordFieldComponent };
