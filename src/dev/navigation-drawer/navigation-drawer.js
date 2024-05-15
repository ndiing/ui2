import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationDrawer extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-navigation-drawer 
                    id="navigationDrawer1"
                    .list="${[
                        { icon:'inbox',label: 'Inbox', selected:true },
                        { icon:'send',label: 'Outbox' },
                        { icon:'favorite',label: 'Favorites' },
                        { icon:'delete',label: 'Trash' },
                    ]}"
                ></md-navigation-drawer>
                <md-navigation-drawer 
                    id="navigationDrawer2"
                    .ui="${"modal"}"
                    .list="${[
                        { icon:'inbox',label: 'Inbox', selected:true },
                        { icon:'send',label: 'Outbox' },
                        { icon:'favorite',label: 'Favorites' },
                        { icon:'delete',label: 'Trash' },
                    ]}"
                ></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center" style="padding:24px;">
                    <md-button ui="filled-tonal" label="Standard navigation drawer" @click="${this.handleClick1}"></md-button><br><br>
                    <md-button ui="filled-tonal" label="Modal navigation drawer" @click="${this.handleClick2}"></md-button><br><br>
                </div>
            </div>
        `;
    }

    handleClick1() {
        if (navigationDrawer1.open) navigationDrawer1.close();
        else navigationDrawer1.show();
    }

    handleClick2() {
        if (navigationDrawer2.open) navigationDrawer2.close();
        else navigationDrawer2.show();
    }
}

customElements.define("dev-navigation-drawer", DevNavigationDrawer);

export default document.createElement("dev-navigation-drawer");
