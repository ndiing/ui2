import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDTextareaField extends MDElement {
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
        this.classList.add("md-textarea-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-textarea-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-textarea-field", MDTextareaField);

export { MDTextareaField };
