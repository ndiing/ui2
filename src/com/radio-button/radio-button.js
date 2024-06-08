import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";

/**
 *
 * @extends MDElement
 */
class MDRadioButtonComponent extends MDElement {
    /**
     * Properties of the MDRadioButtonComponent.
     * @property {String} [autocapitalize] - Specifies whether the browser should automatically capitalize the radio button's value.
     * @property {Boolean} [disabled] - Specifies whether the radio button is disabled.
     * @property {String} [form] - Specifies the form element that the radio button belongs to.
     * @property {String} [name] - Specifies the name of the radio button.
     * @property {Boolean} [required] - Specifies whether the radio button is required.
     * @property {String} [type] - Specifies the type of the radio button.
     * @property {String} [value] - Specifies the value of the radio button.
     * @property {Boolean} [checked] - Specifies whether the radio button is checked by default.
     * @property {String} [defaultValue] - Specifies the default value of the radio button.
     * @property {Boolean} [defaultChecked] - Specifies whether the radio button is checked by default.
     * @property {Boolean} [indeterminate] - Specifies whether the radio button is in an indeterminate state.
     * @property {Boolean} [defaultIndeterminate] - Specifies whether the radio button is in an indeterminate state by default.
     */
    static get properties() {
        return {
            autocapitalize: { type: String },
            disabled: { type: Boolean },
            form: { type: String },
            name: { type: String },
            required: { type: Boolean },
            type: { type: String },
            value: { type: String },
            checked: { type: Boolean },
            defaultValue: { type: String },
            defaultChecked: { type: Boolean },
            indeterminate: { type: Boolean },
            defaultIndeterminate: { type: Boolean },
        };
    }

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <label class="md-radio-button__a11y">
                <div class="md-radio-button__a11y-text">radio-button</div>
                <input
                    type="radio"  
                    .autocapitalize="${ifDefined(this.autocapitalize)}"
                    .disabled="${ifDefined(this.disabled)}"      
                    .form="${ifDefined(this.form)}"
                    .name="${ifDefined(this.name)}"
                    .required="${ifDefined(this.required)}"      
                    .type="${ifDefined(this.type)}"
                    .value="${ifDefined(this.value)}"
                    .checked="${ifDefined(this.checked)}"       
                    .defaultValue="${ifDefined(this.defaultValue)}"  
                    .defaultChecked="${ifDefined(this.defaultChecked)}"
                    .indeterminate="${ifDefined(this.indeterminate)}" 
                    .defaultIndeterminate="${ifDefined(this.defaultIndeterminate)}" 
                    class="md-radio-button__native"
                    @input="${this.handleRadioButtonNativeInput}"
                    @invalid="${this.handleRadioButtonNativeInvalid}"
                    @reset="${this.handleRadioButtonNativeReset}"
                />
                <div class="md-radio-button__track">
                    <div class="md-radio-button__thumb"></div>
                </div>
            </label>
            
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-radio-button");
        await this.updateComplete;
        this.ripple = new MDRippleModule(this.radioButtonTrack, {
            button: this.radioButtonNative,
            containment: false,
            size: (40 / (20 - 2 * 2)) * 100,
            fadeout: true,
        });
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-radio-button");

        await this.updateComplete;
        this.ripple.destroy();
    }

    /**
     *
     */
    async firstUpdated(changedProperties) {
        await this.updateComplete;
        this.defaultValue = this.value;
        this.defaultChecked = this.checked;
        this.defaultIndeterminate = this.indeterminate;
    }

    /**
     *
     */
    updated(changedProperties) {}

    get radioButtonNative() {
        return this.querySelector(".md-radio-button__native");
    }

    /**
     *
     */
    get radioButtonTrack() {
        return this.querySelector(".md-radio-button__track");
    }

    /**
     *
     * @fires MDRadioButtonComponent#onRadioButtonNativeInput
     */
    handleRadioButtonNativeInput(event) {
        this.checked = this.radioButtonNative.checked;
        this.indeterminate = this.radioButtonNative.indeterminate;
        this.emit("onRadioButtonNativeInput", event);
    }

    /**
     *
     * @fires MDRadioButtonComponent#onRadioButtonNativeInvalid
     */
    handleRadioButtonNativeInvalid(event) {
        this.emit("onRadioButtonNativeInvalid", event);
    }

    /**
     *
     * @fires MDRadioButtonComponent#onRadioButtonNativeReset
     */
    handleRadioButtonNativeReset(event) {
        this.radioButtonNative.value = this.defaultValue;
        this.radioButtonNative.checked = this.defaultChecked;
        this.radioButtonNative.indeterminate = this.defaultIndeterminate;
        this.checked = this.radioButtonNative.checked;
        this.indeterminate = this.radioButtonNative.indeterminate;
        this.emit("onRadioButtonNativeReset", event);
    }
}

customElements.define("md-radio-button", MDRadioButtonComponent);

export { MDRadioButtonComponent };
