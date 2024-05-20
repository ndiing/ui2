import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
class MDLayout extends MDElement {
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
        this.classList.add("md-layout");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-layout");
    }

    updated(changedProperties) {}
}
customElements.define("md-layout", MDLayout);
export { MDLayout };
