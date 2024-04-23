import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

function converter(value) {
    value = JSON.parse(value);
    return [].concat(value).map(Number);
}

class MDRangeFieldElement extends MDElement {
    static get properties() {
        return {
            label: { type: String },
            name: { type: String },
            defaultValue: { converter },
            value: { converter },
            required: { type: Boolean },
            min: { type: Number },
            max: { type: Number },
            step: { type: Number },
        };
    }

    constructor() {
        super();
        this.min = 0;
        this.max = 100;
        this.value = [0];
        this.defaultValue = [0];
        this.step = 1;
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-range-field__label">
                <label for="">${this.label}</label>
            </div>
            <div class="md-range-field__container">
                <input 
                    type="hidden"
                    .name="${ifDefined(this.name)}"
                    .value="${ifDefined(this.value)}"
                >
                ${this.value.map((value,index)=>html`
                    <input 
                        type="range"
                        .defaultValue="${ifDefined(this.defaultValue[index])}"
                        .value="${ifDefined(this.value[index])}"
                        .placeholder="${ifDefined(this.placeholder)}"
                        .required="${ifDefined(this.required)}"
                        .min="${ifDefined(this.min)}"
                        .max="${ifDefined(this.max)}"
                        .step="${ifDefined(this.step)}"
                        @focus="${this.handleRangeFieldNativeFocus}"
                        @blur="${this.handleRangeFieldNativeBlur}"
                        @input="${this.handleRangeFieldNativeInput}"
                        @invalid="${this.handleRangeFieldNativeInvalid}"
                        @reset="${this.handleRangeFieldNativeReset}"
                    >
                `)}
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-range-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-range-field");
    }

    firstUpdated() {
        if (this.value.length > 1) {
            this.classList.add("md-range-field--two-handle");
        }
        this.updatePercentageValueStyle();
    }

    updatePercentageValueStyle() {
        this.value.forEach((value, index) => {
            const percentageValue = this.calculatePercentage(this.min, this.max, this.value[index]);
            this.style.setProperty("--md-range-field-percentage-value" + (index + 1), percentageValue + "%");
        });
    }

    get rangeFieldNative() {
        return this.querySelector("input:nth-of-type(2)");
    }

    get rangeFieldNative2() {
        return this.querySelector("input:nth-of-type(3)");
    }

    calculatePercentage(min, max, value) {
        return ((value - min) / (max - min)) * 100;
    }

    handleRangeFieldNativeFocus(event) {
        this.emit("onRangeFieldNativeFocus", event);
    }

    handleRangeFieldNativeBlur(event) {
        this.emit("onRangeFieldNativeBlur", event);
    }

    handleRangeFieldNativeInput(event) {
        if (this.rangeFieldNative2) {
            this.rangeFieldNative.value = Math.min(this.rangeFieldNative.value, this.value[1]);
            this.rangeFieldNative2.value = Math.max(this.value[0], this.rangeFieldNative2.value);
        }
        this.value = [this.rangeFieldNative.value, this.rangeFieldNative2?.value].filter(Boolean).map(Number);
        this.updatePercentageValueStyle();
        this.emit("onRangeFieldNativeInput", event);
    }

    handleRangeFieldNativeInvalid(event) {
        event.preventDefault();
        console.log([this.rangeFieldNative]);
        this.emit("onRangeFieldNativeInvalid", event);
    }

    handleRangeFieldNativeReset(event) {
        this.value = [this.rangeFieldNative.defaultValue, this.rangeFieldNative2?.defaultValue].filter(Boolean).map(Number);
        this.updatePercentageValueStyle();
        this.emit("onRangeFieldNativeReset", event);
    }
}

customElements.define("md-range-field", MDRangeFieldElement);

export { MDRangeFieldElement };
