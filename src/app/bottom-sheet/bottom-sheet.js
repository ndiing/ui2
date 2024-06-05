import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppBottomSheetElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-bottom-sheet
                    label="Label"
                    .buttons="${[{ label: "Button" }, { label: "Button" }]}"
                    id="bottomSheet1"
                    @onBottomSheetButtonClick="${() => bottomSheet1.toggle()}"
                    >body</md-bottom-sheet
                >
                <md-bottom-sheet
                    label="Label"
                    .leadingActions="${[{ icon: "image" }]}"
                    .trailingActions="${[{ icon: "image" }]}"
                    .buttons="${[{ label: "Button" }, { label: "Button" }]}"
                    ui="modal"
                    id="bottomSheet2"
                    @onBottomSheetActionClick="${() => bottomSheet2.toggle()}"
                    @onBottomSheetButtonClick="${() => bottomSheet2.toggle()}"
                    >body</md-bottom-sheet
                >

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div
                        class="md-layout-column"
                        style="margin:24px;"
                    >
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-button
                                @click="${() => bottomSheet1.toggle()}"
                                label="bottom-sheet"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-button
                                @click="${() => bottomSheet2.toggle()}"
                                label="bottom-sheet modal"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("app-bottom-sheet", AppBottomSheetElement);

export default document.createElement("app-bottom-sheet");
