import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSideSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-side-sheet>search</md-side-sheet>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-side-sheet", DevSideSheet);

export default document.createElement("dev-side-sheet");
