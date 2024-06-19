import { html, nothing } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Class representing a custom button element.
 * @extends MDElement
 */
class MDButtonElement extends MDElement {
    /**
     * Properties of the MDButtonElement.
     * @type {Object}
     * @property {String} label - The label text of the button.
     * @property {String} icon - The icon name to display inside the button.
     * @property {String} type - The type attribute of the button.
     * @property {Boolean} selected - The selected state of the button.
     */
    static properties = {
        ...MDElement.properties,
        label: { type: String },
        icon: { type: String },
        type: { type: String },
        selected: { type: Boolean, reflect: true },
    };

    /**
     * Variants of the MDButtonElement.
     * @type {Array<String>}
     */
    variants = ["elevated", "filled", "tonal", "outlined"];

    /**
     * Creates an instance of MDButtonElement.
     */
    constructor() {
        super();

        /**
         * Ripple controller for the button element.
         * @type {MDRippleController}
         */
        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-button__native",
        });

        /** @type {string} */
        this.type = "button";
    }

    /**
     * Renders the button element.
     * @return {import('lit').TemplateResult} The template result.
     */
    render() {
        /* prettier-ignore */
        return html`
            <button 
                class="md-button__native"
                .type="${ifDefined(this.type)}"
            >
                ${this.icon ? html`<md-icon class="md-button__icon">${this.icon}</md-icon>` : nothing}
                ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
            </button>
        `;
    }
}

/**
 * Defines a custom element 'md-button'.
 */
customElements.define("md-button", MDButtonElement);

export { MDButtonElement };
