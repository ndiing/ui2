import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationBar extends MDElement {
    constructor(){
        super()

        this.list=[
            {label:'Item 1', icon:'favorite',selected:true},
            {label:'Item 2', icon:'favorite'},
            {label:'Item 3', icon:'favorite'},
            {label:'Item 4', icon:'favorite'},
        ]

        this.list2=[
            {icon:'favorite',selected:true},
            {icon:'favorite'},
            {icon:'favorite'},
            {icon:'favorite'},
        ]
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-navigation-rail 
                    id="rail"
                    .list="${this.list}"
                ></md-navigation-rail>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
                        <md-navigation-rail 
                            id="rail2"
                            .list="${this.list2}"
                        ></md-navigation-rail>
        
                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-column" style="margin: 24px;">
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button label="4 destinations; label text" @click="${this.handleClick}"></md-button>
                                    <md-button label="4 destinations; no label text" @click="${this.handleClick2}"></md-button>
                                </div>
                
                            </div>
        
                        </div>
                    </div>
                    

                </div>
            </div>
        `;
    }

    get rail(){return this.querySelector('#rail')}
    get rail2(){return this.querySelector('#rail2')}

    handleClick(){if(this.rail.open){this.rail.close()}else{this.rail.show()}}
    handleClick2(){if(this.rail2.open){this.rail2.close()}else{this.rail2.show()}}
}

customElements.define("dev-navigation-rail", DevNavigationBar);

export default document.createElement("dev-navigation-rail");
