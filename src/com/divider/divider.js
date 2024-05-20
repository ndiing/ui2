import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
class MDDivider extends MDElement {
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
        await this.updateComplete;
        this.classList.add("md-divider");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-divider");
    }

    updated(changedProperties) {}
}
customElements.define("md-divider", MDDivider);
export { MDDivider };