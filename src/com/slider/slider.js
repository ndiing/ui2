import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";

/**
 *
 * @extends MDElement
 */
class MDSliderComponent extends MDElement {
    /**
     *
     * @property {Boolean} [autocapitalize] -
     * @property {Boolean} [autocomplete] -
     * @property {Boolean} [disabled] -
     * @property {String} [form] -
     * @property {String} [list] -
     * @property {String} [name] -
     * @property {String} [type] -
     * @property {Number} [max] -
     * @property {Number} [min] -
     * @property {Number} [step] -
     * @property {Array} [defaultValue] -
     * @property {Function} [convertLabel] -
     */
    static get properties() {
        return {
            autocapitalize: { type: Boolean },
            autocomplete: { type: Boolean },
            disabled: { type: Boolean },
            form: { type: String },
            list: { type: String },
            name: { type: String },
            type: { type: String },
            value: {
                type: Array,
                converter: (value) => [].concat(JSON.parse(value)),
            },
            max: { type: Number },
            min: { type: Number },
            step: { type: Number },
            defaultValue: { type: Array },
            convertLabel: { type: Function },
        };
    }

    /**
     *
     */
    constructor() {
        super();
        this.convertLabel = (value) => value;
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <input type="hidden" .name="${ifDefined(this.name)}" .value="${ifDefined(this.value)}">
            ${this.value?.map((value,index)=>html`
                <!-- <div class="md-slider__track"> -->
                    <input
                        class="md-slider__native md-slider__native${index+1}"
                        type="range"     
                        .autocapitalize="${ifDefined(this.autocapitalize)}"
                        .autocomplete="${ifDefined(this.autocomplete)}"
                        .disabled="${ifDefined(this.disabled)}"
                        .form="${ifDefined(this.form)}"
                        .list="${ifDefined(this.list)}"
                        .type="${ifDefined(this.type)}"
                        .value="${ifDefined(value)}"
                        .max="${ifDefined(this.max)}"
                        .min="${ifDefined(this.min)}"
                        .step="${ifDefined(this.step)}"
                        .defaultValue="${ifDefined(this.defaultValue?.[index])}"
                        @input="${this.handleSliderNativeInput}"
                        @reset="${this.handleSliderNativeReset}"
                    />
                    <div class="md-slider__label md-slider__label${index+1}">${this.convertLabel(value)}</div>
                <!-- </div> -->
            `)}
            <div class="md-slider__indicator">
                ${Array.from({length:this.ticks+1},(v,k) => html`
                    <div 
                        class="${classMap({
                            "md-slider__stop":true,
                            "md-slider__stop--active":((this.max/this.ticks)*k)>this.value?.[0],
                        })}" 
                        value="${(this.max/this.ticks)*k}"
                    ></div>
                `)}
            </div>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-slider");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-slider");
        await this.updateComplete;
    }

    /**
     *
     */
    get sliderNative1() {
        return this.querySelector(".md-slider__native1");
    }

    /**
     *
     */
    get sliderNative2() {
        return this.querySelector(".md-slider__native2");
    }

    /**
     *
     */
    async firstUpdated(changedProperties) {
        await this.updateComplete;
        this.min = this.min ?? 0;
        this.max = this.max ?? 100;
        this.value = this.value ?? [this.max < this.min ? this.min : this.min + (this.max - this.min) / 2];
        this.defaultValue = this.value.slice();
        this.ticks = this.step ?? 2;
        await this.updateComplete;
        this.sliderNative1.value = this.value[0];
        if (this.sliderNative2) this.sliderNative2.value = this.value[1];
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("step")) {
            this.classList.remove("md-slider--discrete");
            if (this.step) {
                this.classList.add("md-slider--discrete");
            }
        }

        if (changedProperties.has("min")) {
            this.classList.remove("md-slider--centered");
            if (this.min < 0) {
                this.classList.add("md-slider--centered");
            }
        }

        if (changedProperties.has("value")) {
            this.classList.remove("md-slider--range-selection");
            if (this.value?.length > 1) {
                this.classList.add("md-slider--range-selection");
            }
        }

        this.value?.forEach((value, index) => {
            this.percentageValue = this.calculatePercentage(this.min, this.max, this.value[index]);
            this.decimalValue = this.calculateDecimal(this.min, this.max, this.value[index]);

            this.style.setProperty(`--md-slider${index + 1}-percentage`, this.percentageValue);
            this.style.setProperty(`--md-slider${index + 1}-decimal`, this.decimalValue);
        });
    }

    /**
     *
     */
    handleSliderNativeInput(event) {
        if (this.sliderNative2) {
            this.sliderNative1.value = Math.min(this.sliderNative1.value, this.value[1]);
            this.sliderNative2.value = Math.max(this.value[0], this.sliderNative2.value);
            this.value[1] = this.sliderNative2.value;
        }
        this.value[0] = this.sliderNative1.value;

        this.requestUpdate();
        this.emit("onSliderNativeInput");
    }

    /**
     *
     */
    handleSliderNativeReset(event) {
        this.sliderNative1.value = this.defaultValue[0];
        if (this.sliderNative2) this.sliderNative2.value = this.defaultValue[1];
        this.requestUpdate();
        this.emit("onSliderNativeReset");
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

    /**
     *
     */
    calculateDecimal(min, max, value) {
        if (min >= max) {
            throw new Error("Min should be less than Max");
        }
        if (value < min || value > max) {
            throw new Error("Value should be between Min and Max");
        }
        return (value - min) / (max - min);
    }
}

customElements.define("md-slider", MDSliderComponent);

export { MDSliderComponent };
