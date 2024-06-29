import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * Represents a text field component that extends MDComponent.
 * @extends MDComponent
 * @tagname md-text-field
 * @fires MDTextFieldComponent#onTextFieldNativeFocus - Fired when the native input element of the text field receives focus.
 * @fires MDTextFieldComponent#onTextFieldNativeBlur - Fired when the native input element of the text field loses focus.
 * @fires MDTextFieldComponent#onTextFieldNativeInput - Fired when the value of the native input element of the text field changes.
 * @fires MDTextFieldComponent#onTextFieldNativeSearch - Fired when a search is performed in the native input element of the text field.
 * @fires MDTextFieldComponent#onTextFieldNativeInvalid - Fired when the native input element of the text field becomes invalid.
 * @fires MDTextFieldComponent#onTextFieldNativeReset - Fired when the value of the native input element of the text field is reset.
 */
class MDTextFieldComponent extends MDComponent {
    /**
     * @property {String} label - The label text for the text field.
     * @property {String} icon - The icon name for the text field.
     * @property {String} prefix - The prefix text for the text field.
     * @property {String} suffix - The suffix text for the text field.
     * @property {Array} actions - The list of actions associated with the text field.
     * @property {String} text - The additional text content for the text field.
     * @property {String} accept - The file types that the server accepts (only for type="file").
     * @property {String} alt - The alternative text for the image specified by src (only for type="image").
     * @property {String} autocomplete - Hint for form autofill feature.
     * @property {Boolean} autofocus - Indicates whether the text field should automatically get focus when the page loads.
     * @property {Boolean} checked - Indicates whether the input element should be checked (only for type="radio" or type="checkbox").
     * @property {Boolean} defaultChecked - Indicates the default checked state (only for type="radio" or type="checkbox").
     * @property {Boolean} disabled - Indicates whether the input element should be disabled.
     * @property {FileList} files - The list of selected files (only for type="file").
     * @property {Object} form - The form element that the text field is associated with (form owner).
     * @property {String} formAction - The URL where the form data should be submitted (only for type="submit" or type="image").
     * @property {String} formEnctype - The encoding type for form data submission (only for method="post").
     * @property {String} formMethod - The HTTP method for submitting the form.
     * @property {Boolean} formNoValidate - Indicates whether the form should not be validated upon submission.
     * @property {String} formTarget - The browsing context for form submission (name of or keyword for a browsing context).
     * @property {Number} height - The height of the text field (only for type="image").
     * @property {Boolean} indeterminate - Indicates whether a checkbox is in an indeterminate state (only for type="checkbox").
     * @property {Object} list - The list of options that the user can choose from (datalist element).
     * @property {String} max - The maximum value for the input element (only for type="date", type="month", type="week", type="time", or type="datetime-local").
     * @property {Number} maxLength - The maximum number of characters allowed in the input element.
     * @property {String} min - The minimum value for the input element (only for type="date", type="month", type="week", type="time", or type="datetime-local").
     * @property {Number} minLength - The minimum number of characters allowed in the input element.
     * @property {Boolean} multiple - Indicates whether the user can select more than one file (only for type="file").
     * @property {String} name - The name of the input element.
     * @property {String} pattern - The regular expression pattern that the input element's value is checked against.
     * @property {String} placeholder - The placeholder text for the input element.
     * @property {Boolean} readOnly - Indicates whether the input element is read-only.
     * @property {Boolean} required - Indicates whether the input element is required to be filled out.
     * @property {Number} size - The visible width of the input element (in characters).
     * @property {String} src - The URL of the image to display (only for type="image").
     * @property {String} step - The legal number intervals for the input element's value (only for type="number" or type="range").
     * @property {String} type - The type of the input element (e.g., text, password, file, etc.).
     * @property {String} defaultValue - The default value displayed in the input element.
     * @property {String} value - The current value displayed in the input element.
     * @property {Number} width - The width of the text field (only for type="image").
     * @property {String} inputMode - The keyboard input method for the input element.
     * @property {String} selectionDirection - The directionality of the input selection.
     * @property {Number} selectionEnd - The end position of the selected part of the input element's value.
     * @property {Number} selectionStart - The start position of the selected part of the input element's value.
     * @property {String} align - The alignment of the object (only for type="object").
     * @property {String} useMap - The name of a map element that creates an image map (only for type="image").
     * @property {Number} cols - The visible width of the textarea (in characters).
     * @property {Number} rows - The visible number of lines in a textarea.
     * @property {Boolean} spellcheck - Indicates whether spell checking is allowed for the content.
     * @property {String} wrap - Indicates how the textarea is wrapped (soft or hard).
     * @property {Number} length - The number of items in the select element.
     * @property {Number} selectedIndex - The index of the selected option in a select element.
     * @property {HTMLCollection} selectedOptions - The collection of selected options in a select element.
     * @property {Array} options - The list of options in a select element.
     * @property {String} errorText - The error message text when the input element is invalid.
     * @property {Boolean} error - Indicates whether the input element has an error state.
     * @property {String} variant - The variant style of the text field (e.g., filled, outlined, rounded).
     */
    static properties = {
        label: { type: String },
        icon: { type: String },
        prefix: { type: String },
        suffix: { type: String },
        actions: { type: Array },
        text: { type: String },

        accept: { type: String },
        alt: { type: String },
        autocomplete: { type: String },
        autofocus: { type: Boolean },
        checked: { type: Boolean },
        defaultChecked: { type: Boolean },
        disabled: { type: Boolean },
        files: { type: FileList },
        form: { type: Object },
        formAction: { type: String },
        formEnctype: { type: String },
        formMethod: { type: String },
        formNoValidate: { type: Boolean },
        formTarget: { type: String },
        height: { type: Number },
        indeterminate: { type: Boolean },
        list: { type: Object },
        max: { type: String },
        maxLength: { type: Number },
        min: { type: String },
        minLength: { type: Number },
        multiple: { type: Boolean },
        name: { type: String },
        pattern: { type: String },
        placeholder: { type: String },
        readOnly: { type: Boolean },
        required: { type: Boolean },
        size: { type: Number },
        src: { type: String },
        step: { type: String },
        type: { type: String },
        defaultValue: { type: String },
        value: { type: String },
        width: { type: Number },
        inputMode: { type: String },
        selectionDirection: { type: String },
        selectionEnd: { type: Number },
        selectionStart: { type: Number },
        align: { type: String },
        useMap: { type: String },
        cols: { type: Number },
        rows: { type: Number },
        spellcheck: { type: Boolean },
        wrap: { type: String },
        length: { type: Number },
        selectedIndex: { type: Number },
        selectedOptions: { type: HTMLCollection },
        options: { type: Array },

        errorText: { type: String },
        error: { type: Boolean },

        variant: { type: String },
    };

