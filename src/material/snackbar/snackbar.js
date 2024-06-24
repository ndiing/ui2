import { createQueue } from "../functions/functions.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * MDSnackbarComponent provides a snackbar component that displays brief messages
 * at the bottom of the screen and automatically dismisses after a timeout.
 * @extends MDSheetComponent
 */
class MDSnackbarComponent extends MDSheetComponent {
    static properties = {
        ...MDSheetComponent.properties,
    };

    /**
     * Static queue for managing snackbar display order.
     * @type {Function}
     */
    static queue = createQueue();

    /**
     * Lifecycle method called when the element is connected to the DOM.
     * Adds necessary classes for the snackbar component.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-snackbar");
    }

    /**
     * Displays the snackbar with a timeout to automatically close it.
     * @returns {Promise} A promise that resolves when the snackbar is closed.
     * @fires MDSnackbarComponent#onSnackbarShow
     * @fires MDSnackbarComponent#onSnackbarClose
     */
    show() {
        return MDSnackbarComponent.queue(() => {
            return new Promise((resolve) => {
                this.timeout = window.setTimeout(() => {
                    this.close();
                }, 4000);

                const handleSnackbarClose = (event) => {
                    if (event.animationName == "snackbarOut") {
                        window.clearTimeout(this.timeout);
                        resolve();
                    }
                };

                this.once("animationend", handleSnackbarClose);

                super.show();

                this.emit("onSnackbarShow", this);
            });
        });
    }

    /**
     * Closes the snackbar and emits the close event.
     * @fires MDSnackbarComponent#onSnackbarClose
     */
    close() {
        super.close();

        this.emit("onSnackbarClose", this);
    }
}

customElements.define("md-snackbar", MDSnackbarComponent);

export { MDSnackbarComponent };
