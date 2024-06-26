import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @extends MDComponent
 * @tagname md-chip
 * @fires MDChipComponent#onChipActionClick - 
 */
class MDChipComponent extends MDComponent {
    /**
     * @property {String} variant - 
     * @property {String} avatar - 
     * @property {String} icon - 
     * @property {String} label - 
     * @property {String} action - 
     * @property {Boolean} selected - 
     * @property {Boolean} disabled - 
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
            ${this.selected ? html`<md-icon class="md-chip__icon">check</md-icon>` : nothing}
            ${!this.selected&&this.avatar ? html`<md-image class="md-chip__avatar" .src="${this.avatar}" .alt="${"Avatar"}" .variant="${"rounded"}"></md-image>` : nothing}
            ${!this.selected&&this.icon ? html`<md-icon class="md-chip__icon">${this.icon}</md-icon>` : nothing}
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