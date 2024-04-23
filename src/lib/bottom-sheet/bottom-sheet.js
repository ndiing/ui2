import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDBottomSheet extends MDElement {
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
        this.classList.add("md-bottom-sheet");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-sheet");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-bottom-sheet", MDBottomSheet);

export { MDBottomSheet };
