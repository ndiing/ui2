import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevLayout extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item md-layout__item--north" style="height:80px; margin-top:-80px;">
                    north
                </div>
                <div class="md-layout__item md-layout__item--east" style="width:360px; margin-right:-360px;">
                    east
                </div>
                <div class="md-layout__item md-layout__item--south" style="height:80px; margin-bottom:-80px;">
                    south
                </div>
                <div class="md-layout__item md-layout__item--west" style="width:360px; margin-left:-360px;">
                    west
                </div>
                <div class="md-layout__item md-layout__item--center">
                    center
                </div>
            </div>
        `;
    }
}

customElements.define("dev-layout", DevLayout);

export default document.createElement("dev-layout");
