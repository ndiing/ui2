import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

class MDDateFieldComponent extends MDElement {
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

    /* prettier-ignore */

    render() {
        return html`
            
            ${this.label?html`<div class="md-date-field__label">${this.label}</div>`:nothing}
            <div class="md-date-field__container">
                ${this.leadingIcon?html`<md-icon class="md-date-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-date-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-date-field__native"
                    type="date"
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
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-field");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-date-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(
            ".md-date-field__meta,.md-date-field__native",
        )?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty(
                "--md-date-field-offset-left",
                offsetLeft + "px",
            );
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
                this.classList.remove("md-date-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-date-field--" + ui);
                });
            }
        }
    }

    get colorFieldNative() {
        return this.querySelector(".md-date-field__native");
    }

    handleDateFieldNativeActionClick(event) {
        this.emit("onDateFieldNativeActionClick", event);
    }

    handleDateFieldNativeActionCalendarClockClick(event) {
        // this.colorFieldNative.showPicker()

        this.handleColorPicker();

        this.emit("onDateFieldNativeActionCalendarClockClick", event);
    }

    handleColorPicker() {
        this.dateFieldPicker = document.createElement("md-date-picker");
        this.parentElement.insertBefore(
            this.dateFieldPicker,
            this.nextElementSibling,
        );
        if (this.value) this.dateFieldPicker.value = this.value;

        const callback = () => {
            this.dateFieldPicker.removeEventListener(
                "onDatePickerChange",
                this.handleDateFieldPickerChange,
            );
            this.dateFieldPicker.removeEventListener(
                "onDatePickerButtonCancelClick",
                this.handleDateFieldPickerButtonCancelClick,
            );
            this.dateFieldPicker.removeEventListener(
                "onDatePickerButtonOkClick",
                this.handleDateFieldPickerButtonOkClick,
            );
            this.dateFieldPicker.removeEventListener(
                "onDatePickerClose",
                callback,
            );
            this.dateFieldPicker.remove();
        };

        this.handleDateFieldPickerChange =
            this.handleDateFieldPickerChange.bind(this);
        this.handleDateFieldPickerButtonCancelClick =
            this.handleDateFieldPickerButtonCancelClick.bind(this);
        this.handleDateFieldPickerButtonOkClick =
            this.handleDateFieldPickerButtonOkClick.bind(this);

        this.dateFieldPicker.addEventListener("onDatePickerClose", callback);
        this.dateFieldPicker.addEventListener(
            "onDatePickerChange",
            this.handleDateFieldPickerChange,
        );
        this.dateFieldPicker.addEventListener(
            "onDatePickerButtonCancelClick",
            this.handleDateFieldPickerButtonCancelClick,
        );
        this.dateFieldPicker.addEventListener(
            "onDatePickerButtonOkClick",
            this.handleDateFieldPickerButtonOkClick,
        );

        window.requestAnimationFrame(() => {
            this.dateFieldPicker.show(this);
        });
    }

    handleDateFieldPickerChange(event) {
        // console.log(this.dateFieldPicker.selected)
        this.colorFieldNative.value = [
            //
            this.dateFieldPicker.selected.getFullYear(),
            ("" + (this.dateFieldPicker.selected.getMonth() + 1)).padStart(
                2,
                "0",
            ),
            ("" + this.dateFieldPicker.selected.getDate()).padStart(2, "0"),
        ].join("-");
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
    }
    handleDateFieldPickerButtonCancelClick(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.dateFieldPicker.close();
    }
    handleDateFieldPickerButtonOkClick(event) {
        this.dateFieldPicker.close();
    }

    handleDateFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onDateFieldNativeFocus", event);
    }
    handleDateFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onDateFieldNativeBlur", event);
    }
    handleDateFieldNativeInput(event) {
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onDateFieldNativeInput", event);
    }
    handleDateFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onDateFieldNativeInvalid", event);
    }
    handleDateFieldNativeReset(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onDateFieldNativeReset", event);
    }
    handleDateFieldNativeClick(event) {
        event.preventDefault();

        // this.handleColorPicker();

        this.emit("onDateFieldNativeClick", event);
    }
}

customElements.define("md-date-field", MDDateFieldComponent);

export { MDDateFieldComponent };
