import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppTimePickerComponent extends MDElement {
    get time() {
        return this.querySelector("#time");
    }

    get timePicker() {
        return this.querySelector("#timePicker");
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
                            time-local
                            <input
                                @input="${this.handleTimeInput}"
                                id="time"
                                type="time"
                                name="time"
                                value="20:30"
                            />
                        </label>
                        <md-time-picker
                            id="timePicker"
                            value="20:30"
                            @onTimePickerItemClick="${this.handleTimePickerItemClick}"
                            @onTimePickerButtonCancelClick="${this.handleTimePickerButtonCancelClick}"
                            @onTimePickerButtonOkClick="${this.handleTimePickerButtonOkClick}"
                        ></md-time-picker>
                        <md-button
                            label="Time Picker"
                            @click="${(event) => this.timePicker.toggle(event.currentTarget)}"
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

    handleTimeInput() {
        this.timePicker.value = this.time.value;
    }

    handleTimePickerItemClick() {
        this.time.value = this.timePicker.value;
    }

    handleTimePickerButtonCancelClick() {
        this.time.value = this.timePicker.value;
        this.timePicker.close();
    }

    handleTimePickerButtonOkClick() {
        this.time.value = this.timePicker.value;
        this.timePicker.close();
    }

    handleFormNativeReset() {
        this.timePicker.value = this.timePicker.defaultValue;
    }

    handleFormNativeSubmit(event) {
        const formData = new FormData(event.currentTarget.native.value);
        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object, null, 4);
        console.log(json);
    }
}

customElements.define("app-time-picker", AppTimePickerComponent);

export default document.createElement("app-time-picker");
