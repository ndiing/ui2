import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppProgressIndicatorComponent extends MDElement {
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
                    <md-progress-indicator></md-progress-indicator>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-progress-indicator value="25"></md-progress-indicator>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-progress-indicator variant="circular"></md-progress-indicator>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-progress-indicator
                        value="25"
                        variant="circular"
                    ></md-progress-indicator>
                </div>
            </div>
        `;
    }
}

customElements.define("app-progress-indicator", AppProgressIndicatorComponent);

export default document.createElement("app-progress-indicator");
