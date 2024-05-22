import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBottomAppBar extends MDElement {
    constructor(){
        super()

        this.actions=[
            {icon:'favorite'},
            {icon:'favorite'},
            {icon:'favorite'},
            {icon:'favorite'},
        ]
        this.actions1=[
            {icon:'favorite'},
            {icon:'favorite'},
            {icon:'favorite'},
            {icon:'favorite'},
        ]
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-bottom-app-bar id="bar" .actions="${this.actions}" .fab="${{icon:'favorite'}}" ></md-bottom-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
                        <md-bottom-app-bar id="bar2" .actions="${this.actions1}" ></md-bottom-app-bar>
        
                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-column" style="margin: 24px;">
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button label="Icon buttons and FAB" @click="${this.handleClick}"></md-button>
                                    <md-button label="Icon buttons and no FAB" @click="${this.handleClick2}"></md-button>
                                </div>
                
                            </div>
        
                        </div>
                    </div>

                </div>
            </div>
        `;
    }

    get bar(){return this.querySelector('#bar')}
    handleClick(){if(this.bar.open){this.bar.close()}else{this.bar.show()}}

    get bar2(){return this.querySelector('#bar2')}
    handleClick2(){if(this.bar2.open){this.bar2.close()}else{this.bar2.show()}}
}

customElements.define("dev-bottom-app-bar", DevBottomAppBar);

export default document.createElement("dev-bottom-app-bar");
