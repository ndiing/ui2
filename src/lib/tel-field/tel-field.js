import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDTelField extends MDElement {
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
        this.classList.add("md-tel-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tel-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-tel-field", MDTelField);

export { MDTelField };
