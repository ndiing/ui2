import { MDPaneElement } from "../pane/pane.js";

/**
 * Custom top app bar element that extends MDPaneElement.
 */
class MDTopAppBarElement extends MDPaneElement {
    /**
     * Called when the element is added to the DOM.
     * Adds the necessary class to the element.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane");
    }

    /**
     * Called when the element is removed from the DOM.
     * Removes the class from the element.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-pane");
    }
}

customElements.define("md-top-app-bar", MDTopAppBarElement);

export { MDTopAppBarElement };
