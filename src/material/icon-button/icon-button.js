import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * @extends MDComponent
 * @tagname md-icon-button
 * @fires MDIconButtonComponent#onIconButtonClick -
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * @property {String} variant -
     * @property {String} icon -
     * @property {Boolean} selected -
     * @property {Boolean} disabled -
     */
    static properties = {
        variant: { type: String },
        icon: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    variants = ["filled", "tonal", "outlined", "toggle"];

    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    render() {
        /* prettier-ignore */
        return this.icon ? html`<md-icon class="md-icon-button__icon">${this.icon}</md-icon>` : nothing;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");

        this.on("click", this.handleIconButtonClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this.handleIconButtonClick);
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-icon-button--${variant}`, (this.variant ?? "").split(" ").includes(variant));
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

    handleIconButtonClick(event) {
        if (this.variant && this.variant.includes("toggle")) {
            this.selected = !this.selected;
        }

        this.emit("onIconButtonClick", event);
    }
}

customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };
