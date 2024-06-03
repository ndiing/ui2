import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTimeFieldComponent extends MDElement {
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
            
            ${this.label?html`<div class="md-time-field__label">${this.label}</div>`:nothing}
            <div class="md-time-field__container">
                ${this.leadingIcon?html`<md-icon class="md-time-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-time-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-time-field__native"
                    type="time"
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
                    @focus="${this.handleTimeFieldNativeFocus}"
                    @blur="${this.handleTimeFieldNativeBlur}"
                    @input="${this.handleTimeFieldNativeInput}"
                    @invalid="${this.handleTimeFieldNativeInvalid}"
                    @reset="${this.handleTimeFieldNativeReset}"
                    @click="${this.handleTimeFieldNativeClick}"
                />
                ${this.trailingMeta?html`<div class="md-time-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-time-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-time-field__icon">error</md-icon>`:nothing}
                <div class="md-time-field__actions">
                    ${this.trailingActions?.map(action => html`
                        <md-icon-button @click="${this.handleTimeFieldNativeActionClick}" class="md-time-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                    `)}
                    <md-icon-button @click="${this.handleTimeFieldNativeActionCalendarClockClick}" class="md-time-field__action" .icon="${"schedule"}"></md-icon-button>
                </div>
            </div>
            ${this.validationMessage||this.text?html`<div class="md-time-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-field");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-time-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-time-field__meta,.md-time-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-time-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-time-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-time-field--" + ui);
                });
            }
        }
    }

    get colorFieldNative() {
        return this.querySelector(".md-time-field__native");
    }

    handleTimeFieldNativeActionClick(event) {
        this.emit("onTimeFieldNativeActionClick", event);
    }

    handleTimeFieldNativeActionCalendarClockClick(event) {
        // this.colorFieldNative.showPicker()

        this.handleColorPicker();

        this.emit("onTimeFieldNativeActionCalendarClockClick", event);
    }

    handleColorPicker() {
        this.timeFieldPicker = document.createElement("md-time-picker");
        this.parentElement.insertBefore(this.timeFieldPicker, this.nextElementSibling);
        if (this.value) this.timeFieldPicker.value = this.value;

        const callback = () => {
            this.timeFieldPicker.removeEventListener("onTimePickerChange", this.handleTimeFieldPickerChange);
            this.timeFieldPicker.removeEventListener("onTimePickerButtonCancelClick", this.handleTimeFieldPickerButtonCancelClick);
            this.timeFieldPicker.removeEventListener("onTimePickerButtonOkClick", this.handleTimeFieldPickerButtonOkClick);
            this.timeFieldPicker.removeEventListener("onTimePickerClose", callback);
            this.timeFieldPicker.remove();
        };

        this.handleTimeFieldPickerChange = this.handleTimeFieldPickerChange.bind(this);
        this.handleTimeFieldPickerButtonCancelClick = this.handleTimeFieldPickerButtonCancelClick.bind(this);
        this.handleTimeFieldPickerButtonOkClick = this.handleTimeFieldPickerButtonOkClick.bind(this);

        this.timeFieldPicker.addEventListener("onTimePickerClose", callback);
        this.timeFieldPicker.addEventListener("onTimePickerChange", this.handleTimeFieldPickerChange);
        this.timeFieldPicker.addEventListener("onTimePickerButtonCancelClick", this.handleTimeFieldPickerButtonCancelClick);
        this.timeFieldPicker.addEventListener("onTimePickerButtonOkClick", this.handleTimeFieldPickerButtonOkClick);

        window.requestAnimationFrame(() => {
            this.timeFieldPicker.show(this);
        });
    }

    handleTimeFieldPickerChange(event) {
        // console.log(this.timeFieldPicker.selected)
        this.colorFieldNative.value = [("" + this.timeFieldPicker.selected.getHours()).padStart(2, "0"), ("" + this.timeFieldPicker.selected.getMinutes()).padStart(2, "0")].join(":");
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
    }

    handleTimeFieldPickerButtonCancelClick(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.timeFieldPicker.close();
    }

    handleTimeFieldPickerButtonOkClick(event) {
        this.timeFieldPicker.close();
    }

    handleTimeFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onTimeFieldNativeFocus", event);
    }

    handleTimeFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTimeFieldNativeBlur", event);
    }

    handleTimeFieldNativeInput(event) {
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTimeFieldNativeInput", event);
    }

    handleTimeFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.colorFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTimeFieldNativeInvalid", event);
    }

    handleTimeFieldNativeReset(event) {
        this.colorFieldNative.value = this.defaultValue;
        this.value = this.colorFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onTimeFieldNativeReset", event);
    }

    handleTimeFieldNativeClick(event) {
        event.preventDefault();

        // this.handleColorPicker();

        this.emit("onTimeFieldNativeClick", event);
    }
}

customElements.define("md-time-field", MDTimeFieldComponent);

export { MDTimeFieldComponent };
