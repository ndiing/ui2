import { html, nothing } from "lit";
import { MDElement } from "../element/element.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * MDChipElement extends MDElement and represents a chip component.
 * It supports rendering different elements based on properties like avatar, icon, label, and action.
 */
class MDChipElement extends MDElement {
    /**
     * @property {Object} properties - Properties inherited from MDElement and specific to MDChipElement.
     * @property {String} properties.avatar - The URL for the avatar image.
     * @property {String} properties.icon - The icon to display.
     * @property {String} properties.label - The text label of the chip.
     * @property {String} properties.action - The action icon for the chip.
     * @property {Boolean} properties.selected - Whether the chip is selected.
     * @property {String} properties.routerLink - The router link for the chip.
     */
    static properties = {
        ...MDElement.properties,
        avatar: { type: String },
        icon: { type: String },
        label: { type: String },
        action: { type: String },
        selected: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
    };

    /**
     * Constructs an instance of MDChipElement.
     */
    constructor() {
        super();

        // Initialize ripple effect for the chip.
        this.ripple = new MDRippleController(this, {});
    }

    /**
     * Renders the chip based on its properties.
     * @returns {TemplateResult} HTML template result for the chip.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.selected ? html`<md-icon class="md-chip__icon">check</md-icon>` : nothing}
            ${!this.selected && this.avatar ? html`<md-image class="md-chip__avatar" .src="${this.avatar}" .variant="${"rounded"}"></md-image>` : nothing}
            ${!this.selected && this.icon ? html`<md-icon class="md-chip__icon">${this.icon}</md-icon>` : nothing}
            ${this.label ? html`<div class="md-chip__label">${this.label}</div>` : nothing}
            ${this.action ? html`<md-icon-button @click="${this.handleChipIconButtonClick}" class="md-chip__action" .icon="${this.action}"></md-icon-button>` : nothing}
        `;
    }

    /**
     * Handles click events on the chip's action button.
     * @param {MouseEvent} event - The click event object.
     */
    handleChipIconButtonClick(event) {
        this.emit("onChipIconButtonClick", event);
    }
}

customElements.define("md-chip", MDChipElement);

export { MDChipElement };
