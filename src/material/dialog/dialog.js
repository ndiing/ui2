import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Dialog component that extends MDSheetComponent.
 * Provides functionality to show, hide, and handle modal dialogs with additional animations.
 * @extends MDSheetComponent
 */
class MDDialogComponent extends MDSheetComponent {
    /**
     * Array of valid dialog variants.
     * @type {Array<String>}
     */
    variants = ["full"];

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds necessary classes and sets initial dialog animation property.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-dialog");
    }

}

customElements.define("md-dialog", MDDialogComponent);

export { MDDialogComponent };
