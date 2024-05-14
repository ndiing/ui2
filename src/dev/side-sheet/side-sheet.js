import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSideSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item md-layout__item--east ">
                    <md-side-sheet 
                        id="sideSheet1"
                        @onSideSheetActionClick="${this.handleClick1}"
                        @onSideSheetButtonClick="${this.handleClick1}"
                        leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'
                    >
                        body
                    </md-side-sheet>
                    
                    <md-side-sheet 
                        ui="modal"
                        id="sideSheet2"
                        @onSideSheetActionClick="${this.handleClick2}"
                        @onSideSheetButtonClick="${this.handleClick2}"
                        leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'
                    >
                        body
                    </md-side-sheet>
                    
                </div>
                <div class="md-layout__item md-layout__item--center" style="padding:24px;">
                    <md-button ui="filled-tonal" label="Standard side sheet" @click="${this.handleClick1}"></md-button><br><br>
                    <md-button ui="filled-tonal" label="Modal side sheet" @click="${this.handleClick2}"></md-button><br><br>
                </div>
            </div>
        `;
    }
    handleClick1(event) {
        if (sideSheet1.open) sideSheet1.close();
        else sideSheet1.show();
    }
    handleClick2(event) {
        if (sideSheet2.open) sideSheet2.close();
        else sideSheet2.show();
    }
}

customElements.define("dev-side-sheet", DevSideSheet);

export default document.createElement("dev-side-sheet");
