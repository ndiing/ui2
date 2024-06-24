import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Side Sheet component that extends MDSheetComponent.
 * Provides a variant for modal side sheets.
 * @extends MDSheetComponent
 */
class MDSideSheetComponent extends MDSheetComponent {
    /**
     * Array of valid side sheet variants.
     * @type {Array<String>}
     */
    variants = ["modal"];

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds necessary classes for the side sheet component.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-side-sheet");
    }
}

customElements.define("md-side-sheet", MDSideSheetComponent);

export { MDSideSheetComponent };
