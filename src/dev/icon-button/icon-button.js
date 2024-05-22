import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevIconButton extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button icon="favorite" type="" ui="filled"></md-icon-button>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button icon="favorite" type="" ui="filled-tonal"></md-icon-button>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button icon="favorite" type="" ui=""></md-icon-button>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-icon-button", DevIconButton);

export default document.createElement("dev-icon-button");
