import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
class MDIcon extends MDElement {
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
        this.classList.add("md-icon");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-icon");
    }

    updated(changedProperties) {}
}
customElements.define("md-icon", MDIcon);
export { MDIcon };
