import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppSwitchElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-form>
                        <div class="md-layout-column">
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                <md-switch></md-switch>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                <md-switch checked></md-switch>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                <md-switch .icons="${["close", "check"]}"></md-switch>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                <md-switch
                                    .icons="${["close", "check"]}"
                                    checked></md-switch>
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

customElements.define("app-switch", AppSwitchElement);

export default document.createElement("app-switch");
