import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = [
            {label:'observer',routerLink:'/observer'},
            {label:'marker',routerLink:'/marker'},
            {label:'progress',routerLink:'/progress'},
            {label:'router',routerLink:'/router'},
            {label:'store',routerLink:'/store'},
            {label:'gesture',routerLink:'/gesture'},
            {label:'ripple',routerLink:'/ripple'},
            {label:'popper',routerLink:'/popper'},
            {label:'localization',routerLink:'/localization'},
            {label:'element',routerLink:'/element'},
            {label:'icon',routerLink:'/icon'},
            {label:'badge',routerLink:'/badge'},
            {label:'divider',routerLink:'/divider'},
            {label:'button',routerLink:'/button'},
            {label:'segmented-button',routerLink:'/segmented-button'},
            {label:'icon-button',routerLink:'/icon-button'},
            {label:'fab',routerLink:'/fab'},
            {label:'extended-fab',routerLink:'/extended-fab'},
            {label:'chip',routerLink:'/chip'},
            {label:'layout',routerLink:'/layout'},
            {label:'pane',routerLink:'/pane'},
            {label:'card',routerLink:'/card'},
            {label:'carousel',routerLink:'/carousel'},
            {label:'dialog',routerLink:'/dialog'},
            {label:'bottom-sheet',routerLink:'/bottom-sheet'},
            {label:'side-sheet',routerLink:'/side-sheet'},
            {label:'snackbar',routerLink:'/snackbar'},
            {label:'tooltip',routerLink:'/tooltip'},
            {label:'progress-indicator',routerLink:'/progress-indicator'},
            {label:'list',routerLink:'/list'},
            {label:'navigation-bar',routerLink:'/navigation-bar'},
            {label:'navigation-drawer',routerLink:'/navigation-drawer'},
            {label:'navigation-rail',routerLink:'/navigation-rail'},
            {label:'tab',routerLink:'/tab'},
            {label:'top-app-bar',routerLink:'/top-app-bar'},
            {label:'bottom-app-bar',routerLink:'/bottom-app-bar'},
            {label:'menu',routerLink:'/menu'},
            {label:'date-picker',routerLink:'/date-picker'},
            {label:'time-picker',routerLink:'/time-picker'},
            {label:'color-picker',routerLink:'/color-picker'},
            {label:'emoji-picker',routerLink:'/emoji-picker'},
            {label:'form',routerLink:'/form'},
            {label:'email-field',routerLink:'/email-field'},
            {label:'password-field',routerLink:'/password-field'},
            {label:'text-field',routerLink:'/text-field'},
            {label:'url-field',routerLink:'/url-field'},
            {label:'tel-field',routerLink:'/tel-field'},
            {label:'date-field',routerLink:'/date-field'},
            {label:'datetime-field',routerLink:'/datetime-field'},
            {label:'month-field',routerLink:'/month-field'},
            {label:'time-field',routerLink:'/time-field'},
            {label:'week-field',routerLink:'/week-field'},
            {label:'color-field',routerLink:'/color-field'},
            {label:'file-field',routerLink:'/file-field'},
            {label:'textarea-field',routerLink:'/textarea-field'},
            {label:'select-field',routerLink:'/select-field'},
            {label:'number-field',routerLink:'/number-field'},
            {label:'search-field',routerLink:'/search-field'},
            {label:'checkbox',routerLink:'/checkbox'},
            {label:'radio-button',routerLink:'/radio-button'},
            {label:'switch',routerLink:'/switch'},
            {label:'slider',routerLink:'/slider'},
            {label:'data-table',routerLink:'/data-table'},
            {label:'pagination',routerLink:'/pagination'},
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
