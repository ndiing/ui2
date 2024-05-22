import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSlider extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-slider ui="centered"></md-slider>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-slider ui="continuous"></md-slider>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-slider ui="discrete"></md-slider>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-slider ui="range-selection"></md-slider>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-slider", DevSlider);

export default document.createElement("dev-slider");
