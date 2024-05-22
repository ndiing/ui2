import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevProgressIndicator extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator max="100" value="50"></md-progress-indicator>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-progress-indicator", DevProgressIndicator);

export default document.createElement("dev-progress-indicator");
