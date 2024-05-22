import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevDialog extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <!-- dialog -->
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-dialog
                        label="Label"
                        .leadingActions="${[{icon:"favorite"}]}"
                        .trailingActions="${[{icon:"close"}]}"
                        .buttons="${[{label:"Button"}]}"
                        ui="dialog"
                        id="dialog"
                        @onDialogActionClick="${this.handleClickDialog}"
                        @onDialogButtonClick="${this.handleClickDialog}"
                    >dialog</md-dialog>
                    <md-button label="dialog" @click="${this.handleClickDialog}"></md-button>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-dialog
                        label="Label"
                        .leadingActions="${[{icon:"favorite"}]}"
                        .trailingActions="${[{icon:"close"}]}"
                        .buttons="${[{label:"Button"}]}"
                        ui="dialog full-screen"
                        id="dialog2"
                        @onDialogActionClick="${this.handleClickDialog2}"
                        @onDialogButtonClick="${this.handleClickDialog2}"
                    >dialog</md-dialog>
                    <md-button label="dialog full-screen" @click="${this.handleClickDialog2}"></md-button>
                </div>

            </div>
        `;
    }


    get dialog(){return this.querySelector('#dialog')}
    get dialog2(){return this.querySelector('#dialog2')}

    handleClickDialog(){
        if(this.dialog.open){this.dialog.close()}else{this.dialog.show()}
    }
    handleClickDialog2(){
        if(this.dialog2.open){this.dialog2.close()}else{this.dialog2.show()}
    }

}

customElements.define("dev-dialog", DevDialog);

export default document.createElement("dev-dialog");
