import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDTooltip extends MDElement {
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
        this.classList.add("md-tooltip");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tooltip");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-tooltip", MDTooltip);

export { MDTooltip };
