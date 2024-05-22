import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSegmentedButton extends MDElement {
    constructor(){
        super()

        this.buttons=[
            {label:'Button 1',selected:true},
            {label:'Button 2'},
            {label:'Button 3'},
        ]

        this.buttons2=[
            {label:'Button 1',selected:true},
            {label:'Button 2',selected:true},
            {label:'Button 3'},
        ]
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button .buttons="${this.buttons}"></md-segmented-button>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button .buttons="${this.buttons2}"></md-segmented-button>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-segmented-button", DevSegmentedButton);

export default document.createElement("dev-segmented-button");
