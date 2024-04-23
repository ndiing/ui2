import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDSlider extends MDElement {
    static get properties() {
        return {
            type: { type: String },
            name: { type: String },
            required: { type: Boolean },
            readOnly: { type: Boolean },
            value: { type: Number },
            defaultValue: { type: Number },
            min: { type: Number },
            max: { type: Number },
            step: { type: Number },
        };
    }

    constructor() {
        super();

        // this.type = "range";

        this.min = 0;
        this.max = 100;
        this.value = 50;
        this.defaultValue = this.value;
        this.step=1
        this.list=[
            {value:this.min},
            {value:this.value},
            {value:this.max},
        ]
    }

    render() {
        // prettier-ignore
        return html`
            <input 
                class="md-slider__native"
                .type="${'range'}"
                .name="${ifDefined(this.name)}"
                .required="${ifDefined(this.required)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .min="${ifDefined(this.min)}"
                .max="${ifDefined(this.max)}"
                .step="${ifDefined(this.step)}"
                @focus="${this.handleSliderNativeFocus}"
                @blur="${this.handleSliderNativeBlur}"
                @input="${this.handleSliderNativeInput}"
                @invalid="${this.handleSliderNativeInvalid}"
                @reset="${this.handleSliderNativeReset}"
            >
            <output class="md-slider__label">${this.value}</output>
            <div>${this.list.map(item=>html`<span ?selected="${this.value>=item.value}"></span>`)}</div>
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

    firstUpdated() {

        // fix invalid thumb position
        // when using large number
        this.sliderNative.value=this.value
        this.sliderNative.defaultValue=this.defaultValue

        this.updateStyle();
    }

    updated(changedProperties) {
        if (changedProperties.has("type")) {
            if (this.type) {
                this.classList.add("md-slider--" + this.type);
            } else {
                this.classList.remove("md-slider--centered");
                this.classList.remove("md-slider--continuous");
                this.classList.remove("md-slider--discrete");
                this.classList.remove("md-slider--range-selection");
            }
        }
    }

    get sliderNative() {
        return this.querySelector(".md-slider__native");
    }
    get sliderLabel() {
        return this.querySelector(".md-slider__label");
    }
    handleSliderNativeFocus(event) {
        this.emit("onSliderNativeFocus", event);
    }
    handleSliderNativeBlur(event) {
        this.emit("onSliderNativeBlur", event);
    }
    handleSliderNativeInput(event) {
        this.value = this.sliderNative.value;
        this.updateStyle();

        this.emit("onSliderNativeInput", event);
    }

    getMiddle(min,max){
        return (min+max)/2
    }
    getDecimal(value,min,max){
        return (value - min) / (max - min) 
    }
    getPercentage(value,min,max){
        return (value - min) / (max - min) * 100
    }

    updateStyle() {
        this.style.setProperty("--md-slider-decimal", this.getDecimal(this.value,this.min,this.max));
        this.style.setProperty("--md-slider-percentage", this.getPercentage(this.value,this.min,this.max)+'%');
    }

    handleSliderNativeInvalid(event) {
        event.preventDefault();

        this.emit("onSliderNativeInvalid", event);
    }
    handleSliderNativeReset(event) {
        this.emit("onSliderNativeReset", event);
    }
}

customElements.define("md-slider", MDSlider);

export { MDSlider };
