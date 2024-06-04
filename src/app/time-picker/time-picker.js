import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppTimePickerElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-time-picker
                        id="dateTimePicker1"
                        @onTimePickerChange="${(event) => {
                            button1.label = [dateTimePicker1.selected.getHours(), dateTimePicker1.selected.getMinutes()].join(":");
                        }}"
                        @onTimePickerButtonOkClick="${(event) => dateTimePicker1.close()}"
                        @onTimePickerButtonCancelClick="${(event) => dateTimePicker1.close()}"
                        value="10:30"
                    ></md-time-picker>
                    <md-button id="button1" @click="${(event) => dateTimePicker1.show(event.currentTarget)}" label="time-picker"></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-time-picker", AppTimePickerElement);

export default document.createElement("app-time-picker");
