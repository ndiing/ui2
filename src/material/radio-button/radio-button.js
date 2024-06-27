import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * MDRadioButtonComponent is a custom radio button element with support for ripple effects.
 * @extends MDComponent
 * @tagname md-radio-button
 * @fires MDRadioButtonComponent#onRadioButtonNativeInput - Fired when the radio button's native input value changes.
 * @fires MDRadioButtonComponent#onRadioButtonNativeReset - Fired when the radio button's native input is reset.
 */
class MDRadioButtonComponent extends MDComponent {
    /**
     * @property {Boolean} checked - Indicates whether the radio button is checked.
     * @property {Boolean} defaultChecked - The default checked state of the radio button.
     * @property {Boolean} disabled - Indicates whether the radio button is disabled.
     * @property {Boolean} indeterminate - Indicates whether the radio button is in an indeterminate state.
     * @property {String} value - The value associated with the radio button.
     * @property {String} name - The name attribute for the radio button.
     * @property {Object} form - The form element associated with the radio button.
     * @property {String} type - The type of the radio button, typically "radio".
     */
    static properties = {
        checked: { type: Boolean },
        defaultChecked: { type: Boolean },
        disabled: { type: Boolean },
        indeterminate: { type: Boolean },
        value: { type: String },
        name: { type: String },
        form: { type: Object },
        type: { type: String },
    };

    constructor() {
        super();

        this.type = "radio";

        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-radio-button__native",
            containerSelector: ".md-radio-button__track",
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    renderNative() {
        /* prettier-ignore */
        return html`
            <input 
                .type="${this.type}" 
                class="md-radio-button__native"
                .checked="${ifDefined(this.checked)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .disabled="${ifDefined(this.disabled)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .name="${ifDefined(this.name)}"
                .form="${ifDefined(this.form)}"
                @input="${this.handleRadioButtonNativeInput}"
                @reset="${this.handleRadioButtonNativeReset}"
            >
        `;
    }

    renderTrack() {
        /* prettier-ignore */
        return html`
            <div class="md-radio-button__track"><div class="md-radio-button__thumb"></div></div>
        `;
    }

    renderContainer() {
        /* prettier-ignore */
        return html`
            <div class="md-radio-button__container">
                ${this.renderNative()}
                ${this.renderTrack()}
            </div>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            <label class="md-radio-button__inner">
                <div class="md-radio-button__label">${this.type}</div>
                ${this.renderContainer()}
            </label>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.defaultValue = this.value || "on";
        this.defaultChecked = this.checked;
        this.defaultIndeterminate = this.indeterminate;

        this.classList.add("md-radio-button");
    }

    handleRadioButtonNativeInput(event) {
        const native = event.currentTarget;

        this.value = native.value;
        this.checked = native.checked;
        this.indeterminate = native.indeterminate;

        this.emit("onRadioButtonNativeInput", event);
    }

    handleRadioButtonNativeReset(event) {
        const native = event.currentTarget;

        native.value = this.defaultValue;
        native.checked = this.defaultChecked;
        native.indeterminate = this.defaultIndeterminate;

        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
        this.indeterminate = this.defaultIndeterminate;

        this.emit("onRadioButtonNativeReset", event);
    }
}

customElements.define("md-radio-button", MDRadioButtonComponent);

export { MDRadioButtonComponent };
