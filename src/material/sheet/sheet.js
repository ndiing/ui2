import { MDCardComponent } from "../card/card.js";

/**
 * Sheet component that extends MDCardComponent.
 * Provides functionality to show, hide, toggle, and handle modal sheets.
 * @extends MDCardComponent
 */
class MDSheetComponent extends MDCardComponent {
    /**
     * Static properties for MDSheetComponent.
     * @type {Object}
     * @property {Boolean} open - Reflects the open state of the sheet.
     */
    static properties = {
        ...MDCardComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    /**
     * Array of valid sheet variants.
     * @type {Array<String>}
     */
    variants = ["north", "east", "south", "west", "modal"];

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-card' and 'md-sheet' classes.
     */
    connectedCallback() {
        super.connectedCallback();

        this.style.setProperty("--md-comp-sheet-animation", "none");

        this.classList.add("md-card");
        this.classList.add("md-sheet");
    }

    /**
     * Shows the modal sheet by creating and displaying a scrim element.
     * Binds and handles click events on the scrim to close the sheet.
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

    /**
     * Handles click event on the scrim.
     * Closes the sheet and emits 'onSheetScrimClick' event.
     * @param {Event} event - The click event object.
     * @fires MDSheetComponent#onSheetScrimClick
     */
    handleSheetScrimClick(event) {
        this.close();

        this.emit("onSheetScrimClick", event);
    }

    /**
     * Shows the sheet by setting the open property to true.
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");

        this.open = true;
    }

    /**
     * Hides the sheet by removing the scrim and setting the open property to false.
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
     * Toggles the sheet's visibility.
     * If the sheet is open, it will be closed, and vice versa.
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
