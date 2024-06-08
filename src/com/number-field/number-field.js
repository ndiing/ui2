import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDNumberFieldComponent extends MDElement {
    /**
     *
     * @property {String} [name] -
     * @property {String} [placeholder] -
     * @property {Number} [min] -
     * @property {Number} [max] -
     * @property {Number} [step] -
     * @property {Boolean} [readonly] -
     * @property {Boolean} [disabled] -
     * @property {Boolean} [required] -
     * @property {String} [autocomplete] -
     * @property {Boolean} [autofocus] -
     * @property {String} [list] -
     * @property {Boolean} [spellcheck] -
     * @property {Number} [value] -
     * @property {Number} [defaultValue] -
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
            min: { type: Number },
            max: { type: Number },
            step: { type: Number },
            readonly: { type: Boolean },
            disabled: { type: Boolean },
            required: { type: Boolean },
            autocomplete: { type: String },
            autofocus: { type: Boolean },
            list: { type: String },
            spellcheck: { type: Boolean },
            value: { type: Number },
            defaultValue: { type: Number },

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
            <label class="md-number-field__a11y">

                ${this.label?html`<div class="md-number-field__label">${this.label}</div>`:nothing}
                <div class="md-number-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-number-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-number-field__meta">${this.leadingMeta}</div>`:nothing}
                    <input
                        class="md-number-field__native"
                        type="number"
                        .name="${ifDefined(this.name)}"
                        .placeholder="${ifDefined(this.placeholder)}"
                        .min="${ifDefined(this.min)}"
                        .max="${ifDefined(this.max)}"
                        .step="${ifDefined(this.step)}"
                        .readonly="${ifDefined(this.readonly)}"
                        .disabled="${ifDefined(this.disabled)}"
                        .required="${ifDefined(this.required)}"
                        .autocomplete="${ifDefined(this.autocomplete)}"
                        .autofocus="${ifDefined(this.autofocus)}"
                        .list="${ifDefined(this.list)}"
                        .spellcheck="${ifDefined(this.spellcheck)}"
                        .value="${ifDefined(this.value)}"
                        .defaultValue="${ifDefined(this.defaultValue)}"
                        @focus="${this.handleNumberFieldNativeFocus}"
                        @blur="${this.handleNumberFieldNativeBlur}"
                        @input="${this.handleNumberFieldNativeInput}"
                        @invalid="${this.handleNumberFieldNativeInvalid}"
                        @reset="${this.handleNumberFieldNativeReset}"
                    />
                    ${this.trailingMeta?html`<div class="md-number-field__meta">${this.trailingMeta}</div>`:nothing}
                    ${this.trailingIcon?html`<md-icon class="md-number-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                    ${this.invalid?html`<md-icon class="md-number-field__icon">error</md-icon>`:nothing}
                    <div class="md-number-field__actions">
                        ${this.trailingActions?.map(action => html`
                            <md-icon-button @click="${this.handleNumberFieldNativeActionClick}" class="md-number-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                        `)}
                        <md-icon-button @click="${this.handleNumberFieldNativeActionStepDownClick}" class="md-number-field__action" .icon="${"remove"}"></md-icon-button>
                        <md-icon-button @click="${this.handleNumberFieldNativeActionStepUpClick}" class="md-number-field__action" .icon="${"add"}"></md-icon-button>
                    </div>
                </div>
                ${this.validationMessage||this.text?html`<div class="md-number-field__text">${this.validationMessage||this.text}</div>`:nothing}
            </label>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-number-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-number-field__meta,.md-number-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-number-field-offset-left", offsetLeft + "px");
        }
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-number-field");
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
                this.classList.remove("md-number-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-number-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get numberFieldNative() {
        return this.querySelector(".md-number-field__native");
    }

    /**
     *
     * @fires MDNumberFieldComponent#onNumberFieldNativeActionClick
     */
    handleNumberFieldNativeActionClick(event) {
        this.emit("onNumberFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDNumberFieldComponent#onNumberFieldNativeActionStepDownClick
     */
    handleNumberFieldNativeActionStepDownClick(event) {
        this.numberFieldNative.stepDown();

        this.numberFieldNative.dispatchEvent(new CustomEvent("input", {}));

        this.emit("onNumberFieldNativeActionStepDownClick", event);
    }

    /**
     *
     * @fires MDNumberFieldComponent#onNumberFieldNativeActionStepUpClick
     */
    handleNumberFieldNativeActionStepUpClick(event) {
        this.numberFieldNative.stepUp();

        this.numberFieldNative.dispatchEvent(new CustomEvent("input", {}));

        this.emit("onNumberFieldNativeActionStepUpClick", event);
    }

    /**
     *
     * @fires MDNumberFieldComponent#onNumberFieldNativeFocus
     */
    handleNumberFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onNumberFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDNumberFieldComponent#onNumberFieldNativeBlur
     */
    handleNumberFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onNumberFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDNumberFieldComponent#onNumberFieldNativeInput
     */
    handleNumberFieldNativeInput(event) {
        this.value = this.numberFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.numberFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onNumberFieldNativeInput", event);
    }

    /**
     *
     * @fires MDNumberFieldComponent#onNumberFieldNativeInvalid
     */
    handleNumberFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.numberFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onNumberFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDNumberFieldComponent#onNumberFieldNativeReset
     */
    handleNumberFieldNativeReset(event) {
        this.numberFieldNative.value = this.defaultValue;
        this.value = this.numberFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onNumberFieldNativeReset", event);
    }
}

customElements.define("md-number-field", MDNumberFieldComponent);

export { MDNumberFieldComponent };
