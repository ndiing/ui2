import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDCard extends MDElement {
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
        this.classList.add("md-card");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-card");
    }

    updated(changedProperties) {}
}

customElements.define("md-card", MDCard);

export { MDCard };
