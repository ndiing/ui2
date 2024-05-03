import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSideSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--east md-layout--fit">
                    <md-side-sheet 
                        id="sideSheet"
                        @onSideSheetActionClick="${this.handleClick}"
                        @onSideSheetButtonClick="${this.handleClick}"
                        leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'>body</md-side-sheet>
                    </div>
                <div class="md-layout__item--center">
                    <md-button id="button" label="side sheet" @click="${this.handleClick}"></md-button>
                </div>
            </div>
        `;
    }
    handleClick(event) {
        if (sideSheet.open) sideSheet.close();
        else sideSheet.show();
    }
}

customElements.define("dev-side-sheet", DevSideSheet);

export default document.createElement("dev-side-sheet");
