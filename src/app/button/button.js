import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppButtonComponent extends MDElement {
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
                    <md-button label="Label"></md-button>
                    <md-button
                        icon="image"
                        label="Label"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-button
                        variant="elevated"
                        label="Label"
                    ></md-button>
                    <md-button
                        variant="elevated"
                        icon="image"
                        label="Label"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-button
                        variant="filled"
                        label="Label"
                    ></md-button>
                    <md-button
                        variant="filled"
                        icon="image"
                        label="Label"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-button
                        variant="tonal"
                        label="Label"
                    ></md-button>
                    <md-button
                        variant="tonal"
                        icon="image"
                        label="Label"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-button
                        variant="outlined"
                        label="Label"
                    ></md-button>
                    <md-button
                        variant="outlined"
                        icon="image"
                        label="Label"
                    ></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-button", AppButtonComponent);

export default document.createElement("app-button");
