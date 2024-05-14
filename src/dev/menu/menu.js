import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevMenu extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
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

    handleClick(event) {
        menu.show(button, {});
    }

    handleContextmenu(event) {
        event.preventDefault()
        menu.show(event, {});
    }

    connectedCallback() {
        super.connectedCallback()
        this.handleContextmenu=this.handleContextmenu.bind(this)
        window.addEventListener("contextmenu", this.handleContextmenu);
    }
    disconnectedCallback() {
        super.disconnectedCallback()
        window.removeEventListener("contextmenu", this.handleContextmenu);
    }
}

customElements.define("dev-menu", DevMenu);

export default document.createElement("dev-menu");
