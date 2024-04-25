import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevButton extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-button label="label"></md-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-button ui="outlined" label="label"></md-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-button ui="filled-tonal" label="label"></md-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-button ui="filled" label="label"></md-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-button", DevButton);

export default document.createElement("dev-button");
