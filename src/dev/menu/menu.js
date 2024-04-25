import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevMenu extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-menu 
                        id="menu"
                        .list="${[
                            { icon:'image',label: 'Lorem', selected:true },
                            { icon:'image',label: 'ipsum' },
                            { icon:'image',label: 'dolor' },
                            { icon:'image',label: 'sit' },
                            { icon:'image',label: 'amet' },
                        ]}"
                        @onListContainerClick="${this.handleListContainerClick}"
                    ></md-menu>
                    <md-button id="button" label="menu" @click="${this.handleClick}"></md-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }

    handleClick(event){
        menu.show(button,{})
    }
    handleListContainerClick(event){
        menu.close()
    }
}

customElements.define("dev-menu", DevMenu);

export default document.createElement("dev-menu");
