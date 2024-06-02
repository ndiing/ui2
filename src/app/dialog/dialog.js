import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppDialogElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-dialog
                        label="Label"
                        .buttons="${[{ label: "Button" }, { label: "Button" }]}"
                        id="dialog1"
                        @onDialogButtonClick="${() => dialog1.toggle()}"
                        >body</md-dialog
                    >
                    <md-button
                        @click="${() => dialog1.toggle()}"
                        label="dialog"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-dialog
                        label="Label"
                        .leadingActions="${[{ icon: "image" }]}"
                        .trailingActions="${[{ icon: "image" }]}"
                        .buttons="${[{ label: "Button" }, { label: "Button" }]}"
                        ui="full-screen"
                        id="dialog2"
                        @onDialogActionClick="${() => dialog2.toggle()}"
                        @onDialogButtonClick="${() => dialog2.toggle()}"
                        >body</md-dialog
                    >
                    <md-button
                        @click="${() => dialog2.toggle()}"
                        label="dialog full-screen"></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-dialog", AppDialogElement);

export default document.createElement("app-dialog");
