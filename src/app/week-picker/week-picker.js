import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppWeekPickerComponent extends MDElement {
    get week() {
        return this.querySelector("#week");
    }

    get weekPicker() {
        return this.querySelector("#weekPicker");
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
                            week-local
                            <input
                                @input="${this.handleWeekInput}"
                                id="week"
                                type="week"
                                name="week"
                                value="1990-W42"
                            />
                        </label>
                        <md-week-picker
                            id="weekPicker"
                            value="1990-W42"
                            @onWeekPickerItemClick="${this.handleWeekPickerItemClick}"
                            @onWeekPickerButtonCancelClick="${this.handleWeekPickerButtonCancelClick}"
                            @onWeekPickerButtonOkClick="${this.handleWeekPickerButtonOkClick}"
                        ></md-week-picker>
                        <md-button
                            label="Week Picker"
                            @click="${(event) => this.weekPicker.toggle(event.currentTarget)}"
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

    handleWeekInput() {
        this.weekPicker.value = this.week.value;
    }

    handleWeekPickerItemClick() {
        this.week.value = this.weekPicker.value;
    }

    handleWeekPickerButtonCancelClick() {
        this.week.value = this.weekPicker.value;
        this.weekPicker.close();
    }

    handleWeekPickerButtonOkClick() {
        this.week.value = this.weekPicker.value;
        this.weekPicker.close();
    }

    handleFormNativeReset() {
        this.weekPicker.value = this.weekPicker.defaultValue;
    }

    handleFormNativeSubmit(event) {
        const formData = new FormData(event.currentTarget.native.value);
        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object, null, 4);
        console.log(json);
    }
}

customElements.define("app-week-picker", AppWeekPickerComponent);

export default document.createElement("app-week-picker");
