import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDTimeField extends MDElement {
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
        this.classList.add("md-time-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-time-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-time-field", MDTimeField);

export { MDTimeField };
