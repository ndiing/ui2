import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevCard extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card leadingActions="[]" label="" labelSecondary="" trailingActions="[]" buttons="[]" ui="elevated">elevated</md-card>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card leadingActions="[]" label="" labelSecondary="" trailingActions="[]" buttons="[]" ui="filled">filled</md-card>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card leadingActions="[]" label="" labelSecondary="" trailingActions="[]" buttons="[]" ui="outlined">outlined</md-card>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-card", DevCard);

export default document.createElement("dev-card");
