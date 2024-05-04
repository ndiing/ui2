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
                        id="navigationDrawer1"
                        .list="${[
                            { icon:'image',label: 'Lorem', selected:true },
                            { icon:'image',label: 'ipsum' },
                            { icon:'image',label: 'dolor' },
                            { icon:'image',label: 'sit' },
                            { icon:'image',label: 'amet' },
                        ]}"
                    ></md-navigation-drawer>
                    
                    <md-navigation-drawer 
                        ui="modal"
                        id="navigationDrawer2"
                        .list="${[
                            { label:'Lorem', selected:true },
                            { label:'ipsum' },
                            { label:'dolor' },
                            { label:'sit' },
                            { label:'amet' },
                        ]}"
                    ></md-navigation-drawer>
                </div>
                <div class="md-layout__item--center">
                    <md-button label="Navigation drawer" @click="${this.handleClick1}"></md-button>
                    <md-button label="Navigation drawer" @click="${this.handleClick2}"></md-button>
                </div>
            </div>
        `;
    }

    handleClick1(){
        if(navigationDrawer1.open)navigationDrawer1.close()
            else navigationDrawer1.show()
    }

    handleClick2(){
        if(navigationDrawer2.open)navigationDrawer2.close()
            else navigationDrawer2.show()
    }
}

customElements.define("dev-navigation-drawer", DevNavigationDrawer);

export default document.createElement("dev-navigation-drawer");
