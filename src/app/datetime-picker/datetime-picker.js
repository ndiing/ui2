import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppDatetimePickerElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-datetime-picker
                        id="dateTimePicker1"
                        @onDatetimePickerChange="${(event) => {
                            button1.label = [[dateTimePicker1.selected.getFullYear(), dateTimePicker1.selected.getMonth() + 1, dateTimePicker1.selected.getDate()].join("-"), [dateTimePicker1.selected.getHours(), dateTimePicker1.selected.getMinutes()].join(":")].join("T");
                        }}"
                        @onDatetimePickerButtonOkClick="${(event) => dateTimePicker1.close()}"
                        @onDatetimePickerButtonCancelClick="${(event) => dateTimePicker1.close()}"></md-datetime-picker>
                    <md-button
                        id="button1"
                        @click="${(event) => dateTimePicker1.show(event.currentTarget)}"
                        label="datetime-picker"></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-datetime-picker
                        id="dateTimePicker2"
                        @onDatetimePickerChange="${(event) => {
                            button1.label = [[dateTimePicker2.selected.getFullYear(), dateTimePicker2.selected.getMonth() + 1, dateTimePicker2.selected.getDate()].join("-"), [dateTimePicker2.selected.getHours(), dateTimePicker2.selected.getMinutes()].join(":")].join("T");
                        }}"
                        @onDatetimePickerButtonOkClick="${(event) => dateTimePicker2.close()}"
                        @onDatetimePickerButtonCancelClick="${(event) => dateTimePicker2.close()}"
                        value="1990-10-17T20:30"></md-datetime-picker>
                    <md-button
                        id="button1"
                        @click="${(event) => dateTimePicker2.show(event.currentTarget)}"
                        label="datetime-picker"></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-datetime-picker", AppDatetimePickerElement);

export default document.createElement("app-datetime-picker");
