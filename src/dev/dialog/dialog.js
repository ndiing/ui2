import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevDialog extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-dialog 
                        id="dialog"
                        label="label"
                        .buttons="${[
                            'button',
                            'button',
                        ]}"
                        @onDialogButtonClick="${this.handleDialogButtonClick}"
                    >Lorem, ipsum dolor.</md-dialog>
                    <md-button label="Dialog" @click="${this.handleClick}"></md-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }
    handleClick(event) {
        if (dialog.open) dialog.close();
        else dialog.show();
    }
    handleDialogButtonClick(event) {
        this.handleClick()
    }
}

customElements.define("dev-dialog", DevDialog);

export default document.createElement("dev-dialog");
