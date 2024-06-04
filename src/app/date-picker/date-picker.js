import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppDatePickerElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-date-picker
                        id="dateTimePicker1"
                        @onDatePickerChange="${(event) => {
                            button1.label = [dateTimePicker1.selected.getFullYear(), dateTimePicker1.selected.getMonth() + 1, dateTimePicker1.selected.getDate()].join("-");
                        }}"
                        @onDatePickerButtonOkClick="${(event) => dateTimePicker1.close()}"
                        @onDatePickerButtonCancelClick="${(event) => dateTimePicker1.close()}"
                        value="1990-10-17"
                    ></md-date-picker>
                    <md-button id="button1" @click="${(event) => dateTimePicker1.show(event.currentTarget)}" label="date-picker"></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-date-picker", AppDatePickerElement);

export default document.createElement("app-date-picker");
