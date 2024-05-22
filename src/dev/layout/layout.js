import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevLayout extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-layout></md-layout>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-layout", DevLayout);

export default document.createElement("dev-layout");
