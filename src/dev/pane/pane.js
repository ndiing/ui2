import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevPane extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin: 24px;">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane>
                        Lorem ipsum dolor sit amet.
                    </md-pane>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane
                        .label="${"Label"}"
                    >
                        Lorem ipsum dolor sit amet.
                    </md-pane>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane
                        .leadingActions="${[
                            {icon:"image"}
                        ]}"
                        .label="${"Label"}"
                    >
                        Lorem ipsum dolor sit amet.
                    </md-pane>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane
                        .leadingActions="${[
                            {icon:"image"}
                        ]}"
                        .label="${"Label"}"
                        .trailingActions="${[
                            {icon:"image"}
                        ]}"
                    >
                        Lorem ipsum dolor sit amet.
                    </md-pane>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane
                        .leadingActions="${[
                            {icon:"image"}
                        ]}"
                        .label="${"Label"}"
                        .trailingActions="${[
                            {icon:"image"}
                        ]}"
                        .buttons="${[
                            {label:"button"}
                        ]}"
                    >
                        Lorem ipsum dolor sit amet.
                    </md-pane>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane
                        .leadingActions="${[
                            {icon:"image"}
                        ]}"
                        .label="${"Label"}"
                        .trailingActions="${[
                            {icon:"image"}
                        ]}"
                        .buttons="${[
                            {label:"button"}
                        ]}"
                        ui="dialog"
                        id="dialog"
                        @onPaneActionClick="${this.handleClick}"
                        @onPaneButtonClick="${this.handleClick}"
                    >
                        Lorem ipsum dolor sit amet.
                    </md-pane>
                    <md-button label="dialog" ui="filled-tonal" @click="${this.handleClick}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane
                        .leadingActions="${[
                            {icon:"image"}
                        ]}"
                        .label="${"Label"}"
                        .trailingActions="${[
                            {icon:"image"}
                        ]}"
                        .buttons="${[
                            {label:"button"}
                        ]}"
                        ui="dialog full-screen"
                        id="dialog2"
                        @onPaneActionClick="${this.handleClick2}"
                        @onPaneButtonClick="${this.handleClick2}"
                    >
                        Lorem ipsum dolor sit amet.
                    </md-pane>
                    <md-button label="dialog full-screen" ui="filled-tonal" @click="${this.handleClick2}"></md-button>
                </div>
            </div>
        `;
    }

    get dialog() {
        return this.querySelector("#dialog");
    }

    get dialog2() {
        return this.querySelector("#dialog2");
    }

    handleClick(event) {
        if (this.dialog.open) {
            this.dialog.close();
        } else {
            this.dialog.show();
        }
    }

    handleClick2(event) {
        if (this.dialog2.open) {
            this.dialog2.close();
        } else {
            this.dialog2.show();
        }
    }
}

customElements.define("dev-pane", DevPane);

export default document.createElement("dev-pane");
