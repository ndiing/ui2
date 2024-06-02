import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppRadioButtonElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-form>
                        <div class="md-layout-column">
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                <md-radio-button name="radio-button"></md-radio-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                <md-radio-button
                                    name="radio-button"
                                    checked></md-radio-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                <button type="reset">reset</button>
                                <button type="submit">submit</button>
                            </div>
                        </div>
                    </md-form>
                </div>
            </div>
        `;
    }
}

customElements.define("app-radio-button", AppRadioButtonElement);

export default document.createElement("app-radio-button");
