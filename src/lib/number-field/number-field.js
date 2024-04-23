import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDNumberField extends MDElement {
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
        this.classList.add("md-number-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-number-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-number-field", MDNumberField);

export { MDNumberField };
