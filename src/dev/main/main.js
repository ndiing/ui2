import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = [
            { icon: "deployed_code", label: "bottom-app-bar", routerLink: "/bottom-app-bar" },
            { icon: "deployed_code", label: "top-app-bar", routerLink: "/top-app-bar" },
            { icon: "deployed_code", label: "badge", routerLink: "/badge" },
            { icon: "deployed_code", label: "button", routerLink: "/button" },
            { icon: "deployed_code", label: "fab", routerLink: "/fab" },
            { icon: "deployed_code", label: "extended-fab", routerLink: "/extended-fab" },
            { icon: "deployed_code", label: "icon-button", routerLink: "/icon-button" },
            { icon: "deployed_code", label: "segmented-button", routerLink: "/segmented-button" },
            { icon: "deployed_code", label: "card", routerLink: "/card" },
            { icon: "deployed_code", label: "carousel", routerLink: "/carousel" },
            { icon: "deployed_code", label: "checkbox", routerLink: "/checkbox" },
            { icon: "deployed_code", label: "chip", routerLink: "/chip" },
            { icon: "deployed_code", label: "date-picker", routerLink: "/date-picker" },
            { icon: "deployed_code", label: "dialog", routerLink: "/dialog" },
            { icon: "deployed_code", label: "divider", routerLink: "/divider" },
            { icon: "deployed_code", label: "list", routerLink: "/list" },
            { icon: "deployed_code", label: "menu", routerLink: "/menu" },
            { icon: "deployed_code", label: "navigation-bar", routerLink: "/navigation-bar" },
            { icon: "deployed_code", label: "navigation-drawer", routerLink: "/navigation-drawer" },
            { icon: "deployed_code", label: "navigation-rail", routerLink: "/navigation-rail" },
            { icon: "deployed_code", label: "progress-indicator", routerLink: "/progress-indicator" },
            { icon: "deployed_code", label: "radio-button", routerLink: "/radio-button" },
            { icon: "deployed_code", label: "bottom-sheet", routerLink: "/bottom-sheet" },
            { icon: "deployed_code", label: "side-sheet", routerLink: "/side-sheet" },
            { icon: "deployed_code", label: "slider", routerLink: "/slider" },
            { icon: "deployed_code", label: "snackbar", routerLink: "/snackbar" },
            { icon: "deployed_code", label: "switch", routerLink: "/switch" },
            { icon: "deployed_code", label: "tab", routerLink: "/tab" },
            { icon: "deployed_code", label: "text-field", routerLink: "/text-field" },
            { icon: "deployed_code", label: "time-picker", routerLink: "/time-picker" },
            { icon: "deployed_code", label: "tooltip", routerLink: "/tooltip" },
            { icon: "deployed_code", label: "color-field", routerLink: "/color-field" },
            { icon: "deployed_code", label: "color-picker", routerLink: "/color-picker" },
            { icon: "deployed_code", label: "data-table", routerLink: "/data-table" },
            { icon: "deployed_code", label: "date-field", routerLink: "/date-field" },
            { icon: "deployed_code", label: "datetime-field", routerLink: "/datetime-field" },
            { icon: "deployed_code", label: "datetime-picker", routerLink: "/datetime-picker" },
            { icon: "deployed_code", label: "element", routerLink: "/element" },
            { icon: "deployed_code", label: "email-field", routerLink: "/email-field" },
            { icon: "deployed_code", label: "emoji", routerLink: "/emoji" },
            { icon: "deployed_code", label: "file-field", routerLink: "/file-field" },
            { icon: "deployed_code", label: "form", routerLink: "/form" },
            { icon: "deployed_code", label: "gesture", routerLink: "/gesture" },
            { icon: "deployed_code", label: "icon", routerLink: "/icon" },
            { icon: "deployed_code", label: "image", routerLink: "/image" },
            { icon: "deployed_code", label: "layout", routerLink: "/layout" },
            { icon: "deployed_code", label: "localization", routerLink: "/localization" },
            { icon: "deployed_code", label: "marker", routerLink: "/marker" },
            { icon: "deployed_code", label: "month-field", routerLink: "/month-field" },
            { icon: "deployed_code", label: "month-picker", routerLink: "/month-picker" },
            { icon: "deployed_code", label: "number-field", routerLink: "/number-field" },
            { icon: "deployed_code", label: "observer", routerLink: "/observer" },
            { icon: "deployed_code", label: "pagination", routerLink: "/pagination" },
            { icon: "deployed_code", label: "pane", routerLink: "/pane" },
            { icon: "deployed_code", label: "password-field", routerLink: "/password-field" },
            { icon: "deployed_code", label: "polyfill", routerLink: "/polyfill" },
            { icon: "deployed_code", label: "popper", routerLink: "/popper" },
            { icon: "deployed_code", label: "progress", routerLink: "/progress" },
            { icon: "deployed_code", label: "ripple", routerLink: "/ripple" },
            { icon: "deployed_code", label: "router", routerLink: "/router" },
            { icon: "deployed_code", label: "search-field", routerLink: "/search-field" },
            { icon: "deployed_code", label: "select-field", routerLink: "/select-field" },
            { icon: "deployed_code", label: "store", routerLink: "/store" },
            { icon: "deployed_code", label: "tel-field", routerLink: "/tel-field" },
            { icon: "deployed_code", label: "textarea-field", routerLink: "/textarea-field" },
            { icon: "deployed_code", label: "time-field", routerLink: "/time-field" },
            { icon: "deployed_code", label: "url-field", routerLink: "/url-field" },
            { icon: "deployed_code", label: "virtual-scroll", routerLink: "/virtual-scroll" },
            { icon: "deployed_code", label: "week-field", routerLink: "/week-field" },
            { icon: "deployed_code", label: "week-picker", routerLink: "/week-picker" },
        ].map((item) => {
            item.selected = item.routerLink == Router.path;
            return item;
        });
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

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
        
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
            inline: 'center',
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
