import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBottomSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-bottom-sheet leadingActions="[]" label="Label" labelSecondary="" trailingActions="[]" buttons="[]" ui="" open="false"></md-bottom-sheet>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-bottom-sheet", DevBottomSheet);

export default document.createElement("dev-bottom-sheet");
