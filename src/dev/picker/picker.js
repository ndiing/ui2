import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevPicker extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <!-- <md-date-picker id="datePicker" value="1990-10-17"></md-date-picker> -->
                    <md-date-picker></md-date-picker>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <!-- <md-time-picker id="timePicker" value="20:30"></md-time-picker> -->
                    <md-time-picker></md-time-picker>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <!-- <md-week-picker id="weekPicker" value="1990-W20"></md-week-picker> -->
                    <md-week-picker></md-week-picker>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <!-- <md-month-picker id="monthPicker" value="1990-10"></md-month-picker> -->
                    <md-month-picker></md-month-picker>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <!-- <md-datetime-picker id="datetimePicker" value="1990-10-17T20:30"></md-datetime-picker> -->
                    <md-datetime-picker></md-datetime-picker>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <!-- <md-color-picker id="colorPicker" value="#6750a4"></md-color-picker> -->
                    <md-color-picker></md-color-picker>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-picker", DevPicker);

export default document.createElement("dev-picker");
