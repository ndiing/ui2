import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDProgressIndicator extends MDElement {
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
        this.classList.add("md-progress-indicator");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-progress-indicator");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-progress-indicator", MDProgressIndicator);

export { MDProgressIndicator };
