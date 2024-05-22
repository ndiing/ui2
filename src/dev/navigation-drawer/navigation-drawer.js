import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationBar extends MDElement {
    constructor(){
        super()

        this.list=[
            {label:'Item 1', leafIcon:'favorite',selected:true},
            {label:'Item 2', leafIcon:'favorite'},
            {label:'Item 3', leafIcon:'favorite'},
            {label:'Item 4', leafIcon:'favorite'},
        ]

        this.list2=[
            {label:'Item 1', leafIcon:'favorite',selected:true},
            {label:'Item 2', leafIcon:'favorite'},
            {label:'Item 3', leafIcon:'favorite'},
            {label:'Item 4', leafIcon:'favorite'},
        ]

    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-navigation-drawer 
                    id="drawer"
                    .list="${this.list}"
                ></md-navigation-drawer>

                <md-navigation-drawer 
                    id="drawer2"
                    .list="${this.list2}"
                    ui="modal"
                ></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column" style="margin: 24px;">
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button label="Standard navigation drawer" @click="${this.handleClick}"></md-button>
                            <md-button label="Modal navigation drawer" @click="${this.handleClick2}"></md-button>
                        </div>
        
                    </div>

                </div>
            </div>
        `;
    }

    get drawer(){return this.querySelector('#drawer')}
    get drawer2(){return this.querySelector('#drawer2')}

    handleClick(){if(this.drawer.open){this.drawer.close()}else{this.drawer.show()}}
    handleClick2(){if(this.drawer2.open){this.drawer2.close()}else{this.drawer2.show()}}
}

customElements.define("dev-navigation-drawer", DevNavigationBar);

export default document.createElement("dev-navigation-drawer");
