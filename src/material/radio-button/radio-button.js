import { html } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Custom element representing a radio button component.
 * Extends MDElement for base element functionalities.
 */
class MDRadioButtonElement extends MDElement {
    /**
     * Defines the properties of the MDRadioButtonElement.
     * Inherits properties from MDElement and adds additional ones specific to radio buttons.
     * @type {Object}
     * @property {boolean} checked - Indicates if the radio button is checked.
     * @property {boolean} defaultChecked - Default checked state of the radio button.
     * @property {boolean} disabled - Indicates if the radio button is disabled.
     * @property {string} type - Type of the radio button.
     * @property {string} name - Name attribute of the radio button.
     * @property {string} value - Value attribute of the radio button.
     * @property {string} defaultValue - Default value attribute of the radio button.
     * @property {boolean} indeterminate - Indicates if the radio button is in an indeterminate state.
     * @property {boolean} required - Indicates if the radio button is required.
     * @property {boolean} readOnly - Indicates if the radio button is read-only.
     */
    static properties = {
        ...MDElement.properties,
        checked: { type: Boolean },
        defaultChecked: { type: Boolean },
        disabled: { type: Boolean },
        type: { type: String },
        name: { type: String },
        value: { type: String },
        defaultValue: { type: String },
        indeterminate: { type: Boolean },
        required: { type: Boolean },
        readOnly: { type: Boolean },
    };

    constructor() {
        super();

        /**
         * Ripple effect controller for the radio button.
         * @type {MDRippleController}
         */
        this.ripple = new MDRippleController(this, {
            containerSelector: ".md-radio-button__container",
            buttonSelector: ".md-radio-button__native",
            clipped: false,
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    /**
     * Ref object for accessing the native radio button element.
     * @type {import('lit/directives/ref').RefObject<HTMLInputElement>}
     */
    native = createRef();

    /**
     * Renders the radio button element using lit-html.
     * @returns {import('lit').TemplateResult} Rendered template result.
     */
    render() {
        /* prettier-ignore */
        return html`
            <label class="md-radio-button__inner">
                <div class="md-radio-button__label">RadioButton</div>
                <div class="md-radio-button__container">
                    <input 
                        type="radio" 
                        class="md-radio-button__native"
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
                        @input="${this.handleRadioButtonNativeInput}"
                        @reset="${this.handleRadioButtonNativeReset}"
                    >
                    <div class="md-radio-button__track"><div class="md-radio-button__thumb"></div></div>
                </div>
            </label>
        `;
    }

    /**
     * Called when the element is inserted into the DOM.
     * Sets up initial state and listeners.
     */
    connectedCallback() {
        super.connectedCallback();

        this.defaultChecked = this.checked;
        this.defaultValue = this.value;
        this.defaultIndeterminate = this.indeterminate;
    }

    /**
     * Called when the element is removed from the DOM.
     * Cleans up listeners and states.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Handles the input event from the native radio button.
     * Updates component state based on the native element's state.
     * @param {Event} event - The input event from the native radio button.
     */
    handleRadioButtonNativeInput(event) {
        this.checked = this.native.value.checked;
        this.value = this.native.value.value;
        this.indeterminate = this.native.value.indeterminate;

        this.emit("onRadioButtonNativeInput", event);
    }

    /**
     * Handles the reset event from the native radio button.
     * Resets the native radio button's state to its default values.
     * @param {Event} event - The reset event from the native radio button.
     */
    handleRadioButtonNativeReset(event) {
        this.native.value.checked = this.defaultChecked;
        this.native.value.value = this.defaultValue;
        this.native.value.indeterminate = this.defaultIndeterminate;

        this.checked = this.native.value.checked;
        this.value = this.native.value.value;
        this.indeterminate = this.native.value.indeterminate;

        this.emit("onRadioButtonNativeReset", event);
    }
}

customElements.define("md-radio-button", MDRadioButtonElement);

export { MDRadioButtonElement };
