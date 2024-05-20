import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevLayout extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div style="display: flex;flex-direction: column;gap: 24px;padding: 24px;">

                <!-- absolute -->
                <div class="md-layout-absolute" style="background:var(--md-sys-color-surface-container);">
                    <div class="md-layout-absolute__item">absolute</div>
                </div>
    
                <!-- accordion -->
                <div class="md-layout-accordion" style="height:640px;background:var(--md-sys-color-surface-container);">
                    <div class="md-layout-accordion__item">accordion 1</div>
                    <div class="md-layout-accordion__item">accordion 2</div>
                    <div class="md-layout-accordion__item md-layout-accordion__item--expanded">accordion 3</div>
                </div>
    
                <!-- anchor -->
                <!-- <div class="md-layout-anchor" style="background:var(--md-sys-color-surface-container);">
                    <div class="md-layout-anchor__item"></div>
                </div> -->
    
                <!-- border -->
                <div class="md-layout-border" style="height:640px;background:var(--md-sys-color-surface-container);">
                    <div class="md-layout-border__item md-layout-border__item--north" style="background:var(--md-sys-color-surface-container-highest);margin-bottom:24px;">north</div>
                    <div class="md-layout-border__item md-layout-border__item--east" style="background:var(--md-sys-color-surface-container-highest);margin-left:24px;">east</div>
                    <div class="md-layout-border__item md-layout-border__item--south" style="background:var(--md-sys-color-surface-container-highest);margin-top:24px;">south</div>
                    <div class="md-layout-border__item md-layout-border__item--west" style="background:var(--md-sys-color-surface-container-highest);margin-right:24px;">west</div>
                    <div class="md-layout-border__item md-layout-border__item--center" style="background:var(--md-sys-color-surface-container-highest);">center</div>
                </div>
    
                <!-- tabpanel -->
                <!-- <div class="md-layout-tabpanel" style="background:var(--md-sys-color-surface-container);">
                    <div class="md-layout-tabpanel__item"></div>
                </div> -->
    
                <!-- card -->
                <div class="md-layout-card" style="height:640px;background:var(--md-sys-color-surface-container);--md-layout-card-index:2;">
                    <div class="md-layout-card__item">card 1</div>
                    <div class="md-layout-card__item">card 2</div>
                    <div class="md-layout-card__item">card 3</div>
                </div>
    
                <!-- column -->
                <div class="md-layout-column" style="background:var(--md-sys-color-surface-container);">
                    <div class="md-layout-column__item md-layout-column__item--expanded1" style="background:var(--md-sys-color-surface-container-highest);">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded11" style="background:var(--md-sys-color-surface-container-highest);">11</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2" style="background:var(--md-sys-color-surface-container-highest);">2</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded10" style="background:var(--md-sys-color-surface-container-highest);">10</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3" style="background:var(--md-sys-color-surface-container-highest);">3</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded9" style="background:var(--md-sys-color-surface-container-highest);">9</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded4" style="background:var(--md-sys-color-surface-container-highest);">4</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded8" style="background:var(--md-sys-color-surface-container-highest);">8</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded5" style="background:var(--md-sys-color-surface-container-highest);">5</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded7" style="background:var(--md-sys-color-surface-container-highest);">7</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded6" style="background:var(--md-sys-color-surface-container-highest);">6</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded6" style="background:var(--md-sys-color-surface-container-highest);">6</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12" style="background:var(--md-sys-color-surface-container-highest);">12</div>
                </div>
    
                <div class="md-layout-column" style="background:var(--md-sys-color-surface-container);">
    
                    <div class="md-layout-column__item md-layout-column__item--medium1" style="background:var(--md-sys-color-surface-container-highest);">1</div>
                    <div class="md-layout-column__item md-layout-column__item--medium7" style="background:var(--md-sys-color-surface-container-highest);">7</div>
                    <div class="md-layout-column__item md-layout-column__item--medium2" style="background:var(--md-sys-color-surface-container-highest);">2</div>
                    <div class="md-layout-column__item md-layout-column__item--medium6" style="background:var(--md-sys-color-surface-container-highest);">6</div>
                    <div class="md-layout-column__item md-layout-column__item--medium3" style="background:var(--md-sys-color-surface-container-highest);">3</div>
                    <div class="md-layout-column__item md-layout-column__item--medium5" style="background:var(--md-sys-color-surface-container-highest);">5</div>
                    <div class="md-layout-column__item md-layout-column__item--medium4" style="background:var(--md-sys-color-surface-container-highest);">4</div>
                    <div class="md-layout-column__item md-layout-column__item--medium4" style="background:var(--md-sys-color-surface-container-highest);">4</div>
                    <div class="md-layout-column__item md-layout-column__item--medium8" style="background:var(--md-sys-color-surface-container-highest);">8</div>
                </div>
    
                <div class="md-layout-column" style="background:var(--md-sys-color-surface-container);">
    
                    <div class="md-layout-column__item md-layout-column__item--compact1" style="background:var(--md-sys-color-surface-container-highest);">1</div>
                    <div class="md-layout-column__item md-layout-column__item--compact3" style="background:var(--md-sys-color-surface-container-highest);">3</div>
                    <div class="md-layout-column__item md-layout-column__item--compact2" style="background:var(--md-sys-color-surface-container-highest);">2</div>
                    <div class="md-layout-column__item md-layout-column__item--compact2" style="background:var(--md-sys-color-surface-container-highest);">2</div>
                    <div class="md-layout-column__item md-layout-column__item--compact4" style="background:var(--md-sys-color-surface-container-highest);">4</div>
                </div>
    
                <!-- fit -->
                <div class="md-layout-fit" style="background:var(--md-sys-color-surface-container);">
                </div>
    
                <!-- table -->
                <!-- <div class="md-layout-table" style="background:var(--md-sys-color-surface-container);">
                    <div class="md-layout-table__item"></div>
                </div> -->
    
                <!-- vbox -->
                <!-- <div class="md-layout-vbox" style="background:var(--md-sys-color-surface-container);">
                    <div class="md-layout-vbox__item"></div>
                </div> -->
    
                <!-- hbox -->
                <!-- <div class="md-layout-hbox" style="background:var(--md-sys-color-surface-container);">
                    <div class="md-layout-hbox__item"></div>
                </div> -->
            </div>
        `;
    }
}

customElements.define("dev-layout", DevLayout);

export default document.createElement("dev-layout");
