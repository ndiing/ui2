import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a side sheet component that extends MDSheetComponent.
 * @extends MDSheetComponent
 * @tagname md-side-sheet
 */
class MDSideSheetComponent extends MDSheetComponent {
    /**
     * @property {Array} variants - Variants of the side sheet.
     */
    variants = ["modal"];

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-side-sheet");
    }
}

customElements.define("md-side-sheet", MDSideSheetComponent);

export { MDSideSheetComponent };
