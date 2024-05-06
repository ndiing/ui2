import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDDatePicker extends MDElement {
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
        this.classList.add("md-date-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-date-picker");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-date-picker", MDDatePicker);

export { MDDatePicker };
