import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

class MDDatetimeFieldComponent extends MDElement {
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

    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            
            ${this.label?html`<div class="md-datetime-field__label">${this.label}</div>`:nothing}
            <div class="md-datetime-field__container">
                ${this.leadingIcon?html`<md-icon class="md-datetime-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-datetime-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-datetime-field__native"
                    type="datetime-local"
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
                    @focus="${this.handleDatetimeFieldNativeFocus}"
                    @blur="${this.handleDatetimeFieldNativeBlur}"
                    @input="${this.handleDatetimeFieldNativeInput}"
                    @invalid="${this.handleDatetimeFieldNativeInvalid}"
                    @reset="${this.handleDatetimeFieldNativeReset}"
                    @click="${this.handleDatetimeFieldNativeClick}"
                />
                ${this.trailingMeta?html`<div class="md-datetime-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-datetime-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-datetime-field__icon">error</md-icon>`:nothing}
                <div class="md-datetime-field__actions">
                    ${this.trailingActions?.map(action => html`
                        <md-icon-button @click="${this.handleDatetimeFieldNativeActionClick}" class="md-datetime-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                    `)}
                    <md-icon-button @click="${this.handleDatetimeFieldNativeActionCalendarClockClick}" class="md-datetime-field__action" .icon="${"calendar_clock"}"></md-icon-button>
                </div>
            </div>
            ${this.validationMessage||this.text?html`<div class="md-datetime-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-field");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-datetime-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-datetime-field__meta,.md-datetime-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-datetime-field-offset-left", offsetLeft + "px");
        }
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete;
        this.defaultValue = this.value ?? "";
        this.populated = !!this.value;
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["filled", "outlined", "rounded"].forEach((ui) => {
                this.classList.remove("md-datetime-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-datetime-field--" + ui);
                });
            }
        }
    }

    get colorFieldNative() {
        return this.querySelector(".md-datetime-field__native");
    }

    handleDatetimeFieldNativeActionClick(event) {
        this.emit("onDatetimeFieldNativeActionClick", event);
    }

    handleDatetimeFieldNativeActionCalendarClockClick(event) {
        this.handleColorPicker();

        this.emit("onDatetimeFieldNativeActionCalendarClockClick", event);
    }

    handleColorPicker() {
        this.datetimeFieldPicker = document.createElement("md-datetime-picker");
        this.parentElement.insertBefore(this.datetimeFieldPicker, this.nextElementSibling);
        if (this.value) this.datetimeFieldPicker.value = this.value;

        const callback = () => {
            this.datetimeFieldPicker.removeEventListener("onDatetimePickerChange", this.handleDatetimeFieldPickerChange);
            this.datetimeFieldPicker.removeEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimeFieldPickerButtonCancelClick);
            this.datetimeFieldPicker.removeEventListener("onDatetimePickerButtonOkClick", this.handleDatetimeFieldPickerButtonOkClick);
            this.datetimeFieldPicker.removeEventListener("onDatetimePickerClose", callback);
            this.datetimeFieldPicker.remove();
        };

        this.handleDatetimeFieldPickerChange = this.handleDatetimeFieldPickerChange.bind(this);
        this.handleDatetimeFieldPickerButtonCancelClick = this.handleDatetimeFieldPickerButtonCancelClick.bind(this);
        this.handleDatetimeFieldPickerButtonOkClick = this.handleDatetimeFieldPickerButtonOkClick.bind(this);

        this.datetimeFieldPicker.addEventListener("onDatetimePickerClose", callback);
        this.datetimeFieldPicker.addEventListener("onDatetimePickerChange", this.handleDatetimeFieldPickerChange);
        this.datetimeFieldPicker.addEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimeFieldPickerButtonCancelClick);
        this.datetimeFieldPicker.addEventListener("onDatetimePickerButtonOkClick", this.handleDatetimeFieldPickerButtonOkClick);

        window.requestAnimationFrame(() => {
            this.datetimeFieldPicker.show(this);
        });
    }

    handleDatetimeFieldPickerChange(event) {
        this.colorFieldNative.value = [[this.datetimeFieldPicker.selected.getFullYear(), ("" + (this.datetimeFieldPicker.selected.getMonth() + 1)).padStart(2, "0"), ("" + this.datetimeFieldPicker.selected.getDate()).padStart(2, "0")].join("-"), [("" + this.datetimeFieldPicker.selected.getHours()).padStart(2, "0"), ("" + this.datetimeFieldPicker.selected.getMinutes()).padStart(2, "0")].join(":")].join("T");
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
    }

    handleDatetimeFieldPickerButtonCancelClick(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.datetimeFieldPicker.close();
    }

    handleDatetimeFieldPickerButtonOkClick(event) {
        this.datetimeFieldPicker.close();
    }

    handleDatetimeFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onDatetimeFieldNativeFocus", event);
    }

    handleDatetimeFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onDatetimeFieldNativeBlur", event);
    }

    handleDatetimeFieldNativeInput(event) {
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onDatetimeFieldNativeInput", event);
    }

    handleDatetimeFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onDatetimeFieldNativeInvalid", event);
    }

    handleDatetimeFieldNativeReset(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onDatetimeFieldNativeReset", event);
    }

    handleDatetimeFieldNativeClick(event) {
        event.preventDefault();

        this.emit("onDatetimeFieldNativeClick", event);
    }
}

customElements.define("md-datetime-field", MDDatetimeFieldComponent);

export { MDDatetimeFieldComponent };
