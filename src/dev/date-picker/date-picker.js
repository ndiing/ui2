import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevDatePicker extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                    <md-date-picker></md-date-picker>
                </div>
                
                
            </div>
        `;
    }
}

customElements.define("dev-date-picker", DevDatePicker);

export default document.createElement("dev-date-picker");
