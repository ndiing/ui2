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
                        id="topAppBar"
                        open
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
                <div class="md-layout__item--center">
                    <md-button label="top app bar" @click="${this.handleClick}"></md-button>
                </div>
            </div>
        `;
    }

    handleClick(){
        if(topAppBar.open)topAppBar.close()
            else topAppBar.show()
    }
}

customElements.define("dev-top-app-bar", DevTopAppBar);

export default document.createElement("dev-top-app-bar");
