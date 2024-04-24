import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <!-- <md-navigation-bar>search</md-navigation-bar> -->
                    <md-list 
                        class="md-list--navigation-bar"
                        .list="${[
                            { icon:'image',label: 'Lorem', selected:true },
                            { icon:'image',label: 'ipsum' },
                            { icon:'image',label: 'dolor' },
                            { icon:'image',label: 'sit' },
                            { icon:'image',label: 'amet' },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <!-- <md-navigation-bar>search</md-navigation-bar> -->
                    <md-list 
                        class="md-list--navigation-bar"
                        .list="${[
                            { icon:'image', selected:true },
                            { icon:'image' },
                            { icon:'image' },
                            { icon:'image' },
                            { icon:'image' },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-navigation-bar", DevNavigationBar);

export default document.createElement("dev-navigation-bar");
