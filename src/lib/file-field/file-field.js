import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDFileField extends MDElement {
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
        this.classList.add("md-file-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-file-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-file-field", MDFileField);

export { MDFileField };
