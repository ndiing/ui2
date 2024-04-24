import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDNavigationRail extends MDElement {
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
        this.classList.add("md-navigation-rail");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-rail");
    }

    updated(changedProperties) {}
}

customElements.define("md-navigation-rail", MDNavigationRail);

export { MDNavigationRail };
