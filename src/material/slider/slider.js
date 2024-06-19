import { html } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Checks if a string represents a JSON array.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a JSON array, false otherwise.
 */
const isArrayString = (str) => {
    // Regular expression to match a JSON array
    const arrayRegex = /^\[[\s\S]*\]$/;

    // Test if the string matches the arrayRegex
    return arrayRegex.test(str);
};

/**
 * Custom slider element based on MDElement using LitElement for rendering.
 */
class MDSliderElement extends MDElement {
    /**
     * Static properties for defining behavior and attributes.
     * @property {Array} value - Current slider value(s).
     * @property {Array} defaultValue - Default value(s) for the slider.
     * @property {Number} min - Minimum value of the slider.
     * @property {Number} max - Maximum value of the slider.
     * @property {Number} step - Step size of the slider.
     * @property {Boolean} disabled - Whether the slider is disabled.
     * @property {String} name - Name of the slider input.
     * @property {String} list - ID of a <datalist> element that provides predefined options for the slider.
     * @property {Boolean} readOnly - Whether the slider is read-only.
     * @property {Boolean} required - Whether the slider is required.
     * @property {String} autocomplete - Hint for form autofill feature.
     * @property {Boolean} autofocus - Whether the slider should automatically get focus.
     * @property {String} form - Associated form identifier.
     * @property {Boolean} multiple - Whether multiple values can be entered (only for file inputs).
     * @property {String} pattern - Pattern (regular expression) the slider's value must match.
     * @property {Number} size - Number of visible characters in an input element.
     */
    static properties = {
        value: {
            type: Array,
            converter: {
                fromAttribute: (value) => {
                    if (!isArrayString(value)) {
                        value = `[${value}]`;
                    }
                    return JSON.parse(value);
                },
                toAttribute: (value) => {
                    return JSON.stringify(value);
                },
            },
        },
        defaultValue: { type: Array },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        disabled: { type: Boolean },
        name: { type: String },
        list: { type: String },
        readOnly: { type: Boolean },
        required: { type: Boolean },
        autocomplete: { type: String },
        autofocus: { type: Boolean },
        form: { type: String },
        multiple: { type: Boolean },
        pattern: { type: String },
        size: { type: Number },
    };

    /**
     * Retrieves all native slider input elements within the component.
     * @returns {NodeList} NodeList containing all native slider input elements.
     */
    get nativeAll() {
        return this.querySelectorAll(".md-slider__native");
    }

    constructor() {
        super();

        // Initialize default values for properties
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = [undefined];
        this.defaultValue = this.value;
    }

    /**
     * Renders the indicator elements for the slider.
     * @param {number} value - Current value of the slider.
     * @returns {TemplateResult[]} Array of indicator elements.
     */
    renderIndicator(value) {
        const step = this.max / this.step;
        const length = (this.max == step ? 2 : step) + 1;
        if (length > 100 + 1) {
            return [];
        }
        /* prettier-ignore */
        return Array.from({length}, (_, k) => html`
            <div class="md-slider__indicator" ?activated="${(this.max / (step - 1)) * k <= value}"></div>
        `);
    }

    /**
     * Renders a container for each slider input element.
     * @param {number} value - Current value of the slider.
     * @param {number} index - Index of the slider container.
     * @returns {TemplateResult} Rendered slider container.
     */
    renderContainer(value, index) {
        /* prettier-ignore */
        return html`
            <div class="md-slider__container md-slider__container${index + 1}">
                <input 
                    type="range" 
                    class="md-slider__native"
                    .index="${index}"
                    .value="${ifDefined(value)}"
                    .defaultValue="${ifDefined(this.defaultValue[index])}"
                    .min="${ifDefined(this.min)}"
                    .max="${ifDefined(this.max)}"
                    .step="${ifDefined(this.step)}"
                    .disabled="${ifDefined(this.disabled)}"
                    .list="${ifDefined(this.list)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .required="${ifDefined(this.required)}"
                    .autocomplete="${ifDefined(this.autocomplete)}"
                    .autofocus="${ifDefined(this.autofocus)}"
                    .form="${ifDefined(this.form)}"
                    .multiple="${ifDefined(this.multiple)}"
                    .pattern="${ifDefined(this.pattern)}"
                    .size="${ifDefined(this.size)}"
                    @input="${this.handleSliderNativeInput}"
                    @reset="${this.handleSliderNativeReset}"
                    @focus="${this.handleSliderNativeFocus}"
                >
                <div class="md-slider__track">
                    ${this.renderIndicator(value, index)}
                </div>
                <div class="md-slider__value">${value}</div>
            </div>
        `;
    }

    /**
     * Renders the entire slider component.
     * @returns {TemplateResult} Rendered slider component.
     */
    render() {
        /* prettier-ignore */
        return html`
            <label class="md-slider__inner">
                <div class="md-slider__label">Slider</div>
                ${this.value?.map((value, index) => this.renderContainer(value, index))}
                <input 
                    type="hidden" 
                    class="md-slider__hidden"
                    .name="${ifDefined(this.name)}"
                    .value="${ifDefined(this.value)}"
                >
            </label>
        `;
    }

