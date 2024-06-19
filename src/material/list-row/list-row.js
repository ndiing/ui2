import { MDElement } from "../element/element.js";

/**
 * Custom element representing a row in a list.
 * Extends MDElement for base element functionalities.
 */
class MDListRowElement extends MDElement {
    /**
     * Called when the element is inserted into the DOM.
     * Adds the 'md-list__row' class to the element.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__row");
    }

    /**
     * Called when the element is removed from the DOM.
     * Removes the 'md-list__row' class from the element.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list__row");
    }
}

customElements.define("md-list-row", MDListRowElement);

export { MDListRowElement };
