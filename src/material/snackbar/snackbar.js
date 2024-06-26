import { createQueue } from "../functions/functions.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * @extends MDSheetComponent
 * @tagname md-snackbar
 * @fires MDSnackbarComponent#onSnackbarShow -
 * @fires MDSnackbarComponent#onSnackbarClose -
 */
class MDSnackbarComponent extends MDSheetComponent {
    /**
     */
    static properties = {
        ...MDSheetComponent.properties,
    };

    static queue = createQueue();

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-snackbar");
    }

    /**
     *
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
     *
     */
    close() {
        super.close();

        this.emit("onSnackbarClose", this);
    }
}

customElements.define("md-snackbar", MDSnackbarComponent);

export { MDSnackbarComponent };
