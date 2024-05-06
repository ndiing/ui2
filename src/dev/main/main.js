import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = [
            {icon:'deployed_code',label:'observer',routerLink:'/observer'},
            {icon:'deployed_code',label:'marker',routerLink:'/marker'},
            {icon:'deployed_code',label:'progress',routerLink:'/progress'},
            {icon:'deployed_code',label:'router',routerLink:'/router'},
            {icon:'deployed_code',label:'store',routerLink:'/store'},
            {icon:'deployed_code',label:'gesture',routerLink:'/gesture'},
            {icon:'deployed_code',label:'ripple',routerLink:'/ripple'},
            {icon:'deployed_code',label:'popper',routerLink:'/popper'},
            {icon:'deployed_code',label:'localization',routerLink:'/localization'},
            {icon:'deployed_code',label:'element',routerLink:'/element'},
            {icon:'deployed_code',label:'icon',routerLink:'/icon'},
            {icon:'deployed_code',label:'badge',routerLink:'/badge'},
            {icon:'deployed_code',label:'divider',routerLink:'/divider'},
            {icon:'deployed_code',label:'button',routerLink:'/button'},
            {icon:'deployed_code',label:'segmented-button',routerLink:'/segmented-button'},
            {icon:'deployed_code',label:'icon-button',routerLink:'/icon-button'},
            {icon:'deployed_code',label:'fab',routerLink:'/fab'},
            {icon:'deployed_code',label:'extended-fab',routerLink:'/extended-fab'},
            {icon:'deployed_code',label:'chip',routerLink:'/chip'},
            {icon:'deployed_code',label:'layout',routerLink:'/layout'},
            {icon:'deployed_code',label:'pane',routerLink:'/pane'},
            {icon:'deployed_code',label:'card',routerLink:'/card'},
            {icon:'deployed_code',label:'carousel',routerLink:'/carousel'},
            {icon:'deployed_code',label:'dialog',routerLink:'/dialog'},
            {icon:'deployed_code',label:'bottom-sheet',routerLink:'/bottom-sheet'},
            {icon:'deployed_code',label:'side-sheet',routerLink:'/side-sheet'},
            {icon:'deployed_code',label:'snackbar',routerLink:'/snackbar'},
            {icon:'deployed_code',label:'tooltip',routerLink:'/tooltip'},
            {icon:'deployed_code',label:'progress-indicator',routerLink:'/progress-indicator'},
            {icon:'deployed_code',label:'list',routerLink:'/list'},
            {icon:'deployed_code',label:'navigation-bar',routerLink:'/navigation-bar'},
            {icon:'deployed_code',label:'navigation-drawer',routerLink:'/navigation-drawer'},
            {icon:'deployed_code',label:'navigation-rail',routerLink:'/navigation-rail'},
            {icon:'deployed_code',label:'tab',routerLink:'/tab'},
            {icon:'deployed_code',label:'top-app-bar',routerLink:'/top-app-bar'},
            {icon:'deployed_code',label:'bottom-app-bar',routerLink:'/bottom-app-bar'},
            {icon:'deployed_code',label:'menu',routerLink:'/menu'},
            {icon:'deployed_code',label:'date-picker',routerLink:'/date-picker'},
            {icon:'deployed_code',label:'time-picker',routerLink:'/time-picker'},
            {icon:'deployed_code',label:'color-picker',routerLink:'/color-picker'},
            {icon:'deployed_code',label:'emoji-picker',routerLink:'/emoji-picker'},
            {icon:'deployed_code',label:'form',routerLink:'/form'},
            {icon:'deployed_code',label:'email-field',routerLink:'/email-field'},
            {icon:'deployed_code',label:'password-field',routerLink:'/password-field'},
            {icon:'deployed_code',label:'text-field',routerLink:'/text-field'},
            {icon:'deployed_code',label:'url-field',routerLink:'/url-field'},
            {icon:'deployed_code',label:'tel-field',routerLink:'/tel-field'},
            {icon:'deployed_code',label:'date-field',routerLink:'/date-field'},
            {icon:'deployed_code',label:'datetime-field',routerLink:'/datetime-field'},
            {icon:'deployed_code',label:'month-field',routerLink:'/month-field'},
            {icon:'deployed_code',label:'time-field',routerLink:'/time-field'},
            {icon:'deployed_code',label:'week-field',routerLink:'/week-field'},
            {icon:'deployed_code',label:'color-field',routerLink:'/color-field'},
            {icon:'deployed_code',label:'file-field',routerLink:'/file-field'},
            {icon:'deployed_code',label:'textarea-field',routerLink:'/textarea-field'},
            {icon:'deployed_code',label:'select-field',routerLink:'/select-field'},
            {icon:'deployed_code',label:'number-field',routerLink:'/number-field'},
            {icon:'deployed_code',label:'search-field',routerLink:'/search-field'},
            {icon:'deployed_code',label:'checkbox',routerLink:'/checkbox'},
            {icon:'deployed_code',label:'radio-button',routerLink:'/radio-button'},
            {icon:'deployed_code',label:'switch',routerLink:'/switch'},
            {icon:'deployed_code',label:'slider',routerLink:'/slider'},
            {icon:'deployed_code',label:'data-table',routerLink:'/data-table'},
            {icon:'deployed_code',label:'pagination',routerLink:'/pagination'},
            {icon:'deployed_code',label:'picker',routerLink:'/picker'},
        ]
        this.list.forEach((item) => {
            item.selected = item.routerLink === Router.path;
        });
        this.list.sort((a,b)=>{
            return a.label.localeCompare(b.label)
        })
    }
    render() {
        // prettier-ignore
        return html`
            <!-- <h1>${"Main"}</h1> -->
            <!-- <div class="md-layout"> -->
                <div class="md-layout--border md-layout--fit">
                    <div class="md-layout__item--north">
                        <md-top-app-bar
                            id="top"
                            .open="${false}"
                            .leadingActions="${[
                                {icon:"image"}
                            ]}"
                            .label="${"Label"}"
                            @onTopAppBarActionClick="${this.handleTopAppBarActionClick}"
                        ></md-top-app-bar>
                    </div>
                    <div class="md-layout__item--west">
                        <md-navigation-drawer
                            id="drawer"
                            .open="${true}"
                            .ui=""
                            .list="${this.list}"
                            @onListItemClick="${this.handleListItemClick}"
                        ></md-navigation-drawer>
                    </div>
                    <div class="md-layout__item--center" >
                        <md-outlet></md-outlet>
                    </div>
                </div>
            <!-- </div> -->
        `;
    }
    handleListItemClick(event) {

    }
    handleTopAppBarActionClick(event) {
        drawer.show()
    }
    firstUpdated() {
        console.log(color.name)
        console.log(layout.name)
        window.addEventListener('onColorChange',event=>console.log(event.detail.name))
        window.addEventListener('onLayoutChange',event=>console.log(event.detail.name))
    }
}

customElements.define("dev-main", DevMain);

export default document.createElement("dev-main");
