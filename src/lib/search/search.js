import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDSearch extends MDElement {
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
        this.classList.add("md-search");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-search");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-search", MDSearch);

export { MDSearch };
