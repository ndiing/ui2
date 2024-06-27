import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * MDSwitchComponent is a custom switch element with support for ripple effects.
 * @extends MDComponent
 * @tagname md-switch
 * @fires MDSwitchComponent#onSwitchNativeInput - Fired when the switch's native input value changes.
 * @fires MDSwitchComponent#onSwitchNativeReset - Fired when the switch's native input is reset.
 */
class MDSwitchComponent extends MDComponent {
    /**
     * @property {Boolean} checked - Indicates whether the switch is checked.
     * @property {Boolean} defaultChecked - The default checked state of the switch.
     * @property {Boolean} disabled - Indicates whether the switch is disabled.
     * @property {Boolean} indeterminate - Indicates whether the switch is in an indeterminate state.
     * @property {String} value - The value associated with the switch.
     * @property {String} name - The name attribute for the switch.
     * @property {Object} form - The form element associated with the switch.
     * @property {String} type - The type of the switch, typically "checkbox".
     * @property {Array} icons - An array of icons to be displayed based on the switch state.
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
        icons: { type: Array },
    };

    constructor() {
        super();

        this.type = "checkbox";

        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-switch__native",
            containerSelector: ".md-switch__thumb",
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
                class="md-switch__native"
                .checked="${ifDefined(this.checked)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .disabled="${ifDefined(this.disabled)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .name="${ifDefined(this.name)}"
                .form="${ifDefined(this.form)}"
                @input="${this.handleSwitchNativeInput}"
                @reset="${this.handleSwitchNativeReset}"
            >
        `;
    }

    renderTrack() {
        /* prettier-ignore */
        return html`
            <div class="md-switch__track"><div class="md-icon md-switch__thumb">${this.icons?.length ? this.icons[~~this.checked] : nothing}</div></div>
        `;
    }

    renderContainer() {
        /* prettier-ignore */
        return html`
            <div class="md-switch__container">
                ${this.renderNative()}
                ${this.renderTrack()}
            </div>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            <label class="md-switch__inner">
                <div class="md-switch__label">${this.type}</div>
                ${this.renderContainer()}
            </label>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.defaultValue = this.value || "on";
        this.defaultChecked = this.checked;
        this.defaultIndeterminate = this.indeterminate;

        this.classList.add("md-switch");
    }

    handleSwitchNativeInput(event) {
        const native = event.currentTarget;

        this.value = native.value;
        this.checked = native.checked;
        this.indeterminate = native.indeterminate;

        this.emit("onSwitchNativeInput", event);
    }

    handleSwitchNativeReset(event) {
        const native = event.currentTarget;

        native.value = this.defaultValue;
        native.checked = this.defaultChecked;
        native.indeterminate = this.defaultIndeterminate;

        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
        this.indeterminate = this.defaultIndeterminate;

        this.emit("onSwitchNativeReset", event);
    }
}

customElements.define("md-switch", MDSwitchComponent);

export { MDSwitchComponent };
