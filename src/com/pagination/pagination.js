import { MDElement } from "../element/element";
import { html } from "lit";

class MDPagination extends MDElement {
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
        this.classList.add("md-pagination");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-pagination");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}
}

customElements.define("md-pagination", MDPagination);

export { MDPagination };
