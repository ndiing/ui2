import { MDPopperController } from "../popper/popper.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Tambahkan deskripsi
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
     * Tambahkan deskripsi
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * Tambahkan deskripsi
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * Tambahkan deskripsi
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
