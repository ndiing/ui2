import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * Tambahkan deskripsi
 * @extends MDSheetComponent
 * @tagname md-menu
 * @fires MDMenuComponent#onMenuTreeItemClick -
 */
class MDMenuComponent extends MDSheetComponent {
    /**
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDTreeComponent.properties,
    };

    /**
     * Tambahkan deskripsi
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
     * Tambahkan deskripsi
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
