import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";

class DevList extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-list 
                        .list="${[
                            { label: 'Item 1' },
                            { label: 'Item 2' },
                            { label: 'Item 3' },
                            { label: 'Item 4' },
                            { label: 'Item 5' },
                            { label: 'Item 6' },
                            { label: 'Item 7' },
                            { label: 'Item 8' },
                            { label: 'Item 9' },
                            { label: 'Item 10' },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }

}

customElements.define("dev-list", DevList);

export default document.createElement("dev-list");
