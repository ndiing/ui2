import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppBottomAppBarComponent extends MDElement {
    get bottomAppBar1() {
        return this.querySelector("#bottomAppBar1");
    }

    get bottomAppBar2() {
        return this.querySelector("#bottomAppBar2");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-bottom-app-bar
                    id="bottomAppBar1"
                    leadingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                ></md-bottom-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-bottom-app-bar
                            id="bottomAppBar2"
                            leadingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                            fab="add"
                        ></md-bottom-app-bar>

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
                                        label="bottom app bar 1"
                                        @click="${() => this.bottomAppBar1.toggle()}"
                                    ></md-button>
                                </div>
                                <div
                                    style=""
                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                >
                                    <md-button
                                        label="bottom app bar 2"
                                        @click="${() => this.bottomAppBar2.toggle()}"
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

customElements.define("app-bottom-app-bar", AppBottomAppBarComponent);

export default document.createElement("app-bottom-app-bar");
