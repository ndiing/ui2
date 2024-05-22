import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTelField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tel-field label="Label"></md-tel-field>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-tel-field", DevTelField);

export default document.createElement("dev-tel-field");
