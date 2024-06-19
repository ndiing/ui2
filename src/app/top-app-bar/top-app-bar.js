import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppTopAppBarComponent extends MDElement {
    get topAppBar1() {
        return this.querySelector("#topAppBar1");
    }

    get topAppBar2() {
        return this.querySelector("#topAppBar2");
    }

    get topAppBar3() {
        return this.querySelector("#topAppBar3");
    }

    get topAppBar4() {
        return this.querySelector("#topAppBar4");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-top-app-bar
                    id="topAppBar1"
                    variant="center-aligned"
                    leadingActions='[{"icon":"arrow_back"}]'
                    trailingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                    label="Title Large"
                ></md-top-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-top-app-bar
                            id="topAppBar2"
                            variant="small"
                            leadingActions='[{"icon":"arrow_back"}]'
                            trailingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                            label="Title Large"
                        ></md-top-app-bar>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-border">
                                <md-top-app-bar
                                    id="topAppBar3"
                                    variant="medium"
                                    leadingActions='[{"icon":"arrow_back"}]'
                                    trailingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                                    label="Headline Small"
                                ></md-top-app-bar>

                                <div class="md-layout-border__item md-layout-border__item--center">
                                    <div class="md-layout-border">
                                        <md-top-app-bar
                                            id="topAppBar4"
                                            variant="large"
                                            leadingActions='[{"icon":"arrow_back"}]'
                                            trailingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                                            label="Headline Medium"
                                        ></md-top-app-bar>

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
                                                        label="top app bar 1"
                                                        @click="${() => this.topAppBar1.toggle()}"
                                                    ></md-button>
                                                </div>
                                                <div
                                                    style=""
                                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                                >
                                                    <md-button
                                                        label="top app bar 2"
                                                        @click="${() => this.topAppBar2.toggle()}"
                                                    ></md-button>
                                                </div>
                                                <div
                                                    style=""
                                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                                >
                                                    <md-button
                                                        label="top app bar 3"
                                                        @click="${() => this.topAppBar3.toggle()}"
                                                    ></md-button>
                                                </div>
                                                <div
                                                    style=""
                                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                                >
                                                    <md-button
                                                        label="top app bar 4"
                                                        @click="${() => this.topAppBar4.toggle()}"
                                                    ></md-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("app-top-app-bar", AppTopAppBarComponent);

export default document.createElement("app-top-app-bar");
