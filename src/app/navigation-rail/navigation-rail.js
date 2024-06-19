import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppNavigationRailComponent extends MDElement {
    get navigationRail1() {
        return this.querySelector("#navigationRail1");
    }

    get navigationRail2() {
        return this.querySelector("#navigationRail2");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-rail
                    id="navigationRail1"
                    .list="${[
                        { icon: "image", label: "Item 1", selected: true },
                        { icon: "image", label: "Item 2", badge: 0 },
                        { icon: "image", label: "Item 3", badge: 3 },
                        { icon: "image", label: "Item 4", badge: 3333 },
                    ]}"
                ></md-navigation-rail>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-rail
                            id="navigationRail2"
                            .list="${[
                                { icon: "image", selected: true },
                                { icon: "image", badge: 0 },
                                { icon: "image", badge: 3 },
                                { icon: "image", badge: 3333 },
                            ]}"
                        ></md-navigation-rail>

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
                                        label="navigation rail 1"
                                        @click="${() => this.navigationRail1.toggle()}"
                                    ></md-button>
                                </div>
                                <div
                                    style=""
                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                >
                                    <md-button
                                        label="navigation rail 2"
                                        @click="${() => this.navigationRail2.toggle()}"
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

customElements.define("app-navigation-rail", AppNavigationRailComponent);

export default document.createElement("app-navigation-rail");
