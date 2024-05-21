import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevExample extends MDElement {
    constructor(){
        super()


    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <div class="md-layout-border__item md-layout-border__item--center">





                
                </div>
            </div>
        `;
    }
}

customElements.define("dev-example", DevExample);

export default document.createElement("dev-example");
