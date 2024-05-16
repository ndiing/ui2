import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Popper } from "../../lib/popper/popper";

class DevPopper extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    
                    <div class="poper-button"
                        style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 256px;
                        height: 56px;
                        background: var(--md-sys-color-surface-container-low);"
                    ></div>
                    <div class="poper-container"
                        style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 256px;
                        height: 168px;
                        background: var(--md-sys-color-surface-container-lowest);"
                    ></div>
                </div>
                
                
            </div>
        `;
    }
    firstUpdated() {
        const button = this.querySelector(".poper-button");
        const container=this.querySelector(".poper-container")
        const popper = new Popper(container, {
            button,
            placements: ["right", "right-start"],
            offset: 8,
        });
        popper.setPlacement()
    }
}

customElements.define("dev-popper", DevPopper);

export default document.createElement("dev-popper");
