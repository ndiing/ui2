import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevIcon extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-icon>search</md-icon>
                    <md-icon>home</md-icon>
                    <md-icon>menu</md-icon>
                    <md-icon>close</md-icon>
                    <md-icon>settings</md-icon>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-icon", DevIcon);

export default document.createElement("dev-icon");
