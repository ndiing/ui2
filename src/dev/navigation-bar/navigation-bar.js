import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-navigation-bar 
                    id="navigationBar1"
                    .list="${[
                        { icon:'change_history',label: 'Label', selected:true },
                        { icon:'change_history',label: 'Label' },
                        { icon:'change_history',label: 'Label' },
                        { icon:'change_history',label: 'Label' },
                    ]}"
                ></md-navigation-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
                        <md-navigation-bar 
                            id="navigationBar2"
                            .list="${[
                                { icon:'change_history', selected:true },
                                { icon:'change_history' },
                                { icon:'change_history' },
                                { icon:'change_history' },
                            ]}"
                        ></md-navigation-bar>

                        <div class="md-layout-border__item md-layout-border__item--center" style="padding:24px;">
                            <md-button ui="filled-tonal" label="4 destinations; label text" @click="${this.handleClick1}"></md-button><br><br>
                            <md-button ui="filled-tonal" label="4 destinations; no label text" @click="${this.handleClick2}"></md-button><br><br>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleClick1() {
        if (navigationBar1.open) navigationBar1.close();
        else navigationBar1.show();
    }

    handleClick2() {
        if (navigationBar2.open) navigationBar2.close();
        else navigationBar2.show();
    }
}

customElements.define("dev-navigation-bar", DevNavigationBar);

export default document.createElement("dev-navigation-bar");
