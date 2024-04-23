import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDMenu extends MDElement {
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
        this.classList.add("md-menu");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-menu");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-menu", MDMenu);

export { MDMenu };
