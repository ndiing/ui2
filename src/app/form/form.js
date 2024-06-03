import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppFormElement extends MDElement {
    constructor() {
        super();

    }

    render() {
        return html`
            <md-form
                @onFormNativeSubmit="${(event) => {
                    console.log(Object.fromEntries(new FormData(event.detail.currentTarget).entries()));
                }}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            label="Text Field"
                            name="text"
                            value="Text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-number-field
                            label="Number Field"
                            name="number"
                            value="1234"
                        ></md-number-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-tel-field
                            label="Tel Field"
                            name="tel"
                            value="+6281935155404"
                        ></md-tel-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-email-field
                            label="Email Field"
                            name="email"
                            value="ndiing.inc@gmail.com"
                        ></md-email-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-url-field
                            label="Url Field"
                            name="url"
                            value="https://ndiing.github.io/material/dist/"
                        ></md-url-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-password-field
                            label="Password Field"
                            name="password"
                            value="secret"
                        ></md-password-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-search-field
                            label="Search Field"
                            name="search"
                            value="ndiing"
                        ></md-search-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-color-field
                            label="Color Field"
                            name="color"
                            value="#ff0000"
                        ></md-color-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-file-field
                            label="File Field"
                            name="file"
                        ></md-file-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-datetime-field
                            label="Datetime Field"
                            name="datetime"
                            value="1990-10-17T20:30"
                        ></md-datetime-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-date-field
                            label="Date Field"
                            name="date"
                            value="1990-10-17"
                        ></md-date-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-month-field
                            label="Month Field"
                            name="month"
                            value="1990-10"
                        ></md-month-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-week-field
                            label="Week Field"
                            name="week"
                            value="1990-W42"
                        ></md-week-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-time-field
                            label="Time Field"
                            name="time"
                            value="20:30"
                        ></md-time-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-textarea-field
                            label="Textarea Field"
                            name="textarea"
                            value="Text"
                        ></md-textarea-field>
                    </div>
                    

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-checkbox name="checkbox"></md-checkbox>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-checkbox
                            name="checkbox"
                            checked
                        ></md-checkbox>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-radio-button name="radio-button"></md-radio-button>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-radio-button
                            name="radio-button"
                            checked
                        ></md-radio-button>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-switch name="switch"></md-switch>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-switch
                            name="switch"
                            checked
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-slider name="slider"></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-button
                            ui="outlined"
                            type="reset"
                            label="Reset"
                        ></md-button>
                        <md-button
                            ui="filled"
                            type="submit"
                            label="Submit"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("app-form", AppFormElement);

export default document.createElement("app-form");
