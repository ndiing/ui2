import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDSearchFieldComponent extends MDElement {
    /**
     *
     * @property {String} [autocomplete] -
     * @property {Boolean} [disabled] -
     * @property {String} [form] -
     * @property {String} [name] -
     * @property {Boolean} [readonly] -
     * @property {Boolean} [required] -
     * @property {String} [value] -
     * @property {Number} [maxlength] -
     * @property {Number} [minlength] -
     * @property {String} [pattern] -
     * @property {String} [placeholder] -
     * @property {Number} [size] -
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
            name: { type: String },
            placeholder: { type: String },
            maxlength: { type: Number },
            minlength: { type: Number },
            readonly: { type: Boolean },
            disabled: { type: Boolean },
            required: { type: Boolean },
            pattern: { type: String },
            autocomplete: { type: String },
            autofocus: { type: Boolean },
            list: { type: String },
            spellcheck: { type: Boolean },
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
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <label class="md-search-field__a11y">

                ${this.label?html`<div class="md-search-field__label">${this.label}</div>`:nothing}
                <div class="md-search-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-search-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-search-field__meta">${this.leadingMeta}</div>`:nothing}
                    <input
                        class="md-search-field__native"
                        .type="${"search"}"
                        .name="${ifDefined(this.name)}"
                        .placeholder="${ifDefined(this.placeholder)}"
                        .maxlength="${ifDefined(this.maxlength)}"
                        .minlength="${ifDefined(this.minlength)}"
                        .readonly="${ifDefined(this.readonly)}"
                        .disabled="${ifDefined(this.disabled)}"
                        .required="${ifDefined(this.required)}"
                        .pattern="${ifDefined(this.pattern)}"
                        .autocomplete="${ifDefined(this.autocomplete)}"
                        .autofocus="${ifDefined(this.autofocus)}"
                        .list="${ifDefined(this.list)}"
                        .spellcheck="${ifDefined(this.spellcheck)}"
                        .value="${ifDefined(this.value)}"
                        .defaultValue="${ifDefined(this.defaultValue)}"
                        @focus="${this.handleSearchFieldNativeFocus}"
                        @blur="${this.handleSearchFieldNativeBlur}"
                        @input="${this.handleSearchFieldNativeInput}"
                        @search="${this.handleSearchFieldNativeSearch}"
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
            </label>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-search-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-search-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-search-field__meta,.md-search-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-search-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-search-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-search-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get searchFieldNative() {
        return this.querySelector(".md-search-field__native");
    }

    /**
     *
     * @fires MDSearchFieldComponent#onSearchFieldNativeActionClick
     */
    handleSearchFieldNativeActionClick(event) {
        this.emit("onSearchFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDSearchFieldComponent#onSearchFieldNativeActionCancelClick
     */
    handleSearchFieldNativeActionCancelClick(event) {
        this.searchFieldNative.value = "";
        this.value = this.searchFieldNative.value;
        this.populated = !!this.value;
        this.searchFieldNative.dispatchEvent(
            new CustomEvent("search", {
                bubbles: true,
                cancelable: true,
            }),
        );
        this.emit("onSearchFieldNativeActionCancelClick", event);
    }

    /**
     *
     * @fires MDSearchFieldComponent#onSearchFieldNativeFocus
     */
    handleSearchFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onSearchFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDSearchFieldComponent#onSearchFieldNativeBlur
     */
    handleSearchFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onSearchFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDSearchFieldComponent#onSearchFieldNativeInput
     */
    handleSearchFieldNativeInput(event) {
        this.value = this.searchFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.searchFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onSearchFieldNativeInput", event);
    }

    /**
     *
     * @fires MDSearchFieldComponent#onSearchFieldNativeSearch
     */
    handleSearchFieldNativeSearch(event) {
        this.emit("onSearchFieldNativeSearch", event);
    }

    /**
     *
     * @fires MDSearchFieldComponent#onSearchFieldNativeInvalid
     */
    handleSearchFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.searchFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onSearchFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDSearchFieldComponent#onSearchFieldNativeReset
     */
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
