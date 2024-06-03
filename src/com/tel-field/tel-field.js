import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTelFieldComponent extends MDElement {
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
            dirname: { type: String },
            maxlength: { type: Number },
            minlength: { type: Number },
            pattern: { type: String },
            placeholder: { type: String },
            size: { type: Number },
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
            ${this.label?html`<div class="md-tel-field__label">${this.label}</div>`:nothing}
            <div class="md-tel-field__container">
                ${this.leadingIcon?html`<md-icon class="md-tel-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-tel-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-tel-field__native"
                    type="tel"
                    .autocapitalize="${ifDefined(this.autocapitalize)}"
                    .autocomplete="${ifDefined(this.autocomplete??'off')}"
                    .disabled="${ifDefined(this.disabled)}"
                    .form="${ifDefined(this.form)}"
                    .list="${ifDefined(this.list)}"
                    .name="${ifDefined(this.name)}"
                    .readonly="${ifDefined(this.readonly)}"
                    .required="${ifDefined(this.required)}"
                    .type="${ifDefined(this.type)}"
                    .value="${ifDefined(this.value)}"
                    .dirname="${ifDefined(this.dirname)}"
                    .maxlength="${ifDefined(this.maxlength)}"
                    .minlength="${ifDefined(this.minlength)}"
                    .pattern="${ifDefined(this.pattern)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .size="${ifDefined(this.size)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleTelFieldNativeFocus}"
                    @blur="${this.handleTelFieldNativeBlur}"
                    @input="${this.handleTelFieldNativeInput}"
                    @invalid="${this.handleTelFieldNativeInvalid}"
                    @reset="${this.handleTelFieldNativeReset}"
                />
                ${this.trailingMeta?html`<div class="md-tel-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-tel-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-tel-field__icon">error</md-icon>`:nothing}
                ${this.trailingActions?.length?html`
                    <div class="md-tel-field__actions">
                        ${this.trailingActions.map(action => html`
                            <md-icon-button @click="${this.handleTelFieldNativeActionClick}" class="md-tel-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                        `)}
                    </div>
                `:nothing}
            </div>
            ${this.validationMessage||this.text?html`<div class="md-tel-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tel-field");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tel-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-tel-field__meta,.md-tel-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-tel-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-tel-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-tel-field--" + ui);
                });
            }
        }
    }

    get telFieldNative() {
        return this.querySelector(".md-tel-field__native");
    }

    handleTelFieldNativeActionClick(event) {
        this.emit("onTelFieldNativeActionClick", event);
    }

    handleTelFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onTelFieldNativeFocus", event);
    }

    handleTelFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTelFieldNativeBlur", event);
    }

    handleTelFieldNativeInput(event) {
        this.value = this.telFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.telFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTelFieldNativeInput", event);
    }

    handleTelFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.telFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onTelFieldNativeInvalid", event);
    }

    handleTelFieldNativeReset(event) {
        this.telFieldNative.value = this.defaultValue;
        this.value = this.telFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onTelFieldNativeReset", event);
    }
}

customElements.define("md-tel-field", MDTelFieldComponent);

export { MDTelFieldComponent };
