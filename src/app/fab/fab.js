import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppFabComponent extends MDElement {
    render() {
        return html`
            <div
                style=""
                class="md-layout-grid"
            >
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-fab icon="image"></md-fab>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-fab
                        variant="small"
                        icon="image"
                    ></md-fab>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-fab
                        variant="large"
                        icon="image"
                    ></md-fab>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-fab
                        variant="extended"
                        icon="image"
                        label="Label"
                    ></md-fab>
                    <md-fab
                        variant="extended"
                        label="Label"
                    ></md-fab>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-fab
                        variant="surface"
                        icon="image"
                    ></md-fab>
                    <md-fab
                        variant="secondary"
                        icon="image"
                    ></md-fab>
                    <md-fab
                        variant="tertiary"
                        icon="image"
                    ></md-fab>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-fab
                        variant="unelevated"
                        icon="image"
                    ></md-fab>
                </div>
            </div>
        `;
    }
}

customElements.define("app-fab", AppFabComponent);

export default document.createElement("app-fab");
