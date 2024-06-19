import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppNavigationBarComponent extends MDElement {
    get navigationBar1() {
        return this.querySelector("#navigationBar1");
    }

    get navigationBar2() {
        return this.querySelector("#navigationBar2");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-bar
                    id="navigationBar1"
                    .list="${[
                        { icon: "image", label: "Item 1", selected: true },
                        { icon: "image", label: "Item 2", badge: 0 },
                        { icon: "image", label: "Item 3", badge: 3 },
                        { icon: "image", label: "Item 4", badge: 3333 },
                    ]}"
                ></md-navigation-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-bar
                            id="navigationBar2"
                            .list="${[
                                { icon: "image", selected: true },
                                { icon: "image", badge: 0 },
                                { icon: "image", badge: 3 },
                                { icon: "image", badge: 3333 },
                            ]}"
                        ></md-navigation-bar>

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
                                        label="navigation bar 1"
                                        @click="${() => this.navigationBar1.toggle()}"
                                    ></md-button>
                                </div>
                                <div
                                    style=""
                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                >
                                    <md-button
                                        label="navigation bar 2"
                                        @click="${() => this.navigationBar2.toggle()}"
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

customElements.define("app-navigation-bar", AppNavigationBarComponent);

export default document.createElement("app-navigation-bar");
