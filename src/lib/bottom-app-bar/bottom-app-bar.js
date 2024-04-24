import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDBottomAppBar extends MDElement {
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
        this.classList.add("md-bottom-app-bar");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-app-bar");
    }

    updated(changedProperties) {}
}

customElements.define("md-bottom-app-bar", MDBottomAppBar);

export { MDBottomAppBar };
