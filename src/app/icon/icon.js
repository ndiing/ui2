import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppIconElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-icon>image</md-icon>
                </div>
            </div>
        `;
    }
}

customElements.define("app-icon", AppIconElement);

export default document.createElement("app-icon");
