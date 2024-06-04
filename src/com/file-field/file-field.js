import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
/**
 *
 * @class MDFileFieldComponent
 * @extends MDElement
 */
/**
 *
 * @class MDFileFieldComponent
 * @extends MDElement
 */
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
    /**
     *
     * @property {String} [name] - 
     * @property {String} [accept] - 
     * @property {Boolean} [multiple] - 
     * @property {String} [capture] - 
     * @property {Boolean} [disabled] - 
     * @property {Boolean} [required] - 
     * @property {Boolean} [autofocus] - 
     * @property {String} [list] - 
     * @property {Boolean} [spellcheck] - 
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
     * @property {String} [accept] - 
     * @property {Boolean} [multiple] - 
     * @property {String} [capture] - 
     * @property {Boolean} [disabled] - 
     * @property {Boolean} [required] - 
     * @property {Boolean} [autofocus] - 
     * @property {String} [list] - 
     * @property {Boolean} [spellcheck] - 
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
     * @property {String} [accept] - 
     * @property {Boolean} [multiple] - 
     * @property {String} [capture] - 
     * @property {Boolean} [disabled] - 
     * @property {Boolean} [required] - 
     * @property {Boolean} [autofocus] - 
     * @property {String} [list] - 
     * @property {Boolean} [spellcheck] - 
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
            accept: { type: String },
            multiple: { type: Boolean },
            capture: { type: String },
            disabled: { type: Boolean },
            required: { type: Boolean },
            autofocus: { type: Boolean },
            list: { type: String },
            spellcheck: { type: Boolean },

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
            <label class="md-file-field__a11y">

                ${this.label?html`<div class="md-file-field__label">${this.label}</div>`:nothing}
                <div class="md-file-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-file-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-file-field__meta">${this.leadingMeta}</div>`:nothing}
                    <input
                        class="md-file-field__native"
                        type="file"
                        .name="${ifDefined(this.name)}"
                        .accept="${ifDefined(this.accept)}"
                        .multiple="${ifDefined(this.multiple)}"
                        .capture="${ifDefined(this.capture)}"
                        .disabled="${ifDefined(this.disabled)}"
                        .required="${ifDefined(this.required)}"
                        .autofocus="${ifDefined(this.autofocus)}"
                        .list="${ifDefined(this.list)}"
                        .spellcheck="${ifDefined(this.spellcheck)}"
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
        this.classList.add("md-file-field");
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
    /**
     *
     */
    /**
     *
     */
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
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeActionUploadClick 
     */
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeActionUploadClick 
     */
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
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeActionClick 
     */
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeActionClick 
     */
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
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeFocus 
     */
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeFocus 
     */
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
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeBlur 
     */
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeBlur 
     */
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
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeInput 
     */
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeInput 
     */
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
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeInvalid 
     */
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeInvalid 
     */
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
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeReset 
     */
    /**
     *
     * @fires MDFileFieldComponent#onFileFieldNativeReset 
     */
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
