import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDSideSheet extends MDElement {
    static get properties() {
        return {};
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
        this.classList.add("md-side-sheet");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-side-sheet");
    }

    updated(changedProperties) {}
}

customElements.define("md-side-sheet", MDSideSheet);

export { MDSideSheet };
