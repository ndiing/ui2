import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevDialog extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-dialog 
                        id="dialog1"
                        @onDialogActionClick="${this.handleClick1}"
                        @onDialogButtonClick="${this.handleClick1}"
                        leadingActions='["home"]' 
                        label="Label" 
                        trailingActions='["close"]' 
                        buttons='[{"label":"save","ui":"filled"}]'
                    >
                        body
                    </md-dialog>
                    <md-button ui="filled-tonal" label="Basic dialog" @click="${this.handleClick1}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-dialog 
                        id="dialog2"
                        ui="full-screen"
                        @onDialogActionClick="${this.handleClick2}"
                        @onDialogButtonClick="${this.handleClick2}"
                        leadingActions='["home"]' 
                        label="Label" 
                        trailingActions='["close"]' 
                        buttons='[{"label":"save","ui":"filled"}]'
                    >
                        body
                    </md-dialog>
                    <md-button ui="filled-tonal" label="Full-screen dialog" @click="${this.handleClick2}"></md-button>
                </div>
                
                
            </div>
        `;
    }
    handleClick1(event) {
        if (dialog1.open) dialog1.close();
        else dialog1.show();
    }
    handleClick2(event) {
        if (dialog2.open) dialog2.close();
        else dialog2.show();
    }
}

customElements.define("dev-dialog", DevDialog);

export default document.createElement("dev-dialog");
