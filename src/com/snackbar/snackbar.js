import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
class MDSnackbar extends MDElement {
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
        await this.updateComplete;
        this.classList.add("md-snackbar");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-snackbar");
    }

    updated(changedProperties) {}
}
customElements.define("md-snackbar", MDSnackbar);
export { MDSnackbar };
