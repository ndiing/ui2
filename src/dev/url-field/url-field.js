import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevUrlField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-url-field label="Label"></md-url-field>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-url-field", DevUrlField);

export default document.createElement("dev-url-field");
