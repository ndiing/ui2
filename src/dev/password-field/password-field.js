import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevPasswordField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-password-field label="Label" type=""></md-password-field>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-password-field", DevPasswordField);

export default document.createElement("dev-password-field");
