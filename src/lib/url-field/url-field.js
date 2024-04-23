import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDUrlField extends MDElement {
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
        this.classList.add("md-url-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-url-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-url-field", MDUrlField);

export { MDUrlField };
