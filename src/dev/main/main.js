import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";

const devs = [
    //
    // { path: "polyfill" },
    // { path: "element" },
    // { path: "localization" },

    // { path: "gesture" },
    // { path: "ripple" },
    // { path: "popper" },
    // { path: "virtual-scroll" },

    // { path: "observer" },
    // { path: "marker" },
    // { path: "progress" },
    // { path: "router" },
    // { path: "store" },

    { path: "badge" },
    { path: "bottom-app-bar" },
    { path: "bottom-sheet" },
    { path: "button" },
    { path: "card" },
    { path: "carousel" },
    { path: "checkbox" },
    { path: "chip" },
    { path: "data-table" },
    { path: "dialog" },
    { path: "divider" },
    { path: "emoji" },
    { path: "extended-fab" },
    { path: "fab" },

    { path: "icon" },
    { path: "icon-button" },
    { path: "layout" },
    { path: "list" },
    { path: "menu" },
    { path: "navigation-bar" },
    { path: "navigation-drawer" },
    { path: "navigation-rail" },
    { path: "pagination" },
    { path: "pane" },
    { path: "progress-indicator" },
    { path: "radio-button" },
    { path: "segmented-button" },
    { path: "side-sheet" },
    { path: "slider" },
    { path: "snackbar" },
    { path: "switch" },
    { path: "tab" },
    { path: "tooltip" },
    { path: "top-app-bar" },

    { path: "color-picker" },
    { path: "date-picker" },
    { path: "datetime-picker" },
    { path: "month-picker" },
    { path: "time-picker" },
    { path: "week-picker" },

    { path: "form" },
    { path: "color-field" },
    { path: "date-field" },
    { path: "datetime-field" },
    { path: "email-field" },
    { path: "file-field" },
    { path: "month-field" },
    { path: "number-field" },
    { path: "password-field" },
    { path: "range-field" },
    { path: "search-field" },
    { path: "select-field" },
    { path: "tel-field" },
    { path: "text-field" },
    { path: "textarea-field" },
    { path: "time-field" },
    { path: "url-field" },
    { path: "week-field" },
];

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = devs.map((dev) => ({
            icon: "deployed_code",
            label: dev.path,
            routerLink: `/${dev.path}`,
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

                <div class="md-layout__item--center" style="padding:24px;">
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
