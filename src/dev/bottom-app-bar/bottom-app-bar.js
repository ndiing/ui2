import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBottomAppBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-bottom-app-bar actions="[]" fab="" ui="" open="false"></md-bottom-app-bar>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-bottom-app-bar", DevBottomAppBar);

export default document.createElement("dev-bottom-app-bar");
