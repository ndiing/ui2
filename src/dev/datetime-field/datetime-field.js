import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevDatetimeField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-datetime-field label="Label"></md-datetime-field>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-datetime-field", DevDatetimeField);

export default document.createElement("dev-datetime-field");
