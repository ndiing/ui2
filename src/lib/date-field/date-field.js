import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDDateField extends MDElement {
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
        this.classList.add("md-date-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-date-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-date-field", MDDateField);

export { MDDateField };
