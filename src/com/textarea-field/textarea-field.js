import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDTextareaFieldComponent extends MDElement {
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
            autocapitalize: { type: Boolean },
            autocomplete: { type: String },
            disabled: { type: Boolean },
            form: { type: String },
            list: { type: String },
            name: { type: String },
            readonly: { type: Boolean },
            required: { type: Boolean },
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
        this.value = Array.from(this.childNodes);
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.label?html`<div class="md-textarea-field__label">${this.label}</div>`:nothing}
            <div class="md-textarea-field__container">
                ${this.leadingIcon?html`<md-icon class="md-textarea-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-textarea-field__meta">${this.leadingMeta}</div>`:nothing}
                <textarea
                    class="md-textarea-field__native"
                    .autocapitalize="${ifDefined(this.autocapitalize)}"
                    .autocomplete="${ifDefined(this.autocomplete??"off")}"
                    .disabled="${ifDefined(this.disabled)}"
                    .form="${ifDefined(this.form)}"
                    .list="${ifDefined(this.list)}"
                    .name="${ifDefined(this.name)}"
                    .readonly="${ifDefined(this.readonly)}"
                    .required="${ifDefined(this.required)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleTextareaFieldNativeFocus}"
                    @blur="${this.handleTextareaFieldNativeBlur}"
                    @input="${this.handleTextareaFieldNativeInput}"
                    @invalid="${this.handleTextareaFieldNativeInvalid}"
                    @reset="${this.handleTextareaFieldNativeReset}"
                ></textarea>
                ${this.trailingMeta?html`<div class="md-textarea-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-textarea-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-textarea-field__icon">error</md-icon>`:nothing}
                ${this.trailingActions?.length?html`
                    <div class="md-textarea-field__actions">
                        ${this.trailingActions.map(action => html`
                            <md-icon-button @click="${this.handleTextareaFieldNativeActionClick}" class="md-textarea-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                        `)}
                    </div>
                `:nothing}
            </div>
            ${this.validationMessage||this.text?html`<div class="md-textarea-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-textarea-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-textarea-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-textarea-field__meta,.md-textarea-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-textarea-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-textarea-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-textarea-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get textFieldNative() {
        return this.querySelector(".md-textarea-field__native");
    }

    /**
     *
     * @fires MDTextareaFieldComponent#onTextareaFieldNativeActionClick
     */
    handleTextareaFieldNativeActionClick(event) {
        this.emit("onTextareaFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDTextareaFieldComponent#onTextareaFieldNativeFocus
     */
    handleTextareaFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onTextareaFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDTextareaFieldComponent#onTextareaFieldNativeBlur
     */
    handleTextareaFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTextareaFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDTextareaFieldComponent#onTextareaFieldNativeInput
     */
    handleTextareaFieldNativeInput(event) {
        this.value = this.textFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.textFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTextareaFieldNativeInput", event);
    }

    /**
     *
     * @fires MDTextareaFieldComponent#onTextareaFieldNativeInvalid
     */
    handleTextareaFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.textFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTextareaFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDTextareaFieldComponent#onTextareaFieldNativeReset
     */
    handleTextareaFieldNativeReset(event) {
        this.textFieldNative.value = this.defaultValue;
        this.value = this.textFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onTextareaFieldNativeReset", event);
    }
}

customElements.define("md-textarea-field", MDTextareaFieldComponent);

export { MDTextareaFieldComponent };
