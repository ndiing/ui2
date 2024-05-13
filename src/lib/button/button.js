import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { Ripple } from "../ripple/ripple";
class MDButton extends MDElement {
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            type: { type: String },
            ui: { type: String },
            selected: { type: Boolean, reflect: true },
        };
    }

    get buttonNative() {
        return this.querySelector(".md-button__native");
    }

    constructor() {
        super();
        this.type = "button";
    }

    render() {
        // prettier-ignore
        return html`
            <button class="md-button__native" .type="${this.type}"></button>
            ${this.icon?html`<md-icon class="md-button__icon">${this.icon}</md-icon>`:nothing}
            <div class="md-button__label">${this.label}</div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
        await this.updateComplete;
        this.ripple = new Ripple(this, { button: this.buttonNative, inverse: this.ui === "filled" });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-button");
        this.ripple?.destroy();
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove("md-button--filled");
            this.classList.remove("md-button--filled-tonal");
            this.classList.remove("md-button--outlined");

            if (this.ui) {
                this.classList.add("md-button--" + this.ui);
            }
        }
    }
}
customElements.define("md-button", MDButton);
export { MDButton };
