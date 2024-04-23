import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDNavigationBar extends MDElement {
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
        this.classList.add("md-navigation-bar");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-bar");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-navigation-bar", MDNavigationBar);

export { MDNavigationBar };
