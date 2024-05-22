import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevRadioButton extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-radio-button></md-radio-button>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-radio-button checked defaultChecked></md-radio-button>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-radio-button", DevRadioButton);

export default document.createElement("dev-radio-button");
