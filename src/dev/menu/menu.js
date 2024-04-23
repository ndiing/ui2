import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevMenu extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <!-- <md-menu>search</md-menu> -->
                    <md-list 
                        class="md-list--menu"
                        .list="${[
                            { icon:'image',label: 'Item 1', selected:true },
                            { icon:'image',label: 'Item 2' },
                            { icon:'image',label: 'Item 3' },
                            { icon:'image',label: 'Item 4' },
                            { icon:'image',label: 'Item 5' },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-menu", DevMenu);

export default document.createElement("dev-menu");
