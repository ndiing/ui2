import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

class MDBadgeComponent extends MDElement {
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
        return this.label ? (this.label > this.max ? this.max + "+" : this.label) : nothing;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-badge");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-badge");
        await this.updateComplete;
    }

    updated(changedProperties) {}
}

customElements.define("md-badge", MDBadgeComponent);

export { MDBadgeComponent };
