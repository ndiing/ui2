"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[3169],{3169:(m,e,l)=>{l.r(e),l.d(e,{default:()=>i});var d=l(6684),t=l(1421);class a extends t.UX{constructor(){super()}render(){return d.qy`
            <md-form
                @onFormNativeSubmit="${m=>{console.log(Object.fromEntries(new FormData(m.detail.currentTarget).entries()))}}"
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
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-select-field
                            label="Select Field"
                            name="select"
                            .options="${[{label:"Option 1",value:"1",selected:!0},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}]}"
                        ></md-select-field>
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
        `}}customElements.define("app-form",a);const i=document.createElement("app-form")}}]);