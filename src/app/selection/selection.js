import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppSelectionComponent extends MDElement {
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
                    <md-list .list="${[{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }, { label: "Item 5" }, { label: "Item 6" }]}"></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        singleSelection
                        .list="${[{ label: "singleSelection", text: "click" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }, { label: "Item 5" }, { label: "Item 6" }]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        singleSelection
                        multiSelection
                        .list="${[{ label: "singleSelection", text: "click" }, { label: "multiSelection", text: "ctrl+click" }, { label: "Item 3" }, { label: "Item 4" }, { label: "Item 5" }, { label: "Item 6" }]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        singleSelection
                        multiSelection
                        rangeSelection
                        .list="${[{ label: "singleSelection", text: "click" }, { label: "multiSelection", text: "ctrl+click" }, { label: "rangeSelection", text: "shift+click" }, { label: "Item 4" }, { label: "Item 5" }, { label: "Item 6" }]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        singleSelection
                        multiSelection
                        rangeSelection
                        allSelection
                        .list="${[{ label: "singleSelection", text: "click" }, { label: "multiSelection", text: "ctrl+click" }, { label: "rangeSelection", text: "shift+click" }, { label: "allSelection", text: "ctrl+a" }, { label: "Item 5" }, { label: "Item 6" }]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        singleSelection
                        multiSelection
                        rangeSelection
                        allSelection
                        selection
                        .list="${[{ label: "singleSelection", text: "click" }, { label: "multiSelection", text: "ctrl+click" }, { label: "rangeSelection", text: "shift+click" }, { label: "allSelection", text: "ctrl+a" }, { label: "selection", text: "longPress" }, { label: "Item 6" }]}"
                    ></md-list>
                </div>
            </div>
        `;
    }
}

customElements.define("app-selection", AppSelectionComponent);

export default document.createElement("app-selection");
