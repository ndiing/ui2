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
                    
                    <div class="dev-popper__container">container</div>
                    <div class="dev-popper__button">button</div>
                </div>
                
                
            </div>
        `;
    }
    firstUpdated() {
        const buttons = this.querySelectorAll(".dev-popper__button");
        this.querySelectorAll(".dev-popper__container").forEach((element, index) => {
            new Popper(element, {
                button: buttons[index],
                boundary: this.parentElement,
                placements: ["bottom", "bottom-start"],
                offset: 8,
            });
        });
    }
}

customElements.define("dev-popper", DevPopper);

export default document.createElement("dev-popper");
