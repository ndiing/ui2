import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDChip extends MDElement {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chip");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-chip");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-chip", MDChip);

export { MDChip };
