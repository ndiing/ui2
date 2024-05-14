import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevExample2 extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--north">
                    <div style="height:64px;"></div>
                </div>
                <div class="md-layout__item--east">
                    <div style="width:360px;height:100%;"></div>
                </div>
                <div class="md-layout__item--center">
                    <div>lorem</div>
                </div>
                <div class="md-layout__item--south">
                    <div style="height:80px;"></div>
                </div>
                <div class="md-layout__item--west">
                    <div style="width:360px;height:100%;overflow:auto;"></div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-example2", DevExample2);

export default document.createElement("dev-example2");
