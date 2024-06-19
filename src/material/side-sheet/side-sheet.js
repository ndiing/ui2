import { MDPaneElement } from "../pane/pane.js";

/**
 * Custom element representing a side sheet.
 * Extends MDPaneElement for pane functionality.
 */
class MDSideSheetElement extends MDPaneElement {
    /**
     * Called when the element is inserted into the DOM.
     * Adds the 'md-pane' class to the element.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane");
    }

    /**
     * Called when the element is removed from the DOM.
     * Removes the 'md-pane' class from the element.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-pane");
    }
}

customElements.define("md-side-sheet", MDSideSheetElement);

export { MDSideSheetElement };
