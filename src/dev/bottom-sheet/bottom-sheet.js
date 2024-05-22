import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBottomSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-bottom-sheet 
                    id="sheet"
                >bottom-sheet</md-bottom-sheet>

                <md-bottom-sheet 
                    id="sheet2"
                    ui="modal"
                >bottom-sheet</md-bottom-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column" style="margin: 24px;">
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button label="Standard bottom sheet" @click="${this.handleClick}"></md-button>
                            <md-button label="Modal bottom sheet" @click="${this.handleClick2}"></md-button>
                        </div>
        
                    </div>

                </div>
            </div>
        `;
    }

    get sheet(){
        return this.querySelector('#sheet')
    }

    get sheet2(){
        return this.querySelector('#sheet2')
    }

    handleClick(event){
        if(this.sheet.open){this.sheet.close()}else{this.sheet.show()}
    }

    handleClick2(event){
        if(this.sheet2.open){this.sheet2.close()}else{this.sheet2.show()}
    }
}

customElements.define("dev-bottom-sheet", DevBottomSheet);

export default document.createElement("dev-bottom-sheet");
