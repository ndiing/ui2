import { MDCardComponent } from "../card/card.js";

/**
 * Tambahkan deskripsi
 * @extends MDCardComponent
 * @tagname md-sheet
 * @fires MDSheetComponent#onSheetScrimClick -
 */
class MDSheetComponent extends MDCardComponent {
    /**
     * @property {Boolean} open - Tambahkan deskripsi
     */
    static properties = {
        ...MDCardComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    variants = ["north", "east", "south", "west", "modal"];

    connectedCallback() {
        super.connectedCallback();

        this.style.setProperty("--md-comp-sheet-animation", "none");

        this.classList.add("md-card");
        this.classList.add("md-sheet");
    }

    /**
     * Tambahkan deskripsi
     */
    showModal() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");

        this.scrim = document.createElement("md-scrim");

        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);

        this.handleSheetScrimClick = this.handleSheetScrimClick.bind(this);
        this.scrim.on("click", this.handleSheetScrimClick);

        this.scrim.show();

        this.open = true;
    }

    handleSheetScrimClick(event) {
        this.close();

        this.emit("onSheetScrimClick", event);
    }

    /**
     * Tambahkan deskripsi
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");

        this.open = true;
    }

    /**
     * Tambahkan deskripsi
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");

        if (this.scrim) {
            this.scrim.off("click", this.handleSheetScrimClick);
            this.scrim.remove();
            this.scrim = null;
        }

        this.open = false;
    }

    /**
     * Tambahkan deskripsi
     */
    toggle(...args) {
        if (this.open) {
            this.close();
        } else {
            this.show(...args);
        }
    }
}

customElements.define("md-sheet", MDSheetComponent);

export { MDSheetComponent };
