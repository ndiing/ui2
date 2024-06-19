import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppBottomSheetComponent extends MDElement {
    get sideSheet1() {
        return this.querySelector("#sideSheet1");
    }

    get sideSheet2() {
        return this.querySelector("#sideSheet2");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-side-sheet id="sideSheet1"> Lorem, ipsum dolor. Eos, dignissimos ullam? Quaerat, quas tempore? </md-side-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-side-sheet
                            id="sideSheet2"
                            variant="modal"
                        >
                            Lorem, ipsum dolor. Eos, dignissimos ullam? Quaerat, quas tempore?
                        </md-side-sheet>

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
                                        label="side sheet 1"
                                        @click="${() => this.sideSheet1.toggle()}"
                                    ></md-button>
                                </div>
                                <div
                                    style=""
                                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                                >
                                    <md-button
                                        label="side sheet 2"
                                        @click="${() => this.sideSheet2.toggle()}"
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

customElements.define("app-side-sheet", AppBottomSheetComponent);

export default document.createElement("app-side-sheet");
