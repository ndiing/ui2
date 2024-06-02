import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppMenuElement extends MDElement {
    constructor() {
        super();

        this.list = [
            { leadingIcon: "image", label: "Label 1", selected: true },
            { leadingIcon: "image", label: "Label 2" },
            { leadingIcon: "image", label: "Label 3" },
            { leadingIcon: "image", label: "Label 4" },
        ];
    }

    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-menu
                        id="menu1"
                        .list="${this.list}"
                        @onListItemClick="${() => menu1.close()}"></md-menu>
                    <md-button
                        @click="${(event) => menu1.show(event.currentTarget, {})}"
                        label="menu"></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-menu", AppMenuElement);

export default document.createElement("app-menu");
