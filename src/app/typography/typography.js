import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

class AppTypographyElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded8 md-layout-column__item--medium4 md-layout-column__item--compact4"></div>
            </div>
        `;
    }

    firstUpdated() {}
}

customElements.define("app-typography", AppTypographyElement);

export default document.createElement("app-typography");
