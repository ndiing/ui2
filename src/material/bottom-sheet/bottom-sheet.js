import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Bottom Sheet component that extends MDSheetComponent.
 * Provides a variant for modal bottom sheets.
 * @extends MDSheetComponent
 */
class MDBottomSheetComponent extends MDSheetComponent {
    /**
     * Array of valid bottom sheet variants.
     * @type {Array<String>}
     */
    variants = ["modal"];

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds necessary classes for the bottom sheet component.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-bottom-sheet");
    }
}

customElements.define("md-bottom-sheet", MDBottomSheetComponent);

export { MDBottomSheetComponent };
