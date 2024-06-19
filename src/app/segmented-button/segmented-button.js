import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppSegmentedButtonComponent extends MDElement {
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
                    <md-segmented-button
                        .list="${[{ label: "Label 1", selected: true }, { label: "Label 2" }, { label: "Label 3" }]}"
                        singleSelection
                        @onSegmentedButtonItemClick="${console.log}"
                    ></md-segmented-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-segmented-button
                        .list="${[{ label: "Label 1", selected: true }, { label: "Label 2", selected: true }, { label: "Label 3" }]}"
                        multiSelection
                    ></md-segmented-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-segmented-button", AppSegmentedButtonComponent);

export default document.createElement("app-segmented-button");
