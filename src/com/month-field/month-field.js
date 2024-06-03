import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDMonthFieldComponent extends MDElement {
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
     * @property {String} [max] -
     * @property {String} [min] -
     * @property {String} [step] -
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
            max: { type: String },
            min: { type: String },
            step: { type: String },
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
            
            ${this.label?html`<div class="md-month-field__label">${this.label}</div>`:nothing}
            <div class="md-month-field__container">
                ${this.leadingIcon?html`<md-icon class="md-month-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-month-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-month-field__native"
                    type="month"
                    .autocapitalize="${ifDefined(this.autocapitalize)}"    
                    .autocomplete="${ifDefined(this.autocomplete)}"
                    .disabled="${ifDefined(this.disabled)}"
                    .form="${ifDefined(this.form)}"
                    .list="${ifDefined(this.list)}"
                    .name="${ifDefined(this.name)}"
                    .readonly="${ifDefined(this.readonly)}"
                    .required="${ifDefined(this.required)}"
                    .type="${ifDefined(this.type)}"
                    .value="${ifDefined(this.value)}"
                    .max="${ifDefined(this.max)}"
                    .min="${ifDefined(this.min)}"
                    .step="${ifDefined(this.step)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleMonthFieldNativeFocus}"
                    @blur="${this.handleMonthFieldNativeBlur}"
                    @input="${this.handleMonthFieldNativeInput}"
                    @invalid="${this.handleMonthFieldNativeInvalid}"
                    @reset="${this.handleMonthFieldNativeReset}"
                    @click="${this.handleMonthFieldNativeClick}"
                />
                ${this.trailingMeta?html`<div class="md-month-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-month-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-month-field__icon">error</md-icon>`:nothing}
                <div class="md-month-field__actions">
                    ${this.trailingActions?.map(action => html`
                        <md-icon-button @click="${this.handleMonthFieldNativeActionClick}" class="md-month-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                    `)}
                    <md-icon-button @click="${this.handleMonthFieldNativeActionCalendarClockClick}" class="md-month-field__action" .icon="${"calendar_month"}"></md-icon-button>
                </div>
            </div>
            ${this.validationMessage||this.text?html`<div class="md-month-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-month-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-month-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-month-field__meta,.md-month-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-month-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-month-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-month-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get colorFieldNative() {
        return this.querySelector(".md-month-field__native");
    }

    /**
     *
     * @fires MDMonthFieldComponent#onMonthFieldNativeActionClick
     */
    handleMonthFieldNativeActionClick(event) {
        this.emit("onMonthFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDMonthFieldComponent#onMonthFieldNativeActionCalendarClockClick
     */
    handleMonthFieldNativeActionCalendarClockClick(event) {
        this.handleColorPicker();

        this.emit("onMonthFieldNativeActionCalendarClockClick", event);
    }

    /**
     *
     */
    handleColorPicker() {
        this.monthFieldPicker = document.createElement("md-month-picker");
        this.parentElement.insertBefore(this.monthFieldPicker, this.nextElementSibling);
        if (this.value) this.monthFieldPicker.value = this.value;

        const callback = () => {
            this.monthFieldPicker.removeEventListener("onMonthPickerChange", this.handleMonthFieldPickerChange);
            this.monthFieldPicker.removeEventListener("onMonthPickerButtonCancelClick", this.handleMonthFieldPickerButtonCancelClick);
            this.monthFieldPicker.removeEventListener("onMonthPickerButtonOkClick", this.handleMonthFieldPickerButtonOkClick);
            this.monthFieldPicker.removeEventListener("onMonthPickerClose", callback);
            this.monthFieldPicker.remove();
        };

        this.handleMonthFieldPickerChange = this.handleMonthFieldPickerChange.bind(this);
        this.handleMonthFieldPickerButtonCancelClick = this.handleMonthFieldPickerButtonCancelClick.bind(this);
        this.handleMonthFieldPickerButtonOkClick = this.handleMonthFieldPickerButtonOkClick.bind(this);

        this.monthFieldPicker.addEventListener("onMonthPickerClose", callback);
        this.monthFieldPicker.addEventListener("onMonthPickerChange", this.handleMonthFieldPickerChange);
        this.monthFieldPicker.addEventListener("onMonthPickerButtonCancelClick", this.handleMonthFieldPickerButtonCancelClick);
        this.monthFieldPicker.addEventListener("onMonthPickerButtonOkClick", this.handleMonthFieldPickerButtonOkClick);

        window.requestAnimationFrame(() => {
            this.monthFieldPicker.show(this);
        });
    }

    /**
     *
     */
    handleMonthFieldPickerChange(event) {
        this.colorFieldNative.value = [this.monthFieldPicker.selected.getFullYear(), ("" + (this.monthFieldPicker.selected.getMonth() + 1)).padStart(2, "0")].join("-");
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
    }

    /**
     *
     */
    handleMonthFieldPickerButtonCancelClick(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.monthFieldPicker.close();
    }

    /**
     *
     */
    handleMonthFieldPickerButtonOkClick(event) {
        this.monthFieldPicker.close();
    }

    /**
     *
     * @fires MDMonthFieldComponent#onMonthFieldNativeFocus
     */
    handleMonthFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onMonthFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDMonthFieldComponent#onMonthFieldNativeBlur
     */
    handleMonthFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onMonthFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDMonthFieldComponent#onMonthFieldNativeInput
     */
    handleMonthFieldNativeInput(event) {
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onMonthFieldNativeInput", event);
    }

    /**
     *
     * @fires MDMonthFieldComponent#onMonthFieldNativeInvalid
     */
    handleMonthFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onMonthFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDMonthFieldComponent#onMonthFieldNativeReset
     */
    handleMonthFieldNativeReset(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onMonthFieldNativeReset", event);
    }

    /**
     *
     * @fires MDMonthFieldComponent#onMonthFieldNativeClick
     */
    handleMonthFieldNativeClick(event) {
        event.preventDefault();

        this.emit("onMonthFieldNativeClick", event);
    }
}

customElements.define("md-month-field", MDMonthFieldComponent);

export { MDMonthFieldComponent };
