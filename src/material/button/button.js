import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Tambahkan deskripsi
 * @extends MDComponent
 * @tagname md-button
 */
class MDButtonComponent extends MDComponent {
    /**
     * @property {String} variant - Tambahkan deskripsi
     * @property {String} type - Tambahkan deskripsi
     * @property {String} icon - Tambahkan deskripsi
     * @property {String} label - Tambahkan deskripsi
     * @property {Boolean} selected - Tambahkan deskripsi
     * @property {Boolean} disabled - Tambahkan deskripsi
     */
    static properties = {
        variant: { type: String },
        type: { type: String },
        icon: { type: String },
        label: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    variants = ["elevated", "filled", "tonal", "outlined", "icon-right"];

    constructor() {
        super();

        this.type = "button";

        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-button__native",
            clipped: true,
        });
    }

    render() {
        /* prettier-ignore */
        return html`
            <button class="md-button__native" .type="${this.type}">
                ${this.icon ? html`<md-icon class="md-button__icon">${this.icon}</md-icon>` : nothing}
                <div class="md-button__label">${this.label}</div>
            </button>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-button--${variant}`, (this.variant ?? "").split(" ").includes(variant));
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
}

customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };
