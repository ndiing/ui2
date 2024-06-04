import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @class MDUrlFieldComponent
 * @extends MDElement
 */
class MDUrlFieldComponent extends MDElement {
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
            <label class="md-url-field__a11y">

                ${this.label?html`<div class="md-url-field__label">${this.label}</div>`:nothing}
                <div class="md-url-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-url-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-url-field__meta">${this.leadingMeta}</div>`:nothing}
                    <input
                        class="md-url-field__native"
                        type="url"
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
                        .spellcheck="${ifDefined(this.spellcheck)}"
                        .value="${ifDefined(this.value)}"
                        .defaultValue="${ifDefined(this.defaultValue)}"
                        @focus="${this.handleUrlFieldNativeFocus}"
                        @blur="${this.handleUrlFieldNativeBlur}"
                        @input="${this.handleUrlFieldNativeInput}"
                        @invalid="${this.handleUrlFieldNativeInvalid}"
                        @reset="${this.handleUrlFieldNativeReset}"
                    />
                    ${this.trailingMeta?html`<div class="md-url-field__meta">${this.trailingMeta}</div>`:nothing}
                    ${this.trailingIcon?html`<md-icon class="md-url-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                    ${this.invalid?html`<md-icon class="md-url-field__icon">error</md-icon>`:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-url-field__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button @click="${this.handleUrlFieldNativeActionClick}" class="md-url-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
                ${this.validationMessage||this.text?html`<div class="md-url-field__text">${this.validationMessage||this.text}</div>`:nothing}
            </label>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-url-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-url-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-url-field__meta,.md-url-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-url-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-url-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-url-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get urlFieldNative() {
        return this.querySelector(".md-url-field__native");
    }

    /**
     *
     * @fires MDUrlFieldComponent#onUrlFieldNativeActionClick
     */
    handleUrlFieldNativeActionClick(event) {
        this.emit("onUrlFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDUrlFieldComponent#onUrlFieldNativeFocus
     */
    handleUrlFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onUrlFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDUrlFieldComponent#onUrlFieldNativeBlur
     */
    handleUrlFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onUrlFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDUrlFieldComponent#onUrlFieldNativeInput
     */
    handleUrlFieldNativeInput(event) {
        this.value = this.urlFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.urlFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onUrlFieldNativeInput", event);
    }

    /**
     *
     * @fires MDUrlFieldComponent#onUrlFieldNativeInvalid
     */
    handleUrlFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.urlFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onUrlFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDUrlFieldComponent#onUrlFieldNativeReset
     */
    handleUrlFieldNativeReset(event) {
        this.urlFieldNative.value = this.defaultValue;
        this.value = this.urlFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onUrlFieldNativeReset", event);
    }
}

customElements.define("md-url-field", MDUrlFieldComponent);

export { MDUrlFieldComponent };
