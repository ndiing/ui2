import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevLayoutBorder extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--west">
                    <md-navigation-drawer
                        .list="${[
                            {label:"item 1", icon:'image',selected:true},
                            {label:"item 2", icon:'image'},
                            {label:"item 3", icon:'image'},
                            {label:"item 4", icon:'image'},
                        ]}"
                        .open="${true}"
                    ></md-navigation-drawer>
                </div>
                <div class="md-layout__item--north">
                    <md-top-app-bar
                        .leadingActions="${[
                            {icon:"image"}
                        ]}"
                        .label="${"Label"}"
                        .open="${true}"
                    ></md-top-app-bar>
                </div>
                <div class="md-layout__item--center">
                    center
                </div>
                <div class="md-layout__item--east">
                    <md-side-sheet
                        .label="${"Label"}"
                        .trailingActions="${[
                            {icon:"image"}
                        ]}"
                        .open="${true}"
                    ></md-side-sheet>
                </div>
                <div class="md-layout__item--south">
                    <md-navigation-bar
                        .list="${[
                            {label:"item 1", icon:'image',selected:true},
                            {label:"item 2", icon:'image'},
                            {label:"item 3", icon:'image'},
                            {label:"item 4", icon:'image'},
                        ]}"
                        .open="${true}"
                    ></md-navigation-bar>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-layout-border", DevLayoutBorder);

export default document.createElement("dev-layout-border");
