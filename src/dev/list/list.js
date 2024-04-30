import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";

class DevList extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list 
                        .list="${[
                            { label: 'Lorem' },
                            { label: 'ipsum' },
                            { label: 'dolor' },
                            { label: 'sit' },
                            { label: 'amet' },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }

}

customElements.define("dev-list", DevList);

export default document.createElement("dev-list");
