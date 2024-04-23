import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDColorField extends MDElement {
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
        this.classList.add("md-color-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-color-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-color-field", MDColorField);

export { MDColorField };
