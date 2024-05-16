import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevObserver extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div class="observer"
                        style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 256px;
                        height: 256px;
                        background: var(--md-sys-color-surface-container-lowest);"
                    ></div>
                </div>
            </div>
        `;
    }

    firstUpdated(){
        const element = this.querySelector('.observer')
        window.addEventListener('onLayoutChange',event=>{
            element.textContent=''
            element.textContent=event.detail.name
        })
        window.addEventListener('onColorChange',event=>{
            element.textContent=''
            element.textContent=event.detail.name
        })
    }
}

customElements.define("dev-observer", DevObserver);

export default document.createElement("dev-observer");
