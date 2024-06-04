import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDSelectFieldComponent extends MDElement {
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
            name: { type: String },
            size: { type: Number },
            multiple: { type: Boolean },
            disabled: { type: Boolean },
            required: { type: Boolean },
            autofocus: { type: Boolean },
            autocomplete: { type: String },
            spellcheck: { type: Boolean },
            value: { type: String },
            defaultValue: { type: String },

            options: { type: Array },
            // selectedOptions: { type: Array },
            // selectedIndex: { type: Number },

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
            <label class="md-select-field__a11y">

                ${this.label?html`<div class="md-select-field__label">${this.label}</div>`:nothing}
                <div class="md-select-field__container">
                    ${this.leadingIcon?html`<md-icon class="md-select-field__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${this.leadingMeta?html`<div class="md-select-field__meta">${this.leadingMeta}</div>`:nothing}
                    <input
                        class="md-select-field__native"
                        type="text"
                        .name="${ifDefined(this.name)}"
                        .size="${ifDefined(this.size)}"
                        .multiple="${ifDefined(this.multiple)}"
                        .disabled="${ifDefined(this.disabled)}"
                        .required="${ifDefined(this.required)}"
                        .autofocus="${ifDefined(this.autofocus)}"
                        .autocomplete="${ifDefined(this.autocomplete)}"
                        .spellcheck="${ifDefined(this.spellcheck)}"
                        .value="${this.options[this.selectedIndex].label}"
                        .defaultValue="${ifDefined(this.defaultValue)}"
                        @focus="${this.handleSelectFieldNativeFocus}"
                        @blur="${this.handleSelectFieldNativeBlur}"
                        @input="${this.handleSelectFieldNativeInput}"
                        @invalid="${this.handleSelectFieldNativeInvalid}"
                        @reset="${this.handleSelectFieldNativeReset}"
                        @click="${this.handleSelectFieldNativeClick}"
                    />
                    ${this.trailingMeta?html`<div class="md-select-field__meta">${this.trailingMeta}</div>`:nothing}
                    ${this.trailingIcon?html`<md-icon class="md-select-field__icon">${this.trailingIcon}</md-icon>`:nothing}
                    ${this.invalid?html`<md-icon class="md-select-field__icon">error</md-icon>`:nothing}
                    <div class="md-select-field__actions">
                        ${this.trailingActions?.map(action => html`
                            <md-icon-button @click="${this.handleSelectFieldNativeActionClick}" class="md-select-field__action" .icon="${ifDefined(action?.icon??action)}"></md-icon-button>
                        `)}
                        <md-icon-button @click="${this.handleSelectFieldNativeActionKeyboardArrowDownClick}" class="md-select-field__action" .icon="${"keyboard_arrow_down"}"></md-icon-button>
                    </div>
                </div>
                ${this.validationMessage||this.text?html`<div class="md-select-field__text">${this.validationMessage||this.text}</div>`:nothing}
            </label>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-select-field");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-select-field");
        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-select-field__meta,.md-select-field__native")?.offsetLeft;
        if (offsetLeft) {
            this.style.setProperty("--md-select-field-offset-left", offsetLeft + "px");
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
                this.classList.remove("md-select-field--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-select-field--" + ui);
                });
            }
        }
    }

    /**
     *
     */
    get selectFieldNative() {
        return this.querySelector(".md-select-field__native");
    }

    get selectedOptions() {
        return this.options.filter((option) => option.selected);
    }
    get selectedIndex() {
        return this.options.findIndex((option) => option.selected);
    }

    /**
     *
     * @fires MDSelectFieldComponent#onSelectFieldNativeActionClick
     */
    handleSelectFieldNativeActionClick(event) {
        this.emit("onSelectFieldNativeActionClick", event);
    }

    /**
     *
     * @fires MDSelectFieldComponent#onSelectFieldNativeActionKeyboardArrowDownClick
     */
    handleSelectFieldNativeActionKeyboardArrowDownClick(event) {
        this.handleMenu();

        this.emit("onSelectFieldNativeActionKeyboardArrowDownClick", event);
    }

    /**
     *
     */
    handleMenu() {
        this.menu = document.createElement("md-menu");
        this.parentElement.insertBefore(this.menu, this.nextElementSibling);
        this.menu.singleSelection = true;
        this.menu.list = this.options;

        const callback = () => {
            this.menu.removeEventListener("onMenuClose", callback);
            this.menu.removeEventListener("onListItemClick", this.handleListItemClick);
            this.menu.remove();
        };

        this.handleListItemClick = this.handleListItemClick.bind(this);

        this.menu.addEventListener("onMenuClose", callback);
        this.menu.addEventListener("onListItemClick", this.handleListItemClick);

        window.requestAnimationFrame(() => {
            this.menu.show(this);
        });
    }

    /**
     *
     * @fires MDSelectFieldComponent#onListItemClick
     */
    handleListItemClick(event) {
        this.requestUpdate();
        this.emit("onListItemClick", event);
    }

    /**
     *
     * @fires MDSelectFieldComponent#onSelectFieldNativeFocus
     */
    handleSelectFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onSelectFieldNativeFocus", event);
    }

    /**
     *
     * @fires MDSelectFieldComponent#onSelectFieldNativeBlur
     */
    handleSelectFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onSelectFieldNativeBlur", event);
    }

    /**
     *
     * @fires MDSelectFieldComponent#onSelectFieldNativeInput
     */
    handleSelectFieldNativeInput(event) {
        this.value = this.selectFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = this.selectFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onSelectFieldNativeInput", event);
    }

    /**
     *
     * @fires MDSelectFieldComponent#onSelectFieldNativeInvalid
     */
    handleSelectFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.selectFieldNative.validationMessage;
        this.invalid = !!this.validationMessage;
        this.emit("onSelectFieldNativeInvalid", event);
    }

    /**
     *
     * @fires MDSelectFieldComponent#onSelectFieldNativeReset
     */
    handleSelectFieldNativeReset(event) {
        this.selectFieldNative.value = this.defaultValue;
        this.value = this.selectFieldNative.value;
        this.populated = !!this.value;
        this.validationMessage = "";
        this.invalid = !!this.validationMessage;

        this.emit("onSelectFieldNativeReset", event);
    }

    /**
     *
     * @fires MDSelectFieldComponent#onSelectFieldNativeClick
     */
    handleSelectFieldNativeClick(event) {
        event.preventDefault();

        this.emit("onSelectFieldNativeClick", event);
    }
}

customElements.define("md-select-field", MDSelectFieldComponent);

export { MDSelectFieldComponent };
