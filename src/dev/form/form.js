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
                <div class="md-layout--column">
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-email-field label="email" name="email"></md-email-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-password-field label="password" name="password"></md-password-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field label="text" name="text"></md-text-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-url-field label="url" name="url"></md-url-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <!-- <div><div><label>search</label></div><div><input type="search" name="search"></div></div> -->
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <!-- <div><div><label>number</label></div><div><input type="number" name="number"></div></div> -->
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-tel-field label="tel" name="tel"></md-tel-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-date-field label="date" name="date"></md-date-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-datetime-field label="datetime" name="datetime"></md-datetime-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-month-field label="month" name="month"></md-month-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-time-field label="time" name="time"></md-time-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-week-field label="week" name="week"></md-week-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-color-field label="color" name="color"></md-color-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-file-field label="file" name="file"></md-file-field>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-slider></md-slider>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-checkbox></md-checkbox>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-radio-button></md-radio-button>
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <!-- <div><div><label>select</label></div><div><select name="select"></option></select></div></div> -->
                    </div>
                    <div class="md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-textarea-field label="textarea" name="textarea"></md-textarea-field>
                    </div>
                    <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">

                        <md-button type="reset" label="Reset" ui="filled-tonal"></md-button>
                        <md-button type="submit" label="Submit" ui="filled"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }
    handleFormNativeSubmit(event){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
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
