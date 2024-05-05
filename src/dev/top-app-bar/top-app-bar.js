import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTopAppBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--north">
                    <md-top-app-bar
                        id="topAppBar1"
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
                <div class="md-layout__item--center" style="padding:24px;">
                    <md-button ui="filled-tonal" label="Small top app bar" @click="${this.handleClick1}"></md-button>
                </div>
            </div>
        `;
    }

    handleClick1() {
        if (topAppBar1.open) topAppBar1.close();
        else topAppBar1.show();
    }
}

customElements.define("dev-top-app-bar", DevTopAppBar);

export default document.createElement("dev-top-app-bar");
