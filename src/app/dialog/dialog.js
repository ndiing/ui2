import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppDialogComponent extends MDElement {

    get dialog() {
        return this.querySelector("#dialog");
    }

    get dialogFullScreen() {
        return this.querySelector("#dialogFullScreen");
    }


    render() {
        return html`
            <div
                style=""
                class="md-layout-grid"
            >
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-dialog
                        id="dialog"
                        @onPaneButtonClick="${this.handleDialogClick}"
                        @onPaneIconButtonClick="${this.handleDialogClick}"
                        label="Basic dialog title"
                        buttons='[{"label":"Enabled"},{"label":"Enabled"}]'
                    >
                        A dialog is a type of modal window that<br />
                        appears in front of app content to provide<br />
                        critical information, or ask for a decision.
                    </md-dialog>
                    <md-button
                        label="Dialog"
                        @click="${this.handleDialogClick}"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-dialog
                        id="dialogFullScreen"
                        @onPaneButtonClick="${this.handleDialogFullScreenClick}"
                        @onPaneIconButtonClick="${this.handleDialogFullScreenClick}"
                        variant="full-screen"
                        leadingActions='[{"icon":"close"}]'
                        label="Full-screen dialog title"
                        buttons='[{"label":"Enabled"},{"label":"Enabled"}]'
                    ></md-dialog>
                    <md-button
                        label="Dialog Full Screen"
                        @click="${this.handleDialogFullScreenClick}"
                    ></md-button>
                </div>
            </div>
        `;
    }


    handleDialogClick() {
        this.dialog.toggle();
    }

    handleDialogFullScreenClick() {
        this.dialogFullScreen.toggle();
    }
}

customElements.define("app-dialog", AppDialogComponent);

export default document.createElement("app-dialog");
