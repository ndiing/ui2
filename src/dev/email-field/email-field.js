import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevEmailField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-email-field label="Label"></md-email-field>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-email-field", DevEmailField);

export default document.createElement("dev-email-field");
