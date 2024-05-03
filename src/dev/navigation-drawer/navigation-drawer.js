import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationDrawer extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--west">
                    <md-navigation-drawer 
                        open
                        .list="${[
                            { label: 'Lorem', selected:true },
                            { label: 'ipsum' },
                            { label: 'dolor' },
                            { label: 'sit' },
                            { label: 'amet' },
                        ]}"
                    ></md-navigation-drawer>
                </div>
                <!-- <div class="md-layout__item--west">
                    <md-navigation-drawer 
                        open
                        .list="${[
                            { icon:'image',label: 'Lorem', selected:true },
                            { icon:'image',label: 'ipsum' },
                            { icon:'image',label: 'dolor' },
                            { icon:'image',label: 'sit' },
                            { icon:'image',label: 'amet' },
                        ]}"
                    ></md-navigation-drawer>
                </div> -->
                <div class="md-layout__item--center">center</div>
            </div>
        `;
    }
}

customElements.define("dev-navigation-drawer", DevNavigationDrawer);

export default document.createElement("dev-navigation-drawer");
