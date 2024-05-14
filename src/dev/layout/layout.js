import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevLayout extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item md-layout__item--north">north</div>
                <div class="md-layout__item md-layout__item--west">west</div>
                <div class="md-layout__item md-layout__item--center">center</div>
                <div class="md-layout__item md-layout__item--east">east</div>
                <div class="md-layout__item md-layout__item--south">south</div>
            </div>
        `;
    }
}

customElements.define("dev-layout", DevLayout);

export default document.createElement("dev-layout");
