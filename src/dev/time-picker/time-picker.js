import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTimePicker extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-time-picker>search</md-time-picker>
                </div>
                
                
            </div>
        `;
    }
}

customElements.define("dev-time-picker", DevTimePicker);

export default document.createElement("dev-time-picker");
