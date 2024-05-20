import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDSearchField extends MDElement {
    static get properties() {
        return {
            label: { type: String },
            name: { type: String },
            placeholder: { type: String },
            required: { type: Boolean },
            readOnly: { type: Boolean },
            value: { type: String },
            defaultValue: { type: String },
            ui: { type: String },
            text: { type: String },
            validationMessage: { type: String },
            error: { type: Boolean },
        };
    }

    get searchFieldNative() {
        return this.querySelector(".md-search-field__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-search-field__label">${this.label}</div>
            `:nothing}
            <div class="md-search-field__container">
                <input 
                    class="md-search-field__native"
                    type="search"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    autocomplete="off"
                    @focus="${this.handleSearchFieldNativeFocus}"
                    @blur="${this.handleSearchFieldNativeBlur}"
                    @input="${this.handleSearchFieldNativeInput}"
                    @search="${this.handleSearchFieldNativeSearch}"
                    @invalid="${this.handleSearchFieldNativeInvalid}"
                    @reset="${this.handleSearchFieldNativeReset}"
                >
                <div class="md-search-field__actions">${this.value?html`<md-icon-button class="md-search-field__action" .icon="${"cancel"}" @click="${this.handleSearchFieldActionClick}"></md-icon-button>`:nothing}${this.error?html`<md-icon class="md-search-field__icon">error</md-icon>`:nothing}</div>
            </div>
            ${this.validationMessage||this.text?html`
                <div class="md-search-field__text">${this.validationMessage||this.text}</div>
            `:nothing}
        `
    }

    handleSearchFieldActionClick(event){
        this.searchFieldNative.value=''
        this.value=this.searchFieldNative.value
        this.updateClassPopulated();
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-search-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-search-field");
    }

    firstUpdated(changedProperties) {
        this.updateClassPopulated();
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["filled", "outlined"].forEach((ui) => {
                this.classList.remove("md-search-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-search-field--" + ui);
                });
            }
        }
    }

    handleSearchFieldNativeFocus(event) {
        this.classList.add("md-search-field--focus");
        this.emit("onSearchFieldNativeFocus", event);
    }

    handleSearchFieldNativeBlur(event) {
        this.classList.remove("md-search-field--focus");
        this.emit("onSearchFieldNativeBlur", event);
    }

    handleSearchFieldNativeInput(event) {
        this.value=this.searchFieldNative.value
        this.updateClassPopulated();
        this.updateClassError();
        this.emit("onSearchFieldNativeInput", event);
    }

    handleSearchFieldNativeSearch(event) {
        this.emit("onSearchFieldNativeSearch", event);
    }

    handleSearchFieldNativeInvalid(event) {
        event.preventDefault();
        this.updateClassError();
        this.emit("onSearchFieldNativeInvalid", event);
    }

    handleSearchFieldNativeReset(event) {
        this.resetClassError();
        this.resetClassPopulated();
        this.emit("onSearchFieldNativeReset", event);
    }

    updateClassPopulated() {
        if (this.searchFieldNative.value) {
            this.classList.add("md-search-field--populated");
        } else {
            this.classList.remove("md-search-field--populated");
        }
    }

    updateClassError() {
        this.error = !this.searchFieldNative.validity.valid;
        this.validationMessage = this.searchFieldNative.validationMessage;

        if (this.error) {
            this.classList.add("md-search-field--error");
        } else {
            this.classList.remove("md-search-field--error");
        }
    }

    resetClassPopulated() {
        this.searchFieldNative.value = this.searchFieldNative.defaultValue;
        this.updateClassPopulated();
    }

    resetClassError() {
        this.error = false;
        this.validationMessage = undefined;
        this.classList.remove("md-search-field--error");
    }
}

customElements.define("md-search-field", MDSearchField);

export { MDSearchField };
