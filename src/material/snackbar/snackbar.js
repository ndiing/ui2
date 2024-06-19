import { MDPaneElement } from "../pane/pane.js";
import { createQueue } from "../helper/helper.js";

/**
 * MDSnackbarElement extends MDPaneElement to represent a snackbar component.
 * It includes functionality to show and automatically dismiss after a specified duration.
 */
class MDSnackbarElement extends MDPaneElement {
    /**
     * Properties inherited from MDPaneElement and additional dismiss property.
     * @property {Object} properties - Inherited from MDPaneElement.
     * @property {Number} properties.dismiss - Specifies the auto-dismiss time in seconds.
     */
    static properties = {
        ...MDPaneElement.properties,
        dismiss: { type: Number },
    };

    /**
     * Queue for managing sequential display of snackbar elements.
     * @property {Function} queue - Function to create a queue for managing snackbar display.
     */
    static queue = createQueue();

    /**
     * Constructs an instance of MDSnackbarElement.
     * Sets the default dismiss time to 4 seconds.
     */
    constructor() {
        super();
        this.dismiss = 4; // auto dismiss after 4 seconds
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
     * Shows the snackbar element and automatically dismisses it after a specified duration.
     * Returns a promise that resolves when the snackbar is closed.
     * @returns {Promise<void>} Promise that resolves when the snackbar is closed.
     */
    show() {
        this.style.removeProperty("--md-comp-pane-animation");

        return MDSnackbarElement.queue(() => {
            return new Promise((resolve) => {
                const handlePaneClose = () => {
                    window.clearTimeout(this.timeout);
                    this.removeEventListener("onPaneClose", handlePaneClose);
                    resolve();
                };
                this.addEventListener("onPaneClose", handlePaneClose);
                this.timeout = window.setTimeout(() => {
                    this.close();
                }, this.dismiss * 1000);
                this.open = true;
            });
        });
    }
}

customElements.define("md-snackbar", MDSnackbarElement);

export { MDSnackbarElement };
