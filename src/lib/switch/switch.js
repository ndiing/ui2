import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ripple } from "../ripple/ripple";

class MDSwitch extends MDElement {
    static get properties() {
        return {
            type: { type: String },
            name: { type: String },
            required: { type: Boolean },
            readOnly: { type: Boolean },
            value: { type: String },
            defaultValue: { type: String },
            ui: { type: String },
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
                class="md-switch__native"
                .type="${ifDefined(this.type)}"
                .name="${ifDefined(this.name)}"
                .required="${ifDefined(this.required)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                @focus="${this.handleSwitchNativeFocus}"
                @blur="${this.handleSwitchNativeBlur}"
                @input="${this.handleSwitchNativeInput}"
                @invalid="${this.handleSwitchNativeInvalid}"
                @reset="${this.handleSwitchNativeReset}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb"></div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-switch");
        await this.updateComplete;
        this.ripple = new Ripple(this.switchThumb, { button: this.switchNative, containment: false, fadeout: true, size: (40 / this.switchThumb.clientWidth) * 100 });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-switch");
    }

    updated(changedProperties) {}

    get switchNative() {
        return this.querySelector(".md-switch__native");
    }

    get switchTrack() {
        return this.querySelector(".md-switch__track");
    }

    get switchThumb() {
        return this.querySelector(".md-switch__thumb");
    }

    handleSwitchNativeFocus(event) {
        this.emit("onSwitchNativeFocus", event);
    }

    handleSwitchNativeBlur(event) {
        this.emit("onSwitchNativeBlur", event);
    }

    handleSwitchNativeInput(event) {
        this.emit("onSwitchNativeInput", event);
    }

    handleSwitchNativeInvalid(event) {
        event.preventDefault();
        this.emit("onSwitchNativeInvalid", event);
    }

    handleSwitchNativeReset(event) {
        this.emit("onSwitchNativeReset", event);
    }
}
customElements.define("md-switch", MDSwitch);
export { MDSwitch };
