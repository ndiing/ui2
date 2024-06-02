import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppBottomAppBarElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-bottom-app-bar
                    .leadingActions="${[{ icon: "image" }, { icon: "image" }, { icon: "image" }, { icon: "image" }]}"
                    .fab="${{ icon: "image" }}"
                    id="sidesheet1"
                ></md-bottom-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
                        <md-bottom-app-bar
                            .leadingActions="${[{ icon: "image" }, { icon: "image" }, { icon: "image" }, { icon: "image" }]}"
                            id="sidesheet2"
                        ></md-bottom-app-bar>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div
                                class="md-layout-column"
                                style="margin:24px;"
                            >
                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button
                                        @click="${() => sidesheet1.toggle()}"
                                        label="bottom-app-bar"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button
                                        @click="${() => sidesheet2.toggle()}"
                                        label="bottom-app-bar"
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

customElements.define("app-bottom-app-bar", AppBottomAppBarElement);

export default document.createElement("app-bottom-app-bar");
