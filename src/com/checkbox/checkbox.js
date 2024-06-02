import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";

class MDCheckboxComponent extends MDElement {
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

    constructor() {
        super();
    }

    /* prettier-ignore */

    render() {
        return html`
            <label for="_" class="md-checkbox__a11y"></label>
            <input
                id="_"
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
                class="md-checkbox__native"
                @input="${this.handleCheckboxNativeInput}"
                @invalid="${this.handleCheckboxNativeInvalid}"
                @reset="${this.handleCheckboxNativeReset}"
            />
            <div class="md-checkbox__track">
                <div class="md-checkbox__thumb"></div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-checkbox");
        await this.updateComplete;
        this.ripple = new MDRippleModule(this.checkboxTrack, {
            button: this.checkboxNative,
            containment: false,
            size: (40 / (18 - 2 * 2)) * 100,
            fadeout: true,
        });
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-checkbox");
        await this.updateComplete;
        this.ripple.destroy();
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete;
        this.defaultValue = this.value;
        this.defaultChecked = this.checked;
        this.defaultIndeterminate = this.indeterminate;
    }

    updated(changedProperties) {}

    get checkboxNative() {
        return this.querySelector(".md-checkbox__native");
    }

    get checkboxTrack() {
        return this.querySelector(".md-checkbox__track");
    }

    handleCheckboxNativeInput(event) {
        this.checked = this.checkboxNative.checked;
        this.indeterminate = this.checkboxNative.indeterminate;
        this.emit("onCheckboxNativeInput", event);
    }

    handleCheckboxNativeInvalid(event) {
        this.emit("onCheckboxNativeInvalid", event);
    }

    handleCheckboxNativeReset(event) {
        this.checkboxNative.value = this.defaultValue;
        this.checkboxNative.checked = this.defaultChecked;
        this.checkboxNative.indeterminate = this.defaultIndeterminate;
        this.checked = this.checkboxNative.checked;
        this.indeterminate = this.checkboxNative.indeterminate;
        this.emit("onCheckboxNativeReset", event);
    }
}

customElements.define("md-checkbox", MDCheckboxComponent);

export { MDCheckboxComponent };
