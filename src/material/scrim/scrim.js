import { MDComponent } from "../component/component.js";

/**
 * Tambahkan deskripsi
 * @extends MDComponent
 * @tagname md-scrim
 */
class MDScrimComponent extends MDComponent {
    /**
     * @property {Boolean} open - Tambahkan deskripsi
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
     * Tambahkan deskripsi
     */
    show() {
        this.open = true;
    }

    /**
     * Tambahkan deskripsi
     */
    close() {
        this.open = false;
    }

    /**
     * Tambahkan deskripsi
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
