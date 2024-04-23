import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDExample extends MDElement {
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
        this.classList.add("md-example");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-example");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-example", MDExample);

export { MDExample };
