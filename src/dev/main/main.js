import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";

const devs = [{"path":"badge"},{"path":"bottom-app-bar"},{"path":"bottom-sheet"},{"path":"button"},{"path":"card"},{"path":"carousel"},{"path":"checkbox"},{"path":"chip"},{"path":"color-field"},{"path":"data-table"},{"path":"date-field"},{"path":"date-picker"},{"path":"datetime-field"},{"path":"dialog"},{"path":"divider"},{"path":"email-field"},{"path":"emoji"},{"path":"extended-fab"},{"path":"fab"},{"path":"file-field"},{"path":"form"},{"path":"gesture"},{"path":"icon"},{"path":"icon-button"},{"path":"layout"},{"path":"list"},{"path":"main"},{"path":"menu"},{"path":"month-field"},{"path":"navigation-bar"},{"path":"navigation-drawer"},{"path":"navigation-rail"},{"path":"number-field"},{"path":"pagination"},{"path":"pane"},{"path":"password-field"},{"path":"picker"},{"path":"popper"},{"path":"progress-indicator"},{"path":"radio-button"},{"path":"ripple"},{"path":"search"},{"path":"segmented-button"},{"path":"select-field"},{"path":"side-sheet"},{"path":"slider"},{"path":"snackbar"},{"path":"switch"},{"path":"tab"},{"path":"tel-field"},{"path":"text-field"},{"path":"textarea-field"},{"path":"time-field"},{"path":"time-picker"},{"path":"tooltip"},{"path":"top-app-bar"},{"path":"url-field"},{"path":"virtual-scroll"},{"path":"week-field"}]

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
