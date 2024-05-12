import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevIconButton extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-icon-button icon="image"></md-icon-button>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-icon-button ui="filled-tonal" icon="image"></md-icon-button>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-icon-button ui="filled" icon="image"></md-icon-button>
                </div>
                
                
            </div>
        `;
    }
}

customElements.define("dev-icon-button", DevIconButton);

export default document.createElement("dev-icon-button");