    variants = ["filled", "outlined", "rounded"];

    /**
     * Returns the native input element of the text field.
     * @returns {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} The native input element.
     */
    get native() {
        return this.querySelector(".md-text-field__native");
    }

    constructor() {
        super();

        this.type = "text";
        this.autocomplete = "off";

        this.renderIconButton = this.renderIconButton.bind(this);
    }

    renderInput() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-text-field__native"
                .accept="${ifDefined(this.accept)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .max="${ifDefined(this.max)}"
                .maxLength="${ifDefined(this.maxLength)}"
                .min="${ifDefined(this.min)}"
                .minLength="${ifDefined(this.minLength)}"
                .multiple="${ifDefined(this.multiple)}"
                .name="${ifDefined(this.name)}"
                .pattern="${ifDefined(this.pattern)}"
                .placeholder="${ifDefined(this.placeholder)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .required="${ifDefined(this.required)}"
                .size="${ifDefined(this.size)}"
                .src="${ifDefined(this.src)}"
                .step="${ifDefined(this.step)}"
                .type="${ifDefined(this.type)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @search="${this.handleTextFieldNativeSearch}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
        `;
    }

    renderTextarea() {
        /* prettier-ignore */
        return html`
            <textarea 
                class="md-text-field__native"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .maxLength="${ifDefined(this.maxLength)}"
                .minLength="${ifDefined(this.minLength)}"
                .name="${ifDefined(this.name)}"
                .placeholder="${ifDefined(this.placeholder)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .required="${ifDefined(this.required)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                .cols="${ifDefined(this.cols)}"
                .rows="${ifDefined(this.rows)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            ></textarea>
        `;
    }

    renderSelect() {
        /* prettier-ignore */
        return html`
            <select 
                class="md-text-field__native"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .multiple="${ifDefined(this.multiple)}"
                .name="${ifDefined(this.name)}"
                .required="${ifDefined(this.required)}"
                .size="${ifDefined(this.size)}"
                .value="${ifDefined(this.value)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
                ${this.options?.map(option => html`
                    <option 
                        ?disabled="${ifDefined(option.disabled)}"
                        label="${ifDefined(option.label)}"
                        ?selected="${ifDefined(option.selected)}"
                        value="${ifDefined(option.value)}"
                        text="${ifDefined(option.text)}"
                    ></option>
                `)}
            </select>
        `;
    }

    renderNative() {
        return choose(
            this.type,
            [
                ["textarea", () => this.renderTextarea()],
                ["select", () => this.renderSelect()],
            ],
            () => this.renderInput(),
        );
    }

    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                class="md-text-field__icon-button"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
            ></md-icon-button>
        `;
    }

