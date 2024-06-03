import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

class MDWeekFieldComponent extends MDElement {
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
            
            ${this.label?html`<div class="md-week-field__label">${this.label}</div>`:nothing}
            <div class="md-week-field__container">
                ${this.leadingIcon?html`<md-icon class="md-week-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-week-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-week-field__native"
                    type="week"
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
                    @focus="${this.handleWeekFieldNativeFocus}"
                    @blur="${this.handleWeekFieldNativeBlur}"
                    @input="${this.handleWeekFieldNativeInput}"
                    @invalid="${this.handleWeekFieldNativeInvalid}"
                    @reset="${this.handleWeekFieldNativeReset}"
                    @click="${this.handleWeekFieldNativeClick}"
                />
                ${this.trailingMeta?html`<div class="md-week-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-week-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-week-field__icon">error</md-icon>`:nothing}
                <div class="md-week-field__actions">
                    ${this.trailingActions?.map(action => html`
                        <md-icon-button @click="${this.handleWeekFieldNativeActionClick}" class="md-week-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                    `)}
                    <md-icon-button @click="${this.handleWeekFieldNativeActionCalendarClockClick}" class="md-week-field__action" .icon="${"date_range"}"></md-icon-button>
                </div>
            </div>
            ${this.validationMessage||this.text?html`<div class="md-week-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-field");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-week-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-week-field__meta,.md-week-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-week-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-week-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-week-field--" + ui);
                });
            }
        }
    }

    get colorFieldNative() {
        return this.querySelector(".md-week-field__native");
    }

    handleWeekFieldNativeActionClick(event) {
        this.emit("onWeekFieldNativeActionClick", event);
    }

    handleWeekFieldNativeActionCalendarClockClick(event) {
        this.handleColorPicker();

        this.emit("onWeekFieldNativeActionCalendarClockClick", event);
    }

    handleColorPicker() {
        this.weekFieldPicker = document.createElement("md-week-picker");
        this.parentElement.insertBefore(this.weekFieldPicker, this.nextElementSibling);
        if (this.value) this.weekFieldPicker.value = this.value;

        const callback = () => {
            this.weekFieldPicker.removeEventListener("onWeekPickerChange", this.handleWeekFieldPickerChange);
            this.weekFieldPicker.removeEventListener("onWeekPickerButtonCancelClick", this.handleWeekFieldPickerButtonCancelClick);
            this.weekFieldPicker.removeEventListener("onWeekPickerButtonOkClick", this.handleWeekFieldPickerButtonOkClick);
            this.weekFieldPicker.removeEventListener("onWeekPickerClose", callback);
            this.weekFieldPicker.remove();
        };

        this.handleWeekFieldPickerChange = this.handleWeekFieldPickerChange.bind(this);
        this.handleWeekFieldPickerButtonCancelClick = this.handleWeekFieldPickerButtonCancelClick.bind(this);
        this.handleWeekFieldPickerButtonOkClick = this.handleWeekFieldPickerButtonOkClick.bind(this);

        this.weekFieldPicker.addEventListener("onWeekPickerClose", callback);
        this.weekFieldPicker.addEventListener("onWeekPickerChange", this.handleWeekFieldPickerChange);
        this.weekFieldPicker.addEventListener("onWeekPickerButtonCancelClick", this.handleWeekFieldPickerButtonCancelClick);
        this.weekFieldPicker.addEventListener("onWeekPickerButtonOkClick", this.handleWeekFieldPickerButtonOkClick);

        window.requestAnimationFrame(() => {
            this.weekFieldPicker.show(this);
        });
    }

    handleWeekFieldPickerChange(event) {
        this.colorFieldNative.value = [this.weekFieldPicker.selected.getFullYear(), ("" + this.weekFieldPicker.selected.getWeek()).padStart(2, "0")].join("-W");
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
    }

    handleWeekFieldPickerButtonCancelClick(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.weekFieldPicker.close();
    }

    handleWeekFieldPickerButtonOkClick(event) {
        this.weekFieldPicker.close();
    }

    handleWeekFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onWeekFieldNativeFocus", event);
    }

    handleWeekFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onWeekFieldNativeBlur", event);
    }

    handleWeekFieldNativeInput(event) {
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onWeekFieldNativeInput", event);
    }

    handleWeekFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onWeekFieldNativeInvalid", event);
    }

    handleWeekFieldNativeReset(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onWeekFieldNativeReset", event);
    }

    handleWeekFieldNativeClick(event) {
        event.preventDefault();

        this.emit("onWeekFieldNativeClick", event);
    }
}

customElements.define("md-week-field", MDWeekFieldComponent);

export { MDWeekFieldComponent };
