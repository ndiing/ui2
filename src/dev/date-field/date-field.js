import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevDateField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-date-field label="Label"></md-date-field>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-date-field", DevDateField);

export default document.createElement("dev-date-field");
