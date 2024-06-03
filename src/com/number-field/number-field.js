import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

class MDNumberFieldComponent extends MDElement {
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
            value: { type: Number },
            max: { type: Number },
            min: { type: Number },
            placeholder: { type: String },
            step: { type: Number },
            defaultValue: { type: Number },

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
            ${this.label?html`<div class="md-number-field__label">${this.label}</div>`:nothing}
            <div class="md-number-field__container">
                ${this.leadingIcon?html`<md-icon class="md-number-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-number-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-number-field__native"
                    type="number"
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
                    .placeholder="${ifDefined(this.placeholder)}"
                    .step="${ifDefined(this.step)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleNumberFieldNativeFocus}"
                    @blur="${this.handleNumberFieldNativeBlur}"
                    @input="${this.handleNumberFieldNativeInput}"
                    @invalid="${this.handleNumberFieldNativeInvalid}"
                    @reset="${this.handleNumberFieldNativeReset}"
                />
                ${this.trailingMeta?html`<div class="md-number-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-number-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-number-field__icon">error</md-icon>`:nothing}
                <div class="md-number-field__actions">
                    ${this.trailingActions?.map(action => html`
                        <md-icon-button @click="${this.handleNumberFieldNativeActionClick}" class="md-number-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                    `)}
                    <md-icon-button @click="${this.handleNumberFieldNativeActionStepDownClick}" class="md-number-field__action" .icon="${"remove"}"></md-icon-button>
                    <md-icon-button @click="${this.handleNumberFieldNativeActionStepUpClick}" class="md-number-field__action" .icon="${"add"}"></md-icon-button>
                </div>
            </div>
            ${this.validationMessage||this.text?html`<div class="md-number-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-number-field");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-number-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-number-field__meta,.md-number-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-number-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-number-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-number-field--" + ui);
                });
            }
        }
    }

    get numberFieldNative() {
        return this.querySelector(".md-number-field__native");
    }

    handleNumberFieldNativeActionClick(event) {
        this.emit("onNumberFieldNativeActionClick", event);
    }

    handleNumberFieldNativeActionStepDownClick(event) {
        this.numberFieldNative.stepDown();

        this.numberFieldNative.dispatchEvent(new CustomEvent("input", {}));

        this.emit("onNumberFieldNativeActionStepDownClick", event);
    }

    handleNumberFieldNativeActionStepUpClick(event) {
        this.numberFieldNative.stepUp();

        this.numberFieldNative.dispatchEvent(new CustomEvent("input", {}));

        this.emit("onNumberFieldNativeActionStepUpClick", event);
    }

    handleNumberFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onNumberFieldNativeFocus", event);
    }

    handleNumberFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onNumberFieldNativeBlur", event);
    }

    handleNumberFieldNativeInput(event) {
        this.value = this.numberFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.numberFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onNumberFieldNativeInput", event);
    }

    handleNumberFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.numberFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onNumberFieldNativeInvalid", event);
    }

    handleNumberFieldNativeReset(event) {
        this.numberFieldNative.value = this.defaultValue;
        this.value = this.numberFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onNumberFieldNativeReset", event);
    }
}

customElements.define("md-number-field", MDNumberFieldComponent);

export { MDNumberFieldComponent };
