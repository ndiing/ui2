import { MDElement } from "../element/element";
import { html } from "lit";

class MDTemplate extends MDElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html``;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-template");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-template");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}
}

customElements.define("md-template", MDTemplate);

export { MDTemplate };
