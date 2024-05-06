import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDColorPicker extends MDElement {
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
        this.classList.add("md-color-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-color-picker");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-color-picker", MDColorPicker);

export { MDColorPicker };