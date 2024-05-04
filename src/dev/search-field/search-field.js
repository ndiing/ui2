import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSearchField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-search-field>search</md-search-field>
                </div>
                
                
            </div>
        `;
    }
}

customElements.define("dev-search-field", DevSearchField);

export default document.createElement("dev-search-field");
