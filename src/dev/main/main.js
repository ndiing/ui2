import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = [
            {
                label: "app-bar",
                children: [
                    { label: "bottom-app-bar", routerLink: "/bottom-app-bar" },
                    { label: "top-app-bar", routerLink: "/top-app-bar" },
                ],
            },

            { label: "badge", routerLink: "/badge" },

            {
                label: "button",
                children: [
                    { label: "button", routerLink: "/button" },
                    { label: "fab", routerLink: "/fab" },
                    { label: "extended-fab", routerLink: "/extended-fab" },
                    { label: "icon-button", routerLink: "/icon-button" },
                    { label: "segmented-button", routerLink: "/segmented-button" },
                ],
            },

            { label: "card", routerLink: "/card" },
            { label: "carousel", routerLink: "/carousel" },
            { label: "checkbox", routerLink: "/checkbox" },
            { label: "chip", routerLink: "/chip" },
            { label: "date-picker", routerLink: "/date-picker" },
            { label: "dialog", routerLink: "/dialog" },
            { label: "divider", routerLink: "/divider" },
            { label: "list", routerLink: "/list" },
            { label: "menu", routerLink: "/menu" },

            {
                label: "navigation",
                children: [
                    { label: "navigation-bar", routerLink: "/navigation-bar" },
                    { label: "navigation-drawer", routerLink: "/navigation-drawer" },
                    { label: "navigation-rail", routerLink: "/navigation-rail" },
                ],
            },

            { label: "progress-indicator", routerLink: "/progress-indicator" },
            { label: "radio-button", routerLink: "/radio-button" },

            {
                label: "sheet",
                children: [
                    { label: "bottom-sheet", routerLink: "/bottom-sheet" },
                    { label: "side-sheet", routerLink: "/side-sheet" },
                ],
            },

            { label: "slider", routerLink: "/slider" },
            { label: "snackbar", routerLink: "/snackbar" },
            { label: "switch", routerLink: "/switch" },
            { label: "tab", routerLink: "/tab" },
            { label: "text-field", routerLink: "/text-field" },
            { label: "time-picker", routerLink: "/time-picker" },
            { label: "tooltip", routerLink: "/tooltip" },

            {
                label: "uncategorized",
                children: [
                    { label: "color-field", routerLink: "/color-field" },
                    { label: "color-picker", routerLink: "/color-picker" },
                    { label: "data-table", routerLink: "/data-table" },
                    { label: "date-field", routerLink: "/date-field" },
                    { label: "datetime-field", routerLink: "/datetime-field" },
                    { label: "datetime-picker", routerLink: "/datetime-picker" },
                    { label: "element", routerLink: "/element" },
                    { label: "email-field", routerLink: "/email-field" },
                    { label: "emoji", routerLink: "/emoji" },
                    { label: "file-field", routerLink: "/file-field" },
                    { label: "form", routerLink: "/form" },
                    { label: "gesture", routerLink: "/gesture" },
                    { label: "icon", routerLink: "/icon" },
                    { label: "image", routerLink: "/image" },
                    { label: "layout", routerLink: "/layout" },
                    { label: "localization", routerLink: "/localization" },
                    { label: "marker", routerLink: "/marker" },
                    { label: "month-field", routerLink: "/month-field" },
                    { label: "month-picker", routerLink: "/month-picker" },
                    { label: "number-field", routerLink: "/number-field" },
                    { label: "observer", routerLink: "/observer" },
                    { label: "pagination", routerLink: "/pagination" },
                    { label: "pane", routerLink: "/pane" },
                    { label: "password-field", routerLink: "/password-field" },
                    { label: "polyfill", routerLink: "/polyfill" },
                    { label: "popper", routerLink: "/popper" },
                    { label: "progress", routerLink: "/progress" },
                    { label: "ripple", routerLink: "/ripple" },
                    { label: "router", routerLink: "/router" },
                    { label: "search-field", routerLink: "/search-field" },
                    { label: "select-field", routerLink: "/select-field" },
                    { label: "store", routerLink: "/store" },
                    { label: "tel-field", routerLink: "/tel-field" },
                    { label: "textarea-field", routerLink: "/textarea-field" },
                    { label: "time-field", routerLink: "/time-field" },
                    { label: "url-field", routerLink: "/url-field" },
                    { label: "virtual-scroll", routerLink: "/virtual-scroll" },
                    { label: "week-field", routerLink: "/week-field" },
                    { label: "week-picker", routerLink: "/week-picker" },
                    { label: "nested-list", routerLink: "/nested-list" },
                ],
            },
        ];

        const setSelected = (list) => {
            list.forEach((item) => {
                item.selected = item.routerLink == Router.path;
                if (item.children?.length) {
                    setSelected(item.children);
                }
            });
        };
        setSelected(this.list);
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">

                <md-navigation-drawer
                    id="navigation-drawer"
                    .list="${this.list}"
                    @onListItemClick="${this.handleDevMainListItemClick}"
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
        const { name } = event.detail;

        if (name == "expanded") {
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
        event.detail.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    }

    handleDevMainTopAppBarActionClick(event) {
        if (this.devMainNavigationDrawer.open) {
            this.devMainNavigationDrawer.close();
        } else {
            this.devMainNavigationDrawer.show();
        }
    }

    handleDevMainListItemClick(event) {
        const { name } = layout;

        if (name !== "expanded") {
            this.devMainNavigationDrawer.close();
        }
    }
}

customElements.define("dev-main", DevMain);

export default document.createElement("dev-main");
