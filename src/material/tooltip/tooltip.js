import { MDPaneElement } from "../pane/pane.js";

/**
 * Class representing a custom tooltip element.
 * @extends MDPaneElement
 */
class MDTooltipElement extends MDPaneElement {
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
     * Shows the tooltip relative to a button element.
     * @param {HTMLElement} button - The button element to which the tooltip is anchored.
     * @param {Object} [options={}] - Additional options for showing the tooltip.
     */
    show(button, options = {}) {
        this.style.removeProperty("--md-comp-pane-animation");

        this.open = true;

        if (button) {
            /* prettier-ignore */
            let placements = [
                "below",
                "above",
                "before",
                "after",
                "north-east",
                "south-east",
                "south-west",
                "north-west",
            ];
            this.popper.show(button, {
                placements,
                offset: 8,
                ...options,
            });
        }
    }
}

/**
 * Defines a custom element 'md-tooltip'.
 */
customElements.define("md-tooltip", MDTooltipElement);

export { MDTooltipElement };
