import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppNavigationDrawerComponent extends MDElement {
    get navigationDrawer1() {
        return this.querySelector("#navigationDrawer1");
    }

    get navigationDrawer2() {
        return this.querySelector("#navigationDrawer2");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-drawer
                    id="navigationDrawer1"
                    .list="${[
                        { icon: "image", label: "Item 1", selected: true },
                        { icon: "image", label: "Item 2", badge: 0 },
                        { icon: "image", label: "Item 3", badge: 3 },
                        { icon: "image", label: "Item 4", badge: 3333 },
                    ]}"
                ></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-drawer
                            id="navigationDrawer2"
                            variant="modal"
                            .list="${[
                                { label: "Item 1", selected: true },
                                { label: "Item 2", badge: 0 },
                                { label: "Item 3", badge: 3 },
                                { label: "Item 4", badge: 3333 },
                            ]}"
                        ></md-navigation-drawer>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div
                                style=""
                                class="md-layout-grid"
                            >
                                <div
                                    style=""
                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                >
                                    <md-button
                                        label="navigation drawer 1"
                                        @click="${() => this.navigationDrawer1.toggle()}"
                                    ></md-button>
                                </div>
                                <div
                                    style=""
                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                >
                                    <md-button
                                        label="navigation drawer 2"
                                        @click="${() => this.navigationDrawer2.toggle()}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("app-navigation-drawer", AppNavigationDrawerComponent);

export default document.createElement("app-navigation-drawer");
