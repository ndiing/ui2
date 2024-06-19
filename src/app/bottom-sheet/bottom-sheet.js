import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppBottomSheetComponent extends MDElement {
    get bottomSheet1() {
        return this.querySelector("#bottomSheet1");
    }

    get bottomSheet2() {
        return this.querySelector("#bottomSheet2");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-bottom-sheet id="bottomSheet1"> Lorem, ipsum dolor. Eos, dignissimos ullam? Quaerat, quas tempore? </md-bottom-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-bottom-sheet
                            id="bottomSheet2"
                            variant="modal"
                        >
                            Lorem, ipsum dolor. Eos, dignissimos ullam? Quaerat, quas tempore?
                        </md-bottom-sheet>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div
                                style=""
                                class="md-layout-grid"
                            >
                                <div
                                    style=""
                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                >
                                    <md-button
                                        label="bottom sheet 1"
                                        @click="${() => this.bottomSheet1.toggle()}"
                                    ></md-button>
                                </div>
                                <div
                                    style=""
                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                >
                                    <md-button
                                        label="bottom sheet 2"
                                        @click="${() => this.bottomSheet2.toggle()}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("app-bottom-sheet", AppBottomSheetComponent);

export default document.createElement("app-bottom-sheet");
