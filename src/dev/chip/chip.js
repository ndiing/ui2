import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevChip extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chip></md-chip>
                </div>
                
                
            </div>
        `;
    }
}

customElements.define("dev-chip", DevChip);

export default document.createElement("dev-chip");
