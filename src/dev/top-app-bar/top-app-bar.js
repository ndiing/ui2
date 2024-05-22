import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTopAppBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-top-app-bar leadingActions="[]" label="Label" labelSecondary="" trailingActions="[]" ui="" open="false"></md-top-app-bar>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-top-app-bar", DevTopAppBar);

export default document.createElement("dev-top-app-bar");
