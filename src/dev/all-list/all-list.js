import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevAllList extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
            
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-menu__list"
                        .list="${[
                            {icon:'image',label:'Text 1'},
                            {icon:'image',label:'Text 2'},
                            {icon:'image',label:'Text 3'},
                            {icon:'image',label:'Text 4'},
                            {icon:'image',label:'Text 5'},
                        ]}"
                    ></md-list>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-all-list", DevAllList);

export default document.createElement("dev-all-list");
