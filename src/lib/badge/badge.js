import { MDElement } from "../element/element";
import { html, nothing } from "lit";
class MDBadge extends MDElement {
    static get properties() {
        return {
            label: { type: Number },
            max: { type: Number },
        };
    }

    constructor() {
        super();
        this.max = 999;
    }

    render() {
        // prettier-ignore
        return this.label?html`<div class="md-badge__label">${this.label>this.max?this.max+'+':this.label}</div>`:nothing
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-badge");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-badge");
    }

    updated(changedProperties) {}
}
customElements.define("md-badge", MDBadge);
export { MDBadge };
