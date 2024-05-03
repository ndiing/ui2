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
                        .actions="${[
                            {icon:'image'},
                            {icon:'image'},
                            {icon:'image'},
                        ]}"
                        .fab="${{icon:'image'}}"
                        @onBottomAppBarActionClick="${console.log}"
                        @onBottomAppBarFabClick="${console.log}"
                    ></md-bottom-app-bar>
                    <!-- <md-bottom-app-bar
                        .actions="${[
                            {icon:'image'},
                            {icon:'image'},
                            {icon:'image'},
                        ]}"
                    ></md-bottom-app-bar> -->
                </div>
                <div class="md-layout__item--center">
                        <md-button label="bottom app bar"
                        ></md-button>
                </div>
            </div>
        `;
    }

    
}

customElements.define("dev-bottom-app-bar", DevBottomAppBar);

export default document.createElement("dev-bottom-app-bar");
