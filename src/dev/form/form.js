import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevForm extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <md-form
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout--column" style="margin:24px;">
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-email-field ui="outlined" label="email" name="email"></md-email-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-password-field ui="outlined" label="password" name="password"></md-password-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-text-field ui="outlined" label="text" name="text"></md-text-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-url-field ui="outlined" label="url" name="url"></md-url-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-search-field ui="outlined" label="search" name="search"></md-search-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-number-field ui="outlined" label="number" name="number"></md-number-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-tel-field ui="outlined" label="tel" name="tel"></md-tel-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-date-field ui="outlined" label="date" name="date"></md-date-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-datetime-field ui="outlined" label="datetime" name="datetime"></md-datetime-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-month-field ui="outlined" label="month" name="month"></md-month-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-time-field ui="outlined" label="time" name="time"></md-time-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-week-field ui="outlined" label="week" name="week"></md-week-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-color-field ui="outlined" label="color" name="color"></md-color-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-file-field ui="outlined" label="file" name="file"></md-file-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-select-field ui="outlined" label="select" name="select"></md-select-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-textarea-field ui="outlined" label="textarea" name="textarea"></md-textarea-field></div>

                    <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4"><md-slider name="slider"></md-slider></div>
                    <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4"><md-checkbox name="checkbox"></md-checkbox></div>
                    <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4"><md-radio-button name="radio-button"></md-radio-button></div>

                    <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                        <md-button type="reset" label="Reset" ui="filled-tonal"></md-button>
                        <md-button type="submit" label="Submit" ui="filled"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }
    handleFormNativeSubmit(event){
        console.log(Object.fromEntries(new FormData(event.detail.target).entries()))          
    }
}

customElements.define("dev-form", DevForm);

export default document.createElement("dev-form");
