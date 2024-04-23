import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDSegmentedButton extends MDElement {
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
        this.classList.add("md-segmented-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-segmented-button");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-segmented-button", MDSegmentedButton);

export { MDSegmentedButton };
