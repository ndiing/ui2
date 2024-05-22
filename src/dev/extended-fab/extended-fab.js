import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevExtendedFab extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-extended-fab icon="favorite" label="Label"></md-extended-fab>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-extended-fab label="Label"></md-extended-fab>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-extended-fab", DevExtendedFab);

export default document.createElement("dev-extended-fab");
