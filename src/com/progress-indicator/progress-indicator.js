import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @class MDProgressIndicatorComponent
 * @extends MDElement
 */
class MDProgressIndicatorComponent extends MDElement {
    /**
     *
     * @property {Number} [max] -
     * @property {Number} [value] -
     * @property {String} [ui] - linear,circular
     */
    static get properties() {
        return {
            max: { type: Number },
            value: { type: Number },
            ui: { type: String },
        };
    }

    /**
     *
     */
    constructor() {
        super();
        this.max = 100;
        this.value = 0;
    }

    /**
     *
     */
    renderLinear() {
        /* prettier-ignore */
        return html`
            <div class="md-progress-indicator__linear-bar">
                <div class="md-progress-indicator__linear-track"></div>
                <div class="md-progress-indicator__linear-value"></div>
            </div>
        `
    }

    /**
     *
     */
    renderCircular() {
        /* prettier-ignore */
        return html`
            <svg viewBox="0 0 100 100" class="md-progress-indicator__circular-bar">
                <circle cx="50%" cy="50%" r="45" class="md-progress-indicator__circular-track" />
                <circle cx="50%" cy="50%" r="45" class="md-progress-indicator__circular-value" />
            </svg>
        `
    }

    /**
     *
     */
    render() {
        return this.ui?.includes("circular") ? this.renderCircular() : this.renderLinear();
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-progress-indicator");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-progress-indicator");
        await this.updateComplete;
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["linear", "circular"].forEach((ui) => {
                this.classList.remove("md-progress-indicator--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-progress-indicator--" + ui);
                });
            }
        }

        this.percentageValue = this.calculatePercentage(0, this.max, this.value);
        this.style.setProperty("--md-progress-indicator-percentage", this.percentageValue);
    }

    /**
     *
     */
    calculatePercentage(min, max, value) {
        if (min >= max) {
            throw new Error("Min should be less than Max");
        }
        if (value < min || value > max) {
            throw new Error("Value should be between Min and Max");
        }
        return ((value - min) / (max - min)) * 100;
    }
}

customElements.define("md-progress-indicator", MDProgressIndicatorComponent);

export { MDProgressIndicatorComponent };
