import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * MDMenuComponent is a class that extends MDSheetComponent and represents a menu component with tree-like structure.
 * This component supports interactions with menu items and dynamic positioning.
 * @extends MDSheetComponent
 * @tagname md-menu
 * @fires MDMenuComponent#onMenuTreeItemClick - Fires when a menu tree item is clicked.
 */
class MDMenuComponent extends MDSheetComponent {
    /**
     * Inherits properties from MDSheetComponent and MDTreeComponent.
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDTreeComponent.properties,
    };

    /**
     * Returns the body of the menu component, which contains a tree of menu items.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <md-tree
                class="md-menu__tree"
                .variant="${"plain"}"
                .list="${this.list}"
                @onTreeItemClick="${this.handleMenuTreeItemClick}"
            ></md-tree>
        `];
    }

    /**
     * Sets the body of the menu component.
     * @param {Object} value - The new body content for the menu.
     */
    set body(value) {
        this._body = value;
    }

    constructor() {
        super();
        this.popper = new MDPopperController(this, {});
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet");
        this.classList.add("md-menu");
    }

    handleMenuTreeItemClick(event) {
        this.close();
        this.emit("onMenuTreeItemClick", event);
    }

    /**
     * Shows the menu as a modal.
     * @param {HTMLElement} button - The button element that triggers the menu.
     * @param {Object} options - Options for positioning the menu.
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * Shows the menu.
     * @param {HTMLElement} button - The button element that triggers the menu.
     * @param {Object} options - Options for positioning the menu.
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * Sets the placement of the menu relative to the button.
     * @param {HTMLElement} button - The button element that triggers the menu.
     * @param {Object} options - Options for positioning the menu.
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            /* prettier-ignore */
            placements: [
                "top-start", "top-end", "top", 
                "below-start", "below-end", "below", 
                "bottom-start", "bottom-end", "bottom", 
                "above-start", "above-end", "above", 
                "left-start", "left-end", "left", 
                "after-start", "after-end", "after", 
                "right-start", "right-end", "right", 
                "before-start", "before-end", "before", 
                "center"
            ],
            ...options,
        });
    }
}

customElements.define("md-menu", MDMenuComponent);

export { MDMenuComponent };
