import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppIconButtonComponent extends MDElement {
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
                    <md-icon-button
                        icon="image"
                        @onIconButtonClick="${console.log}"
                    ></md-icon-button>
                    <md-icon-button
                        variant="toggle"
                        icon="image"
                    ></md-icon-button>
                    <md-icon-button
                        variant="toggle"
                        selected
                        icon="image"
                    ></md-icon-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-icon-button
                        variant="filled"
                        icon="image"
                    ></md-icon-button>
                    <md-icon-button
                        variant="filled toggle"
                        icon="image"
                    ></md-icon-button>
                    <md-icon-button
                        variant="filled toggle"
                        selected
                        icon="image"
                    ></md-icon-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-icon-button
                        variant="tonal"
                        icon="image"
                    ></md-icon-button>
                    <md-icon-button
                        variant="tonal toggle"
                        icon="image"
                    ></md-icon-button>
                    <md-icon-button
                        variant="tonal toggle"
                        selected
                        icon="image"
                    ></md-icon-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-icon-button
                        variant="outlined"
                        icon="image"
                    ></md-icon-button>
                    <md-icon-button
                        variant="outlined toggle"
                        icon="image"
                    ></md-icon-button>
                    <md-icon-button
                        variant="outlined toggle"
                        selected
                        icon="image"
                    ></md-icon-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-icon-button", AppIconButtonComponent);

export default document.createElement("app-icon-button");
