import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDColorFieldComponent extends MDElement {
    /**
     *
     * @property {Boolean} [autocapitalize] -
     * @property {String} [autocomplete] -
     * @property {Boolean} [disabled] -
     * @property {String} [form] -
     * @property {String} [list] -
     * @property {String} [name] -
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
        this.value = "#000000";
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <input
                class="md-color-field__native md-color-field__native--hidden"
                type="color"
                .autocapitalize="${ifDefined(this.autocapitalize)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .form="${ifDefined(this.form)}"
                .list="${ifDefined(this.list)}"
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                @focus="${this.handleColorFieldNativeFocus}"
                @blur="${this.handleColorFieldNativeBlur}"
                @input="${this.handleColorFieldNativeInput}"
                @invalid="${this.handleColorFieldNativeInvalid}"
                @reset="${this.handleColorFieldNativeReset}"
                @click="${this.handleColorFieldNativeClick}"
            />
            ${this.label?html`<div class="md-color-field__label">${this.label}</div>`:nothing}
            <div class="md-color-field__container">
                ${this.leadingIcon?html`<md-icon class="md-color-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-color-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-color-field__native"
                    type="text"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    .readOnly="${ifDefined(this.readOnly??true)}"
                    @focus="${this.handleColorFieldNativeFocus}"
                    @blur="${this.handleColorFieldNativeBlur}"
                    @input="${this.handleColorFieldNativeInput}"
                    @invalid="${this.handleColorFieldNativeInvalid}"
                    @reset="${this.handleColorFieldNativeReset}"
                    @click="${this.handleColorFieldNativeClick}"
                />
                ${this.trailingMeta?html`<div class="md-color-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-color-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-color-field__icon">error</md-icon>`:nothing}
                <div class="md-color-field__actions">
                    ${this.trailingActions?.map(action => html`
                        <md-icon-button @click="${this.handleColorFieldNativeActionClick}" class="md-color-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                    `)}
                    <md-icon-button @click="${this.handleColorFieldNativeActionPaletteClick}" class="md-color-field__action" .icon="${"palette"}"></md-icon-button>
                </div>
            </div>
            ${this.validationMessage||this.text?html`<div class="md-color-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-color-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-color-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-color-field__meta,.md-color-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-color-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-color-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-color-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get colorFieldNative() {
        return this.querySelector(".md-color-field__native");
    }

    /**
     *
     * @fires MDColorFieldComponent#onColorFieldNativeActionClick
     */
    handleColorFieldNativeActionClick(event) {
        this.emit("onColorFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDColorFieldComponent#onColorFieldNativeActionPaletteClick
     */
    handleColorFieldNativeActionPaletteClick(event) {
        this.handleColorPicker();

        this.emit("onColorFieldNativeActionPaletteClick", event);
    }

    /**
     *
     */
    handleColorPicker() {
        this.colorFieldPicker = document.createElement("md-color-picker");
        this.parentElement.insertBefore(this.colorFieldPicker, this.nextElementSibling);
        this.colorFieldPicker.value = this.value;

        const callback = () => {
            this.colorFieldPicker.removeEventListener("onColorPickerChange", this.handleColorFieldPickerChange);
            this.colorFieldPicker.removeEventListener("onColorPickerButtonCancelClick", this.handleColorFieldPickerButtonCancelClick);
            this.colorFieldPicker.removeEventListener("onColorPickerButtonOkClick", this.handleColorFieldPickerButtonOkClick);
            this.colorFieldPicker.removeEventListener("onColorPickerClose", callback);
            this.colorFieldPicker.remove();
        };

        this.handleColorFieldPickerChange = this.handleColorFieldPickerChange.bind(this);
        this.handleColorFieldPickerButtonCancelClick = this.handleColorFieldPickerButtonCancelClick.bind(this);
        this.handleColorFieldPickerButtonOkClick = this.handleColorFieldPickerButtonOkClick.bind(this);

        this.colorFieldPicker.addEventListener("onColorPickerClose", callback);
        this.colorFieldPicker.addEventListener("onColorPickerChange", this.handleColorFieldPickerChange);
        this.colorFieldPicker.addEventListener("onColorPickerButtonCancelClick", this.handleColorFieldPickerButtonCancelClick);
        this.colorFieldPicker.addEventListener("onColorPickerButtonOkClick", this.handleColorFieldPickerButtonOkClick);

        window.requestAnimationFrame(() => {
            this.colorFieldPicker.show(this);
        });
    }

    /**
     *
     */
    handleColorFieldPickerChange(event) {
        this.colorFieldNative.value = this.colorFieldPicker.selected.slice(0, 7);
        this.value = this.colorFieldNative.value;
    }

    /**
     *
     */
    handleColorFieldPickerButtonCancelClick(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.colorFieldPicker.close();
    }

    /**
     *
     */
    handleColorFieldPickerButtonOkClick(event) {
        this.colorFieldPicker.close();
    }

    /**
     *
     * @fires MDColorFieldComponent#onColorFieldNativeFocus
     */
    handleColorFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onColorFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDColorFieldComponent#onColorFieldNativeBlur
     */
    handleColorFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onColorFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDColorFieldComponent#onColorFieldNativeInput
     */
    handleColorFieldNativeInput(event) {
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onColorFieldNativeInput", event);
    }

    /**
     *
     * @fires MDColorFieldComponent#onColorFieldNativeInvalid
     */
    handleColorFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onColorFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDColorFieldComponent#onColorFieldNativeReset
     */
    handleColorFieldNativeReset(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onColorFieldNativeReset", event);
    }

    /**
     *
     * @fires MDColorFieldComponent#onColorFieldNativeClick
     */
    handleColorFieldNativeClick(event) {
        event.preventDefault();

        this.emit("onColorFieldNativeClick", event);
    }
}

customElements.define("md-color-field", MDColorFieldComponent);

export { MDColorFieldComponent };
