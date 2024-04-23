import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ripple } from "../ripple/ripple";

class MDCheckbox extends MDElement {
    static get properties() {
        return {
            type: { type: String },
            name: { type: String },
            required: { type: Boolean },
            readOnly: { type: Boolean },
            value: { type: String },
            defaultValue: { type: String },
            indeterminate: { type: Boolean },
            checked: { type: Boolean },
            defaultChecked: { type: Boolean },
        };
    }

    constructor() {
        super();

        this.type = "checkbox";
    }

    render() {
        // prettier-ignore
        return html`
            <input 
                class="md-checkbox__native"
                .type="${ifDefined(this.type)}"
                .name="${ifDefined(this.name)}"
                .required="${ifDefined(this.required)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                @focus="${this.handleCheckboxNativeFocus}"
                @blur="${this.handleCheckboxNativeBlur}"
                @input="${this.handleCheckboxNativeInput}"
                @invalid="${this.handleCheckboxNativeInvalid}"
                @reset="${this.handleCheckboxNativeReset}"
            >
            <div class="md-checkbox__track">
                <div class="md-checkbox__thumb"></div>
            </div>
        `
    }

    get checkboxNative(){
        return this.querySelector('.md-checkbox__native')
    }

    get checkboxTrack(){
        return this.querySelector('.md-checkbox__track')
    }

    get checkboxThumb(){
        return this.querySelector('.md-checkbox__thumb')
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-checkbox");
        await this.updateComplete
        this.ripple=new Ripple(this.checkboxTrack,{
            button:this.checkboxNative,
            containment: false,
            fadeout: true,
            size: 40/this.checkboxTrack.clientWidth*100,
        })
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-checkbox");
    }

    updated(changedProperties) {}

    get textFieldNative() {
        return this.querySelector(".md-checkbox__native");
    }

    handleCheckboxNativeFocus(event) {
        this.emit("onCheckboxNativeFocus", event);
    }
    handleCheckboxNativeBlur(event) {
        this.emit("onCheckboxNativeBlur", event);
    }
    handleCheckboxNativeInput(event) {
        this.emit("onCheckboxNativeInput", event);
    }
    handleCheckboxNativeInvalid(event) {
        event.preventDefault();


        this.emit("onCheckboxNativeInvalid", event);
    }
    handleCheckboxNativeReset(event) {

        this.emit("onCheckboxNativeReset", event);
    }
}

customElements.define("md-checkbox", MDCheckbox);

export { MDCheckbox };
