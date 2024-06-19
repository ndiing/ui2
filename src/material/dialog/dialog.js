import { MDPaneElement } from "../pane/pane.js";

/**
 * MDDialogElement extends MDPaneElement to represent a dialog element.
 * Dialogs typically inherit pane-like behavior with additional styling or functionality.
 */
class MDDialogElement extends MDPaneElement {
    constructor() {
        super();
        this.defaultVariant = "dialog";
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
}

customElements.define("md-dialog", MDDialogElement);

export { MDDialogElement };
