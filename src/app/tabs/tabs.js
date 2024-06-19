import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppTabsComponent extends MDElement {
    render() {
        return html`
            <div
                style=""
                class="md-layout-grid"
            >
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded6 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-tabs
                        variant="primary"
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 3 },
                            { icon: "image", label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-tabs>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded6 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-tabs
                        variant="primary"
                        .list="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 3 },
                            { label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-tabs>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded6 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-tabs
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 3 },
                            { icon: "image", label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-tabs>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded6 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-tabs
                        .list="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 3 },
                            { label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-tabs>
                </div>
            </div>
        `;
    }
}

customElements.define("app-tabs", AppTabsComponent);

export default document.createElement("app-tabs");
