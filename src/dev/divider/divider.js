import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevDivider extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-divider>search</md-divider>
                </div>
                
                
            </div>
        `;
    }
}

customElements.define("dev-divider", DevDivider);

export default document.createElement("dev-divider");
