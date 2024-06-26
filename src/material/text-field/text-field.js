import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * Tambahkan deskripsi
 * @extends MDComponent
 * @tagname md-text-field
 * @fires MDTextFieldComponent#onTextFieldNativeFocus -
 * @fires MDTextFieldComponent#onTextFieldNativeBlur -
 * @fires MDTextFieldComponent#onTextFieldNativeInput -
 * @fires MDTextFieldComponent#onTextFieldNativeInvalid -
 * @fires MDTextFieldComponent#onTextFieldNativeReset -
 */
class MDTextFieldComponent extends MDComponent {
    /**
     * @property {String} label - Tambahkan deskripsi
     * @property {String} icon - Tambahkan deskripsi
     * @property {String} prefix - Tambahkan deskripsi
     * @property {String} suffix - Tambahkan deskripsi
     * @property {Array} actions - Tambahkan deskripsi
     * @property {String} text - Tambahkan deskripsi
     * @property {String} accept - Tambahkan deskripsi
     * @property {String} alt - Tambahkan deskripsi
     * @property {String} autocomplete - Tambahkan deskripsi
     * @property {Boolean} autofocus - Tambahkan deskripsi
     * @property {Boolean} checked - Tambahkan deskripsi
     * @property {Boolean} defaultChecked - Tambahkan deskripsi
     * @property {Boolean} disabled - Tambahkan deskripsi
     * @property {FileList} files - Tambahkan deskripsi
     * @property {Object} form - Tambahkan deskripsi
     * @property {String} formAction - Tambahkan deskripsi
     * @property {String} formEnctype - Tambahkan deskripsi
     * @property {String} formMethod - Tambahkan deskripsi
     * @property {Boolean} formNoValidate - Tambahkan deskripsi
     * @property {String} formTarget - Tambahkan deskripsi
     * @property {Number} height - Tambahkan deskripsi
     * @property {Boolean} indeterminate - Tambahkan deskripsi
     * @property {Object} list - Tambahkan deskripsi
     * @property {String} max - Tambahkan deskripsi
     * @property {Number} maxLength - Tambahkan deskripsi
     * @property {String} min - Tambahkan deskripsi
     * @property {Number} minLength - Tambahkan deskripsi
     * @property {Boolean} multiple - Tambahkan deskripsi
     * @property {String} name - Tambahkan deskripsi
     * @property {String} pattern - Tambahkan deskripsi
     * @property {String} placeholder - Tambahkan deskripsi
     * @property {Boolean} readOnly - Tambahkan deskripsi
     * @property {Boolean} required - Tambahkan deskripsi
     * @property {Number} size - Tambahkan deskripsi
     * @property {String} src - Tambahkan deskripsi
     * @property {String} step - Tambahkan deskripsi
     * @property {String} type - Tambahkan deskripsi
     * @property {String} defaultValue - Tambahkan deskripsi
     * @property {String} value - Tambahkan deskripsi
     * @property {Number} width - Tambahkan deskripsi
     * @property {String} inputMode - Tambahkan deskripsi
     * @property {String} selectionDirection - Tambahkan deskripsi
     * @property {Number} selectionEnd - Tambahkan deskripsi
     * @property {Number} selectionStart - Tambahkan deskripsi
     * @property {String} align - Tambahkan deskripsi
     * @property {String} useMap - Tambahkan deskripsi
     * @property {Number} cols - Tambahkan deskripsi
     * @property {Number} rows - Tambahkan deskripsi
     * @property {Boolean} spellcheck - Tambahkan deskripsi
     * @property {String} wrap - Tambahkan deskripsi
     * @property {Number} length - Tambahkan deskripsi
     * @property {Number} selectedIndex - Tambahkan deskripsi
     * @property {HTMLCollection} selectedOptions - Tambahkan deskripsi
     * @property {Array} options - Tambahkan deskripsi
     * @property {String} errorText - Tambahkan deskripsi
     * @property {Boolean} error - Tambahkan deskripsi
     * @property {String} variant - Tambahkan deskripsi
     */
    static properties = {
        label: { type: String },
        icon: { type: String },
        prefix: { type: String },
        suffix: { type: String },
        actions: { type: Array },
        text: { type: String },

        accept: { type: String },
        alt: { type: String },
        autocomplete: { type: String },
        autofocus: { type: Boolean },
        checked: { type: Boolean },
        defaultChecked: { type: Boolean },
        disabled: { type: Boolean },
        files: { type: FileList },
        form: { type: Object },
        formAction: { type: String },
        formEnctype: { type: String },
        formMethod: { type: String },
        formNoValidate: { type: Boolean },
        formTarget: { type: String },
        height: { type: Number },
        indeterminate: { type: Boolean },
        list: { type: Object },
        max: { type: String },
        maxLength: { type: Number },
        min: { type: String },
        minLength: { type: Number },
        multiple: { type: Boolean },
        name: { type: String },
        pattern: { type: String },
        placeholder: { type: String },
        readOnly: { type: Boolean },
        required: { type: Boolean },
        size: { type: Number },
        src: { type: String },
        step: { type: String },
        type: { type: String },
        defaultValue: { type: String },
        value: { type: String },
        width: { type: Number },
        inputMode: { type: String },
        selectionDirection: { type: String },
        selectionEnd: { type: Number },
        selectionStart: { type: Number },
        align: { type: String },
        useMap: { type: String },
        cols: { type: Number },
        rows: { type: Number },
        spellcheck: { type: Boolean },
        wrap: { type: String },
        length: { type: Number },
        selectedIndex: { type: Number },
        selectedOptions: { type: HTMLCollection },
        options: { type: Array },

        errorText: { type: String },
        error: { type: Boolean },

        variant: { type: String },
    };

