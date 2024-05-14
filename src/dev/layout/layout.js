import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevLayout extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item md-layout__item--north md-layout--fit" >
                    north
                </div>
                <div class="md-layout__item md-layout__item--west md-layout--fit" >
                    west
                </div>
                <div class="md-layout__item md-layout__item--center md-layout--fit" style="">
                    center
                </div>
                <div class="md-layout__item md-layout__item--east md-layout--fit">
                    east
                </div>
                <div class="md-layout__item md-layout__item--south md-layout--fit" >
                    south
                </div>
            </div>
        `;
    }
}

customElements.define("dev-layout", DevLayout);

export default document.createElement("dev-layout");
