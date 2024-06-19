import { html, nothing } from "lit";
import { MDElement } from "../element/element.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Material Design Icon Button element.
 * @extends MDElement
 */
class MDIconButtonElement extends MDElement {
    /**
     * Static properties for defining behavior and attributes.
     * @property {String} icon - Icon name or symbol displayed by the button.
     * @property {Boolean} selected - Indicates if the button is selected.
     *                                Reflects to an attribute.
     */
    static properties = {
        ...MDElement.properties,
        icon: { type: String },
        selected: { type: Boolean, reflect: true },
    };

    /**
     * Variants available for the icon button.
     * @type {String[]}
     */
    variants = ["filled", "tonal", "outlined", "toggle"];

    /**
     * Constructs an instance of MDIconButtonElement.
     */
    constructor() {
        super();

        // Initialize ripple effect for the icon button
        this.ripple = new MDRippleController(this, {
            clipped: false,
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    /**
     * Renders the icon button with an optional icon.
     * @returns {TemplateResult} Rendered template of the icon button.
     */
    render() {
        /* prettier-ignore */
        return this.icon ? html`<md-icon class="md-icon-button__icon">${this.icon}</md-icon>` : nothing;
    }

    /**
     * Lifecycle method called when the element is connected to the DOM.
     * Registers click event listener for toggle variant.
     */
    connectedCallback() {
        super.connectedCallback();

        this.handleIconButtonClick = this.handleIconButtonClick.bind(this);
        this.addEventListener("click", this.handleIconButtonClick);
    }

    /**
     * Lifecycle method called when the element is disconnected from the DOM.
     * Removes event listeners.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this.handleIconButtonClick);
    }

    /**
     * Handles click events on the icon button.
     * Toggles the 'selected' state if the 'toggle' variant is present.
     * @param {MouseEvent} event - The click event.
     * @fires MDIconButtonElement#onIconButtonClick
     */
    handleIconButtonClick(event) {
        if (this.allVariants.includes("toggle")) {
            this.selected = !this.selected;
        }
        this.emit("onIconButtonClick", event);
    }
}

// Define the custom element 'md-icon-button' using MDIconButtonElement class
customElements.define("md-icon-button", MDIconButtonElement);

export { MDIconButtonElement };
