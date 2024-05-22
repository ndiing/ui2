import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSearchField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-search-field label="Label"></md-search-field>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-search-field", DevSearchField);

export default document.createElement("dev-search-field");
