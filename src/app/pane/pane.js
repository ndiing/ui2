import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppPaneComponent extends MDElement {
    get snackbar() {
        return this.querySelector("#snackbar");
    }

    get snackbar2() {
        return this.querySelector("#snackbar2");
    }

    get snackbar3() {
        return this.querySelector("#snackbar3");
    }

    get snackbar4() {
        return this.querySelector("#snackbar4");
    }

    get snackbar5() {
        return this.querySelector("#snackbar5");
    }

    get snackbar6() {
        return this.querySelector("#snackbar6");
    }

    get tooltipPlain() {
        return this.querySelector("#tooltipPlain");
    }

    get tooltipPlain2() {
        return this.querySelector("#tooltipPlain2");
    }

    get tooltipRich() {
        return this.querySelector("#tooltipRich");
    }

    get sheetNorth() {
        return this.querySelector("#sheetNorth");
    }

    get sheetEast() {
        return this.querySelector("#sheetEast");
    }

    get sheetSouth() {
        return this.querySelector("#sheetSouth");
    }

    get sheetWest() {
        return this.querySelector("#sheetWest");
    }

    get sheetNorthModal() {
        return this.querySelector("#sheetNorthModal");
    }

    get sheetEastModal() {
        return this.querySelector("#sheetEastModal");
    }

    get sheetSouthModal() {
        return this.querySelector("#sheetSouthModal");
    }

    get sheetWestModal() {
        return this.querySelector("#sheetWestModal");
    }

    get menu() {
        return this.querySelector("#menu");
    }

    get dialog() {
        return this.querySelector("#dialog");
    }

    get dialogFullScreen() {
        return this.querySelector("#dialogFullScreen");
    }

    get buttonTooltipPlain() {
        return this.querySelector("#buttonTooltipPlain");
    }

    get buttonTooltipPlain2() {
        return this.querySelector("#buttonTooltipPlain2");
    }

    get buttonTooltipRich() {
        return this.querySelector("#buttonTooltipRich");
    }

    get buttonMenu() {
        return this.querySelector("#buttonMenu");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-pane
                    id="sheetNorth"
                    @onPaneButtonClick="${this.handleSheetNorthClick}"
                    @onPaneIconButtonClick="${this.handleSheetNorthClick}"
                    variant="sheet north"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                ></md-pane>

                <md-pane
                    id="sheetEast"
                    @onPaneButtonClick="${this.handleSheetEastClick}"
                    @onPaneIconButtonClick="${this.handleSheetEastClick}"
                    variant="sheet east"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                    buttons='[{"label":"Save","variant":"filled"},{"label":"Cancel","variant":"outlined"}]'
                ></md-pane>

                <md-pane
                    id="sheetSouth"
                    @onPaneButtonClick="${this.handleSheetSouthClick}"
                    @onPaneIconButtonClick="${this.handleSheetSouthClick}"
                    variant="sheet south"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                ></md-pane>

                <md-pane
                    id="sheetWest"
                    @onPaneButtonClick="${this.handleSheetWestClick}"
                    @onPaneIconButtonClick="${this.handleSheetWestClick}"
                    variant="sheet west"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                    buttons='[{"label":"Save","variant":"filled"},{"label":"Cancel","variant":"outlined"}]'
                ></md-pane>

                <md-pane
                    id="sheetNorthModal"
                    @onPaneButtonClick="${this.handleSheetNorthModalClick}"
                    @onPaneIconButtonClick="${this.handleSheetNorthModalClick}"
                    variant="sheet north modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                ></md-pane>

                <md-pane
                    id="sheetEastModal"
                    @onPaneButtonClick="${this.handleSheetEastModalClick}"
                    @onPaneIconButtonClick="${this.handleSheetEastModalClick}"
                    variant="sheet east modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                    buttons='[{"label":"Save","variant":"filled"},{"label":"Cancel","variant":"outlined"}]'
                ></md-pane>

                <md-pane
                    id="sheetSouthModal"
                    @onPaneButtonClick="${this.handleSheetSouthModalClick}"
                    @onPaneIconButtonClick="${this.handleSheetSouthModalClick}"
                    variant="sheet south modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                ></md-pane>

                <md-pane
                    id="sheetWestModal"
                    @onPaneButtonClick="${this.handleSheetWestModalClick}"
                    @onPaneIconButtonClick="${this.handleSheetWestModalClick}"
                    variant="sheet west modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                    buttons='[{"label":"Save","variant":"filled"},{"label":"Cancel","variant":"outlined"}]'
                ></md-pane>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div
                        style=""
                        class="md-layout-grid"
                    >
                        <!-- tooltip -->
                        <!-- <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="tooltipPlain"
                                @onPaneButtonClick="${this.handleTooltipPlainClick}"
                                @onPaneIconButtonClick="${this.handleTooltipPlainClick}"
                                variant="tooltip plain"
                            >
                                Save to favorites
                            </md-pane>
                            <md-button
                                id="buttonTooltipPlain"
                                label="Tooltip Plain"
                                @click="${this.handleTooltipPlainClick}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="tooltipPlain2"
                                @onPaneButtonClick="${this.handleTooltipPlain2Click}"
                                @onPaneIconButtonClick="${this.handleTooltipPlain2Click}"
                                variant="tooltip plain"
                            >
                                Grant value is calculated using the<br />
                                closing stock price from the day<br />
                                before the grant date. Amounts do<br />
                                not reflect tax witholdings.
                            </md-pane>
                            <md-button
                                id="buttonTooltipPlain2"
                                label="Tooltip Plain 2"
                                @click="${this.handleTooltipPlain2Click}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="tooltipRich"
                                @onPaneButtonClick="${this.handleTooltipRichClick}"
                                @onPaneIconButtonClick="${this.handleTooltipRichClick}"
                                variant="tooltip rich"
                                label="Rich tooltip"
                                buttons='[{"label":"Action"},{"label":"Action"}]'
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-pane>
                            <md-button
                                id="buttonTooltipRich"
                                label="Tooltip Rich"
                                @click="${this.handleTooltipRichClick}"
                            ></md-button>
                        </div> -->

                        <!-- snackbar -->
                        <!-- <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="snackbar"
                                @onPaneButtonClick="${this.handleSnackbarClick}"
                                @onPaneIconButtonClick="${this.handleSnackbarClick}"
                                variant="snackbar"
                                buttons='[{"label":"Action"},{"component":"icon-button","icon":"close"}]'
                                >Single-line snackbar with action</md-pane
                            >
                            <md-button
                                label="Snackbar"
                                @click="${this.handleSnackbarClick}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="snackbar2"
                                @onPaneButtonClick="${this.handleSnackbar2Click}"
                                @onPaneIconButtonClick="${this.handleSnackbar2Click}"
                                variant="snackbar"
                                >Single-line snackbar</md-pane
                            >
                            <md-button
                                label="Snackbar 2"
                                @click="${this.handleSnackbar2Click}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="snackbar3"
                                @onPaneButtonClick="${this.handleSnackbar3Click}"
                                @onPaneIconButtonClick="${this.handleSnackbar3Click}"
                                variant="snackbar"
                                buttons='[{"label":"Action"}]'
                                >Single-line snackbar with action</md-pane
                            >
                            <md-button
                                label="Snackbar 3"
                                @click="${this.handleSnackbar3Click}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="snackbar4"
                                @onPaneButtonClick="${this.handleSnackbar4Click}"
                                @onPaneIconButtonClick="${this.handleSnackbar4Click}"
                                variant="snackbar"
                                >Two-line snackbar<br />without action</md-pane
                            >
                            <md-button
                                label="Snackbar 4"
                                @click="${this.handleSnackbar4Click}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="snackbar5"
                                @onPaneButtonClick="${this.handleSnackbar5Click}"
                                @onPaneIconButtonClick="${this.handleSnackbar5Click}"
                                variant="snackbar"
                                buttons='[{"label":"Action"}]'
                                >Two-line snackbar<br />with action</md-pane
                            >
                            <md-button
                                label="Snackbar 5"
                                @click="${this.handleSnackbar5Click}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="snackbar6"
                                @onPaneButtonClick="${this.handleSnackbar6Click}"
                                @onPaneIconButtonClick="${this.handleSnackbar6Click}"
                                variant="snackbar"
                                buttons='[{"label":"Longer action"}]'
                                >Two-line snackbar<br />with longer action</md-pane
                            >
                            <md-button
                                label="Snackbar 6"
                                @click="${this.handleSnackbar6Click}"
                            ></md-button>
                        </div> -->

                        <!-- sheet -->
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-button
                                label="Sheet North"
                                @click="${this.handleSheetNorthClick}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-button
                                label="Sheet East"
                                @click="${this.handleSheetEastClick}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-button
                                label="Sheet South"
                                @click="${this.handleSheetSouthClick}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-button
                                label="Sheet West"
                                @click="${this.handleSheetWestClick}"
                            ></md-button>
                        </div>

                        <!-- sheet -->
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-button
                                label="Sheet North Modal"
                                @click="${this.handleSheetNorthModalClick}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-button
                                label="Sheet East Modal"
                                @click="${this.handleSheetEastModalClick}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-button
                                label="Sheet South Modal"
                                @click="${this.handleSheetSouthModalClick}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-button
                                label="Sheet West Modal"
                                @click="${this.handleSheetWestModalClick}"
                            ></md-button>
                        </div>

                        <!-- dialog -->
                        <!-- <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="dialog"
                                @onPaneButtonClick="${this.handleDialogClick}"
                                @onPaneIconButtonClick="${this.handleDialogClick}"
                                variant="dialog"
                                label="Basic dialog title"
                                buttons='[{"label":"Enabled"},{"label":"Enabled"}]'
                            >
                                A dialog is a type of modal window that<br />
                                appears in front of app content to provide<br />
                                critical information, or ask for a decision.
                            </md-pane>
                            <md-button
                                label="Dialog"
                                @click="${this.handleDialogClick}"
                            ></md-button>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                id="dialogFullScreen"
                                @onPaneButtonClick="${this.handleDialogFullScreenClick}"
                                @onPaneIconButtonClick="${this.handleDialogFullScreenClick}"
                                variant="dialog full-screen"
                                leadingActions='[{"icon":"close"}]'
                                label="Full-screen dialog title"
                                buttons='[{"label":"Enabled"},{"label":"Enabled"}]'
                            ></md-pane>
                            <md-button
                                label="Dialog Full Screen"
                                @click="${this.handleDialogFullScreenClick}"
                            ></md-button>
                        </div> -->

                        <!-- menu -->
                        <!-- <div style="" class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4">
                            <md-pane
                                id="menu"
                                @onPaneButtonClick="${this.handleMenuClick}"
                                @onPaneIconButtonClick="${this.handleMenuClick}"
                                variant="menu"
                                style="width:112px"
                            >
                                <div style="height:48px;padding:0 16px;line-height:48px;">Item 1</div>
                                <div style="height:48px;padding:0 16px;line-height:48px;">Item 2</div>
                                <div style="height:48px;padding:0 16px;line-height:48px;">Item 3</div>
                                <div style="height:48px;padding:0 16px;line-height:48px;">Item 4</div>
                            </md-pane>
                            <md-button id="buttonMenu" label="Menu" @click="${this.handleMenuClick}"></md-button>
                        </div> -->

                        <!-- card -->
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                leadingActions='[{"icon":"image"}]'
                                label="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, asperiores."
                                subLabel="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, asperiores."
                                trailingActions='[{"icon":"image"}]'
                                buttons='[{"label":"Action"}]'
                                style="height:260px;"
                            >
                                Use a card to display<br />
                                content and actions<br />
                                on a single topic.<br />
                                Cards should be easy<br />
                                to scan for relevant<br />
                                information.
                            </md-pane>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                leadingActions='[{"icon":"image"}]'
                                label="Label"
                                subLabel="Subhead"
                                trailingActions='[{"icon":"image"}]'
                                buttons='[{"label":"Action"}]'
                            >
                                Use a card to display<br />
                                content and actions<br />
                                on a single topic.<br />
                                Cards should be easy<br />
                                to scan for relevant<br />
                                information.
                            </md-pane>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                leadingActions='[{"icon":"image"}]'
                                label="Label"
                                subLabel="Subhead"
                                trailingActions='[{"icon":"image"}]'
                            >
                                Use a card to display<br />
                                content and actions<br />
                                on a single topic.<br />
                                Cards should be easy<br />
                                to scan for relevant<br />
                                information.
                            </md-pane>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                leadingActions='[{"icon":"image"}]'
                                label="Label"
                                subLabel="Subhead"
                            >
                                Use a card to display<br />
                                content and actions<br />
                                on a single topic.<br />
                                Cards should be easy<br />
                                to scan for relevant<br />
                                information.
                            </md-pane>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane
                                label="Label"
                                subLabel="Subhead"
                            >
                                Use a card to display<br />
                                content and actions<br />
                                on a single topic.<br />
                                Cards should be easy<br />
                                to scan for relevant<br />
                                information.
                            </md-pane>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane label="Label">
                                Use a card to display<br />
                                content and actions<br />
                                on a single topic.<br />
                                Cards should be easy<br />
                                to scan for relevant<br />
                                information.
                            </md-pane>
                        </div>
                        <div
                            style=""
                            class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                        >
                            <md-pane>
                                Use a card to display<br />
                                content and actions<br />
                                on a single topic.<br />
                                Cards should be easy<br />
                                to scan for relevant<br />
                                information.
                            </md-pane>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleSnackbarClick() {
        this.snackbar.toggle();
    }

    handleSnackbar2Click() {
        this.snackbar2.toggle();
    }

    handleSnackbar3Click() {
        this.snackbar3.toggle();
    }

    handleSnackbar4Click() {
        this.snackbar4.toggle();
    }

    handleSnackbar5Click() {
        this.snackbar5.toggle();
    }

    handleSnackbar6Click() {
        this.snackbar6.toggle();
    }

    handleTooltipPlainClick() {
        this.tooltipPlain.toggle(this.buttonTooltipPlain);
    }

    handleTooltipPlain2Click() {
        this.tooltipPlain2.toggle(this.buttonTooltipPlain2);
    }

    handleTooltipRichClick() {
        this.tooltipRich.toggle(this.buttonTooltipRich);
    }

    handleSheetNorthClick() {
        this.sheetNorth.toggle();
    }

    handleSheetEastClick() {
        this.sheetEast.toggle();
    }

    handleSheetSouthClick() {
        this.sheetSouth.toggle();
    }

    handleSheetWestClick() {
        this.sheetWest.toggle();
    }

    handleSheetNorthModalClick() {
        this.sheetNorthModal.toggle();
    }

    handleSheetEastModalClick() {
        this.sheetEastModal.toggle();
    }

    handleSheetSouthModalClick() {
        this.sheetSouthModal.toggle();
    }

    handleSheetWestModalClick() {
        this.sheetWestModal.toggle();
    }

    handleMenuClick() {
        this.menu.toggle(this.buttonMenu);
    }

    handleDialogClick() {
        this.dialog.toggle();
    }

    handleDialogFullScreenClick() {
        this.dialogFullScreen.toggle();
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        // this.handleContextmenu = this.handleContextmenu.bind(this);
        // window.addEventListener("contextmenu", this.handleContextmenu);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        await this.updateComplete;

        // window.removeEventListener("contextmenu", this.handleContextmenu);
    }

    // handleContextmenu(event) {
    //     event.preventDefault();
    //     this.menu.show(event);
    // }
}

customElements.define("app-pane", AppPaneComponent);

export default document.createElement("app-pane");
