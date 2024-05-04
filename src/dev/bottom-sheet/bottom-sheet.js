import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSideSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--south md-layout--fit">
                    <md-bottom-sheet 
                        id="bottomSheet"
                        @onSideSheetActionClick="${this.handleClick}"
                        @onSideSheetButtonClick="${this.handleClick}"
                        leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'
                    >body</md-bottom-sheet>
                    
                    <md-bottom-sheet 
                        ui="modal"
                        id="bottomSheet2"
                        @onSideSheetActionClick="${this.handleClick2}"
                        @onSideSheetButtonClick="${this.handleClick2}"
                        leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'
                    >body</md-bottom-sheet>
                    
                </div>
                <div class="md-layout__item--center">
                    <md-button id="button" label="bottom sheet" @click="${this.handleClick}"></md-button>
                    <md-button id="button" label="bottom sheet modal" @click="${this.handleClick2}"></md-button>
                </div>
            </div>
        `;
    }
    handleClick(event) {
        if (bottomSheet.open) bottomSheet.close();
        else bottomSheet.show();
    }
    handleClick2(event) {
        if (bottomSheet2.open) bottomSheet2.close();
        else bottomSheet2.show();
    }
}

customElements.define("dev-bottom-sheet", DevSideSheet);

export default document.createElement("dev-bottom-sheet");
