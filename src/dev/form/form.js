import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevForm extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <md-form>
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-email-field label="email" name="email"></md-email-field>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-password-field label="password" name="password"></md-password-field>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field label="text" name="text"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-url-field label="url" name="url"></md-url-field>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div><div><label>search</label></div><div><input type="search" name="search"></div></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div><div><label>number</label></div><div><input type="number" name="number"></div></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tel-field label="tel" name="tel"></md-tel-field>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-date-field label="date" name="date"></md-date-field>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-datetime-field label="datetime" name="datetime"></md-datetime-field>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div><div><label>month</label></div><div><input type="month" name="month"></div></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div><div><label>time</label></div><div><input type="time" name="time"></div></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div><div><label>week</label></div><div><input type="week" name="week"></div></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div><div><label>color</label></div><div><input type="color" name="color"></div></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div><div><label>file</label></div><div><input type="file" name="file"></div></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-slider></md-slider>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-checkbox></md-checkbox>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-radio-button></md-radio-button>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div><div><label>select</label></div><div><select name="select"></option></select></div></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div><div><label>textarea</label></div><div><textarea name="textarea"></textarea></div></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">

                        <button type="reset">reset</button>
                        <button type="submit">submit</button>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("dev-form", DevForm);

export default document.createElement("dev-form");
