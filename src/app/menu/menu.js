import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppMenuComponent extends MDElement {
    get menu1() {
        return this.querySelector("#menu1");
    }

    get menu2() {
        return this.querySelector("#menu2");
    }

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
                    <md-menu
                        id="menu1"
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 3 },
                            { icon: "image", label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-menu>
                    <md-button
                        label="menu 1"
                        @click="${(event) => this.menu1.toggle(event.currentTarget)}"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-menu
                        id="menu2"
                        .list="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 3 },
                            { label: "Item 4", badge: 3333 },
                        ]}"
                    ></md-menu>
                    <md-button
                        label="menu 2"
                        @click="${(event) => this.menu2.toggle(event.currentTarget)}"
                    ></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-menu", AppMenuComponent);

export default document.createElement("app-menu");
