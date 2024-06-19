import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppDatePickerComponent extends MDElement {
    get date() {
        return this.querySelector("#date");
    }

    get datePicker() {
        return this.querySelector("#datePicker");
    }

    render() {
        return html`
            <md-form
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
                @onFormNativeReset="${this.handleFormNativeReset}"
            >
                <div
                    style=""
                    class="md-layout-grid"
                >
                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <label for="">
                            date-local
                            <input
                                @input="${this.handleDateInput}"
                                id="date"
                                type="date"
                                name="date"
                                value="1990-10-17"
                            />
                        </label>
                        <md-date-picker
                            id="datePicker"
                            value="1990-10-17"
                            @onDatePickerItemClick="${this.handleDatePickerItemClick}"
                            @onDatePickerButtonCancelClick="${this.handleDatePickerButtonCancelClick}"
                            @onDatePickerButtonOkClick="${this.handleDatePickerButtonOkClick}"
                        ></md-date-picker>
                        <md-button
                            label="Date Picker"
                            @click="${(event) => this.datePicker.toggle(event.currentTarget)}"
                        ></md-button>
                    </div>

                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <md-button
                            type="reset"
                            label="Reset"
                        ></md-button>
                        <md-button
                            type="submit"
                            label="Submit"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }

    handleDateInput() {
        this.datePicker.value = this.date.value;
    }

    handleDatePickerItemClick() {
        this.date.value = this.datePicker.value;
    }

    handleDatePickerButtonCancelClick() {
        this.date.value = this.datePicker.value;
        this.datePicker.close();
    }

    handleDatePickerButtonOkClick() {
        this.date.value = this.datePicker.value;
        this.datePicker.close();
    }

    handleFormNativeReset() {
        this.datePicker.value = this.datePicker.defaultValue;
    }

    handleFormNativeSubmit(event) {
        const formData = new FormData(event.currentTarget.native.value);
        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object, null, 4);
        console.log(json);
    }
}

customElements.define("app-date-picker", AppDatePickerComponent);

export default document.createElement("app-date-picker");
