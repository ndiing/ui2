import { MDComponent } from "../component/component.js";

/**
 * Represents a scrim component that extends MDComponent.
 * @extends MDComponent
 * @tagname md-scrim
 */
class MDScrimComponent extends MDComponent {
    /**
     * @property {Boolean} open - Indicates whether the scrim is currently open.
     */
    static properties = {
        ...MDComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-scrim");
    }

    /**
     * Shows the scrim by setting the `open` property to `true`.
     */
    show() {
        this.open = true;
    }

    /**
     * Closes the scrim by setting the `open` property to `false`.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the visibility of the scrim. If currently open, it closes; if closed, it opens.
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
