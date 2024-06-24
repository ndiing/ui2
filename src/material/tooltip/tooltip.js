import { MDPopperController } from "../popper/popper.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * MDTooltipComponent provides a tooltip component that displays additional information
 * when hovering over an element.
 * @extends MDSheetComponent
 */
class MDTooltipComponent extends MDSheetComponent {
    /**
     * Variants available for the tooltip component.
     * @type {Array.<String>}
     */
    variants = ["plain", "rich"];

    /**
     * Initializes the tooltip component and sets up the popper for positioning.
     */
    constructor() {
        super();

        /**
         * Popper controller instance used for positioning the tooltip.
         * @type {MDPopperController}
         */
        this.popper = new MDPopperController(this, {});
    }

    /**
     * Lifecycle method called when the element is connected to the DOM.
     * Sets up initial styles and adds necessary classes for the tooltip component.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-tooltip");
    }

    /**
     * Displays the tooltip relative to the provided button element with specified options.
     * @param {HTMLElement} button - The button or element to which the tooltip is anchored.
     * @param {Object} options - Additional options for configuring the tooltip's behavior.
     * @param {Array.<String>} [options.placements=["below", "above", "after", "before", "north-east", "south-east", "south-west", "north-west"]] - List of possible placements for the tooltip relative to the button.
     * @param {Number} [options.offset=8] - Offset value in pixels for adjusting the tooltip's position.
     */
    show(button, options) {
        super.show();

        this.popper.setPlacement(button, {
            placements: ["below", "above", "after", "before", "north-east", "south-east", "south-west", "north-west", "center"],
            offset: 8,
            ...options,
        });
    }
}

customElements.define("md-tooltip", MDTooltipComponent);

export { MDTooltipComponent };
