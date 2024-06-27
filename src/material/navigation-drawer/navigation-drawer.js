import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

/**
 * MDNavigationBarComponent is a class that extends MDSheetComponent and represents a navigation drawer component.
 * This component is used for side navigation within an application.
 * @extends MDSheetComponent
 * @tagname md-navigation-drawer
 */
class MDNavigationBarComponent extends MDSheetComponent {
    /**
     * Inherits properties from MDSheetComponent and MDTreeComponent.
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDTreeComponent.properties,
    };

    /**
     * Returns the body of the navigation drawer component, which contains a tree of navigation items.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <md-tree
                class="md-navigation-drawer__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `];
    }

    /**
     * Sets the body of the navigation drawer component.
     * @param {Object} value - The new body content for the navigation drawer.
     */
    set body(value) {
        this._body = value;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet");
        this.classList.add("md-navigation-drawer");
    }
}

customElements.define("md-navigation-drawer", MDNavigationBarComponent);

export { MDNavigationBarComponent };
