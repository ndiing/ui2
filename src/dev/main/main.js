import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../com/router/router";
import { color, layout } from "../../com/observer/observer";

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = [
            // { leafIcon: 'deployed_code', label: "polyfill", routerLink: "/polyfill" },
            // { leafIcon: 'deployed_code', label: "element", routerLink: "/element" },
            // { leafIcon: 'deployed_code', label: "localization", routerLink: "/localization" },

            // { leafIcon: 'deployed_code', label: "gesture", routerLink: "/gesture" },
            // { leafIcon: 'deployed_code', label: "ripple", routerLink: "/ripple" },
            // { leafIcon: 'deployed_code', label: "popper", routerLink: "/popper" },
            // { leafIcon: 'deployed_code', label: "scrolling", routerLink: "/scrolling" },

            // { leafIcon: 'deployed_code', label: "observer", routerLink: "/observer" },
            // { leafIcon: 'deployed_code', label: "marker", routerLink: "/marker" },
            // { leafIcon: 'deployed_code', label: "progress", routerLink: "/progress" },
            // { leafIcon: 'deployed_code', label: "store", routerLink: "/store" },
            // { leafIcon: 'deployed_code', label: "router", routerLink: "/router" },

            { leafIcon: 'deployed_code', label: "layout", routerLink: "/layout" },
            { leafIcon: 'deployed_code', label: "divider", routerLink: "/divider" },
            { leafIcon: 'deployed_code', label: "icon", routerLink: "/icon" },
            { leafIcon: 'deployed_code', label: "emoji", routerLink: "/emoji" },
            { leafIcon: 'deployed_code', label: "image", routerLink: "/image" },
            { leafIcon: 'deployed_code', label: "badge", routerLink: "/badge" },

            { leafIcon: 'deployed_code', label: "button", routerLink: "/button" },
            { leafIcon: 'deployed_code', label: "segmented-button", routerLink: "/segmented-button" },
            { leafIcon: 'deployed_code', label: "fab", routerLink: "/fab" },
            { leafIcon: 'deployed_code', label: "extended-fab", routerLink: "/extended-fab" },
            { leafIcon: 'deployed_code', label: "icon-button", routerLink: "/icon-button" },

            { leafIcon: 'deployed_code', label: "chip", routerLink: "/chip" },
            { leafIcon: 'deployed_code', label: "list", routerLink: "/list" },
            { leafIcon: 'deployed_code', label: "nested-list", routerLink: "/nested-list" },
            { leafIcon: 'deployed_code', label: "tab", routerLink: "/tab" },

            { leafIcon: 'deployed_code', label: "color-picker", routerLink: "/color-picker" },
            { leafIcon: 'deployed_code', label: "date-picker", routerLink: "/date-picker" },
            { leafIcon: 'deployed_code', label: "datetime-picker", routerLink: "/datetime-picker" },
            { leafIcon: 'deployed_code', label: "month-picker", routerLink: "/month-picker" },
            { leafIcon: 'deployed_code', label: "time-picker", routerLink: "/time-picker" },
            { leafIcon: 'deployed_code', label: "week-picker", routerLink: "/week-picker" },

            { leafIcon: 'deployed_code', label: "form", routerLink: "/form" },
            { leafIcon: 'deployed_code', label: "color-field", routerLink: "/color-field" },
            { leafIcon: 'deployed_code', label: "date-field", routerLink: "/date-field" },
            { leafIcon: 'deployed_code', label: "datetime-field", routerLink: "/datetime-field" },
            { leafIcon: 'deployed_code', label: "email-field", routerLink: "/email-field" },
            { leafIcon: 'deployed_code', label: "file-field", routerLink: "/file-field" },
            { leafIcon: 'deployed_code', label: "month-field", routerLink: "/month-field" },
            { leafIcon: 'deployed_code', label: "number-field", routerLink: "/number-field" },
            { leafIcon: 'deployed_code', label: "password-field", routerLink: "/password-field" },
            { leafIcon: 'deployed_code', label: "search-field", routerLink: "/search-field" },
            { leafIcon: 'deployed_code', label: "select-field", routerLink: "/select-field" },
            { leafIcon: 'deployed_code', label: "tel-field", routerLink: "/tel-field" },
            { leafIcon: 'deployed_code', label: "text-field", routerLink: "/text-field" },
            { leafIcon: 'deployed_code', label: "textarea-field", routerLink: "/textarea-field" },
            { leafIcon: 'deployed_code', label: "time-field", routerLink: "/time-field" },
            { leafIcon: 'deployed_code', label: "url-field", routerLink: "/url-field" },
            { leafIcon: 'deployed_code', label: "week-field", routerLink: "/week-field" },
            { leafIcon: 'deployed_code', label: "checkbox", routerLink: "/checkbox" },
            { leafIcon: 'deployed_code', label: "radio-button", routerLink: "/radio-button" },
            { leafIcon: 'deployed_code', label: "switch", routerLink: "/switch" },
            { leafIcon: 'deployed_code', label: "slider", routerLink: "/slider" },

            { leafIcon: 'deployed_code', label: "progress-indicator", routerLink: "/progress-indicator" },
            { leafIcon: 'deployed_code', label: "pane", routerLink: "/pane" },
            { leafIcon: 'deployed_code', label: "card", routerLink: "/card" },
            { leafIcon: 'deployed_code', label: "dialog", routerLink: "/dialog" },
            { leafIcon: 'deployed_code', label: "snackbar", routerLink: "/snackbar" },
            { leafIcon: 'deployed_code', label: "tooltip", routerLink: "/tooltip" },
            // { leafIcon: 'deployed_code', label: "carousel", routerLink: "/carousel" },

            { leafIcon: 'deployed_code', label: "side-sheet", routerLink: "/side-sheet" },
            { leafIcon: 'deployed_code', label: "bottom-sheet", routerLink: "/bottom-sheet" },
            { leafIcon: 'deployed_code', label: "bottom-app-bar", routerLink: "/bottom-app-bar" },
            { leafIcon: 'deployed_code', label: "top-app-bar", routerLink: "/top-app-bar" },

            { leafIcon: 'deployed_code', label: "menu", routerLink: "/menu" },
            { leafIcon: 'deployed_code', label: "navigation-bar", routerLink: "/navigation-bar" },
            { leafIcon: 'deployed_code', label: "navigation-rail", routerLink: "/navigation-rail" },
            { leafIcon: 'deployed_code', label: "navigation-drawer", routerLink: "/navigation-drawer" },

            { leafIcon: 'deployed_code', label: "data-table", routerLink: "/data-table" },
            { leafIcon: 'deployed_code', label: "pagination", routerLink: "/pagination" },
        ];

        this.list=this.list.map(item=>{
            item.label=
            item.label.replace(/(^|[^a-zA-Z0-9])([a-zA-Z])/g,($,$1,$2,$x)=>{
                return ($x==0?'':' ')+$2.toUpperCase()
            })
            return item
        })

        this.select(this.list);
    }

    select(list) {
        list.forEach((item) => {
            item.selected = item.routerLink == Router.path;

            if (item.children?.length) {
                this.select(item.children);
            }
        });
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">

                <md-navigation-drawer
                    id="navigation-drawer"
                    .list="${this.list}"
                    @onListItemSelected="${this.handleDevMainListItemSelected}"
                ></md-navigation-drawer>

                <md-top-app-bar
                    id="top-app-bar"
                    .leadingActions="${[
                        {icon:"menu"}
                    ]}"
                    @onTopAppBarActionClick="${this.handleDevMainTopAppBarActionClick}"
                ></md-top-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>
                </div>

            </div>
        `;
    }

    get devMainNavigationDrawer() {
        return this.querySelector("#navigation-drawer");
    }

    get devMainTopAppBar() {
        return this.querySelector("#top-app-bar");
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.handleDevMainLayoutChange = this.handleDevMainLayoutChange.bind(this);
        this.handleDevMainLayoutChange({ detail: layout });
        window.addEventListener("onLayoutChange", this.handleDevMainLayoutChange);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("onLayoutChange", this.handleDevMainLayoutChange);
    }

    handleDevMainLayoutChange(event) {
        if (event.detail.name == "expanded") {
            this.devMainNavigationDrawer.ui = "";
            this.devMainNavigationDrawer.show();
            this.devMainTopAppBar.close();
        } else {
            this.devMainNavigationDrawer.ui = "modal";
            this.devMainNavigationDrawer.close();
            this.devMainTopAppBar.show();
        }
    }

    handleDevMainListItemSelected(event) {
        if (layout.name !== "expanded") {
            this.devMainNavigationDrawer.close();
        }

        window.requestAnimationFrame(() => {
            event.detail.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        })
    }

    handleDevMainTopAppBarActionClick(event) {
        if (this.devMainNavigationDrawer.open) {
            this.devMainNavigationDrawer.close();
        } else {
            this.devMainNavigationDrawer.show();
        }
    }
}

customElements.define("dev-main", DevMain);

export default document.createElement("dev-main");
