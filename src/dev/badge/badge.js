import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { layout } from "../../lib/observer/observer";

class DevBadge extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                
                <div class="md-layout-border__item md-layout-border__item--south">
                    <md-navigation-bar 
                        id="navigation-bar"
                        .open="${true}}"
                        .list="${[
                            { icon:'change_history',label: 'Label', selected:true },
                            { icon:'change_history',label: 'Label', badge: 0 },
                            { icon:'change_history',label: 'Label', badge: 1 },
                            { icon:'change_history',label: 'Label', badge: 1000 },
                        ]}"
                    ></md-navigation-bar>
                </div>
                
                <div class="md-layout-border__item md-layout-border__item--center">

                    <div class="md-layout-border md-layout-fit">

                        <div class="md-layout-border__item md-layout-border__item--west">
                            <md-navigation-rail 
                                id="navigation-rail"
                                .open="${true}}"
                                .list="${[
                                    { icon:'change_history',label: 'Label', selected:true },
                                    { icon:'change_history',label: 'Label', badge: 0 },
                                    { icon:'change_history',label: 'Label', badge: 1 },
                                    { icon:'change_history',label: 'Label', badge: 1000 },
                                ]}"
                            ></md-navigation-rail>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--center" style="padding:24px;">
                        </div>

                    </div>

                </div>
            </div>
        `;
    }

    get navigationBar(){return this.querySelector('#navigation-bar')}
    get navigationRail(){return this.querySelector('#navigation-rail')}

    async connectedCallback() {
        super.connectedCallback()
        await this.updateComplete
        this.handleDevMainLayoutChange = this.handleDevMainLayoutChange.bind(this);
        this.handleDevMainLayoutChange({ detail: layout });
        window.addEventListener("onLayoutChange", this.handleDevMainLayoutChange);
    }

    async disconnectedCallback() {
        super.disconnectedCallback()
        window.removeEventListener("onLayoutChange", this.handleDevMainLayoutChange);
    }

    handleDevMainLayoutChange(event) {
        const { name } = event.detail;

        if (name == "compact") {
            this.navigationRail.close()
            this.navigationBar.show()
        } else {
            this.navigationRail.show()
            this.navigationBar.close()
        }
    }

}

customElements.define("dev-badge", DevBadge);

export default document.createElement("dev-badge");
