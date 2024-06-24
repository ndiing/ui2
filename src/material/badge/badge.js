import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";

class MDBadgeComponent extends MDComponent {
    static properties = {
        label: { type: Number },
        limit: { type: Number },
    };

    constructor() {
        super();

        this.limit = 999;
    }

    render() {
        /* prettier-ignore */
        return this.label?html`<div class="md-badge__label">${this.label>this.limit?this.limit+'+':this.label}</div>`:nothing
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-badge");
    }
}

customElements.define("md-badge", MDBadgeComponent);

export { MDBadgeComponent };
