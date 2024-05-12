import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevPane extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--north">
                    <md-pane
                        id="sheet1"
                        .ui="${"sheet north"}"
                        @onPaneActionClick="${this.handleSheet1Click}"
                        @onPaneButtonClick="${this.handleSheet1Click}"
                    >
                        Lorem, ipsum dolor.
                    </md-pane>
                </div>
                <div class="md-layout__item--east">
                <md-pane
                        id="sheet2"
                        .ui="${"sheet east"}"
                        @onPaneActionClick="${this.handleSheet2Click}"
                        @onPaneButtonClick="${this.handleSheet2Click}"
                    >
                        Lorem, ipsum dolor.
                    </md-pane>
                </div>
                <div class="md-layout__item--south">
                <md-pane
                        id="sheet3"
                        .ui="${"sheet south"}"
                        @onPaneActionClick="${this.handleSheet3Click}"
                        @onPaneButtonClick="${this.handleSheet3Click}"
                    >
                        Lorem, ipsum dolor.
                    </md-pane>
                </div>
                <div class="md-layout__item--west">
                <md-pane
                        id="sheet4"
                        .ui="${"sheet west"}"
                        @onPaneActionClick="${this.handleSheet4Click}"
                        @onPaneButtonClick="${this.handleSheet4Click}"
                    >
                        Lorem, ipsum dolor.
                    </md-pane>
                </div>
                <div class="md-layout__item--center">
                    <div class="md-layout--column">
                        <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            <md-pane>
                                Lorem, ipsum dolor.
                            </md-pane>
                        </div>
                        <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            <md-pane
                                .label="${"Label"}"
                            >
                                Lorem, ipsum dolor.
                            </md-pane>
                        </div>
                        <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            <md-pane
                                .leadingActions="${[
                                    {icon:"image"}
                                ]}"
                                .label="${"Label"}"
                            >
                                Lorem, ipsum dolor.
                            </md-pane>
                        </div>
                        <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            <md-pane
                                .leadingActions="${[
                                    {icon:"image"}
                                ]}"
                                .label="${"Label"}"
                                .trailingActions="${[
                                    {icon:"image"},
                                    {icon:"image"},
                                    {icon:"image"},
                                ]}"
                            >
                                Lorem, ipsum dolor.
                            </md-pane>
                        </div>
                        <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            <md-pane
                                .leadingActions="${[
                                    {icon:"image"}
                                ]}"
                                .label="${"Label"}"
                                .trailingActions="${[
                                    {icon:"image"},
                                    {icon:"image"},
                                    {icon:"image"},
                                ]}"
                                .buttons="${[
                                    {label:"Label"},
                                    {label:"Label"},
                                ]}"
                            >
                                Lorem, ipsum dolor.
                            </md-pane>
                        </div>
                        <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            <md-pane
                                .leadingActions="${[
                                    {icon:"image"}
                                ]}"
                                .label="${"Label"}"
                                .trailingActions="${[
                                    {icon:"image"},
                                    {icon:"image"},
                                    {icon:"image"},
                                ]}"
                                .buttons="${[
                                    {label:"Label",ui:"filled-tonal"},
                                    {label:"Label",ui:"filled"},
                                ]}"
                            >
                                Lorem, ipsum dolor.
                            </md-pane>
                        </div>
                        <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            <md-pane
                                id="dialog"
                                .ui="${"dialog"}"
                                .leadingActions="${[
                                    {icon:"image"}
                                ]}"
                                .label="${"Label"}"
                                .trailingActions="${[
                                    {icon:"image"},
                                    {icon:"image"},
                                    {icon:"image"},
                                ]}"
                                .buttons="${[
                                    {label:"Label",ui:"filled-tonal"},
                                    {label:"Label",ui:"filled"},
                                ]}"
                                @onPaneActionClick="${this.handleDialogClick}"
                                @onPaneButtonClick="${this.handleDialogClick}"
                            >
                                Lorem, ipsum dolor.
                            </md-pane>
                            <md-button ui="filled-tonal" label="dialog" @click="${this.handleDialogClick}"></md-button>
                        </div>
                        <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            <md-pane
                                id="dialog2"
                                .ui="${"dialog full-screen"}"
                                .leadingActions="${[
                                    {icon:"image"}
                                ]}"
                                .label="${"Label"}"
                                .trailingActions="${[
                                    {icon:"image"},
                                    {icon:"image"},
                                    {icon:"image"},
                                ]}"
                                .buttons="${[
                                    {label:"Label",ui:"filled-tonal"},
                                    {label:"Label",ui:"filled"},
                                ]}"
                                @onPaneActionClick="${this.handleDialog2Click}"
                                @onPaneButtonClick="${this.handleDialog2Click}"
                            >
                                Lorem, ipsum dolor.
                            </md-pane>
                            <md-button ui="filled-tonal" label="dialog full-screen" @click="${this.handleDialog2Click}"></md-button>
                        </div>
                        <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            <md-button ui="filled-tonal" label="sheet north" @click="${this.handleSheet1Click}"></md-button>
                            <md-button ui="filled-tonal" label="sheet east" @click="${this.handleSheet2Click}"></md-button>
                            <md-button ui="filled-tonal" label="sheet south" @click="${this.handleSheet3Click}"></md-button>
                            <md-button ui="filled-tonal" label="sheet west" @click="${this.handleSheet4Click}"></md-button>
                        </div>
                        <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            <md-button ui="filled-tonal" label="sheet modal north" @click="${this.handleSheet1Click}"></md-button>
                            <md-button ui="filled-tonal" label="sheet modal east" @click="${this.handleSheet2Click}"></md-button>
                            <md-button ui="filled-tonal" label="sheet modal south" @click="${this.handleSheet3Click}"></md-button>
                            <md-button ui="filled-tonal" label="sheet modal west" @click="${this.handleSheet4Click}"></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleSheet1Click(event) {
        sheet1.ui=event.currentTarget.label
        if (sheet1.open) {
            sheet1.close();
        } else {
            sheet1.show();
        }
    }

    handleSheet2Click(event) {
        sheet2.ui=event.currentTarget.label
        if (sheet2.open) {
            sheet2.close();
        } else {
            sheet2.show();
        }
    }

    handleSheet3Click(event) {
        sheet3.ui=event.currentTarget.label
        if (sheet3.open) {
            sheet3.close();
        } else {
            sheet3.show();
        }
    }

    handleSheet4Click(event) {
        sheet4.ui=event.currentTarget.label
        if (sheet4.open) {
            sheet4.close();
        } else {
            sheet4.show();
        }
    }

    handleDialogClick() {
        if (dialog.open) {
            dialog.close();
        } else {
            dialog.show();
        }
    }

    handleDialog2Click() {
        if (dialog2.open) {
            dialog2.close();
        } else {
            dialog2.show();
        }
    }
}

customElements.define("dev-pane", DevPane);

export default document.createElement("dev-pane");
