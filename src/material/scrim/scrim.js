import { MDComponent } from "../component/component.js";

/**
 * Scrim component that extends MDComponent.
 * Provides functionality to show, hide, and toggle the scrim.
 * @extends MDComponent
 */
class MDScrimComponent extends MDComponent {
    /**
     * Static properties for MDScrimComponent.
     * @type {Object}
     * @property {Boolean} open - Reflects the open state of the scrim.
     */
    static properties = {
        ...MDComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-scrim' class.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-scrim");
    }

    /**
     * Shows the scrim by setting the open property to true.
     */
    show() {
        this.open = true;
    }

    /**
     * Hides the scrim by setting the open property to false.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the scrim's visibility.
     * If the scrim is open, it will be closed, and vice versa.
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-scrim", MDScrimComponent);

export { MDScrimComponent };
