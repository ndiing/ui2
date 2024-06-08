import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDEmailFieldComponent extends MDElement {
    /**
     *
     * @property {String} [name] -
     * @property {String} [placeholder] -
     * @property {Number} [maxlength] -
     * @property {Number} [minlength] -
     * @property {Boolean} [readonly] -
     * @property {Boolean} [disabled] -
     * @property {Boolean} [required] -
     * @property {String} [pattern] -
     * @property {String} [autocomplete] -
     * @property {Boolean} [autofocus] -
     * @property {String} [list] -
     * @property {Boolean} [multiple] -
     * @property {Boolean} [spellcheck] -
     * @property {String} [value] -
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
            list: { type: String },
            multiple: { type: Boolean },
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
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <label class="md-email-field__a11y">

                ${this.label?html`<div class="md-email-field__label">${this.label}</div>`:nothing}
                <div class="md-email-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-email-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-email-field__meta">${this.leadingMeta}</div>`:nothing}
                    <input
                        class="md-email-field__native"
                        type="email"
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
                        .list="${ifDefined(this.list)}"
                        .multiple="${ifDefined(this.multiple)}"
                        .spellcheck="${ifDefined(this.spellcheck)}"
                        .value="${ifDefined(this.value)}"
                        .defaultValue="${ifDefined(this.defaultValue)}"
                        @focus="${this.handleEmailFieldNativeFocus}"
                        @blur="${this.handleEmailFieldNativeBlur}"
                        @input="${this.handleEmailFieldNativeInput}"
                        @invalid="${this.handleEmailFieldNativeInvalid}"
                        @reset="${this.handleEmailFieldNativeReset}"
                    />
                    ${this.trailingMeta?html`<div class="md-email-field__meta">${this.trailingMeta}</div>`:nothing}
                    ${this.trailingIcon?html`<md-icon class="md-email-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                    ${this.invalid?html`<md-icon class="md-email-field__icon">error</md-icon>`:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-email-field__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button @click="${this.handleEmailFieldNativeActionClick}" class="md-email-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
                ${this.validationMessage||this.text?html`<div class="md-email-field__text">${this.validationMessage||this.text}</div>`:nothing}
            </label>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-email-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-email-field__meta,.md-email-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-email-field-offset-left", offsetLeft + "px");
        }
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-email-field");
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
                this.classList.remove("md-email-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-email-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get emailFieldNative() {
        return this.querySelector(".md-email-field__native");
    }

    /**
     *
     * @fires MDEmailFieldComponent#onEmailFieldNativeActionClick
     */
    handleEmailFieldNativeActionClick(event) {
        this.emit("onEmailFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDEmailFieldComponent#onEmailFieldNativeFocus
     */
    handleEmailFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onEmailFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDEmailFieldComponent#onEmailFieldNativeBlur
     */
    handleEmailFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onEmailFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDEmailFieldComponent#onEmailFieldNativeInput
     */
    handleEmailFieldNativeInput(event) {
        this.value = this.emailFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.emailFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onEmailFieldNativeInput", event);
    }

    /**
     *
     * @fires MDEmailFieldComponent#onEmailFieldNativeInvalid
     */
    handleEmailFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.emailFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onEmailFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDEmailFieldComponent#onEmailFieldNativeReset
     */
    handleEmailFieldNativeReset(event) {
        this.emailFieldNative.value = this.defaultValue;
        this.value = this.emailFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onEmailFieldNativeReset", event);
    }
}

customElements.define("md-email-field", MDEmailFieldComponent);

export { MDEmailFieldComponent };
