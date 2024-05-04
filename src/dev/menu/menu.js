import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevMenu extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-menu 
                        id="menu"
                        .list="${[
                            { icon:'cut',label: 'Item 1', selected:true },
                            { icon:'content_copy',label: 'Item 2' },
                            { icon:'content_paste',label: 'Item 3' },
                            { icon:'cloud',label: 'Item 4' },
                        ]}"
                    ></md-menu>
                    <md-button id="button" ui="filled-tonal" label="Button" @click="${this.handleClick}"></md-button>
                </div>
                
                
            </div>
        `;
    }

    handleClick(event){
        menu.show(button,{})
    }
}

customElements.define("dev-menu", DevMenu);

export default document.createElement("dev-menu");
