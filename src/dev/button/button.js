import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevButton extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button ui="filled" label="Filled"></md-button>
                    <md-button icon="image" ui="filled" label="Filled"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button ui="filled-tonal" label="Tonal"></md-button>
                    <md-button icon="image" ui="filled-tonal" label="Tonal"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button ui="outlined" label="Outlined"></md-button>
                    <md-button icon="image" ui="outlined" label="Outlined"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button label="Text"></md-button>
                    <md-button icon="image" label="Text"></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-button", DevButton);

export default document.createElement("dev-button");
