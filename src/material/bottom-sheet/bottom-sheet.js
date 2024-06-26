import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a bottom sheet component that extends MDSheetComponent.
 * @extends MDSheetComponent
 * @tagname md-bottom-sheet
 */
class MDBottomSheetComponent extends MDSheetComponent {
    /**
     * @property {Array} variants - Variants of the bottom sheet.
     */
    variants = ["modal"];

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-bottom-sheet");
    }
}

customElements.define("md-bottom-sheet", MDBottomSheetComponent);

export { MDBottomSheetComponent };
