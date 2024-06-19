import { html, nothing } from "lit";
import { MDElement } from "../element/element.js";

/**
 * Class representing a custom badge element.
 * @extends MDElement
 */
class MDBadgeElement extends MDElement {
    /**
     * Properties of the MDBadgeElement.
     * @type {Object}
     * @property {Number} label - The numerical label of the badge.
     * @property {Number} limit - The maximum numerical value to display before showing a "+".
     */
    static properties = {
        ...MDElement.properties,
        label: { type: Number },
        limit: { type: Number },
    };

    /**
     * Creates an instance of MDBadgeElement.
     */
    constructor() {
        super();

        /** @type {number} */
        this.limit = 999;
    }

    /**
     * Renders the badge element.
     * @return {import('lit').TemplateResult|typeof nothing} The template result or nothing if no label.
     */
    render() {
        /* prettier-ignore */
        return this.label ? html`<div class="md-badge__label">${this.label > this.limit ? this.limit + '+' : this.label}</div>` : nothing;
    }
}

/**
 * Defines a custom element 'md-badge'.
 */
customElements.define("md-badge", MDBadgeElement);

export { MDBadgeElement };
