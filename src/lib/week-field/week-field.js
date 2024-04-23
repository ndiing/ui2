import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDWeekField extends MDElement {
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
        this.classList.add("md-week-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-week-field");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-week-field", MDWeekField);

export { MDWeekField };
