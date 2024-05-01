import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBottomSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-bottom-sheet 
                        id="bottomSheet"
                        @onBottomSheetActionClick="${this.handleClick}"
                        @onBottomSheetButtonClick="${this.handleClick}"
                        leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'>body</md-bottom-sheet>
                    <md-button id="button" label="bottom sheet" @click="${this.handleClick}"></md-button>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }
    handleClick(event) {
        if (bottomSheet.open) bottomSheet.close();
        else bottomSheet.show();
    }
}

customElements.define("dev-bottom-sheet", DevBottomSheet);

export default document.createElement("dev-bottom-sheet");
