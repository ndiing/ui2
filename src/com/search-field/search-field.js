import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

class MDSearchFieldComponent extends MDElement {
    static get properties() {
        return {
            autocomplete: { type: String },
            disabled: { type: Boolean },
            form: { type: String },
            name: { type: String },
            readonly: { type: Boolean },
            required: { type: Boolean },
            value: { type: String },
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

    render() {
        /* prettier-ignore */
        return html`
            ${this.label?html`<div class="md-search-field__label">${this.label}</div>`:nothing}
            <div class="md-search-field__container">
                ${this.leadingIcon?html`<md-icon class="md-search-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                ${this.leadingMeta?html`<div class="md-search-field__meta">${this.leadingMeta}</div>`:nothing}
                <input
                    class="md-search-field__native"
                    .type="${"search"}"
                    .autocomplete="${ifDefined(this.autocomplete)}"
                    .disabled="${ifDefined(this.disabled)}"
                    .form="${ifDefined(this.form)}"
                    .name="${ifDefined(this.name)}"
                    .readonly="${ifDefined(this.readonly)}"
                    .required="${ifDefined(this.required)}"
                    .value="${ifDefined(this.value)}"
                    .maxlength="${ifDefined(this.maxlength)}"
                    .minlength="${ifDefined(this.minlength)}"
                    .pattern="${ifDefined(this.pattern)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .size="${ifDefined(this.size)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleSearchFieldNativeFocus}"
                    @blur="${this.handleSearchFieldNativeBlur}"
                    @input="${this.handleSearchFieldNativeInput}"
                    @invalid="${this.handleSearchFieldNativeInvalid}"
                    @reset="${this.handleSearchFieldNativeReset}"
                />
                ${this.trailingMeta?html`<div class="md-search-field__meta">${this.trailingMeta}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-search-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                ${this.invalid?html`<md-icon class="md-search-field__icon">error</md-icon>`:nothing}
                <div class="md-search-field__actions">
                    ${this.trailingActions?.map(action => html`
                        <md-icon-button @click="${this.handleSearchFieldNativeActionClick}" class="md-search-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                    `)}
                    ${this.populated?html`<md-icon-button @click="${this.handleSearchFieldNativeActionCancelClick}" class="md-search-field__action" .icon="${"cancel"}"></md-icon-button>`:nothing}
                </div>
            </div>
            ${this.validationMessage||this.text?html`<div class="md-search-field__text">${this.validationMessage||this.text}</div>`:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-search-field");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-search-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-search-field__meta,.md-search-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-search-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-search-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-search-field--" + ui);
                });
            }
        }
    }

    get searchFieldNative() {
        return this.querySelector(".md-search-field__native");
    }

    handleSearchFieldNativeActionClick(event) {
        this.emit("onSearchFieldNativeActionClick", event);
    }

    handleSearchFieldNativeActionCancelClick(event) {
        this.searchFieldNative.value = "";
        this.value = this.searchFieldNative.value;
        this.populated = !!this.value;

        this.emit("onSearchFieldNativeActionCancelClick", event);
    }

    handleSearchFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onSearchFieldNativeFocus", event);
    }

    handleSearchFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onSearchFieldNativeBlur", event);
    }

    handleSearchFieldNativeInput(event) {
        this.value = this.searchFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.searchFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onSearchFieldNativeInput", event);
    }

    handleSearchFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.searchFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onSearchFieldNativeInvalid", event);
    }

    handleSearchFieldNativeReset(event) {
        this.searchFieldNative.value = this.defaultValue;
        this.value = this.searchFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onSearchFieldNativeReset", event);
    }
}

customElements.define("md-search-field", MDSearchFieldComponent);

export { MDSearchFieldComponent };
