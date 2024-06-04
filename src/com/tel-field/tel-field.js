import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
/**
 *
 * @class MDTelFieldComponent
 * @extends MDElement
 */
/**
 *
 * @class MDTelFieldComponent
 * @extends MDElement
 */
/**
 *
 * @class MDTelFieldComponent
 * @extends MDElement
 */
class MDTelFieldComponent extends MDElement {
    /**
     *
     * @property {Boolean} [autocapitalize] -
     * @property {String} [autocomplete] -
     * @property {Boolean} [disabled] -
     * @property {String} [form] -
     * @property {String} [list] -
     * @property {String} [name] -
     * @property {Boolean} [readonly] -
     * @property {Boolean} [required] -
     * @property {String} [type] -
     * @property {String} [value] -
     * @property {String} [dirname] -
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
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <label class="md-tel-field__a11y">
                
                ${this.label?html`<div class="md-tel-field__label">${this.label}</div>`:nothing}
                <div class="md-tel-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-tel-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-tel-field__meta">${this.leadingMeta}</div>`:nothing}
                    <input
                        class="md-tel-field__native"
                        type="tel"
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
                        @focus="${this.handleTelFieldNativeFocus}"
                        @blur="${this.handleTelFieldNativeBlur}"
                        @input="${this.handleTelFieldNativeInput}"
                        @invalid="${this.handleTelFieldNativeInvalid}"
                        @reset="${this.handleTelFieldNativeReset}"
                    />
                    ${this.trailingMeta?html`<div class="md-tel-field__meta">${this.trailingMeta}</div>`:nothing}
                    ${this.trailingIcon?html`<md-icon class="md-tel-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                    ${this.invalid?html`<md-icon class="md-tel-field__icon">error</md-icon>`:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-tel-field__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button @click="${this.handleTelFieldNativeActionClick}" class="md-tel-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
                ${this.validationMessage||this.text?html`<div class="md-tel-field__text">${this.validationMessage||this.text}</div>`:nothing}
            </label>
        `;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tel-field");
        await this.updateComplete;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tel-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-tel-field__meta,.md-tel-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-tel-field-offset-left", offsetLeft + "px");
        }
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["filled", "outlined", "rounded"].forEach((ui) => {
                this.classList.remove("md-tel-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-tel-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    get telFieldNative() {
        return this.querySelector(".md-tel-field__native");
    }

    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeActionClick
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeActionClick 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeActionClick 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeActionClick 
     */
    handleTelFieldNativeActionClick(event) {
        this.emit("onTelFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeFocus
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeFocus 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeFocus 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeFocus 
     */
    handleTelFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onTelFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeBlur
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeBlur 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeBlur 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeBlur 
     */
    handleTelFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTelFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeInput
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeInput 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeInput 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeInput 
     */
    handleTelFieldNativeInput(event) {
        this.value = this.telFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.telFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTelFieldNativeInput", event);
    }

    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeInvalid
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeInvalid 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeInvalid 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeInvalid 
     */
    handleTelFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.telFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTelFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeReset
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeReset 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeReset 
     */
    /**
     *
     * @fires MDTelFieldComponent#onTelFieldNativeReset 
     */
    handleTelFieldNativeReset(event) {
        this.telFieldNative.value = this.defaultValue;
        this.value = this.telFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onTelFieldNativeReset", event);
    }
}

customElements.define("md-tel-field", MDTelFieldComponent);

export { MDTelFieldComponent };
