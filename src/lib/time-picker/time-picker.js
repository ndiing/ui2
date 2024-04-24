import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDTimePicker extends MDElement {
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
        this.classList.add("md-time-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-time-picker");
    }

    updated(changedProperties) {}
}

customElements.define("md-time-picker", MDTimePicker);

export { MDTimePicker };
