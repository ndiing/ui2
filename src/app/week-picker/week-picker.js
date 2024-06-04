import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppWeekPickerElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-week-picker
                        id="dateTimePicker1"
                        @onWeekPickerChange="${(event) => {
                            button1.label = [dateTimePicker1.selected.getFullYear(), dateTimePicker1.selected.getWeek()].join("-W");
                        }}"
                        @onWeekPickerButtonOkClick="${(event) => dateTimePicker1.close()}"
                        @onWeekPickerButtonCancelClick="${(event) => dateTimePicker1.close()}"
                        value="2024-W22"
                    ></md-week-picker>
                    <md-button id="button1" @click="${(event) => dateTimePicker1.show(event.currentTarget)}" label="week-picker"></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-week-picker", AppWeekPickerElement);

export default document.createElement("app-week-picker");
