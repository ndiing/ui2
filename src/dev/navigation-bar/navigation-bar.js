import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--south">
                    <md-navigation-bar 
                        open
                        id="navigationBar1"
                        .list="${[
                            { icon:'image',label: 'Lorem', selected:true },
                            { icon:'image',label: 'ipsum' },
                            { icon:'image',label: 'dolor' },
                            { icon:'image',label: 'sit' },
                            { icon:'image',label: 'amet' },
                        ]}"
                    ></md-navigation-bar>
                    
                    <!-- <md-navigation-bar 
                        id="navigationBar2"
                        .list="${[
                            { icon:'image', selected:true },
                            { icon:'image' },
                            { icon:'image' },
                            { icon:'image' },
                            { icon:'image' },
                        ]}"
                    ></md-navigation-bar> -->
                </div>
                <div class="md-layout__item--center">
                    <md-button label="Navigation bar" @click="${this.handleClick1}"></md-button>
                    <!-- <md-button label="Navigation bar" @click="${this.handleClick2}"></md-button> -->
                </div>
            </div>
        `;
    }

    handleClick1(){
        if(navigationBar1.open)navigationBar1.close()
            else navigationBar1.show()
    }

    handleClick2(){
        if(navigationBar2.open)navigationBar2.close()
            else navigationBar2.show()
    }
}

customElements.define("dev-navigation-bar", DevNavigationBar);

export default document.createElement("dev-navigation-bar");
