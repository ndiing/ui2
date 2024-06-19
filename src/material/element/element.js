import { updateWhenLocaleChanges } from "@lit/localize";
import { LitElement } from "lit";

/**
 * Base class for Material Design elements using LitElement.
 */
class MDElement extends LitElement {
    /**
     * @property {String} variant - The current variant of the element.
     * @property {String} defaultVariant - The default variant to use when no specific variant is set.
     */
    static properties = {
        variant: { type: String },
        defaultVariant: { type: String },
    };

    /**
     * Array of supported variants for the element.
     * @type {String[]}
     */
    variants = [];

    /**
     * Retrieves all applied variants, combining `variant` and `defaultVariant`.
     * @returns {String[]} Array of all applied variants.
     */
    get allVariants() {
        return (this.variant ?? "").split(" ").concat((this.defaultVariant ?? "").split(" "));
    }

    constructor() {
        super();
        // Update element when locale changes
        updateWhenLocaleChanges(this);
    }

    connectedCallback() {
        super.connectedCallback();
        // Add the localName as a class when connected to the DOM
        this.classList.add(this.localName);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Remove the localName class when disconnected from the DOM
        this.classList.remove(this.localName);
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        // Update element classes based on variant changes
        if (changedProperties.has("variant") || changedProperties.has("defaultVariant")) {
            // Remove all variant classes
            this.variants.forEach((variant) => {
                this.classList.remove(`${this.localName}--${variant}`);
            });

            // Add classes for all variants
            this.allVariants.forEach((variant) => {
                if (variant) {
                    this.classList.add(`${this.localName}--${variant}`);
                }
            });
        }
    }

    /**
     * Overrides LitElement's default behavior to render in the element's own shadow DOM.
     * @returns {this} The element itself.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Emits a custom event from the element.
     * @param {string} type - The type of the event.
     * @param {*} detail - Optional detail to include with the event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.dispatchEvent(event);
    }
}

export { MDElement };
