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
                        id="navigationRail1"
                        .list="${[
                            { icon:'image',label: 'Lorem', selected:true },
                            { icon:'image',label: 'ipsum' },
                            { icon:'image',label: 'dolor' },
                            { icon:'image',label: 'sit' },
                            { icon:'image',label: 'amet' },
                        ]}"
                    ></md-navigation-rail>
                    
                    <!-- <md-navigation-rail 
                        id="navigationRail2"
                        .list="${[
                            { icon:'image', selected:true },
                            { icon:'image' },
                            { icon:'image' },
                            { icon:'image' },
                            { icon:'image' },
                        ]}"
                    ></md-navigation-rail> -->
                </div>
                <div class="md-layout__item--center">
                    <md-button label="Navigation rail" @click="${this.handleClick1}"></md-button>
                    <!-- <md-button label="Navigation rail" @click="${this.handleClick2}"></md-button> -->
                </div>
            </div>
        `;
    }

    handleClick1(){
        if(navigationRail1.open)navigationRail1.close()
            else navigationRail1.show()
    }

    handleClick2(){
        if(navigationRail2.open)navigationRail2.close()
            else navigationRail2.show()
    }
}

customElements.define("dev-navigation-rail", DevNavigationRail);

export default document.createElement("dev-navigation-rail");
