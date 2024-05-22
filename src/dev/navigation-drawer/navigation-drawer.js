import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationDrawer extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-navigation-drawer ui="" uiList="" open="false"></md-navigation-drawer>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-navigation-drawer", DevNavigationDrawer);

export default document.createElement("dev-navigation-drawer");
