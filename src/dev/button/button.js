import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevButton extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button label="Label" type="" ui="filled"></md-button>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button icon="favorite" label="Label" type="" ui="filled"></md-button>
                </div>

                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button label="Label" type="" ui="filled-tonal"></md-button>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button icon="favorite" label="Label" type="" ui="filled-tonal"></md-button>
                </div>

                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button label="Label" type="" ui="outlined"></md-button>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button icon="favorite" label="Label" type="" ui="outlined"></md-button>
                </div>

                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button label="Label" type="" ui=""></md-button>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button icon="favorite" label="Label" type="" ui=""></md-button>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-button", DevButton);

export default document.createElement("dev-button");
