import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevFab extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-fab icon="accessible_forward"></md-fab>
                    <md-fab icon="accessible_forward" ui="unelevated"></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-fab icon="edit" ui="small"></md-fab>
                    <md-fab icon="edit" ui="small unelevated"></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-fab icon="palette" ui="large"></md-fab>
                    <md-fab icon="palette" ui="large unelevated"></md-fab>
                </div>
                
                
            </div>
        `;
    }
}

customElements.define("dev-fab", DevFab);

export default document.createElement("dev-fab");
