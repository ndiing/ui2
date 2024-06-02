import { html } from "lit";
import { MDElement } from "../../com/element/element";

/* 
<fieldset>
                            <legend>Personal Information</legend>
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <br />

                            <label for="age">Age:</label>
                            <input type="number" id="age" name="age" />
                            <br />

                            <label for="phone">Phone:</label>
                            <input type="tel" id="phone" name="phone" />
                            <br />

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" />
                            <br />

                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" />
                            <br />

                            <label for="website">Website:</label>
                            <input type="url" id="website" name="website" />
                            <br />

                            <label for="search">Search:</label>
                            <input type="search" id="search" name="search" />
                            <br />

                            <label for="color">Favorite Color:</label>
                            <input type="color" id="color" name="color" />
                            <br />

                            <label for="range">Range:</label>
                            <input type="range" id="range" name="range" />
                            <br />

                            <label for="file">Upload a file:</label>
                            <input type="file" id="file" name="file" />
                            <br />

                            <label for="datetime">Date and Time:</label>
                            <input type="datetime-local" id="datetime" name="datetime" />
                            <br />

                            <label for="date">Date:</label>
                            <input type="date" id="date" name="date" />
                            <br />

                            <label for="month">Month:</label>
                            <input type="month" id="month" name="month" />
                            <br />

                            <label for="week">Week:</label>
                            <input type="week" id="week" name="week" />
                            <br />

                            <label for="time">Time:</label>
                            <input type="time" id="time" name="time" />
                            <br />

                            <label for="checkbox">Checkbox:</label>
                            <input type="checkbox" id="checkbox" name="checkbox" />
                            <br />

                            <label for="radio">Radio:</label>
                            <input type="radio" id="radio" name="radio" />
                            <br />

                            <label for="hidden">Hidden Input:</label>
                            <input type="hidden" id="hidden" name="hidden" />
                            <br />

                            <label for="image">Image Button:</label>
                            <input type="image" id="image" src="image.png" alt="Submit" />
                            <br />

                            <label for="textarea">Textarea:</label>
                            <textarea id="textarea" name="textarea"></textarea>
                            <br />

                            <label for="select">Select:</label>
                            <select id="select" name="select">
                                <optgroup label="Group 1">
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                </optgroup>
                                <optgroup label="Group 2">
                                    <option value="3">Option 3</option>
                                    <option value="4">Option 4</option>
                                </optgroup>
                            </select>
                            <br />

                            <label for="datalist">Datalist:</label>
                            <input list="datalist-options" id="datalist" name="datalist" />
                            <datalist id="datalist-options">
                                <option value="Option 1"></option>
                                <option value="Option 2"></option>
                                <option value="Option 3"></option>
                            </datalist>
                            <br />

                            <label for="meter">Meter:</label>
                            <meter id="meter" value="0.6">60%</meter>
                            <br />

                            <label for="progress">Progress:</label>
                            <progress id="progress" value="70" max="100">70%</progress>
                            <br />

                            <button type="button">Button</button>
                            <button type="reset">Reset</button>
                            <button type="submit">Submit</button>
                            <br />

                            <output name="output" for="name age">Output:</output>
                        </fieldset>
*/

class AppFormElement extends MDElement {
    constructor() {
        super();

        this.data = {
            "text-field": "ndiing",
            "number-field": "2",
            "tel-field": "+6281935155404",
            "email-field": "ndiing.inc@gmail.com",
            "url-field": "http://google.com",
            "password-field": "asdsad",
            "search-field": "asdasd",
            "color-field": "#38ce02",
            "file-field": {},
            "datetime-field": "2024-06-01T02:57",
            "date-field": "2024-05-29",
            "month-field": "2024-01",
            "week-field": "2024-W28",
            "time-field": "",
            "checkbox": "",
            "radio-button": "",
            "switch": "",
            "slider": "50",
        };
    }

    render() {
        return html`
            <md-form
                @onFormNativeSubmit="${(event) => {
                    console.log(Object.fromEntries(new FormData(event.detail.currentTarget).entries()));
                }}">
                <div
                    class="md-layout-column"
                    style="margin:24px;">
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            label="Text Field"
                            name="text-field"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-number-field
                            label="Number Field"
                            name="number-field"></md-number-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-tel-field
                            label="Tel Field"
                            name="tel-field"></md-tel-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-email-field
                            label="Email Field"
                            name="email-field"></md-email-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-url-field
                            label="Url Field"
                            name="url-field"></md-url-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-password-field
                            label="Password Field"
                            name="password-field"></md-password-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-search-field
                            label="Search Field"
                            name="search-field"></md-search-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-color-field
                            label="Color Field"
                            name="color-field"></md-color-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-file-field
                            label="File Field"
                            name="file-field"></md-file-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-datetime-field
                            label="Datetime Field"
                            name="datetime-field"></md-datetime-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-date-field
                            label="Date Field"
                            name="date-field"></md-date-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-month-field
                            label="Month Field"
                            name="month-field"></md-month-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-week-field
                            label="Week Field"
                            name="week-field"></md-week-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-time-field
                            label="Time Field"
                            name="time-field"></md-time-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-checkbox name="checkbox"></md-checkbox>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-checkbox
                            name="checkbox"
                            checked></md-checkbox>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-radio-button name="radio-button"></md-radio-button>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-radio-button
                            name="radio-button"
                            checked></md-radio-button>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-switch name="switch"></md-switch>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-switch
                            name="switch"
                            checked></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-slider name="slider"></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-button
                            ui="outlined"
                            type="reset"
                            label="Reset"></md-button>
                        <md-button
                            ui="filled"
                            type="submit"
                            label="Submit"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("app-form", AppFormElement);

export default document.createElement("app-form");
