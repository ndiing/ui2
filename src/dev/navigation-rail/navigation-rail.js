import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationRail extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-navigation-rail ui="" open="false"></md-navigation-rail>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-navigation-rail", DevNavigationRail);

export default document.createElement("dev-navigation-rail");
