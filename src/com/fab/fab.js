import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";

class MDFabComponent extends MDElement {
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            ui: { type: String },
        };
    }

    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.icon?html`<md-icon class="md-fab__icon">${this.icon}</md-icon>`:nothing}
            ${this.label?html`<div class="md-fab__label">${this.label}</div>`:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
        await this.updateComplete;
        this.ripple = new MDRippleModule(this, {});
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-fab");
        await this.updateComplete;
        this.ripple.destroy();
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["small", "large", "extended", "surface", "secondary", "tertiary", "unelevated"].forEach((ui) => {
                this.classList.remove("md-fab--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-fab--" + ui);
                });
            }
        }
    }
}

customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };
