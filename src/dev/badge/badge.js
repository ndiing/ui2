import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBadge extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-badge></md-badge>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-badge label="1"></md-badge>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-badge label="1000"></md-badge>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-badge", DevBadge);

export default document.createElement("dev-badge");
