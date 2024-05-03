import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTopAppBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border">
                <div class="md-layout__item--north">
                    <md-top-app-bar
                        .leadingActions="${[
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
                <div class="md-layout__item--center"></div>
            </div>
        `;
    }
}

customElements.define("dev-top-app-bar", DevTopAppBar);

export default document.createElement("dev-top-app-bar");
