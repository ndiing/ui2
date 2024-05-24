import { MDElement } from "../element/element";
import { html, nothing } from "lit";

class MDComponent extends MDElement {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html``
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.classList.add("md-component");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-component");
    }

    updated(changedProperties) {}
}

customElements.define("md-component", MDComponent);

export { MDComponent };
