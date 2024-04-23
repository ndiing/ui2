import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDSearchField extends MDElement {
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
        this.classList.add("md-search-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-search-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-search-field", MDSearchField);

export { MDSearchField };
