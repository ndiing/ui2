import { html } from "lit";
import { MDListElement } from "../list/list.js";
import { MDPaneElement } from "../pane/pane.js";

/**
 * Class representing a custom menu element.
 * @extends MDPaneElement
 */
class MDMenuElement extends MDPaneElement {
    /**
     * Properties of the MDMenuElement.
     * @type {Object}
     * @property {...MDPaneElement.properties} MDPaneElement - Properties from MDPaneElement.
     * @property {...MDListElement.properties} MDListElement - Properties from MDListElement.
     */
    static properties = {
        ...MDPaneElement.properties,
        ...MDListElement.properties,
    };

    /**
     * Returns the body of the menu.
     * @return {import('lit').TemplateResult[]} The body of the menu.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <md-list
                class="md-menu__list"
                singleSelection
                .list="${this.list}"
                @onListItemClick="${this.handleMenuListItemClick}"
            ></md-list>    
        `];
    }

    /**
     * Sets the body of the menu.
     * @param {import('lit').TemplateResult[]} value - The body content to set.
     */
    set body(value) {
        this._body = value;
    }

    /**
     * Creates an instance of MDMenuElement.
     */
    constructor() {
        super();

        this.defaultVariant = "menu";
    }

    /**
     * Called when the element is connected to the DOM.
     * Adds 'md-pane' class to the element.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane");
    }

    /**
     * Called when the element is disconnected from the DOM.
     * Removes 'md-pane' class from the element.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-pane");
    }

    /**
     * Handles the click event on a menu list item.
     * @param {CustomEvent} event - The event object.
     */
    handleMenuListItemClick(event) {
        this.close();
        this.emit("onMenuListItemClick", event);
    }

    /**
     * Shows the menu relative to a button element.
     * @param {HTMLElement} button - The button element to which the menu is anchored.
     * @param {Object} [options={}] - Additional options for showing the menu.
     */
    show(button, options = {}) {
        this.style.removeProperty("--md-comp-pane-animation");

        this.open = true;

        if (button) {
            /* prettier-ignore */
            let placements = [
                "top-start", "top-end", "top",
                "below-start", "below-end", "below",
                "bottom-start", "bottom-end", "bottom",
                "above-start", "above-end", "above",
                "left-start", "left-end", "left",
                "right-start", "right-end", "right",
                "before-start", "before-end", "before",
                "after-start", "after-end", "after",
            ];
            this.popper.show(button, {
                placements,
                ...options,
            });
        }
    }
}

/**
 * Defines a custom element 'md-menu'.
 */
customElements.define("md-menu", MDMenuElement);

export { MDMenuElement };
