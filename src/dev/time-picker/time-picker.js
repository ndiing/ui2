import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTimePicker extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-time-picker></md-time-picker>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-time-picker", DevTimePicker);

export default document.createElement("dev-time-picker");
