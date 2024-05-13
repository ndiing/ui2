import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBadge extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--south">
                    <md-navigation-bar 
                        .open="${true}}"
                        .list="${[
                            { icon:'change_history',label: 'Label', selected:true },
                            { icon:'change_history',label: 'Label', badge: 0 },
                            { icon:'change_history',label: 'Label', badge: 1 },
                            { icon:'change_history',label: 'Label', badge: 1000 },
                        ]}"
                    ></md-navigation-bar>
                </div>
                <div class="md-layout__item--center" style="padding:24px;">
                </div>
            </div>
        `;
    }
}

customElements.define("dev-badge", DevBadge);

export default document.createElement("dev-badge");
