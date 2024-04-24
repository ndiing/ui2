import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDFab extends MDElement {
    static get properties() {
        return { icon: { type: String }, ui: { type: String } };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-fab__icon">${this.icon}</div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-fab");
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            if (this.ui) {
                this.classList.add("md-fab--" + this.ui);
            } else {
                this.classList.add("md-fab--small");
                this.classList.add("md-fab--large");
            }
        }
    }
}
customElements.define("md-fab", MDFab);
export { MDFab };
