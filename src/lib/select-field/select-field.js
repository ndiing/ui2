import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDSelectField extends MDElement {
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
        this.classList.add("md-select-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-select-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-select-field", MDSelectField);

export { MDSelectField };
