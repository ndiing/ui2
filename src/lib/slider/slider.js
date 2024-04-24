import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

function converter(value) {
    value = JSON.parse(value);
    return [].concat(value).map(Number);
}

class MDSlider extends MDElement {
    static get properties() {
        return {
            name: { type: String },
            required: { type: Boolean },
            readOnly: { type: Boolean },
            value: { converter },
            defaultValue: { converter },
            min: { type: Number },
            max: { type: Number },
            step: { type: Number },
            ui: { type: String },
            list: { type: Array },
        };
    }

    constructor() {
        super();
        this.ui = "continuous";
    }

    render() {
        // prettier-ignore
        return html`
            <input 
                class="md-slider__native"
                type="hidden"
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.value)}"
            >
            ${this.value?.map((value,index)=>html`
                <div class="md-slider__container md-slider__container${index+1}">
                    <input 
                        class="md-slider__native md-slider__native${index+1}"
                        type="range"
                        .required="${ifDefined(this.required)}"
                        .readOnly="${ifDefined(this.readOnly)}"
                        .value="${ifDefined(this.value[index])}"
                        .defaultValue="${ifDefined(this.defaultValue[index])}"
                        .min="${ifDefined(this.min)}"
                        .max="${ifDefined(this.max)}"
                        .step="${ifDefined(this.step)}"
                        @focus="${this.handleSliderNativeFocus}"
                        @blur="${this.handleSliderNativeBlur}"
                        @input="${this.handleSliderNativeInput}"
                        @invalid="${this.handleSliderNativeInvalid}"
                        @reset="${this.handleSliderNativeReset}"
                    >
                    <output class="md-slider__label">${this.value[index]}</output>
                </div>
            `)}
            <div class="md-slider__list">
                ${this.list?.map(item=>html`
                    <span class="md-slider__item" ?selected="${this.value?.[0]>item}"></span>
                `)}
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-slider");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-slider");
    }

    async firstUpdated() {
        await this.updateComplete;

        if (this.ui === "centered") {
            this.min = this.min ?? -100;
            this.max = this.max ?? 100;
            this.value = this.value ?? [this.getHalf(this.min, this.max)];
            this.defaultValue = this.defaultValue ?? this.value;
            this.list = [this.min, this.getHalf(this.min, this.max), this.max];
        }

        if (this.ui === "continuous") {
            this.min = this.min ?? 0;
            this.max = this.max ?? 100;
            this.value = this.value ?? [this.getHalf(this.min, this.max)];
            this.defaultValue = this.defaultValue ?? this.value;
            this.list = [this.min, this.getHalf(this.min, this.max), this.max];
        }

        if (this.ui === "discrete") {
            this.min = this.min ?? 0;
            this.max = this.max ?? 100;
            this.step = this.step ?? 10;
            this.value = this.value ?? [this.getHalf(this.min, this.max)];
            this.defaultValue = this.defaultValue ?? this.value;
            this.list = Array.from({ length: this.step + 1 }, (value, index) => {
                return (this.max / this.step) * index;
            });
        }

        if (this.ui === "range-selection") {
            this.min = this.min ?? 0;
            this.max = this.max ?? 100;
            this.value = this.value ?? [25, 75];
            this.defaultValue = this.defaultValue ?? this.value;
            this.list = [this.min, this.getHalf(this.min, this.max) / 2, this.max];
        }
        await this.updateComplete;

        if (["centered", "continuous", "discrete"].includes(this.ui)) {
            this.sliderNative1.value = this.value?.[0];
        } else if (this.ui === "range-selection") {
            this.sliderNative1.value = this.value?.[0];

            if (this.sliderNative2) {
                this.sliderNative2.value = this.value?.[1];
            }
        }
        this.updateStyle();
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            if (this.ui) {
                this.classList.add("md-slider--" + this.ui);
            } else {
                this.classList.remove("md-slider--centered");
                this.classList.remove("md-slider--continuous");
                this.classList.remove("md-slider--discrete");
                this.classList.remove("md-slider--range-selection");
            }
        }
    }

    get sliderNative1() {
        return this.querySelector(".md-slider__native.md-slider__native1");
    }

    get sliderNative2() {
        return this.querySelector(".md-slider__native.md-slider__native2");
    }

    getHalf(min, max) {
        return (min + max) / 2;
    }

    getDecimal(value, min, max) {
        return (value - min) / (max - min);
    }

    getPercentage(value, min, max) {
        return ((value - min) / (max - min)) * 100;
    }

    handleSliderNativeFocus(event) {
        this.emit("onSliderNativeFocus", event);
    }

    handleSliderNativeBlur(event) {
        this.emit("onSliderNativeBlur", event);
    }

    handleSliderNativeInput(event) {
        if (this.sliderNative2) {
            this.sliderNative1.value = Math.min(this.sliderNative1.value, this.value[1]);
            this.sliderNative2.value = Math.max(this.value[0], this.sliderNative2.value);
        }
        this.value = [this.sliderNative1.value, this.sliderNative2?.value].filter(Boolean);
        this.updateStyle();
        this.emit("onSliderNativeInput", event);
    }

    updateStyle() {
        this.value?.forEach((value, index) => {
            const decimal = this.getDecimal(this.value[index], this.min, this.max);
            const percentage = this.getPercentage(this.value[index], this.min, this.max);
            this.style.setProperty("--md-slider-decimal" + (index + 1), decimal);
            this.style.setProperty("--md-slider-percentage" + (index + 1), percentage + "%");
        });
    }

    handleSliderNativeInvalid(event) {
        event.preventDefault();
        this.emit("onSliderNativeInvalid", event);
    }

    handleSliderNativeReset(event) {
        this.value = this.defaultValue;
        this.updateStyle();
        this.emit("onSliderNativeReset", event);
    }
}
customElements.define("md-slider", MDSlider);
export { MDSlider };
