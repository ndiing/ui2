import { html } from "lit";
import { MDListElement } from "../list/list.js";
import { MDPaneElement } from "../pane/pane.js";

/**
 * MDNavigationBarElement extends MDPaneElement to represent a navigation bar component.
 * It includes a list of items that can be clicked, emitting events when items are clicked.
 */
class MDNavigationBarElement extends MDPaneElement {
    static properties = {
        ...MDPaneElement.properties,
        ...MDListElement.properties,
    };

    /**
     * Returns the body content of the navigation bar.
     * It renders an md-list component with single selection and listens for item click events.
     * @returns {Array} Array of lit-html templates representing the body content.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <md-list
                class="md-navigation-bar__list"
                singleSelection
                .list="${this.list}"
                @onListItemClick="${this.handleNavigationBarListItemClick}"
            ></md-list>    
        `];
    }

    set body(value) {
        this._body = value;
    }

    /**
     * Lifecycle method called when the element is connected to the DOM.
     * Adds 'md-pane' class to the element.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane");
    }

    /**
     * Lifecycle method called when the element is disconnected from the DOM.
     * Removes 'md-pane' class from the element.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-pane");
    }

    /**
     * Handles click events on navigation bar list items.
     * Emits 'onNavigationBarListItemClick' event with the original event detail.
     * @param {Event} event - The click event object.
     */
    handleNavigationBarListItemClick(event) {
        this.emit("onNavigationBarListItemClick", event);
    }
}

customElements.define("md-navigation-bar", MDNavigationBarElement);

export { MDNavigationBarElement };
