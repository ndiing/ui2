import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSelectField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-select-field>search</md-select-field>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-select-field", DevSelectField);

export default document.createElement("dev-select-field");
