import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBottomAppBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--south">
                    <md-bottom-app-bar
                        id="bottomAppBar"
                        open
                        .actions="${[
                            {icon:"image"},
                            {icon:"image"},
                            {icon:"image"},
                        ]}"
                        .fab="${{
                            icon:"image"
                            }}"
                    ></md-bottom-app-bar>
                </div>
                <div class="md-layout__item--center">
                    <md-button label="bottom app bar" @click="${this.handleClick}"></md-button>
                </div>
            </div>
        `;
    }

    handleClick(){
        if(bottomAppBar.open)bottomAppBar.close()
            else bottomAppBar.show()
    }
}

customElements.define("dev-bottom-app-bar", DevBottomAppBar);

export default document.createElement("dev-bottom-app-bar");
