import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevMenu extends MDElement {
    constructor(){
        super()

        this.list=[
            {icon:'favorite',label:'Item 1'},
            {icon:'favorite',label:'Item 2'},
            {icon:'favorite',label:'Item 3'},
            {icon:'favorite',label:'Item 4'},
        ]
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-menu 
                        .list="${this.list}"
                        id="menu"
                        @onMenuListItemClick="${() => {this.menu.close()}}"
                    ></md-menu>
                    <md-button label="menu" @click="${(event) => this.menu.show(event.currentTarget)}"></md-button>
                </div>

            </div>
        `;
    }

    get menu(){return this.querySelector('#menu')}
}

customElements.define("dev-menu", DevMenu);

export default document.createElement("dev-menu");
