import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import {  Router } from "../../lib/router/router";

class DevMain extends MDElement {
    constructor() {
        super();
        this.list =[
            {"label": "Badge", "routerLink": "/badge"},
            {"label": "Bottom App Bar", "routerLink": "/bottom-app-bar"},
            {"label": "Bottom Sheet", "routerLink": "/bottom-sheet"},
            {"label": "Button", "routerLink": "/button"},
            {"label": "Card", "routerLink": "/card"},
            {"label": "Carousel", "routerLink": "/carousel"},
            {"label": "Checkbox", "routerLink": "/checkbox"},
            {"label": "Chip", "routerLink": "/chip"},
            {"label": "Color Field", "routerLink": "/color-field"},
            {"label": "Data Table", "routerLink": "/data-table"},
            {"label": "Date Field", "routerLink": "/date-field"},
            {"label": "Date Picker", "routerLink": "/date-picker"},
            {"label": "Datetime Field", "routerLink": "/datetime-field"},
            {"label": "Dialog", "routerLink": "/dialog"},
            {"label": "Divider", "routerLink": "/divider"},
            {"label": "Email Field", "routerLink": "/email-field"},
            {"label": "Element", "routerLink": "/element"},
            {"label": "Extended FAB", "routerLink": "/extended-fab"},
            {"label": "FAB", "routerLink": "/fab"},
            {"label": "File Field", "routerLink": "/file-field"},
            {"label": "Form", "routerLink": "/form"},
            {"label": "Gesture", "routerLink": "/gesture"},
            {"label": "Icon", "routerLink": "/icon"},
            {"label": "Icon Button", "routerLink": "/icon-button"},
            {"label": "Layout", "routerLink": "/layout"},
            {"label": "List", "routerLink": "/list"},
            {"label": "Localization", "routerLink": "/localization"},
            {"label": "Marker", "routerLink": "/marker"},
            {"label": "Menu", "routerLink": "/menu"},
            {"label": "Month Field", "routerLink": "/month-field"},
            {"label": "Navigation Bar", "routerLink": "/navigation-bar"},
            {"label": "Navigation Drawer", "routerLink": "/navigation-drawer"},
            {"label": "Navigation Rail", "routerLink": "/navigation-rail"},
            {"label": "Number Field", "routerLink": "/number-field"},
            {"label": "Observer", "routerLink": "/observer"},
            {"label": "Pagination", "routerLink": "/pagination"},
            {"label": "Pane", "routerLink": "/pane"},
            {"label": "Password Field", "routerLink": "/password-field"},
            {"label": "Popper", "routerLink": "/popper"},
            {"label": "Progress", "routerLink": "/progress"},
            {"label": "Progress Indicator", "routerLink": "/progress-indicator"},
            {"label": "Radio Button", "routerLink": "/radio-button"},
            {"label": "Ripple", "routerLink": "/ripple"},
            {"label": "Router", "routerLink": "/router"},
            {"label": "Search", "routerLink": "/search"},
            {"label": "Search Field", "routerLink": "/search-field"},
            {"label": "Segmented Button", "routerLink": "/segmented-button"},
            {"label": "Select Field", "routerLink": "/select-field"},
            {"label": "Side Sheet", "routerLink": "/side-sheet"},
            {"label": "Slider", "routerLink": "/slider"},
            {"label": "Snackbar", "routerLink": "/snackbar"},
            {"label": "Store", "routerLink": "/store"},
            {"label": "Switch", "routerLink": "/switch"},
            {"label": "Tab", "routerLink": "/tab"},
            {"label": "Tel Field", "routerLink": "/tel-field"},
            {"label": "Textarea Field", "routerLink": "/textarea-field"},
            {"label": "Text Field", "routerLink": "/text-field"},
            {"label": "Time Field", "routerLink": "/time-field"},
            {"label": "Time Picker", "routerLink": "/time-picker"},
            {"label": "Tooltip", "routerLink": "/tooltip"},
            {"label": "Top App Bar", "routerLink": "/top-app-bar"},
            {"label": "URL Field", "routerLink": "/url-field"},
            {"label": "Week Field", "routerLink": "/week-field"}
        ]
        
        .map((item) => {
            item.selected = item.routerLink === Router.path;
            return item;
        });
    }
    render() {
        // prettier-ignore
        return html`
            <!-- <h1>${"Main"}</h1> -->
            <!-- <div class="md-layout"> -->
                <div class="md-layout--border md-layout--fit">
                    <md-navigation-drawer
                        class="md-layout__item md-layout__item--west md-layout--fit"
                        open
                        .list="${this.list}"
                        @onListContainerSelected="${this.handleListContainerSelected}"
                    ></md-navigation-drawer>
                    <div class="md-layout__item md-layout__item--center md-layout--fit" style="padding:24px;">
                        <md-outlet></md-outlet>
                    </div>
                </div>
            <!-- </div> -->
        `;
    }
    handleListContainerSelected(event) {
        event.detail.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });

    }
    firstUpdated(){
        // console.log(Color.item)
        // console.log(Layout.item)
        // window.addEventListener('onColorChange',console.log)
        // window.addEventListener('onLayoutChange',console.log)
    }
}

customElements.define("dev-main", DevMain);

export default document.createElement("dev-main");
