import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @class MDFileFieldComponent
 * @extends MDElement
 */
class MDFileFieldComponent extends MDElement {
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
     * @property {String} [accept] -
     * @property {String} [capture] -
     * @property {Boolean} [multiple] -
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
            accept: { type: String },
            capture: { type: String },
            multiple: { type: Boolean },
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
            ${this.label?html`<div class="md-file-field__label">${this.label}</div>`:nothing}
            <div class="md-file-field__container">
                ${this.leadingIcon?html`<md-icon class="md-file-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-file-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-file-field__native"
                    type="file"
                    .autocapitalize="${ifDefined(this.autocapitalize)}"
                    .autocomplete="${ifDefined(this.autocomplete)}"
                    .disabled="${ifDefined(this.disabled)}"
                    .form="${ifDefined(this.form)}"
                    .list="${ifDefined(this.list)}"
                    .name="${ifDefined(this.name)}"
                    .readonly="${ifDefined(this.readonly)}"
                    .required="${ifDefined(this.required)}"
                    .accept="${ifDefined(this.accept)}"
                    .capture="${ifDefined(this.capture)}"
                    .multiple="${ifDefined(this.multiple)}"
                    @focus="${this.handleFileFieldNativeFocus}"
                    @blur="${this.handleFileFieldNativeBlur}"
                    @input="${this.handleFileFieldNativeInput}"
                    @invalid="${this.handleFileFieldNativeInvalid}"
                    @reset="${this.handleFileFieldNativeReset}"
                />
                ${this.trailingMeta?html`<div class="md-file-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-file-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-file-field__icon">error</md-icon>`:nothing}
                <div class="md-file-field__actions">
                    ${this.trailingActions?.map(action => html`
                        <md-icon-button @click="${this.handleFileFieldNativeActionClick}" class="md-file-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                    `)}
                    <md-icon-button @click="${this.handleFileFieldNativeActionUploadClick}" class="md-file-field__action" .icon="${"upload"}"></md-icon-button>
                </div>
            </div>
            ${this.validationMessage||this.text?html`<div class="md-file-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-file-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-file-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-file-field__meta,.md-file-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-file-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-file-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-file-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get fileFieldNative() {
        return this.querySelector(".md-file-field__native");
    }

    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeActionUploadClick
     */
    handleFileFieldNativeActionUploadClick(event) {
        this.fileFieldNative.showPicker();
        this.emit("onFileFieldNativeActionUploadClick", event);
    }

    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeActionClick
     */
    handleFileFieldNativeActionClick(event) {
        this.emit("onFileFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeFocus
     */
    handleFileFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onFileFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeBlur
     */
    handleFileFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onFileFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeInput
     */
    handleFileFieldNativeInput(event) {
        this.value = this.fileFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.fileFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onFileFieldNativeInput", event);
    }

    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeInvalid
     */
    handleFileFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.fileFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onFileFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeReset
     */
    handleFileFieldNativeReset(event) {
        this.fileFieldNative.value = this.defaultValue;
        this.value = this.fileFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onFileFieldNativeReset", event);
    }
}

customElements.define("md-file-field", MDFileFieldComponent);

export { MDFileFieldComponent };
