import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDMonthField extends MDElement {
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
        this.classList.add("md-month-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-month-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-month-field", MDMonthField);

export { MDMonthField };
