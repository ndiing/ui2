import { MDComponent } from "../component/component.js";

/**
 * @extends MDComponent
 * @tagname md-scrim
 */
class MDScrimComponent extends MDComponent {
    /**
     * @property {Boolean} open - 
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
     * 
     */
    show() {
        this.open = true;
    }

    /**
     * 
     */
    close() {
        this.open = false;
    }

    /**
     * 
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
