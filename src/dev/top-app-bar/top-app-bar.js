import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTopAppBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-top-app-bar
                        .leadingActions="${[
                            {icon:"image"},
                            {icon:"image"},
                            {icon:"image"},
                        ]}"
                        .label="${"Label"}"
                        .trailingActions="${[
                            {icon:"image"},
                            {icon:"image"},
                            {icon:"image"},
                        ]}"
                    ></md-top-app-bar>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-top-app-bar", DevTopAppBar);

export default document.createElement("dev-top-app-bar");
