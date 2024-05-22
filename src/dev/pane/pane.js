import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevPane extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">

                <!-- sheet -->
                <md-pane
                    label="Label"
                    .leadingActions="${[{icon:"favorite"}]}"
                    .trailingActions="${[{icon:"close"}]}"
                    .buttons="${[{label:"Button"}]}"
                    ui="sheet north"
                    id="sheet"
                    @onPaneActionClick="${this.handleClickSheetNorth}"
                    @onPaneButtonClick="${this.handleClickSheetNorth}"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .leadingActions="${[{icon:"favorite"}]}"
                    .trailingActions="${[{icon:"close"}]}"
                    .buttons="${[{label:"Button"}]}"
                    ui="sheet east"
                    id="sheet2"
                    @onPaneActionClick="${this.handleClickSheetEast}"
                    @onPaneButtonClick="${this.handleClickSheetEast}"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .leadingActions="${[{icon:"favorite"}]}"
                    .trailingActions="${[{icon:"close"}]}"
                    .buttons="${[{label:"Button"}]}"
                    ui="sheet south"
                    id="sheet3"
                    @onPaneActionClick="${this.handleClickSheetSouth}"
                    @onPaneButtonClick="${this.handleClickSheetSouth}"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .leadingActions="${[{icon:"favorite"}]}"
                    .trailingActions="${[{icon:"close"}]}"
                    .buttons="${[{label:"Button"}]}"
                    ui="sheet west"
                    id="sheet4"
                    @onPaneActionClick="${this.handleClickSheetWest}"
                    @onPaneButtonClick="${this.handleClickSheetWest}"
                >pane</md-pane>

                <md-pane
                    label="Label"
                    .leadingActions="${[{icon:"favorite"}]}"
                    .trailingActions="${[{icon:"close"}]}"
                    .buttons="${[{label:"Button"}]}"
                    ui="sheet north modal"
                    id="sheet5"
                    @onPaneActionClick="${this.handleClickSheetNorthModal}"
                    @onPaneButtonClick="${this.handleClickSheetNorthModal}"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .leadingActions="${[{icon:"favorite"}]}"
                    .trailingActions="${[{icon:"close"}]}"
                    .buttons="${[{label:"Button"}]}"
                    ui="sheet east modal"
                    id="sheet6"
                    @onPaneActionClick="${this.handleClickSheetEastModal}"
                    @onPaneButtonClick="${this.handleClickSheetEastModal}"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .leadingActions="${[{icon:"favorite"}]}"
                    .trailingActions="${[{icon:"close"}]}"
                    .buttons="${[{label:"Button"}]}"
                    ui="sheet south modal"
                    id="sheet7"
                    @onPaneActionClick="${this.handleClickSheetSouthModal}"
                    @onPaneButtonClick="${this.handleClickSheetSouthModal}"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .leadingActions="${[{icon:"favorite"}]}"
                    .trailingActions="${[{icon:"close"}]}"
                    .buttons="${[{label:"Button"}]}"
                    ui="sheet west modal"
                    id="sheet8"
                    @onPaneActionClick="${this.handleClickSheetWestModal}"
                    @onPaneButtonClick="${this.handleClickSheetWestModal}"
                >pane</md-pane>

                <div class="md-layout-border__item md-layout-border__item--center">

                    <div class="md-layout-column" style="padding: 24px;">
                    
                        <!-- dialog -->
                        <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pane
                                label="Label"
                                .leadingActions="${[{icon:"favorite"}]}"
                                .trailingActions="${[{icon:"close"}]}"
                                .buttons="${[{label:"Button"}]}"
                                ui="dialog"
                                id="dialog"
                                @onPaneActionClick="${this.handleClickDialog}"
                                @onPaneButtonClick="${this.handleClickDialog}"
                            >pane</md-pane>
                            <md-button label="dialog" @click="${this.handleClickDialog}"></md-button>
                        </div>
                        <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pane
                                label="Label"
                                .leadingActions="${[{icon:"favorite"}]}"
                                .trailingActions="${[{icon:"close"}]}"
                                .buttons="${[{label:"Button"}]}"
                                ui="dialog full-screen"
                                id="dialog2"
                                @onPaneActionClick="${this.handleClickDialog2}"
                                @onPaneButtonClick="${this.handleClickDialog2}"
                            >pane</md-pane>
                            <md-button label="dialog full-screen" @click="${this.handleClickDialog2}"></md-button>
                        </div>

                        <!-- sheet -->
                        <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button label="sheet north" @click="${this.handleClickSheetNorth}"></md-button>
                            <md-button label="sheet east" @click="${this.handleClickSheetEast}"></md-button>
                            <md-button label="sheet south" @click="${this.handleClickSheetSouth}"></md-button>
                            <md-button label="sheet west" @click="${this.handleClickSheetWest}"></md-button>
                        </div>
                        <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button label="sheet north modal" @click="${this.handleClickSheetNorthModal}"></md-button>
                            <md-button label="sheet east modal" @click="${this.handleClickSheetEastModal}"></md-button>
                            <md-button label="sheet south modal" @click="${this.handleClickSheetSouthModal}"></md-button>
                            <md-button label="sheet west modal" @click="${this.handleClickSheetWestModal}"></md-button>
                        </div>
        

                        <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pane>pane</md-pane>
                        </div>
                        <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pane
                                label="Label"
                            >pane</md-pane>
                        </div>
                        <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pane
                                label="Label"
                                .leadingActions="${[{icon:"favorite"}]}"
                            >pane</md-pane>
                        </div>
                        <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pane
                                label="Label"
                                .leadingActions="${[{icon:"favorite"}]}"
                                .trailingActions="${[{icon:"close"}]}"
                            >pane</md-pane>
                        </div>
                        <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pane
                                label="Label"
                                .leadingActions="${[{icon:"favorite"}]}"
                                .trailingActions="${[{icon:"close"}]}"
                                .buttons="${[{label:"Button"}]}"
                            >pane</md-pane>
                        </div>

                    </div>
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

    get sheet(){return this.querySelector('#sheet')}
    get sheet2(){return this.querySelector('#sheet2')}
    get sheet3(){return this.querySelector('#sheet3')}
    get sheet4(){return this.querySelector('#sheet4')}

    handleClickSheetNorth(){
        if(this.sheet.open){this.sheet.close()}else{this.sheet.show()}
    }
    handleClickSheetEast(){
        if(this.sheet2.open){this.sheet2.close()}else{this.sheet2.show()}
    }
    handleClickSheetSouth(){
        if(this.sheet3.open){this.sheet3.close()}else{this.sheet3.show()}
    }
    handleClickSheetWest(){
        if(this.sheet4.open){this.sheet4.close()}else{this.sheet4.show()}
    }

    get sheet5(){return this.querySelector('#sheet5')}
    get sheet6(){return this.querySelector('#sheet6')}
    get sheet7(){return this.querySelector('#sheet7')}
    get sheet8(){return this.querySelector('#sheet8')}

    handleClickSheetNorthModal(){
        if(this.sheet5.open){this.sheet5.close()}else{this.sheet5.show()}
    }
    handleClickSheetEastModal(){
        if(this.sheet6.open){this.sheet6.close()}else{this.sheet6.show()}
    }
    handleClickSheetSouthModal(){
        if(this.sheet7.open){this.sheet7.close()}else{this.sheet7.show()}
    }
    handleClickSheetWestModal(){
        if(this.sheet8.open){this.sheet8.close()}else{this.sheet8.show()}
    }
}

customElements.define("dev-pane", DevPane);

export default document.createElement("dev-pane");
