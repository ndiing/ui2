import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

/**
 * MDNavigationBarComponent is a class that extends MDSheetComponent and represents a navigation bar component.
 * This component is used for vertical navigation within an application.
 * @extends MDSheetComponent
 * @tagname md-navigation-bar
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
     * Returns the body of the navigation bar component, which contains a tree of navigation items.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <md-tree
                class="md-navigation-bar__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `];
    }

    /**
     * Sets the body of the navigation bar component.
     * @param {Object} value - The new body content for the navigation bar.
     */
    set body(value) {
        this._body = value;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet");
        this.classList.add("md-navigation-bar");
    }
}

customElements.define("md-navigation-bar", MDNavigationBarComponent);

export { MDNavigationBarComponent };
