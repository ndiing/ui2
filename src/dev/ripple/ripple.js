import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Ripple } from "../../lib/ripple/ripple";

class DevRipple extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <div class="dev-ripple"></div>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }
    firstUpdated(){
        this.querySelectorAll('.dev-ripple')
        .forEach(element => {
            new Ripple(element,{
                
            })
        })
    }
}

customElements.define("dev-ripple", DevRipple);

export default document.createElement("dev-ripple");
