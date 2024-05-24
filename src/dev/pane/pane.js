import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevPane extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-pane
                    label="Label"
                    .trailingActions="${[{icon:"favorite"}]}"
                    ui="sheet north"
                    id="sheet0"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .trailingActions="${[{icon:"favorite"}]}"
                    ui="sheet east"
                    id="sheet1"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .trailingActions="${[{icon:"favorite"}]}"
                    ui="sheet south"
                    id="sheet2"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .trailingActions="${[{icon:"favorite"}]}"
                    ui="sheet west"
                    id="sheet3"
                >pane</md-pane>

                <md-pane
                    label="Label"
                    .trailingActions="${[{icon:"favorite"}]}"
                    ui="sheet north modal"
                    id="sheet4"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .trailingActions="${[{icon:"favorite"}]}"
                    ui="sheet east modal"
                    id="sheet5"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .trailingActions="${[{icon:"favorite"}]}"
                    ui="sheet south modal"
                    id="sheet6"
                >pane</md-pane>
                <md-pane
                    label="Label"
                    .trailingActions="${[{icon:"favorite"}]}"
                    ui="sheet west modal"
                    id="sheet7"
                >pane</md-pane>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column" style="margin: 24px;">
                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-pane>pane</md-pane>
                        </div>
                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-pane
                                label="Label"
                            >pane</md-pane>
                        </div>
                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-pane
                                .leadingActions="${[{icon:"favorite"}]}"
                                label="Label"
                            >pane</md-pane>
                        </div>
                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-pane
                                .leadingActions="${[{icon:"favorite"}]}"
                                label="Label"
                                .trailingActions="${[{icon:"favorite"}]}"
                            >pane</md-pane>
                        </div>
                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-pane
                                .leadingActions="${[{icon:"favorite"}]}"
                                label="Label"
                                .trailingActions="${[{icon:"favorite"}]}"
                                .buttons="${[{label:"Label"}]}"
                            >pane</md-pane>
                        </div>
                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-pane
                                .leadingActions="${[{icon:"favorite"}]}"
                                label="Label"
                                .trailingActions="${[{icon:"favorite"},{icon:"favorite"},{icon:"favorite"}]}"
                                .buttons="${[{label:"Label", ui:"filled"},{label:"Label",ui:'outlined'}]}"
                            >pane</md-pane>
                        </div>




                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-pane
                                .leadingActions="${[{icon:"favorite"}]}"
                                label="Label"
                                .trailingActions="${[{icon:"favorite"}]}"
                                .buttons="${[{label:"Label"}]}"
                                ui="dialog"
                                id="dialog0"
                                @onPaneActionClick="${this.handleClick0}"
                                @onPaneButtonClick="${this.handleClick0}"
                            >pane</md-pane>
                            <md-button @click="${this.handleClick0}" label="dialog"></md-button>
                        </div>
                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-pane
                                .leadingActions="${[{icon:"favorite"}]}"
                                label="Label"
                                .trailingActions="${[{icon:"favorite"}]}"
                                .buttons="${[{label:"Label"}]}"
                                ui="dialog full-screen"
                                id="dialog1"
                                @onPaneActionClick="${this.handleClick1}"
                                @onPaneButtonClick="${this.handleClick1}"
                            >pane</md-pane>
                            <md-button @click="${this.handleClick1}" label="dialog full-screen"></md-button>
                        </div>



                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-button @click="${this.handleClick2}" label="sheet north"></md-button>
                            <md-button @click="${this.handleClick3}" label="sheet east"></md-button>
                            <md-button @click="${this.handleClick4}" label="sheet south"></md-button>
                            <md-button @click="${this.handleClick5}" label="sheet west"></md-button>
                        </div>


                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-button @click="${this.handleClick6}" label="sheet north modal"></md-button>
                            <md-button @click="${this.handleClick7}" label="sheet east modal"></md-button>
                            <md-button @click="${this.handleClick8}" label="sheet south modal"></md-button>
                            <md-button @click="${this.handleClick9}" label="sheet west modal"></md-button>
                        </div>
        
                    </div>

                </div>
            </div>
        `;
    }

    get sheet0(){return this.querySelector('#sheet0')}
    get sheet1(){return this.querySelector('#sheet1')}
    get sheet2(){return this.querySelector('#sheet2')}
    get sheet3(){return this.querySelector('#sheet3')}
    get sheet4(){return this.querySelector('#sheet4')}
    get sheet5(){return this.querySelector('#sheet5')}
    get sheet6(){return this.querySelector('#sheet6')}
    get sheet7(){return this.querySelector('#sheet7')}

    get dialog0(){return this.querySelector('#dialog0')}
    get dialog1(){return this.querySelector('#dialog1')}

    handleClick0(){if(this.dialog0.open){this.dialog0.close()}else{this.dialog0.show()}}
    handleClick1(){if(this.dialog1.open){this.dialog1.close()}else{this.dialog1.show()}}

    handleClick2(){if(this.sheet0.open){this.sheet0.close()}else{this.sheet0.show()}}
    handleClick3(){if(this.sheet1.open){this.sheet1.close()}else{this.sheet1.show()}}
    handleClick4(){if(this.sheet2.open){this.sheet2.close()}else{this.sheet2.show()}}
    handleClick5(){if(this.sheet3.open){this.sheet3.close()}else{this.sheet3.show()}}
    handleClick6(){if(this.sheet4.open){this.sheet4.close()}else{this.sheet4.show()}}
    handleClick7(){if(this.sheet5.open){this.sheet5.close()}else{this.sheet5.show()}}
    handleClick8(){if(this.sheet6.open){this.sheet6.close()}else{this.sheet6.show()}}
    handleClick9(){if(this.sheet7.open){this.sheet7.close()}else{this.sheet7.show()}}
}

customElements.define("dev-pane", DevPane);

export default document.createElement("dev-pane");