    variants = ["filled", "outlined", "rounded"];

    /**
     * Tambahkan deskripsi
     */
    get native() {
        return this.querySelector(".md-text-field__native");
    }

    constructor() {
        super();

        this.type = "text";
        this.autocomplete = "off";

        this.renderIconButton = this.renderIconButton.bind(this);
    }

    renderInput() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-text-field__native"
                .accept="${ifDefined(this.accept)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .max="${ifDefined(this.max)}"
                .maxLength="${ifDefined(this.maxLength)}"
                .min="${ifDefined(this.min)}"
                .minLength="${ifDefined(this.minLength)}"
                .multiple="${ifDefined(this.multiple)}"
                .name="${ifDefined(this.name)}"
                .pattern="${ifDefined(this.pattern)}"
                .placeholder="${ifDefined(this.placeholder)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .required="${ifDefined(this.required)}"
                .size="${ifDefined(this.size)}"
                .src="${ifDefined(this.src)}"
                .step="${ifDefined(this.step)}"
                .type="${ifDefined(this.type)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
        `;
    }

    renderTextarea() {
        /* prettier-ignore */
        return html`
            <textarea 
                class="md-text-field__native"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .maxLength="${ifDefined(this.maxLength)}"
                .minLength="${ifDefined(this.minLength)}"
                .name="${ifDefined(this.name)}"
                .placeholder="${ifDefined(this.placeholder)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .required="${ifDefined(this.required)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                .cols="${ifDefined(this.cols)}"
                .rows="${ifDefined(this.rows)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            ></textarea>
        `;
    }

    renderSelect() {
        /* prettier-ignore */
        return html`
            <select 
                class="md-text-field__native"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .multiple="${ifDefined(this.multiple)}"
                .name="${ifDefined(this.name)}"
                .required="${ifDefined(this.required)}"
                .size="${ifDefined(this.size)}"
                .value="${ifDefined(this.value)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
                ${this.options?.map(option => html`
                    <option 
                        ?disabled="${ifDefined(option.disabled)}"
                        label="${ifDefined(option.label)}"
                        ?selected="${ifDefined(option.selected)}"
                        value="${ifDefined(option.value)}"
                        text="${ifDefined(option.text)}"
                    ></option>
                `)}
            </select>
        `;
    }

    renderNative() {
        return choose(
            this.type,
            [
                ["textarea", () => this.renderTextarea()],
                ["select", () => this.renderSelect()],
            ],
            () => this.renderInput(),
        );
    }

    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                class="md-text-field__icon-button"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
            ></md-icon-button>
        `;
    }

    renderAction(item) {
        /* prettier-ignore */
        return this.renderIconButton(item)
    }

    renderActions(item) {
        /* prettier-ignore */
        return this.actions?.length||this.error?html`
            <div class="md-text-field__actions">
                ${this.error?html`<md-icon class="md-text-field__icon md-text-field__icon--error">error</md-icon>`:nothing}
                ${this.actions?.map(item=>this.renderAction(item))}
            </div>
        `:nothing
    }

    render() {
        /* prettier-ignore */
        return html`
            <label class="md-text-field__inner">
                ${this.label?html`<div class="md-text-field__label">${this.label}</div>`:html`<div class="md-text-field__nolabel">Label</div>`}
                <div class="md-text-field__container">
                    ${this.icon?html`<md-icon class="md-text-field__icon">${this.icon}</md-icon>`:nothing}
                    ${this.prefix?html`<div class="md-text-field__meta">${this.prefix}</div>`:nothing}
                    ${this.renderNative()}
                    ${this.suffix?html`<div class="md-text-field__meta">${this.suffix}</div>`:nothing}
                    ${this.renderActions()}
                </div>
                ${this.errorText||this.text?html`<div class="md-text-field__text">${this.errorText||this.text}</div>`:nothing}
            </label>
        `
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");

        const defaultValue = {
            color: "#000000",
            "datetime-local": "",
            date: "",
            time: "",
            week: "",
            month: "",
            url: "",
            email: "",
        };

        this.value = this.value || defaultValue[this.type];
        this.defaultValue = this.value;

        this.populate();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`${this.localName}--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }

        if (changedProperties.has("icon")) {
            window.requestAnimationFrame(() => {
                this.style.setProperty("--md-comp-text-field-offset-left", this.native.offsetLeft + "px");
            });
        }
    }

    handleTextFieldNativeFocus(event) {
        this.classList.add("md-text-field--focused");

        this.emit("onTextFieldNativeFocus", event);
    }

    handleTextFieldNativeBlur(event) {
        this.classList.remove("md-text-field--focused");

        this.emit("onTextFieldNativeBlur", event);
    }

    handleTextFieldNativeInput(event) {
        if (this.type !== "file") {
            this.value = this.native.value;
        }

        this.populate();
        this.validate();

        this.emit("onTextFieldNativeInput", event);
    }

    handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        this.validate();

        this.emit("onTextFieldNativeInvalid", event);
    }

    handleTextFieldNativeReset(event) {
        if (this.type !== "file") {
            this.native.value = this.defaultValue;
            this.value = this.defaultValue;
        }

        this.populate();
        this.validate();

        this.emit("onTextFieldNativeReset", event);
    }

    /**
     * Tambahkan deskripsi
     */
    populate() {
        this.classList.toggle("md-text-field--populated", !!this.value || this.type == "file");
    }

    /**
     * Tambahkan deskripsi
     */
    validate() {
        this.errorText = this.native.validationMessage;
        this.error = !!this.errorText;

        this.classList.toggle("md-text-field--error", this.error);
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
