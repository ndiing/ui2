import { html, nothing } from "lit";
import { MDElement } from "../element/element.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Material Design Floating Action Button (FAB) element.
 * @extends MDElement
 */
class MDFabElement extends MDElement {
    /**
     * Static properties for defining behavior and attributes.
     * @property {String} label - Label text for the FAB.
     * @property {String} icon - Icon to display within the FAB.
     */
    static properties = {
        ...MDElement.properties,
        label: { type: String },
        icon: { type: String },
    };

    /**
     * Variants available for the FAB.
     * @type {String[]}
     */
    variants = ["small", "large", "surface", "secondary", "tertiary", "extended", "unelevated"];

    /**
     * Constructs an instance of MDFabElement.
     */
    constructor() {
        super();

        // Initialize ripple effect for the FAB
        this.ripple = new MDRippleController(this, {});
    }

    /**
     * Renders the FAB with optional icon and label.
     * @returns {TemplateResult} Rendered template of the FAB.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.icon ? html`<md-icon class="md-fab__icon">${this.icon}</md-icon>` : nothing}
            ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing}
        `;
    }
}

// Define the custom element 'md-fab' using MDFabElement class
customElements.define("md-fab", MDFabElement);

export { MDFabElement };
