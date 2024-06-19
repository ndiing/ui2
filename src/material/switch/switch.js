import { html, nothing } from "lit";
import { MDElement } from "../element/element.js";

import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Custom element representing a switch component.
 * Extends MDElement for base element functionalities.
 */
class MDSwitchElement extends MDElement {
    /**
     * Defines the properties of the MDSwitchElement.
     * Inherits properties from MDElement and adds additional ones specific to switches.
     * @type {Object}
     * @property {boolean} checked - Indicates if the switch is checked.
     * @property {boolean} defaultChecked - Default checked state of the switch.
     * @property {boolean} disabled - Indicates if the switch is disabled.
     * @property {string} name - Name attribute of the switch.
     * @property {string} value - Value attribute of the switch.
     * @property {string} defaultValue - Default value attribute of the switch.
     * @property {boolean} indeterminate - Indicates if the switch is in an indeterminate state.
     * @property {boolean} required - Indicates if the switch is required.
     * @property {boolean} readOnly - Indicates if the switch is read-only.
     * @property {Array} icons - Icons to display for the switch.
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
        icons: { type: Array },
    };

    constructor() {
        super();

        /**
         * Ripple effect controller for the switch.
         * @type {MDRippleController}
         */
        this.ripple = new MDRippleController(this, {
            containerSelector: ".md-switch__thumb",
            buttonSelector: ".md-switch__native",
            clipped: false,
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    /**
     * Ref object for accessing the native checkbox element.
     * @type {import('lit/directives/ref').RefObject<HTMLInputElement>}
     */
    native = createRef();

    /**
     * Renders the switch element using lit-html.
     * @returns {import('lit').TemplateResult} Rendered template result.
     */
    render() {
        /* prettier-ignore */
        return html`
            <label class="md-switch__inner">
                <div class="md-switch__label">Switch</div>
                <div class="md-switch__container">
                    <input 
                        type="checkbox" 
                        class="md-switch__native"
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
                        @input="${this.handleSwitchNativeInput}"
                        @reset="${this.handleSwitchNativeReset}"
                    >
                    <div class="md-switch__track">
                        <md-icon class="md-switch__thumb">${this.icons?.length ? this.icons[~~this.checked] : nothing}</md-icon>
                    </div>
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
     * Handles the input event from the native checkbox.
     * Updates component state based on the native element's state.
     * @param {Event} event - The input event from the native checkbox.
     */
    handleSwitchNativeInput(event) {
        this.checked = this.native.value.checked;
        this.value = this.native.value.value;
        this.indeterminate = this.native.value.indeterminate;

        this.emit("onSwitchNativeInput", event);
    }

    /**
     * Handles the reset event from the native checkbox.
     * Resets the native checkbox's state to its default values.
     * @param {Event} event - The reset event from the native checkbox.
     */
    handleSwitchNativeReset(event) {
        this.native.value.checked = this.defaultChecked;
        this.native.value.value = this.defaultValue;
        this.native.value.indeterminate = this.defaultIndeterminate;

        this.checked = this.native.value.checked;
        this.value = this.native.value.value;
        this.indeterminate = this.native.value.indeterminate;

        this.emit("onSwitchNativeReset", event);
    }
}

customElements.define("md-switch", MDSwitchElement);

export { MDSwitchElement };
