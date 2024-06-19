import { html } from "lit";
import { MDElement } from "../element/element.js";

/**
 * Custom element representing a progress indicator.
 * Extends MDElement for basic element functionality.
 */
class MDProgressIndicatorElement extends MDElement {
    /**
     * Properties specific to MDProgressIndicatorElement.
     * @type {Object}
     * @property {number} value - The current value of the progress indicator.
     * @property {number} max - The maximum value that the progress indicator can reach.
     */
    static properties = {
        ...MDElement.properties,
        value: { type: Number },
        max: { type: Number },
    };

    /**
     * Initializes the MDProgressIndicatorElement instance.
     * Sets default values for properties.
     */
    constructor() {
        super();

        this.value = 0;
        this.max = 100;
    }

    /**
     * Renders the circular progress indicator.
     * @returns {TemplateResult} HTML template result.
     */
    renderCircular() {
        /* prettier-ignore */
        return html`
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="md-progress-indicator__container">
                <circle class="md-progress-indicator__track" cx="50" cy="50" r="45.833333333333336" />
                <circle class="md-progress-indicator__indicator" cx="50" cy="50" r="45.833333333333336" />
            </svg>
        `;
    }

    /**
     * Renders the linear progress indicator.
     * @returns {TemplateResult} HTML template result.
     */
    renderLinear() {
        /* prettier-ignore */
        return html`
            <div class="md-progress-indicator__track">
                <div class="md-progress-indicator__indicator"></div>
            </div>
        `;
    }

    /**
     * Renders the appropriate progress indicator based on variants.
     * @returns {TemplateResult} HTML template result.
     */
    render() {
        return this.allVariants.includes("circular") ? this.renderCircular() : this.renderLinear();
    }

    /**
     * Updates styles when the 'value' property changes.
     * @param {Map} changedProperties - Map of properties that have changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("value")) {
            const percentage = this.calculatePercentage(0, this.max, this.value);
            this.style.setProperty("--md-progress-indicator-value", percentage + "%");
            this.style.setProperty("--md-progress-indicator-value-percentage", percentage);
        }
    }

    /**
     * Calculates the percentage value between min and max based on 'value'.
     * @param {number} min - Minimum value.
     * @param {number} max - Maximum value.
     * @param {number} value - Current value.
     * @returns {number} Calculated percentage.
     */
    calculatePercentage(min, max, value) {
        if (value < min) value = min;
        if (value > max) value = max;
        return ((value - min) / (max - min)) * 100;
    }
}

customElements.define("md-progress-indicator", MDProgressIndicatorElement);

export { MDProgressIndicatorElement };
