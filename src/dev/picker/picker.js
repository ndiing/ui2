import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevPicker extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-date-picker></md-date-picker>
                </div>
                <div class="md-layout__item--expanded9 md-layout__item--medium4 md-layout__item--compact4">
                    <md-time-picker></md-time-picker>
                </div>
                <div class="md-layout__item--expanded9 md-layout__item--medium4 md-layout__item--compact4">
                    <md-color-picker></md-color-picker>
                </div>
                <div class="md-layout__item--expanded9 md-layout__item--medium4 md-layout__item--compact4">
                    <md-emoji-picker></md-emoji-picker>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-picker", DevPicker);

export default document.createElement("dev-picker");
