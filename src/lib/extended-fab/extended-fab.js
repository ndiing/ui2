import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDExtendedFab extends MDElement {
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
        this.classList.add("md-extended-fab");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-extended-fab");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-extended-fab", MDExtendedFab);

export { MDExtendedFab };
