import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBottomSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--south">
                    <md-bottom-sheet 
                        id="bottomSheet"
                        open
                        @onBottomSheetActionClick="${this.handleClick}"
                        @onBottomSheetButtonClick="${this.handleClick}"
                        leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'>body</md-bottom-sheet>
                    </div>
                <div class="md-layout__item--center">
                    <md-button id="button" label="bottom sheet" @click="${this.handleClick}"></md-button>
                </div>
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