    /**
     * Lifecycle callback when the element is attached to the DOM.
     * Initializes default values and updates styles.
     */
    async connectedCallback() {
        super.connectedCallback();

        this.style.setProperty("--md-comp-slider-animation", "none");

        await this.updateComplete;

        // Calculate default value if max < min
        const defaultValue = this.max < this.min ? this.min : this.min + (this.max - this.min) / 2;

        // Set default and current values for each slider
        this.value.forEach((value, index) => {
            this.value[index] = value ?? defaultValue;
            this.nativeAll[index].value = this.value[index];
        });

        // Update styling based on values
        this.updateStyle();

        // Store default values
        this.defaultValue = this.value.slice();
    }

    /**
     * Lifecycle callback when properties have been updated.
     * @param {Map} changedProperties - Map of properties that have changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        // Check if 'min' property has changed
        if (changedProperties.has("min")) {
            if (this.min < 0) {
                this.classList.add("md-slider--centered");
            }
        }

        // Check if 'step' property has changed
        if (changedProperties.has("step")) {
            if (this.step > 1) {
                this.classList.add("md-slider--discrete");
            }
        }

        // Check if 'value' property has changed
        if (changedProperties.has("value")) {
            if (this.value?.length > 1) {
                this.classList.add("md-slider--range-selection");
            }
        }
    }

    /**
     * Updates slider style properties based on current values.
     */
    updateStyle() {
        this.value.forEach((value, index) => {
            this.style.setProperty(`--md-slider-percentage${index + 1}`, this.calculatePercentage(this.min, this.max, value) + "%");
            this.style.setProperty(`--md-slider-decimal${index + 1}`, this.calculateDecimal(this.min, this.max, value));
        });
    }

    /**
     * Calculates the percentage value for a slider based on its range and current value.
     * @param {number} min - Minimum value of the slider.
     * @param {number} max - Maximum value of the slider.
     * @param {number} value - Current value of the slider.
     * @returns {number} Calculated percentage value.
     * @throws {Error} If the minimum value is not less than the maximum value.
     */
    calculatePercentage(min, max, value) {
        if (min >= max) {
            throw new Error("Minimum value must be less than maximum value");
        }

        // Calculate the percentage
        const percentage = ((value - min) / (max - min)) * 100;

        // Round the percentage to two decimal places
        return Math.round(percentage * 100) / 100;
    }

    /**
     * Calculates the decimal value for a slider based on its range and current value.
     * @param {number} min - Minimum value of the slider.
     * @param {number} max - Maximum value of the slider.
     * @param {number} value - Current value of the slider.
     * @returns {number} Calculated decimal value.
     * @throws {Error} If the minimum value is not less than the maximum value.
     */
    calculateDecimal(min, max, value) {
        if (min >= max) {
            throw new Error("Minimum value must be less than maximum value");
        }

        // Calculate the decimal value
        const decimal = (value - min) / (max - min);

        // Round the result to handle precision issues
        return Math.round(decimal * 1000) / 1000; // rounding to three decimal places
    }

    /**
     * Event handler for 'input' events on slider native inputs.
     * @param {Event} event - The input event object.
     * @fires MDSliderElement#onSliderNativeInput - When the slider native input value changes.
     */
    handleSliderNativeInput(event) {
        if (this.nativeAll.length == 2) {
            this.nativeAll[0].value = Math.min(this.nativeAll[0].value, this.value[1]);
            this.nativeAll[1].value = Math.max(this.nativeAll[1].value, this.value[0]);
            this.value[0] = this.nativeAll[0].value;
            this.value[1] = this.nativeAll[1].value;
        } else {
            this.value[0] = this.nativeAll[0].value;
        }
        this.updateStyle();
        this.requestUpdate();
        this.emit("onSliderNativeInput", event);
    }

    /**
     * Event handler for 'reset' events on slider native inputs.
     * @param {Event} event - The reset event object.
     * @fires MDSliderElement#onSliderNativeReset - When the slider native input is reset.
     */
    handleSliderNativeReset(event) {
        this.defaultValue.forEach((value, index) => {
            this.nativeAll[index].value = value;
            this.value[index] = value;
        });
        this.updateStyle();
        this.requestUpdate();
        this.emit("onSliderNativeReset", event);
    }

    /**
     * Event handler for 'focus' events on slider native inputs.
     * @param {Event} event - The focus event object.
     * @fires MDSliderElement#onSliderNativeFocus - When the slider native input receives focus.
     */
    handleSliderNativeFocus(event) {
        this.style.removeProperty("--md-comp-slider-animation");
        this.emit("onSliderNativeFocus", event);
    }
}

// Define the custom element 'md-slider' using MDSliderElement class
customElements.define("md-slider", MDSliderElement);

export { MDSliderElement };
