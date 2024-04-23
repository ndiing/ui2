import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDDatetimeField extends MDElement {
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
        this.classList.add("md-datetime-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-datetime-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-datetime-field", MDDatetimeField);

export { MDDatetimeField };
