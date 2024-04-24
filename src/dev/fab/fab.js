import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevFab extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-fab icon="image" ui="small"></md-fab>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-fab icon="image"></md-fab>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-fab icon="image" ui="large"></md-fab>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-fab", DevFab);

export default document.createElement("dev-fab");
