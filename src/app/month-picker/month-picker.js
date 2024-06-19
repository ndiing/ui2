import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppMonthPickerComponent extends MDElement {
    get month() {
        return this.querySelector("#month");
    }

    get monthPicker() {
        return this.querySelector("#monthPicker");
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
                            month-local
                            <input
                                @input="${this.handleMonthInput}"
                                id="month"
                                type="month"
                                name="month"
                                value="1990-10"
                            />
                        </label>
                        <md-month-picker
                            id="monthPicker"
                            value="1990-10"
                            @onMonthPickerItemClick="${this.handleMonthPickerItemClick}"
                            @onMonthPickerButtonCancelClick="${this.handleMonthPickerButtonCancelClick}"
                            @onMonthPickerButtonOkClick="${this.handleMonthPickerButtonOkClick}"
                        ></md-month-picker>
                        <md-button
                            label="Month Picker"
                            @click="${(event) => this.monthPicker.toggle(event.currentTarget)}"
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

    handleMonthInput() {
        this.monthPicker.value = this.month.value;
    }

    handleMonthPickerItemClick() {
        this.month.value = this.monthPicker.value;
    }

    handleMonthPickerButtonCancelClick() {
        this.month.value = this.monthPicker.value;
        this.monthPicker.close();
    }

    handleMonthPickerButtonOkClick() {
        this.month.value = this.monthPicker.value;
        this.monthPicker.close();
    }

    handleFormNativeReset() {
        this.monthPicker.value = this.monthPicker.defaultValue;
    }

    handleFormNativeSubmit(event) {
        const formData = new FormData(event.currentTarget.native.value);
        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object, null, 4);
        console.log(json);
    }
}

customElements.define("app-month-picker", AppMonthPickerComponent);

export default document.createElement("app-month-picker");
