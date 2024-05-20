import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Ripple } from "../../com/ripple/ripple";

class DevRipple extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div class="ripple"
                        style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 256px;
                        height: 56px;
                        background: var(--md-sys-color-surface-container-low);"
                    ></div>
                </div>
            </div>
        `;
    }
    firstUpdated(){
        const button = this.querySelector('.ripple')
        new Ripple(button,{
                
        })
    }
}

customElements.define("dev-ripple", DevRipple);

export default document.createElement("dev-ripple");
