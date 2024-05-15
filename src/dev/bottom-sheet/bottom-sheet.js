import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSideSheet extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
            
                <md-bottom-sheet
                    id="bottomSheet1"
                >
                    Lorem ipsum dolor sit amet. <br>
                    Tempore dolorum praesentium officia quo? <br>
                    Voluptates iste eum optio commodi? <br>
                    Eaque saepe doloremque at aut. <br>
                    Saepe ab tempore esse totam. <br>
                </md-bottom-sheet>

                <md-bottom-sheet
                    id="bottomSheet2"
                    ui="modal"
                >
                    Lorem ipsum dolor sit amet. <br>
                    Tempore dolorum praesentium officia quo? <br>
                    Voluptates iste eum optio commodi? <br>
                    Eaque saepe doloremque at aut. <br>
                    Saepe ab tempore esse totam. <br>
                </md-bottom-sheet>
                

                <div class="md-layout-border__item md-layout-border__item--center" style="padding:24px;">
                    <md-button ui="filled-tonal" label="Standard bottom sheet" @click="${this.handleClick1}"></md-button><br><br>
                    <md-button ui="filled-tonal" label="Modal bottom sheet" @click="${this.handleClick2}"></md-button><br><br>
                </div>

            </div>
    
        
    
        `;
    }
    handleClick1(event) {
        if (bottomSheet1.open) bottomSheet1.close();
        else bottomSheet1.show();
    }
    handleClick2(event) {
        if (bottomSheet2.open) bottomSheet2.close();
        else bottomSheet2.show();
    }
    
}

customElements.define("dev-bottom-sheet", DevSideSheet);

export default document.createElement("dev-bottom-sheet");
