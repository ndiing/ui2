import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = [
            { icon: "deployed_code", label: "bottom-app-bar", routerLink: "/bottom-app-bar", selected: false },
            { icon: "deployed_code", label: "top-app-bar", routerLink: "/top-app-bar", selected: false },
            { icon: "deployed_code", label: "badge", routerLink: "/badge", selected: false },
            { icon: "deployed_code", label: "button", routerLink: "/button", selected: false },
            { icon: "deployed_code", label: "fab", routerLink: "/fab", selected: false },
            { icon: "deployed_code", label: "extended-fab", routerLink: "/extended-fab", selected: false },
            { icon: "deployed_code", label: "icon-button", routerLink: "/icon-button", selected: false },
            { icon: "deployed_code", label: "segmented-button", routerLink: "/segmented-button", selected: false },
            { icon: "deployed_code", label: "card", routerLink: "/card", selected: false },
            { icon: "deployed_code", label: "carousel", routerLink: "/carousel", selected: false },
            { icon: "deployed_code", label: "checkbox", routerLink: "/checkbox", selected: false },
            { icon: "deployed_code", label: "chip", routerLink: "/chip", selected: false },
            { icon: "deployed_code", label: "date-picker", routerLink: "/date-picker", selected: false },
            { icon: "deployed_code", label: "dialog", routerLink: "/dialog", selected: false },
            { icon: "deployed_code", label: "divider", routerLink: "/divider", selected: false },
            { icon: "deployed_code", label: "list", routerLink: "/list", selected: false },
            { icon: "deployed_code", label: "menu", routerLink: "/menu", selected: false },
            { icon: "deployed_code", label: "navigation-bar", routerLink: "/navigation-bar", selected: false },
            { icon: "deployed_code", label: "navigation-drawer", routerLink: "/navigation-drawer", selected: false },
            { icon: "deployed_code", label: "navigation-rail", routerLink: "/navigation-rail", selected: false },
            { icon: "deployed_code", label: "progress-indicator", routerLink: "/progress-indicator", selected: false },
            { icon: "deployed_code", label: "radio-button", routerLink: "/radio-button", selected: false },
            { icon: "deployed_code", label: "bottom-sheet", routerLink: "/bottom-sheet", selected: false },
            { icon: "deployed_code", label: "side-sheet", routerLink: "/side-sheet", selected: false },
            { icon: "deployed_code", label: "slider", routerLink: "/slider", selected: false },
            { icon: "deployed_code", label: "snackbar", routerLink: "/snackbar", selected: false },
            { icon: "deployed_code", label: "switch", routerLink: "/switch", selected: false },
            { icon: "deployed_code", label: "tab", routerLink: "/tab", selected: false },
            { icon: "deployed_code", label: "text-field", routerLink: "/text-field", selected: false },
            { icon: "deployed_code", label: "time-picker", routerLink: "/time-picker", selected: false },
            { icon: "deployed_code", label: "tooltip", routerLink: "/tooltip", selected: false },
            { icon: "deployed_code", label: "color-field", routerLink: "/color-field", selected: false },
            { icon: "deployed_code", label: "color-picker", routerLink: "/color-picker", selected: false },
            { icon: "deployed_code", label: "data-table", routerLink: "/data-table", selected: false },
            { icon: "deployed_code", label: "date-field", routerLink: "/date-field", selected: false },
            { icon: "deployed_code", label: "datetime-field", routerLink: "/datetime-field", selected: false },
            { icon: "deployed_code", label: "datetime-picker", routerLink: "/datetime-picker", selected: false },
            { icon: "deployed_code", label: "element", routerLink: "/element", selected: false },
            { icon: "deployed_code", label: "email-field", routerLink: "/email-field", selected: false },
            { icon: "deployed_code", label: "emoji", routerLink: "/emoji", selected: false },
            { icon: "deployed_code", label: "file-field", routerLink: "/file-field", selected: false },
            { icon: "deployed_code", label: "form", routerLink: "/form", selected: false },
            { icon: "deployed_code", label: "gesture", routerLink: "/gesture", selected: false },
            { icon: "deployed_code", label: "icon", routerLink: "/icon", selected: false },
            { icon: "deployed_code", label: "image", routerLink: "/image", selected: false },
            { icon: "deployed_code", label: "layout", routerLink: "/layout", selected: false },
            { icon: "deployed_code", label: "localization", routerLink: "/localization", selected: false },
            { icon: "deployed_code", label: "marker", routerLink: "/marker", selected: false },
            { icon: "deployed_code", label: "month-field", routerLink: "/month-field", selected: false },
            { icon: "deployed_code", label: "month-picker", routerLink: "/month-picker", selected: false },
            { icon: "deployed_code", label: "number-field", routerLink: "/number-field", selected: false },
            { icon: "deployed_code", label: "observer", routerLink: "/observer", selected: false },
            { icon: "deployed_code", label: "pagination", routerLink: "/pagination", selected: false },
            { icon: "deployed_code", label: "pane", routerLink: "/pane", selected: false },
            { icon: "deployed_code", label: "password-field", routerLink: "/password-field", selected: false },
            { icon: "deployed_code", label: "polyfill", routerLink: "/polyfill", selected: false },
            { icon: "deployed_code", label: "popper", routerLink: "/popper", selected: false },
            { icon: "deployed_code", label: "progress", routerLink: "/progress", selected: false },
            { icon: "deployed_code", label: "ripple", routerLink: "/ripple", selected: false },
            { icon: "deployed_code", label: "router", routerLink: "/router", selected: false },
            { icon: "deployed_code", label: "search-field", routerLink: "/search-field", selected: false },
            { icon: "deployed_code", label: "select-field", routerLink: "/select-field", selected: false },
            { icon: "deployed_code", label: "store", routerLink: "/store", selected: false },
            { icon: "deployed_code", label: "tel-field", routerLink: "/tel-field", selected: false },
            { icon: "deployed_code", label: "textarea-field", routerLink: "/textarea-field", selected: false },
            { icon: "deployed_code", label: "time-field", routerLink: "/time-field", selected: false },
            { icon: "deployed_code", label: "url-field", routerLink: "/url-field", selected: false },
            { icon: "deployed_code", label: "virtual-scroll", routerLink: "/virtual-scroll", selected: false },
            { icon: "deployed_code", label: "week-field", routerLink: "/week-field", selected: false },
            { icon: "deployed_code", label: "week-picker", routerLink: "/week-picker", selected: false },
        ].map((item) => {
            item.selected = item.routerLink == Router.path;
            return item;
        });
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">

                <div class="md-layout__item md-layout__item--north">
                    <md-top-app-bar
                        id="top-app-bar"
                        .leadingActions="${[
                            {icon:"menu"}
                        ]}"
                        @onTopAppBarActionClick="${this.handleDevMainTopAppBarActionClick}"
                    ></md-top-app-bar>
                </div>

                <div class="md-layout__item md-layout__item--west">
                    <md-navigation-drawer
                        id="navigation-drawer"
                        .list="${this.list}"
                        @onListItemClick="${this.handleDevMainListItemClick}"
                        @onListItemSelected="${this.handleDevMainListItemSelected}"
                    ></md-navigation-drawer>
                </div>

                <div class="md-layout__item md-layout__item--center">
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
