import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";

const devs = ["badge", "bottom-app-bar", "bottom-sheet", "button", "card", "carousel", "checkbox", "chip", "color-field", "data", "data-table", "date-field", "date-picker", "datetime-field", "dialog", "divider", "email-field", "emoji", "error", "extended-fab", "fab", "file-field", "form", "gesture", "icon", "icon-button", "layout", "list", "login", "main", "menu", "month-field", "navigation-bar", "navigation-drawer", "navigation-rail", "number-field", "pagination", "pane", "password-field", "picker", "popper", "progress-indicator", "radio-button", "range-field", "ripple", "search", "search-field", "segmented-button", "select-field", "side-sheet", "slider", "snackbar", "switch", "tab", "tel-field", "text-field", "textarea-field", "time-field", "time-picker", "tooltip", "top-app-bar", "url-field", "virtual-scroll", "week-field"];

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = devs.map((dev) => ({
            icon: "deployed_code",
            label: dev,
            routerLink: `/${dev}`,
            selected: false,
        }));
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">

                <div class="md-layout__item--north">
                    <md-top-app-bar
                        id="top-app-bar"
                        .leadingActions="${[
                            {icon:"menu"}
                        ]}"
                        @onTopAppBarActionClick="${this.handleTopAppBarActionClick}"
                    ></md-top-app-bar>
                </div>

                <div class="md-layout__item--west">
                    <md-navigation-drawer
                        id="navigation-drawer"
                        .list="${this.list}"
                        @onListItemClick="${this.handleListItemClick}"
                    ></md-navigation-drawer>
                </div>

                <div class="md-layout__item--center" >
                    <md-outlet></md-outlet>
                </div>

            </div>
        `;
    }

    get navigationDrawer() {
        return this.querySelector("#navigation-drawer");
    }

    get topAppBar() {
        return this.querySelector("#top-app-bar");
    }

    handleListItemClick(event) {
        const { name } = layout;

        if (name !== "expanded") {
            this.navigationDrawer.close();
        }
    }

    handleTopAppBarActionClick(event) {
        if (this.navigationDrawer.open) {
            this.navigationDrawer.close();
        } else {
            this.navigationDrawer.show();
        }
    }

    handleLayoutChange(event) {
        const { name } = event.detail;

        if (name == "expanded") {
            this.navigationDrawer.ui = "";
            this.navigationDrawer.show();
            this.topAppBar.close();
        } else {
            this.navigationDrawer.ui = "modal";
            this.navigationDrawer.close();
            this.topAppBar.show();
        }
    }

    firstUpdated() {
        this.handleLayoutChange = this.handleLayoutChange.bind(this);
        this.handleLayoutChange({ detail: layout });
        window.addEventListener("onLayoutChange", this.handleLayoutChange);
    }
}

customElements.define("dev-main", DevMain);

export default document.createElement("dev-main");
