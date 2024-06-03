import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDTempFieldComponent extends MDElement {
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
            <label class="md-temp-field__a11y">
                ${this.label?html`<div class="md-temp-field__label">${this.label}</div>`:nothing}
                <div class="md-temp-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-temp-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-temp-field__meta">${this.leadingMeta}</div>`:nothing}
                    <textarea
                        class="md-temp-field__native"
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
                        .rows="${ifDefined(this.rows??1)}"
                        @focus="${this.handleTempFieldNativeFocus}"
                        @blur="${this.handleTempFieldNativeBlur}"
                        @input="${this.handleTempFieldNativeInput}"
                        @invalid="${this.handleTempFieldNativeInvalid}"
                        @reset="${this.handleTempFieldNativeReset}"
                    ></textarea>
                    ${this.trailingMeta?html`<div class="md-temp-field__meta">${this.trailingMeta}</div>`:nothing}
                    ${this.trailingIcon?html`<md-icon class="md-temp-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                    ${this.invalid?html`<md-icon class="md-temp-field__icon">error</md-icon>`:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-temp-field__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button @click="${this.handleTempFieldNativeActionClick}" class="md-temp-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
                ${this.validationMessage||this.text?html`<div class="md-temp-field__text">${this.validationMessage||this.text}</div>`:nothing}
            </label>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-temp-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-temp-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-temp-field__meta,.md-temp-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-temp-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-temp-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-temp-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get textFieldNative() {
        return this.querySelector(".md-temp-field__native");
    }

    /**
     *
     * @fires MDTempFieldComponent#onTempFieldNativeActionClick
     */
    handleTempFieldNativeActionClick(event) {
        this.emit("onTempFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDTempFieldComponent#onTempFieldNativeFocus
     */
    handleTempFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onTempFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDTempFieldComponent#onTempFieldNativeBlur
     */
    handleTempFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTempFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDTempFieldComponent#onTempFieldNativeInput
     */
    handleTempFieldNativeInput(event) {
        this.value = this.textFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.textFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTempFieldNativeInput", event);
    }

    /**
     *
     * @fires MDTempFieldComponent#onTempFieldNativeInvalid
     */
    handleTempFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.textFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTempFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDTempFieldComponent#onTempFieldNativeReset
     */
    handleTempFieldNativeReset(event) {
        this.textFieldNative.value = this.defaultValue;
        this.value = this.textFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onTempFieldNativeReset", event);
    }
}

customElements.define("md-temp-field", MDTempFieldComponent);

export { MDTempFieldComponent };
