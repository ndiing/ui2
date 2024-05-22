import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTimeField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-time-field label="Label"></md-time-field>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-time-field", DevTimeField);

export default document.createElement("dev-time-field");
