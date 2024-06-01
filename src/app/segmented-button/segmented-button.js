import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppSegmentedButtonElement extends MDElement{

    constructor(){
        super()

        this.buttons1=[
            {label:'Label 1',selected:true},
            {label:'Label 2'},
            {label:'Label 3'},
        ]
        this.buttons2=[
            {label:'Label 1',selected:true},
            {label:'Label 2',selected:true},
            {label:'Label 3'},
        ]
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-segmented-button .singleSelection="${true}" .buttons="${this.buttons1}"></md-segmented-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-segmented-button .singleSelection="${true}" .multiSelection="${true}" .buttons="${this.buttons2}"></md-segmented-button>
                </div>
            </div>
        `
    }
}

customElements.define('app-segmented-button',AppSegmentedButtonElement)

export default document.createElement('app-segmented-button')