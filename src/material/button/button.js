import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Button component that extends MDComponent.
 * Provides button functionality with optional icon and ripple effect.
 * @extends MDComponent
 */
class MDButtonComponent extends MDComponent {
    /**
     * Static properties for MDButtonComponent.
     * @type {Object}
     * @property {String} variant - The variant type of the button.
     * @property {String} type - The type attribute of the button.
     * @property {String} icon - The icon name for the button.
     * @property {String} label - The label text for the button.
     * @property {Boolean} selected - Reflects the selected state of the button.
     */
    static properties = {
        variant: { type: String },
        type: { type: String },
        icon: { type: String },
        label: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    /**
     * Array of valid button variants.
     * @type {Array<String>}
     */
    variants = ["elevated", "filled", "tonal", "outlined", "icon-right"];

    /**
     * Constructs an instance of MDButtonComponent.
     * Initializes MDRippleController for ripple effects.
     */
    constructor() {
        super();

        this.type = "button";

        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-button__native",
            clipped: true,
        });
    }

    /**
     * Renders the HTML template for the button.
     * @returns {import("lit").TemplateResult} The rendered template result.
     */
    render() {
        /* prettier-ignore */
        return html`
            <button class="md-button__native" .type="${this.type}">
                ${this.icon ? html`<md-icon class="md-button__icon">${this.icon}</md-icon>` : nothing}
                <div class="md-button__label">${this.label}</div>
            </button>
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-button' class to the component's class list.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button");
    }

    /**
     * Callback invoked when the element's properties are updated.
     * Toggles variant classes based on the 'variant' property.
     * @param {Map<String, any>} changedProperties - The Map of changed properties.
     */
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
