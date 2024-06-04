import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDTextFieldComponent extends MDElement {
    /**
     *
     * @property {String} [name] -
     * @property {String} [placeholder] -
     * @property {Number} [size] -
     * @property {Number} [maxlength] -
     * @property {Number} [minlength] -
     * @property {Boolean} [readonly] -
     * @property {Boolean} [disabled] -
     * @property {Boolean} [required] -
     * @property {String} [pattern] -
     * @property {String} [autocomplete] -
     * @property {Boolean} [autofocus] -
     * @property {String} [list] -
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
            size: { type: Number },
            maxlength: { type: Number },
            minlength: { type: Number },
            readonly: { type: Boolean },
            disabled: { type: Boolean },
            required: { type: Boolean },
            pattern: { type: String },
            autocomplete: { type: String },
            autofocus: { type: Boolean },
            list: { type: String },
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
            <label class="md-text-field__a11y">

                ${this.label?html`<div class="md-text-field__label">${this.label}</div>`:nothing}
                <div class="md-text-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-text-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-text-field__meta">${this.leadingMeta}</div>`:nothing}
                    <input
                        class="md-text-field__native"
                        type="text"
                        .name="${ifDefined(this.name)}"
                        .placeholder="${ifDefined(this.placeholder)}"
                        .size="${ifDefined(this.size)}"
                        .maxlength="${ifDefined(this.maxlength)}"
                        .minlength="${ifDefined(this.minlength)}"
                        .readonly="${ifDefined(this.readonly)}"
                        .disabled="${ifDefined(this.disabled)}"
                        .required="${ifDefined(this.required)}"
                        .pattern="${ifDefined(this.pattern)}"
                        .autocomplete="${ifDefined(this.autocomplete)}"
                        .autofocus="${ifDefined(this.autofocus)}"
                        .list="${ifDefined(this.list)}"
                        .spellcheck="${ifDefined(this.spellcheck)}"
                        .value="${ifDefined(this.value)}"
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
            </label>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-text-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-text-field__meta,.md-text-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-text-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-text-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-text-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get textFieldNative() {
        return this.querySelector(".md-text-field__native");
    }

    /**
     *
     * @fires MDTextFieldComponent#onTextFieldNativeActionClick
     */
    handleTextFieldNativeActionClick(event) {
        this.emit("onTextFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDTextFieldComponent#onTextFieldNativeFocus
     */
    handleTextFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onTextFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDTextFieldComponent#onTextFieldNativeBlur
     */
    handleTextFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTextFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDTextFieldComponent#onTextFieldNativeInput
     */
    handleTextFieldNativeInput(event) {
        this.value = this.textFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.textFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTextFieldNativeInput", event);
    }

    /**
     *
     * @fires MDTextFieldComponent#onTextFieldNativeInvalid
     */
    handleTextFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.textFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTextFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDTextFieldComponent#onTextFieldNativeReset
     */
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
