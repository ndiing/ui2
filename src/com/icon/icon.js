import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @class MDIconComponent
 * @extends MDElement
 */
class MDIconComponent extends MDElement {
    /**
     *
     */
    static get properties() {
        return {};
    }

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html``;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-icon");
        await this.updateComplete;
    }

    updated(changedProperties) {}
}

customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };
