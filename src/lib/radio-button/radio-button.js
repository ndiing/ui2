import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ripple } from "../ripple/ripple";
class MDRadioButton extends MDElement {
    static get properties() {
        return { type: { type: String }, name: { type: String }, required: { type: Boolean }, readOnly: { type: Boolean }, value: { type: String }, defaultValue: { type: String }, indeterminate: { type: Boolean }, checked: { type: Boolean }, defaultChecked: { type: Boolean } };
    }

    constructor() {
        super();
        this.type = "radio";
    }

    render() {
        // prettier-ignore
        return html`
            <input 
                class="md-radio-button__native"
                .type="${ifDefined(this.type)}"
                .name="${ifDefined(this.name)}"
                .required="${ifDefined(this.required)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                @focus="${this.handleRadioButtonNativeFocus}"
                @blur="${this.handleRadioButtonNativeBlur}"
                @input="${this.handleRadioButtonNativeInput}"
                @invalid="${this.handleRadioButtonNativeInvalid}"
                @reset="${this.handleRadioButtonNativeReset}"
            >
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-radio-button");
        await this.updateComplete;
        this.ripple = new Ripple(this.radioButtonTrack, { button: this.radioButtonNative, containment: false, fadeout: true, size: (40 / this.radioButtonTrack.clientWidth) * 100 });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-radio-button");
    }

    updated(changedProperties) {}

    get radioButtonNative() {
        return this.querySelector(".md-radio-button__native");
    }

    get radioButtonTrack() {
        return this.querySelector(".md-radio-button__track");
    }

    get radioButtonThumb() {
        return this.querySelector(".md-radio-button__thumb");
    }

    handleRadioButtonNativeFocus(event) {
        this.emit("onRadioButtonNativeFocus", event);
    }

    handleRadioButtonNativeBlur(event) {
        this.emit("onRadioButtonNativeBlur", event);
    }

    handleRadioButtonNativeInput(event) {
        this.emit("onRadioButtonNativeInput", event);
    }

    handleRadioButtonNativeInvalid(event) {
        event.preventDefault();
        this.emit("onRadioButtonNativeInvalid", event);
    }

    handleRadioButtonNativeReset(event) {
        this.emit("onRadioButtonNativeReset", event);
    }
}
customElements.define("md-radio-button", MDRadioButton);
export { MDRadioButton };
