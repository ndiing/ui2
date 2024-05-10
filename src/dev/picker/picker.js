import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevPicker extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-date-picker value="1990-10-17"></md-date-picker>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-time-picker value="20:30"></md-time-picker>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-week-picker value="1990-W20"></md-week-picker>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-month-picker value="1990-10"></md-month-picker>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-datetime-picker value="1990-10-17T20:30"></md-datetime-picker>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-color-picker value="#000000"></md-color-picker>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-picker", DevPicker);

export default document.createElement("dev-picker");
