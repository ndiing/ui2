import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBottomSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-bottom-sheet>search</md-bottom-sheet>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-bottom-sheet", DevBottomSheet);

export default document.createElement("dev-bottom-sheet");
