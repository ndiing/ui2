import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDCarousel extends MDElement {
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
        this.classList.add("md-carousel");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-carousel");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-carousel", MDCarousel);

export { MDCarousel };
