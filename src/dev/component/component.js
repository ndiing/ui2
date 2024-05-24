import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevComponent extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-component label=""></md-component>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-component", DevComponent);

export default document.createElement("dev-component");
