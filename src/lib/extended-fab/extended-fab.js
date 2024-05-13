import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { Ripple } from "../ripple/ripple";
class MDExtendedFab extends MDElement {
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
        };
    }

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-extended-fab__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-extended-fab__label">${this.label}</div>`:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-extended-fab");
        this.ripple = new Ripple(this, {});
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-extended-fab");
        this.ripple.destroy();
    }
}
customElements.define("md-extended-fab", MDExtendedFab);
export { MDExtendedFab };
