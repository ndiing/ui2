import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevForm extends MDElement {
    constructor(){
        super()
        this.data={
            "email": "",
            "password": "",
            "text": "",
            "url": "",
            "search": "",
            "number": "",
            "tel": "",
            "date": "2024-05-10",
            "datetime": "2024-05-10T04:13",
            "month": "2024-05",
            "time": "04:13",
            "week": "2024-W19",
            "color": "#36693d",
            "file": {},
            "select": "",
            "textarea": "",
            "slider": "50"
        }
    }
    render() {
        // prettier-ignore
        return html`
            <md-form
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout--column" style="margin:24px;">
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-email-field ui="outlined" label="email" name="email" .value="${this.data.email}" .defaultValue="${this.data.email}"></md-email-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-password-field ui="outlined" label="password" name="password" .value="${this.data.password}" .defaultValue="${this.data.password}"></md-password-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-text-field ui="outlined" label="text" name="text" .value="${this.data.text}" .defaultValue="${this.data.text}"></md-text-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-url-field ui="outlined" label="url" name="url" .value="${this.data.url}" .defaultValue="${this.data.url}"></md-url-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-search-field ui="outlined" label="search" name="search" .value="${this.data.search}" .defaultValue="${this.data.search}"></md-search-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-number-field ui="outlined" label="number" name="number" .value="${this.data.number}" .defaultValue="${this.data.number}"></md-number-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-tel-field ui="outlined" label="tel" name="tel" .value="${this.data.tel}" .defaultValue="${this.data.tel}"></md-tel-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-date-field ui="outlined" label="date" name="date" .value="${this.data.date}" .defaultValue="${this.data.date}"></md-date-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-datetime-field ui="outlined" label="datetime" name="datetime" .value="${this.data.datetime}" .defaultValue="${this.data.datetime}"></md-datetime-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-month-field ui="outlined" label="month" name="month" .value="${this.data.month}" .defaultValue="${this.data.month}"></md-month-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-time-field ui="outlined" label="time" name="time" .value="${this.data.time}" .defaultValue="${this.data.time}"></md-time-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-week-field ui="outlined" label="week" name="week" .value="${this.data.week}" .defaultValue="${this.data.week}"></md-week-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-color-field ui="outlined" label="color" name="color" .value="${this.data.color}" .defaultValue="${this.data.color}"></md-color-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-file-field ui="outlined" label="file" name="file" .value="${this.data.file}" .defaultValue="${this.data.file}"></md-file-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-select-field ui="outlined" label="select" name="select" .value="${this.data.select}" .defaultValue="${this.data.select}"></md-select-field></div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4"><md-textarea-field ui="outlined" label="textarea" name="textarea" .value="${this.data.textarea}" .defaultValue="${this.data.textarea}"></md-textarea-field></div>

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

        // console.log(Object.fromEntries(new FormData(event.detail.target).entries()))   

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(new FormData(event.detail.target).entries())),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
}

customElements.define("dev-form", DevForm);

export default document.createElement("dev-form");
