import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Represents an icon button component that extends MDComponent.
 * Provides functionality for handling clicks and ripple effects.
 * @extends MDComponent
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * Static properties for MDIconButtonComponent.
     * @type {Object}
     * @property {String} variant - The variant type of the icon button.
     * @property {String} icon - The icon name for the icon button.
     * @property {Boolean} selected - Reflects the selected state of the icon button.
     */
    static properties = {
        variant: { type: String },
        icon: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    /**
     * Array of valid icon button variants.
     * @type {Array<String>}
     */
    variants = ["filled", "tonal", "outlined", "toggle"];

    /**
     * Constructs an instance of MDIconButtonComponent.
     * Initializes MDRippleController for ripple effects.
     */
    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    /**
     * Renders the HTML template for the icon button.
     * @returns {import("lit").TemplateResult} The rendered template result.
     */
    render() {
        /* prettier-ignore */
        return this.icon ? html`<md-icon class="md-icon-button__icon">${this.icon}</md-icon>` : nothing;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-icon-button' class to the component's class list.
     * Sets up click event listener.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");

        this.on("click", this.handleIconButtonClick);
    }

    /**
     * Callback invoked when the element is disconnected from the DOM.
     * Removes event listeners.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this.handleIconButtonClick);
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

    /**
     * Handles click event on the icon button.
     * Toggles 'selected' state if 'toggle' variant is present.
     * Emits 'onIconButtonClick' event.
     * @param {Event} event - The click event object.
     * @fires MDIconButtonComponent#onIconButtonClick
     */
    handleIconButtonClick(event) {
        if (this.variant && this.variant.includes("toggle")) {
            this.selected = !this.selected;
        }

        this.emit("onIconButtonClick", event);
    }
}

customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };
