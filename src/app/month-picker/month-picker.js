import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppMonthPickerElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-month-picker
                        id="dateTimePicker1"
                        @onMonthPickerChange="${(event) => {
                            button1.label = [dateTimePicker1.selected.getFullYear(), dateTimePicker1.selected.getMonth() + 1].join("-");
                        }}"
                        @onMonthPickerButtonOkClick="${(event) => dateTimePicker1.close()}"
                        @onMonthPickerButtonCancelClick="${(event) => dateTimePicker1.close()}"
                        value="1990-10"
                    ></md-month-picker>
                    <md-button
                        id="button1"
                        @click="${(event) => dateTimePicker1.show(event.currentTarget)}"
                        label="month-picker"
                    ></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-month-picker", AppMonthPickerElement);

export default document.createElement("app-month-picker");
