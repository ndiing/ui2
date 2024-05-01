import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSideSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-side-sheet 
                        id="sideSheet"
                        @onSideSheetActionClick="${this.handleClick}"
                        @onSideSheetButtonClick="${this.handleClick}"
                        leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'>body</md-side-sheet>
                    <md-button id="button" label="side sheet" @click="${this.handleClick}"></md-button>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
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
