import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTab extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tab 
                        .list="${[
                            { icon:'image',label: 'Lorem', selected:true },
                            { icon:'image',label: 'ipsum' },
                            { icon:'image',label: 'dolor' },
                        ]}"
                    ></md-tab>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tab 
                        .list="${[
                            { label: 'Lorem', selected:true },
                            { label: 'ipsum' },
                            { label: 'dolor' },
                            { label: 'sit' },
                            { label: 'amet' },
                        ]}"
                    ></md-tab>
                </div>
                

                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tab 
                        .ui="${"secondary"}"
                        .list="${[
                            { icon:'image',label: 'Lorem', selected:true },
                            { icon:'image',label: 'ipsum' },
                            { icon:'image',label: 'dolor' },
                        ]}"
                    ></md-tab>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tab 
                        .ui="${"secondary"}"
                        .list="${[
                            { label: 'Lorem', selected:true },
                            { label: 'ipsum' },
                            { label: 'dolor' },
                            { label: 'sit' },
                            { label: 'amet' },
                        ]}"
                    ></md-tab>
                </div>
                
            </div>
        `;
    }
}

customElements.define("dev-tab", DevTab);

export default document.createElement("dev-tab");
