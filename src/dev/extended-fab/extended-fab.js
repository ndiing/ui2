import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevExtendedFab extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-extended-fab label="Navigate" icon="navigation"></md-extended-fab>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-extended-fab label="Reroute"></md-extended-fab>
                </div>
                
                
            </div>
        `;
    }
}

customElements.define("dev-extended-fab", DevExtendedFab);

export default document.createElement("dev-extended-fab");
