import { MDPopperController } from "../popper/popper.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a tooltip component that extends MDSheetComponent.
 * @extends MDSheetComponent
 * @tagname md-tooltip
 */
class MDTooltipComponent extends MDSheetComponent {
    variants = ["plain", "rich"];

    constructor() {
        super();

        this.popper = new MDPopperController(this, {});
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-tooltip");
    }

    /**
     * Shows the tooltip as a modal.
     * @param {HTMLElement} button - The button or element triggering the tooltip.
     * @param {Object} options - Options for positioning the tooltip.
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * Shows the tooltip.
     * @param {HTMLElement} button - The button or element triggering the tooltip.
     * @param {Object} options - Options for positioning the tooltip.
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * Sets the placement of the tooltip relative to the button.
     * @param {HTMLElement} button - The button or element triggering the tooltip.
     * @param {Object} options - Options for positioning the tooltip.
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            placements: ["below", "above", "after", "before", "north-east", "south-east", "south-west", "north-west", "center"],
            offset: 8,
            ...options,
        });
    }
}

customElements.define("md-tooltip", MDTooltipComponent);

export { MDTooltipComponent };
