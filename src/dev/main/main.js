import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = [
            { icon: 'deployed_code', label: 'Observer', routerLink: '/observer' },
            { icon: 'deployed_code', label: 'Marker', routerLink: '/marker' },
            { icon: 'deployed_code', label: 'Progress', routerLink: '/progress' },
            { icon: 'deployed_code', label: 'Router', routerLink: '/router' },
            { icon: 'deployed_code', label: 'Store', routerLink: '/store' },
            { icon: 'deployed_code', label: 'Gesture', routerLink: '/gesture' },
            { icon: 'deployed_code', label: 'Ripple', routerLink: '/ripple' },
            { icon: 'deployed_code', label: 'Popper', routerLink: '/popper' },
            { icon: 'deployed_code', label: 'Localization', routerLink: '/localization' },
            { icon: 'deployed_code', label: 'Element', routerLink: '/element' },
            { icon: 'deployed_code', label: 'Icon', routerLink: '/icon' },
            { icon: 'deployed_code', label: 'Badge', routerLink: '/badge' },
            { icon: 'deployed_code', label: 'Divider', routerLink: '/divider' },
            { icon: 'deployed_code', label: 'Button', routerLink: '/button' },
            { icon: 'deployed_code', label: 'Segmented Button', routerLink: '/segmented-button' },
            { icon: 'deployed_code', label: 'Icon Button', routerLink: '/icon-button' },
            { icon: 'deployed_code', label: 'FAB', routerLink: '/fab' },
            { icon: 'deployed_code', label: 'Extended FAB', routerLink: '/extended-fab' },
            { icon: 'deployed_code', label: 'Chip', routerLink: '/chip' },
            { icon: 'deployed_code', label: 'Layout', routerLink: '/layout' },
            { icon: 'deployed_code', label: 'Pane', routerLink: '/pane' },
            { icon: 'deployed_code', label: 'Card', routerLink: '/card' },
            { icon: 'deployed_code', label: 'Carousel', routerLink: '/carousel' },
            { icon: 'deployed_code', label: 'Dialog', routerLink: '/dialog' },
            { icon: 'deployed_code', label: 'Bottom Sheet', routerLink: '/bottom-sheet' },
            { icon: 'deployed_code', label: 'Side Sheet', routerLink: '/side-sheet' },
            { icon: 'deployed_code', label: 'Snackbar', routerLink: '/snackbar' },
            { icon: 'deployed_code', label: 'Tooltip', routerLink: '/tooltip' },
            { icon: 'deployed_code', label: 'Progress Indicator', routerLink: '/progress-indicator' },
            { icon: 'deployed_code', label: 'List', routerLink: '/list' },
            { icon: 'deployed_code', label: 'Navigation Bar', routerLink: '/navigation-bar' },
            { icon: 'deployed_code', label: 'Navigation Drawer', routerLink: '/navigation-drawer' },
            { icon: 'deployed_code', label: 'Navigation Rail', routerLink: '/navigation-rail' },
            { icon: 'deployed_code', label: 'Tab', routerLink: '/tab' },
            { icon: 'deployed_code', label: 'Top App Bar', routerLink: '/top-app-bar' },
            { icon: 'deployed_code', label: 'Bottom App Bar', routerLink: '/bottom-app-bar' },
            { icon: 'deployed_code', label: 'Menu', routerLink: '/menu' },
            { icon: 'deployed_code', label: 'Date Picker', routerLink: '/date-picker' },
            { icon: 'deployed_code', label: 'Time Picker', routerLink: '/time-picker' },
            { icon: 'deployed_code', label: 'Color Picker', routerLink: '/color-picker' },
            { icon: 'deployed_code', label: 'Emoji Picker', routerLink: '/emoji-picker' },
            { icon: 'deployed_code', label: 'Form', routerLink: '/form' },
            { icon: 'deployed_code', label: 'Email Field', routerLink: '/email-field' },
            { icon: 'deployed_code', label: 'Password Field', routerLink: '/password-field' },
            { icon: 'deployed_code', label: 'Text Field', routerLink: '/text-field' },
            { icon: 'deployed_code', label: 'URL Field', routerLink: '/url-field' },
            { icon: 'deployed_code', label: 'Tel Field', routerLink: '/tel-field' },
            { icon: 'deployed_code', label: 'Date Field', routerLink: '/date-field' },
            { icon: 'deployed_code', label: 'Datetime Field', routerLink: '/datetime-field' },
            { icon: 'deployed_code', label: 'Month Field', routerLink: '/month-field' },
            { icon: 'deployed_code', label: 'Time Field', routerLink: '/time-field' },
            { icon: 'deployed_code', label: 'Week Field', routerLink: '/week-field' },
            { icon: 'deployed_code', label: 'Color Field', routerLink: '/color-field' },
            { icon: 'deployed_code', label: 'File Field', routerLink: '/file-field' },
            { icon: 'deployed_code', label: 'Textarea Field', routerLink: '/textarea-field' },
            { icon: 'deployed_code', label: 'Select Field', routerLink: '/select-field' },
            { icon: 'deployed_code', label: 'Number Field', routerLink: '/number-field' },
            { icon: 'deployed_code', label: 'Search Field', routerLink: '/search-field' },
            { icon: 'deployed_code', label: 'Checkbox', routerLink: '/checkbox' },
            { icon: 'deployed_code', label: 'Radio Button', routerLink: '/radio-button' },
            { icon: 'deployed_code', label: 'Switch', routerLink: '/switch' },
            { icon: 'deployed_code', label: 'Slider', routerLink: '/slider' },
            { icon: 'deployed_code', label: 'Data Table', routerLink: '/data-table' },
            { icon: 'deployed_code', label: 'Pagination', routerLink: '/pagination' },
            { icon: 'deployed_code', label: 'Picker', routerLink: '/picker' },
        ];
        
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
