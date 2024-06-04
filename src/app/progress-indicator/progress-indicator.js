import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppProgressIndicatorElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-progress-indicator></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-progress-indicator value="50"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-progress-indicator value="100"></md-progress-indicator>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-progress-indicator ui="circular"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-progress-indicator ui="circular" value="50"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-progress-indicator ui="circular" value="100"></md-progress-indicator>
                </div>
            </div>
        `;
    }
}

customElements.define("app-progress-indicator", AppProgressIndicatorElement);

export default document.createElement("app-progress-indicator");
