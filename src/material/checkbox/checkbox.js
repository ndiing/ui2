import { html } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Class representing a custom checkbox element.
 * @extends MDElement
 */
class MDCheckboxElement extends MDElement {
    /**
     * Properties of the MDCheckboxElement.
     * @type {Object}
     * @property {Boolean} checked - The checked state of the checkbox.
     * @property {Boolean} defaultChecked - The default checked state of the checkbox.
     * @property {Boolean} disabled - The disabled state of the checkbox.
     * @property {String} name - The name attribute of the checkbox.
     * @property {String} value - The value attribute of the checkbox.
     * @property {String} defaultValue - The default value attribute of the checkbox.
     * @property {Boolean} indeterminate - The indeterminate state of the checkbox.
     * @property {Boolean} required - The required state of the checkbox.
     * @property {Boolean} readOnly - The read-only state of the checkbox.
     */
    static properties = {
        ...MDElement.properties,
        checked: { type: Boolean },
        defaultChecked: { type: Boolean },
        disabled: { type: Boolean },
        name: { type: String },
        value: { type: String },
        defaultValue: { type: String },
        indeterminate: { type: Boolean },
        required: { type: Boolean },
        readOnly: { type: Boolean },
    };

    /**
     * Creates an instance of MDCheckboxElement.
     */
    constructor() {
        super();

        /**
         * Ripple controller for the checkbox element.
         * @type {MDRippleController}
         */
        this.ripple = new MDRippleController(this, {
            containerSelector: ".md-checkbox__container",
            buttonSelector: ".md-checkbox__native",
            clipped: false,
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    /**
     * Reference to the native checkbox input element.
     * @type {import('lit').Ref<HTMLInputElement>}
     */
    native = createRef();

    /**
     * Renders the checkbox element.
     * @return {import('lit').TemplateResult} The template result.
     */
    render() {
        /* prettier-ignore */
        return html`
            <label class="md-checkbox__inner">
                <div class="md-checkbox__label">Checkbox</div>
                <div class="md-checkbox__container">
                    <input 
                        type="checkbox" 
                        class="md-checkbox__native"
                        .checked="${ifDefined(this.checked)}"
                        .defaultChecked="${ifDefined(this.defaultChecked)}"
                        .disabled="${ifDefined(this.disabled)}"
                        .name="${ifDefined(this.name)}"
                        .value="${ifDefined(this.value)}"
                        .defaultValue="${ifDefined(this.defaultValue)}"
                        .indeterminate="${ifDefined(this.indeterminate)}"
                        .required="${ifDefined(this.required)}"
                        .readOnly="${ifDefined(this.readOnly)}"
                        ${ref(this.native)}
                        @input="${this.handleCheckboxNativeInput}"
                        @reset="${this.handleCheckboxNativeReset}"
                    >
                    <div class="md-checkbox__track"><div class="md-checkbox__thumb"></div></div>
                </div>
            </label>
        `;
    }

    /**
     * Called when the element is connected to the DOM.
     * Initializes default values.
     */
    connectedCallback() {
        super.connectedCallback();

        this.defaultChecked = this.checked;
        this.defaultValue = this.value;
        this.defaultIndeterminate = this.indeterminate;
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Handles input event from the native checkbox.
     * Updates component state from native checkbox state.
     * @param {Event} event - The input event object.
     */
    handleCheckboxNativeInput(event) {
        this.checked = this.native.value.checked;
        this.value = this.native.value.value;
        this.indeterminate = this.native.value.indeterminate;

        this.emit("onCheckboxNativeInput", event);
    }

    /**
     * Handles reset event from the native checkbox.
     * Resets native checkbox state to default values.
     * Updates component state accordingly.
     * @param {Event} event - The reset event object.
     */
    handleCheckboxNativeReset(event) {
        this.native.value.checked = this.defaultChecked;
        this.native.value.value = this.defaultValue;
        this.native.value.indeterminate = this.defaultIndeterminate;

        this.checked = this.native.value.checked;
        this.value = this.native.value.value;
        this.indeterminate = this.native.value.indeterminate;

        this.emit("onCheckboxNativeReset", event);
    }
}

/**
 * Defines a custom element 'md-checkbox'.
 */
customElements.define("md-checkbox", MDCheckboxElement);

export { MDCheckboxElement };
