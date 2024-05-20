import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigationRail extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-navigation-rail 
                    id="navigationRail1"
                    .list="${[
                        { icon:'change_history',label: 'Label', selected:true },
                        { icon:'change_history',label: 'Label' },
                        { icon:'change_history',label: 'Label' },
                        { icon:'change_history',label: 'Label' },
                    ]}"
                ></md-navigation-rail>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
                        <md-navigation-rail 
                            id="navigationRail2"
                            .list="${[
                                { icon:'change_history', selected:true },
                                { icon:'change_history' },
                                { icon:'change_history' },
                                { icon:'change_history' },
                            ]}"
                        ></md-navigation-rail>

                        <div class="md-layout-border__item md-layout-border__item--center" style="padding:24px;">
                            <md-button ui="filled-tonal" label="All destinations with text labels" @click="${this.handleClick1}"></md-button><br><br>
                            <md-button ui="filled-tonal" label="All destinations without labels" @click="${this.handleClick2}"></md-button><br><br>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleClick1() {
        if (navigationRail1.open) navigationRail1.close();
        else navigationRail1.show();
    }

    handleClick2() {
        if (navigationRail2.open) navigationRail2.close();
        else navigationRail2.show();
    }
}

customElements.define("dev-navigation-rail", DevNavigationRail);

export default document.createElement("dev-navigation-rail");
