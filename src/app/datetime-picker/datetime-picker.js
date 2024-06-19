import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppDatetimePickerComponent extends MDElement {
    get datetime() {
        return this.querySelector("#datetime");
    }

    get datetimePicker() {
        return this.querySelector("#datetimePicker");
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
                            datetime-local
                            <input
                                @input="${this.handleDatetimeInput}"
                                id="datetime"
                                type="datetime-local"
                                name="datetime-local"
                                value="1990-10-17T00:00"
                            />
                        </label>
                        <md-datetime-picker
                            id="datetimePicker"
                            value="1990-10-17T00:00"
                            @onDatetimePickerItemClick="${this.handleDatetimePickerItemClick}"
                            @onDatetimePickerButtonCancelClick="${this.handleDatetimePickerButtonCancelClick}"
                            @onDatetimePickerButtonOkClick="${this.handleDatetimePickerButtonOkClick}"
                        ></md-datetime-picker>
                        <md-button
                            label="Datetime Picker"
                            @click="${(event) => this.datetimePicker.toggle(event.currentTarget)}"
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

    handleDatetimeInput() {
        this.datetimePicker.value = this.datetime.value;
    }

    handleDatetimePickerItemClick() {
        this.datetime.value = this.datetimePicker.value;
    }

    handleDatetimePickerButtonCancelClick() {
        this.datetime.value = this.datetimePicker.value;
        this.datetimePicker.close();
    }

    handleDatetimePickerButtonOkClick() {
        this.datetime.value = this.datetimePicker.value;
        this.datetimePicker.close();
    }

    handleFormNativeReset() {
        this.datetimePicker.value = this.datetimePicker.defaultValue;
    }

    handleFormNativeSubmit(event) {
        const formData = new FormData(event.currentTarget.native.value);
        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object, null, 4);
        console.log(json);
    }
}

customElements.define("app-datetime-picker", AppDatetimePickerComponent);

export default document.createElement("app-datetime-picker");
