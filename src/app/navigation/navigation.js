import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppNavigationComponent extends MDElement {
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
                    <md-list
                        class="md-navigation-bar__list"
                        singleSelection
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 3 },
                            { icon: "image", label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-navigation-bar__list"
                        singleSelection
                        .list="${[
                            { icon: "image", selected: true },
                            { icon: "image", badge: 0 },
                            { icon: "image", badge: 3 },
                            { icon: "image", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-navigation-drawer__list"
                        singleSelection
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 3 },
                            { icon: "image", label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-navigation-drawer__list"
                        singleSelection
                        .list="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 3 },
                            { label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-navigation-rail__list"
                        singleSelection
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 3 },
                            { icon: "image", label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-navigation-rail__list"
                        singleSelection
                        .list="${[
                            { icon: "image", selected: true },
                            { icon: "image", badge: 0 },
                            { icon: "image", badge: 3 },
                            { icon: "image", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-menu__list"
                        singleSelection
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 3 },
                            { icon: "image", label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-menu__list"
                        singleSelection
                        .list="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 3 },
                            { label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>

                <!-- <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded6 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-tabs__list md-tabs__list--primary"
                        singleSelection
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 3 },
                            { icon: "image", label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded6 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-tabs__list md-tabs__list--primary"
                        singleSelection
                        .list="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 3 },
                            { label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded6 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-tabs__list md-tabs__list--secondary"
                        singleSelection
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 3 },
                            { icon: "image", label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded6 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        class="md-tabs__list md-tabs__list--secondary"
                        singleSelection
                        .list="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 3 },
                            { label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-list>
                </div> -->
            </div>
        `;
    }
}

customElements.define("app-navigation", AppNavigationComponent);

export default document.createElement("app-navigation");
