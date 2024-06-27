import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * MDChipComponent is a class that extends MDComponent and represents a custom chip component.
 * This component provides various visual and interactive states based on its properties.
 * @extends MDComponent
 * @tagname md-chip
 * @fires MDChipComponent#onChipActionClick - Fires when the chip action button is clicked.
 */
class MDChipComponent extends MDComponent {
    /**
     * @property {String} variant - The variant type of the chip (e.g., "assist", "filter", "input", "suggestion").
     * @property {String} avatar - The URL of the avatar image to be displayed in the chip.
     * @property {String} icon - The icon to be displayed in the chip.
     * @property {String} label - The text label of the chip.
     * @property {String} action - The icon for the action button in the chip.
     * @property {Boolean} selected - Whether the chip is in a selected state.
     * @property {Boolean} disabled - Whether the chip is disabled.
     */
    static properties = {
        variant: { type: String },
        avatar: { type: String },
        icon: { type: String },
        label: { type: String },
        action: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    variants = ["assist", "filter", "input", "suggestion"];

    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            clipped: true,
        });
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.selected ? html`<div class="md-icon md-chip__icon">check</div>` : nothing}
            ${!this.selected && this.avatar ? html`<md-image class="md-chip__avatar" .src="${this.avatar}" .alt="${"Avatar"}" .variant="${"rounded"}"></md-image>` : nothing}
            ${!this.selected && this.icon ? html`<div class="md-icon md-chip__icon">${this.icon}</div>` : nothing}
            <div class="md-chip__label">${this.label}</div>
            ${this.action ? html`<md-icon-button class="md-chip__action" .icon="${this.action}" @click="${this.handleChipActionClick}"></md-icon-button>` : nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-chip");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-chip--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }

        if (changedProperties.has("disabled")) {
            if (this.disabled) {
                this.setAttribute("aria-disabled", "true");
                this.setAttribute("tabindex", "-1");
            } else {
                this.removeAttribute("aria-disabled");
                this.removeAttribute("tabindex");
            }
        }
    }

    handleChipActionClick(event) {
        this.emit("onChipActionClick", event);
    }
}

customElements.define("md-chip", MDChipComponent);

export { MDChipComponent };
