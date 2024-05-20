import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class AppTemplate extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("app-template", AppTemplate);

export default document.createElement("app-template");
