import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevForm extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <md-form>
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>email</label></div><div><input type="email" name="email"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>password</label></div><div><input type="password" name="password"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>text</label></div><div><input type="text" name="text"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>url</label></div><div><input type="url" name="url"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>search</label></div><div><input type="search" name="search"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>number</label></div><div><input type="number" name="number"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>tel</label></div><div><input type="tel" name="tel"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>date</label></div><div><input type="date" name="date"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>datetime</label></div><div><input type="datetime" name="datetime"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>month</label></div><div><input type="month" name="month"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>time</label></div><div><input type="time" name="time"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>week</label></div><div><input type="week" name="week"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>color</label></div><div><input type="color" name="color"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>file</label></div><div><input type="file" name="file"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>range</label></div><div><input type="range" name="range"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>checkbox</label></div><div><input type="checkbox" name="checkbox"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>radio</label></div><div><input type="radio" name="radio"></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>select</label></div><div><select name="select"></option></select></div></div></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><div><div><label>textarea</label></div><div><textarea name="textarea"></textarea></div></div></div>
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
