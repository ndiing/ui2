import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTab extends MDElement {
    constructor(){
        super()
        this.list=[
            {label:'Label 1',selected:true},
            {label:'Label 2'},
            {label:'Label 3'},
            {label:'Label 4'},
        ]
        this.list2=[
            {icon:'favorite',label:'Label 1',selected:true},
            {icon:'favorite',label:'Label 2'},
            {icon:'favorite',label:'Label 3'},
            {icon:'favorite',label:'Label 4'},
        ]

        this.list3=[
            {label:'Label 1',selected:true},
            {label:'Label 2'},
            {label:'Label 3'},
            {label:'Label 4'},
        ]
        this.list4=[
            {icon:'favorite',label:'Label 1',selected:true},
            {icon:'favorite',label:'Label 2'},
            {icon:'favorite',label:'Label 3'},
            {icon:'favorite',label:'Label 4'},
        ]
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tab .list="${this.list}"></md-tab>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tab .list="${this.list2}"></md-tab>
                </div>

                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tab .list="${this.list3}" ui="secondary"></md-tab>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tab .list="${this.list4}" ui="secondary"></md-tab>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-tab", DevTab);

export default document.createElement("dev-tab");
