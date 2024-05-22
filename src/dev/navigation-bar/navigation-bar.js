import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-navigation-bar ui="" open="false"></md-navigation-bar>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-navigation-bar", DevNavigationBar);

export default document.createElement("dev-navigation-bar");
