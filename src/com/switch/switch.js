import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";

/**
 *
 * @extends MDElement
 */
class MDSwitchComponent extends MDElement {
    /**
     *
     * @property {String} [autocapitalize] -
     * @property {Boolean} [disabled] -
     * @property {String} [form] -
     * @property {String} [name] -
     * @property {Boolean} [required] -
     * @property {String} [type] -
     * @property {String} [value] -
     * @property {Boolean} [checked] -
     * @property {String} [defaultValue] -
     * @property {Boolean} [defaultChecked] -
     * @property {Boolean} [indeterminate] -
     * @property {Boolean} [defaultIndeterminate] -
     * @property {Array} [icons] -
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
            icons: { type: Array },
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
            <input
                type="checkbox"  
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
                class="md-switch__native"
                @input="${this.handleSwitchNativeInput}"
                @invalid="${this.handleSwitchNativeInvalid}"
                @reset="${this.handleSwitchNativeReset}"
            />
            <div class="md-switch__track">
                <div class="md-switch__thumb">${this.icons?.length?html`<md-icon class="md-switch__icon">${this.icons[~~this.checked]}</md-icon>`:nothing}</div>
            </div>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-switch");
        await this.updateComplete;
        this.ripple = new MDRippleModule(this.switchThumb, {
            button: this.switchNative,
            containment: false,
            fadeout: true,
            centered: true,
        });
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-switch");
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

    get switchNative() {
        return this.querySelector(".md-switch__native");
    }

    /**
     *
     */
    get switchTrack() {
        return this.querySelector(".md-switch__track");
    }

    /**
     *
     */
    get switchThumb() {
        return this.querySelector(".md-switch__thumb");
    }

    /**
     *
     * @fires MDSwitchComponent#onSwitchNativeInput
     */
    handleSwitchNativeInput(event) {
        this.checked = this.switchNative.checked;
        this.indeterminate = this.switchNative.indeterminate;
        this.emit("onSwitchNativeInput", event);
    }

    /**
     *
     * @fires MDSwitchComponent#onSwitchNativeInvalid
     */
    handleSwitchNativeInvalid(event) {
        this.emit("onSwitchNativeInvalid", event);
    }

    /**
     *
     * @fires MDSwitchComponent#onSwitchNativeReset
     */
    handleSwitchNativeReset(event) {
        this.switchNative.value = this.defaultValue;
        this.switchNative.checked = this.defaultChecked;
        this.switchNative.indeterminate = this.defaultIndeterminate;
        this.checked = this.switchNative.checked;
        this.indeterminate = this.switchNative.indeterminate;
        this.emit("onSwitchNativeReset", event);
    }
}

customElements.define("md-switch", MDSwitchComponent);

export { MDSwitchComponent };
