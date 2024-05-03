import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationRail extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--west">
                    <md-navigation-rail 
                        open
                        .list="${[
                            { icon:'image',label: 'Lorem', selected:true },
                            { icon:'image',label: 'ipsum' },
                            { icon:'image',label: 'dolor' },
                            { icon:'image',label: 'sit' },
                            { icon:'image',label: 'amet' },
                        ]}"
                    ></md-navigation-rail>
                </div>
                <!-- <div class="md-layout__item--west">
                    <md-navigation-rail 
                        open
                        .list="${[
                            { icon:'image', selected:true },
                            { icon:'image' },
                            { icon:'image' },
                            { icon:'image' },
                            { icon:'image' },
                        ]}"
                    ></md-navigation-rail>
                </div> -->
                <div class="md-layout__item--center">center</div>
            </div>
        `;
    }
}

customElements.define("dev-navigation-rail", DevNavigationRail);

export default document.createElement("dev-navigation-rail");
