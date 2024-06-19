import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppSnackbarComponent extends MDElement {
    get snackbar() {
        return this.querySelector("#snackbar");
    }

    get snackbar2() {
        return this.querySelector("#snackbar2");
    }

    get snackbar3() {
        return this.querySelector("#snackbar3");
    }

    get snackbar4() {
        return this.querySelector("#snackbar4");
    }

    get snackbar5() {
        return this.querySelector("#snackbar5");
    }

    get snackbar6() {
        return this.querySelector("#snackbar6");
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
                    <md-snackbar
                        id="snackbar"
                        @onPaneButtonClick="${this.handleSnackbarClose}"
                        @onPaneIconButtonClick="${this.handleSnackbarClose}"
                        buttons='[{"label":"Action"},{"component":"icon-button","icon":"close"}]'
                        >Single-line snackbar with action</md-snackbar
                    >
                    <md-button
                        label="Snackbar"
                        @click="${this.handleSnackbarShow}"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-snackbar
                        id="snackbar2"
                        @onPaneButtonClick="${this.handleSnackbar2Close}"
                        @onPaneIconButtonClick="${this.handleSnackbar2Close}"
                        >Single-line snackbar</md-snackbar
                    >
                    <md-button
                        label="Snackbar 2"
                        @click="${this.handleSnackbar2Show}"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-snackbar
                        id="snackbar3"
                        @onPaneButtonClick="${this.handleSnackbar3Close}"
                        @onPaneIconButtonClick="${this.handleSnackbar3Close}"
                        buttons='[{"label":"Action"}]'
                        >Single-line snackbar with action</md-snackbar
                    >
                    <md-button
                        label="Snackbar 3"
                        @click="${this.handleSnackbar3Show}"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-snackbar
                        id="snackbar4"
                        @onPaneButtonClick="${this.handleSnackbar4Close}"
                        @onPaneIconButtonClick="${this.handleSnackbar4Close}"
                        >Two-line snackbar<br />without action</md-snackbar
                    >
                    <md-button
                        label="Snackbar 4"
                        @click="${this.handleSnackbar4Show}"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-snackbar
                        id="snackbar5"
                        @onPaneButtonClick="${this.handleSnackbar5Close}"
                        @onPaneIconButtonClick="${this.handleSnackbar5Close}"
                        buttons='[{"label":"Action"}]'
                        >Two-line snackbar<br />with action</md-snackbar
                    >
                    <md-button
                        label="Snackbar 5"
                        @click="${this.handleSnackbar5Show}"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-snackbar
                        id="snackbar6"
                        @onPaneButtonClick="${this.handleSnackbar6Close}"
                        @onPaneIconButtonClick="${this.handleSnackbar6Close}"
                        buttons='[{"label":"Longer action"}]'
                        >Two-line snackbar<br />with longer action</md-snackbar
                    >
                    <md-button
                        label="Snackbar 6"
                        @click="${this.handleSnackbar6Show}"
                    ></md-button>
                </div>
            </div>
        `;
    }


    handleSnackbarShow() {
        this.snackbar.show();
    }

    handleSnackbar2Show() {
        this.snackbar2.show();
    }

    handleSnackbar3Show() {
        this.snackbar3.show();
    }

    handleSnackbar4Show() {
        this.snackbar4.show();
    }

    handleSnackbar5Show() {
        this.snackbar5.show();
    }

    handleSnackbar6Show() {
        this.snackbar6.show();
    }


    handleSnackbarClose() {
        this.snackbar.close();
    }

    handleSnackbar2Close() {
        this.snackbar2.close();
    }

    handleSnackbar3Close() {
        this.snackbar3.close();
    }

    handleSnackbar4Close() {
        this.snackbar4.close();
    }

    handleSnackbar5Close() {
        this.snackbar5.close();
    }

    handleSnackbar6Close() {
        this.snackbar6.close();
    }

}

customElements.define("app-snackbar", AppSnackbarComponent);

export default document.createElement("app-snackbar");
