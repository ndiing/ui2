import { html } from "lit";
import { MDListElement } from "../list/list.js";
import { MDPaneElement } from "../pane/pane.js";

/**
 * Custom element representing a navigation drawer.
 * Extends MDPaneElement to inherit pane functionality.
 */
class MDNavigationDrawerElement extends MDPaneElement {
    /**
     * Properties inherited from MDPaneElement and MDListElement.
     * @type {Object}
     */
    static properties = {
        ...MDPaneElement.properties,
        ...MDListElement.properties,
    };

    /**
     * Returns the body content of the navigation drawer.
     * Uses Lit HTML template to render an MDList.
     * @returns {TemplateResult[]} Array of Lit HTML templates representing the body content.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <md-list
                class="md-navigation-drawer__list"
                singleSelection
                .list="${this.list}"
                @onListItemClick="${this.handleNavigationDrawerListItemClick}"
            ></md-list>    
        `];
    }

    /**
     * Setter for the body content of the navigation drawer.
     * @param {any} value - Value to set as the body content.
     */
    set body(value) {
        this._body = value;
    }

    /**
     * Called when the element is connected to the DOM.
     * Adds 'md-pane' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback(); // Call parent connectedCallback if any

        this.classList.add("md-pane");
    }

    /**
     * Called when the element is disconnected from the DOM.
     * Removes 'md-pane' class from the element's class list.
     */
    disconnectedCallback() {
        super.disconnectedCallback(); // Call parent disconnectedCallback if any

        this.classList.remove("md-pane");
    }

    /**
     * Event handler for when a list item in the navigation drawer is clicked.
     * Emits an 'onNavigationDrawerListItemClick' event.
     * @param {Event} event - Click event object.
     */
    handleNavigationDrawerListItemClick(event) {
        this.emit("onNavigationDrawerListItemClick", event);
    }
}

// Define the custom element using the defined class.
customElements.define("md-navigation-drawer", MDNavigationDrawerElement);

// Export the class for external use if needed.
export { MDNavigationDrawerElement };
