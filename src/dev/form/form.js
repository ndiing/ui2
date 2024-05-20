import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevForm extends MDElement {

    render() {
        // prettier-ignore
        return html`
            <md-form action="" enctype="" method="">
                <div class="md-layout-column" style="margin:24px;">
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-color-field label="Color" name="" placeholder="" required ui="outlined" text=""></md-color-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-date-field label="Date" name="" placeholder="" required ui="outlined" text=""></md-date-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-datetime-field label="Datetime" name="" placeholder="" required ui="outlined" text=""></md-datetime-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-email-field label="Email" name="" placeholder="" required ui="outlined" text=""></md-email-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-file-field label="File" name="" placeholder="" required ui="outlined" text=""></md-file-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-month-field label="Month" name="" placeholder="" required ui="outlined" text=""></md-month-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-number-field label="Number" name="" placeholder="" required ui="outlined" text=""></md-number-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-password-field label="Password" type="" name="" placeholder="" required ui="outlined" text=""></md-password-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-search-field label="Search" name="" placeholder="" required ui="outlined" text=""></md-search-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-select-field label="Select" name="" placeholder="" required ui="outlined" text=""></md-select-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-tel-field label="Tel" name="" placeholder="" required ui="outlined" text=""></md-tel-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field label="Text" name="" placeholder="" required ui="outlined" text=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-textarea-field label="Textarea" name="" placeholder="" required ui="outlined" text=""></md-textarea-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-time-field label="Time" name="" placeholder="" required ui="outlined" text=""></md-time-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-url-field label="Url" name="" placeholder="" required ui="outlined" text=""></md-url-field>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-week-field label="Week" name="" placeholder="" required ui="outlined" text=""></md-week-field>
                    </div>

                    <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-slider></md-slider>
                    </div>

                    <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-checkbox></md-checkbox>
                        <md-checkbox indeterminate></md-checkbox>
                        <md-checkbox checked defaultChecked></md-checkbox>
                    </div>
                    <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-radio-button></md-radio-button>
                        <md-radio-button checked defaultChecked></md-radio-button>
                    </div>
                    <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-switch></md-switch>
                        <md-switch checked defaultChecked></md-switch>
                    </div>

                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-color-picker></md-color-picker>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-date-picker></md-date-picker>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-datetime-picker></md-datetime-picker>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-month-picker></md-month-picker>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-time-picker></md-time-picker>
                    </div>
                    <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-week-picker></md-week-picker>
                    </div>

                </div>
            </md-form>

        `;
    }

}

customElements.define("dev-form", DevForm);

export default document.createElement("dev-form");
