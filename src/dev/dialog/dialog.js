import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevDialog extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-dialog 
                        open
                        id="dialog"
                        @onDialogActionClick="${this.handleClick}"
                        @onDialogButtonClick="${this.handleClick}"
                        leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'>body</md-dialog>
                    <md-button id="button" label="dialog" @click="${this.handleClick}"></md-button>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-dialog 
                        id="dialog2"
                        ui="full-screen"
                        @onDialogActionClick="${this.handleClick2}"
                        @onDialogButtonClick="${this.handleClick2}"
                        leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'>body</md-dialog>
                    <md-button id="button" label="dialog full-screen" @click="${this.handleClick2}"></md-button>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }
    handleClick(event) {
        if (dialog.open) dialog.close();
        else dialog.show();
    }
    handleClick2(event) {
        if (dialog2.open) dialog2.close();
        else dialog2.show();
    }
}

customElements.define("dev-dialog", DevDialog);

export default document.createElement("dev-dialog");
