import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";

/**
 * MDBadgeComponent is a custom badge element used to display a label with a limit.
 * @extends MDComponent
 * @tagname md-badge
 */
class MDBadgeComponent extends MDComponent {
    /**
     * @property {Number} label - The numeric label to display in the badge.
     * @property {Number} limit - The upper limit for the label before appending a "+".
     */
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
        return this.label ? html`<div class="md-badge__label">${this.label > this.limit ? this.limit + '+' : this.label}</div>` : nothing;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-badge");
    }
}

customElements.define("md-badge", MDBadgeComponent);

export { MDBadgeComponent };
