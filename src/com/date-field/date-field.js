import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDDateFieldComponent extends MDElement {
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
            <label class="md-date-field__a11y">

                ${this.label?html`<div class="md-date-field__label">${this.label}</div>`:nothing}
                <div class="md-date-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-date-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-date-field__meta">${this.leadingMeta}</div>`:nothing}
                    <input
                        class="md-date-field__native"
                        type="date"
                        .autocapitalize="${ifDefined(this.autocapitalize)}"    
                        .autocomplete="${ifDefined(this.autocomplete??"off")}"
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
                        @focus="${this.handleDateFieldNativeFocus}"
                        @blur="${this.handleDateFieldNativeBlur}"
                        @input="${this.handleDateFieldNativeInput}"
                        @invalid="${this.handleDateFieldNativeInvalid}"
                        @reset="${this.handleDateFieldNativeReset}"
                        @click="${this.handleDateFieldNativeClick}"
                    />
                    ${this.trailingMeta?html`<div class="md-date-field__meta">${this.trailingMeta}</div>`:nothing}
                    ${this.trailingIcon?html`<md-icon class="md-date-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                    ${this.invalid?html`<md-icon class="md-date-field__icon">error</md-icon>`:nothing}
                    <div class="md-date-field__actions">
                        ${this.trailingActions?.map(action => html`
                            <md-icon-button @click="${this.handleDateFieldNativeActionClick}" class="md-date-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                        `)}
                        <md-icon-button @click="${this.handleDateFieldNativeActionCalendarClockClick}" class="md-date-field__action" .icon="${"today"}"></md-icon-button>
                    </div>
                </div>
                ${this.validationMessage||this.text?html`<div class="md-date-field__text">${this.validationMessage||this.text}</div>`:nothing}
            </label>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-date-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-date-field__meta,.md-date-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-date-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-date-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-date-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get dateFieldNative() {
        return this.querySelector(".md-date-field__native");
    }

    /**
     *
     * @fires MDDateFieldComponent#onDateFieldNativeActionClick
     */
    handleDateFieldNativeActionClick(event) {
        this.emit("onDateFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDDateFieldComponent#onDateFieldNativeActionCalendarClockClick
     */
    handleDateFieldNativeActionCalendarClockClick(event) {
        this.handleDatePicker();

        this.emit("onDateFieldNativeActionCalendarClockClick", event);
    }

    /**
     *
     */
    handleDatePicker() {
        this.datePicker = document.createElement("md-date-picker");
        this.parentElement.insertBefore(this.datePicker, this.nextElementSibling);
        if (this.value) this.datePicker.value = this.value;

        const callback = () => {
            this.datePicker.removeEventListener("onDatePickerChange", this.handleDateFieldPickerChange);
            this.datePicker.removeEventListener("onDatePickerButtonCancelClick", this.handleDateFieldPickerButtonCancelClick);
            this.datePicker.removeEventListener("onDatePickerButtonOkClick", this.handleDateFieldPickerButtonOkClick);
            this.datePicker.removeEventListener("onDatePickerClose", callback);
            this.datePicker.remove();
        };

        this.handleDateFieldPickerChange = this.handleDateFieldPickerChange.bind(this);
        this.handleDateFieldPickerButtonCancelClick = this.handleDateFieldPickerButtonCancelClick.bind(this);
        this.handleDateFieldPickerButtonOkClick = this.handleDateFieldPickerButtonOkClick.bind(this);

        this.datePicker.addEventListener("onDatePickerClose", callback);
        this.datePicker.addEventListener("onDatePickerChange", this.handleDateFieldPickerChange);
        this.datePicker.addEventListener("onDatePickerButtonCancelClick", this.handleDateFieldPickerButtonCancelClick);
        this.datePicker.addEventListener("onDatePickerButtonOkClick", this.handleDateFieldPickerButtonOkClick);

        window.requestAnimationFrame(() => {
            this.datePicker.show(this);
        });
    }

    /**
     *
     */
    handleDateFieldPickerChange(event) {
        this.dateFieldNative.value = [this.datePicker.selected.getFullYear(), ("" + (this.datePicker.selected.getMonth() + 1)).padStart(2, "0"), ("" + this.datePicker.selected.getDate()).padStart(2, "0")].join("-");
        this.value = this.dateFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.dateFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
    }

    /**
     *
     */
    handleDateFieldPickerButtonCancelClick(event) {
        this.dateFieldNative.value = this.defaultValue;
        this.value = this.dateFieldNative.value;
        this.datePicker.close();
    }

    /**
     *
     */
    handleDateFieldPickerButtonOkClick(event) {
        this.datePicker.close();
    }

    /**
     *
     * @fires MDDateFieldComponent#onDateFieldNativeFocus
     */
    handleDateFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onDateFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDDateFieldComponent#onDateFieldNativeBlur
     */
    handleDateFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onDateFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDDateFieldComponent#onDateFieldNativeInput
     */
    handleDateFieldNativeInput(event) {
        this.value = this.dateFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.dateFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onDateFieldNativeInput", event);
    }

    /**
     *
     * @fires MDDateFieldComponent#onDateFieldNativeInvalid
     */
    handleDateFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.dateFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onDateFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDDateFieldComponent#onDateFieldNativeReset
     */
    handleDateFieldNativeReset(event) {
        this.dateFieldNative.value = this.defaultValue;
        this.value = this.dateFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onDateFieldNativeReset", event);
    }

    /**
     *
     * @fires MDDateFieldComponent#onDateFieldNativeClick
     */
    handleDateFieldNativeClick(event) {
        event.preventDefault();

        this.emit("onDateFieldNativeClick", event);
    }
}

customElements.define("md-date-field", MDDateFieldComponent);

export { MDDateFieldComponent };
