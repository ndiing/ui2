import { MDElement } from "../element/element";
import { html } from "lit";

class MDNestedList extends MDElement {
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
        this.classList.add("md-nested-list");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-nested-list");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}
}

customElements.define("md-nested-list", MDNestedList);

export { MDNestedList };