    renderAction(item) {
        return this.renderIconButton(item);
    }

    renderActions() {
        /* prettier-ignore */
        return this.actions?.length || this.error ? html`
            <div class="md-text-field__actions">
                ${this.error ? html`<div class="md-icon md-text-field__icon md-text-field__icon--error">error</div>` : nothing}
                ${this.actions?.map(item => this.renderAction(item))}
            </div>
        ` : nothing;
    }

    render() {
        /* prettier-ignore */
        return html`
            <label class="md-text-field__inner">
                ${this.label ? html`<div class="md-text-field__label">${this.label}</div>` : html`<div class="md-text-field__nolabel">Label</div>`}
                <div class="md-text-field__container">
                    ${this.icon ? html`<div class="md-icon md-text-field__icon">${this.icon}</div>` : nothing}
                    ${this.prefix ? html`<div class="md-text-field__meta">${this.prefix}</div>` : nothing}
                    ${this.renderNative()}
                    ${this.suffix ? html`<div class="md-text-field__meta">${this.suffix}</div>` : nothing}
                    ${this.renderActions()}
                </div>
                ${this.errorText || this.text ? html`<div class="md-text-field__text">${this.errorText || this.text}</div>` : nothing}
            </label>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");

        const defaultValue = {
            color: "#000000",
            "datetime-local": "",
            date: "",
            time: "",
            week: "",
            month: "",
            url: "",
            email: "",
        };

        this.value = this.value || defaultValue[this.type];
        this.defaultValue = this.value;

        this.populate();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`${this.localName}--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }

        if (changedProperties.has("icon")) {
            window.requestAnimationFrame(() => {
                this.style.setProperty("--md-comp-text-field-offset-left", this.native.offsetLeft + "px");
            });
        }
    }

    handleTextFieldNativeFocus(event) {
        this.classList.add("md-text-field--focused");

        this.emit("onTextFieldNativeFocus", event);
    }

    handleTextFieldNativeBlur(event) {
        this.classList.remove("md-text-field--focused");

        this.emit("onTextFieldNativeBlur", event);
    }

    handleTextFieldNativeInput(event) {
        if (this.type !== "file") {
            this.value = this.native.value;
        }

        this.populate();
        this.validate();

        this.emit("onTextFieldNativeInput", event);
    }

    handleTextFieldNativeSearch(event) {
        this.emit("onTextFieldNativeSearch", event);
    }

    handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        this.validate();

        this.emit("onTextFieldNativeInvalid", event);
    }

    handleTextFieldNativeReset(event) {
        if (this.type !== "file") {
            this.native.value = this.defaultValue;
            this.value = this.defaultValue;
        }

        this.populate();
        this.validate();

        this.emit("onTextFieldNativeReset", event);
    }

    /**
     * Populates the text field component based on its current value.
     */
    populate() {
        this.classList.toggle("md-text-field--populated", !!this.value || this.type == "file");
    }

    /**
     * Validates the text field component's current state.
     */
    validate() {
        this.errorText = this.native.validationMessage;
        this.error = !!this.errorText;

        this.classList.toggle("md-text-field--error", this.error);
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
