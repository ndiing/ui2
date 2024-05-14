import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevPane extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                
                <md-pane
                    .label="${"Label"}"
                    .trailingActions="${[
                        {icon:"image"}
                    ]}"
                    ui="sheet north modal"
                    id="north2"
                ></md-pane>
                <md-pane
                    .label="${"Label"}"
                    .trailingActions="${[
                        {icon:"image"}
                    ]}"
                    ui="sheet east modal"
                    id="east2"
                ></md-pane>
                <md-pane
                    .label="${"Label"}"
                    .trailingActions="${[
                        {icon:"image"}
                    ]}"
                    ui="sheet south modal"
                    id="south2"
                ></md-pane>
                <md-pane
                    .label="${"Label"}"
                    .trailingActions="${[
                        {icon:"image"}
                    ]}"
                    ui="sheet west modal"
                    id="west2"
                ></md-pane>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">

                        <md-pane
                            .label="${"Label"}"
                            .trailingActions="${[
                                {icon:"image"}
                            ]}"
                            ui="sheet north"
                            id="north"
                        ></md-pane>
                        <md-pane
                            .label="${"Label"}"
                            .trailingActions="${[
                                {icon:"image"}
                            ]}"
                            ui="sheet east"
                            id="east"
                        ></md-pane>
                        <md-pane
                            .label="${"Label"}"
                            .trailingActions="${[
                                {icon:"image"}
                            ]}"
                            ui="sheet south"
                            id="south"
                        ></md-pane>
                        <md-pane
                            .label="${"Label"}"
                            .trailingActions="${[
                                {icon:"image"}
                            ]}"
                            ui="sheet west"
                            id="west"
                        ></md-pane>
                        

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-column" style="margin: 24px;">
                                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-pane>
                                        Lorem ipsum dolor sit amet.
                                    </md-pane>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-pane
                                        .label="${"Label"}"
                                    >
                                        Lorem ipsum dolor sit amet.
                                    </md-pane>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-pane
                                        .leadingActions="${[
                                            {icon:"image"}
                                        ]}"
                                        .label="${"Label"}"
                                    >
                                        Lorem ipsum dolor sit amet.
                                    </md-pane>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
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
                                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
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
                                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
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
                                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
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
                                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button label="sheet north" ui="filled-tonal" @click="${this.handleClick3}"></md-button>
                                    <md-button label="sheet east" ui="filled-tonal" @click="${this.handleClick4}"></md-button>
                                    <md-button label="sheet south" ui="filled-tonal" @click="${this.handleClick5}"></md-button>
                                    <md-button label="sheet west" ui="filled-tonal" @click="${this.handleClick6}"></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button label="sheet north modal" ui="filled-tonal" @click="${this.handleClick32}"></md-button>
                                    <md-button label="sheet east modal" ui="filled-tonal" @click="${this.handleClick42}"></md-button>
                                    <md-button label="sheet south modal" ui="filled-tonal" @click="${this.handleClick52}"></md-button>
                                    <md-button label="sheet west modal" ui="filled-tonal" @click="${this.handleClick62}"></md-button>
                                </div>
                            </div>

                        </div>
                    </div>
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

    get north() {
        return this.querySelector("#north");
    }

    get east() {
        return this.querySelector("#east");
    }

    get south() {
        return this.querySelector("#south");
    }

    get west() {
        return this.querySelector("#west");
    }

    get north2() {
        return this.querySelector("#north2");
    }

    get east2() {
        return this.querySelector("#east2");
    }

    get south2() {
        return this.querySelector("#south2");
    }

    get west2() {
        return this.querySelector("#west2");
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

    handleClick3(event) {
        if (this.north.open) {
            this.north.close();
        } else {
            this.north.show();
        }
    }

    handleClick4(event) {
        if (this.east.open) {
            this.east.close();
        } else {
            this.east.show();
        }
    }

    handleClick5(event) {
        if (this.south.open) {
            this.south.close();
        } else {
            this.south.show();
        }
    }

    handleClick6(event) {
        if (this.west.open) {
            this.west.close();
        } else {
            this.west.show();
        }
    }

    handleClick32(event) {
        if (this.north2.open) {
            this.north2.close();
        } else {
            this.north2.show();
        }
    }

    handleClick42(event) {
        if (this.east2.open) {
            this.east2.close();
        } else {
            this.east2.show();
        }
    }

    handleClick52(event) {
        if (this.south2.open) {
            this.south2.close();
        } else {
            this.south2.show();
        }
    }

    handleClick62(event) {
        if (this.west2.open) {
            this.west2.close();
        } else {
            this.west2.show();
        }
    }
}

customElements.define("dev-pane", DevPane);

export default document.createElement("dev-pane");
