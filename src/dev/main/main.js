import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";
const devs = [
    //
    // "admin",
    // "auth",
    "badge",
    // "blog",
    // "blogs",
    "bottom-app-bar",
    "bottom-sheet",
    "button",
    "card",
    "carousel",
    "checkbox",
    "chip",
    "color-field",
    // "data",
    "data-table",
    "date-field",
    "date-picker",
    "datetime-field",
    "dialog",
    "divider",
    "email-field",
    "emoji",
    // "error",
    // "example",
    "extended-fab",
    "fab",
    "file-field",
    "form",
    "form-field",
    "gesture",
    "icon",
    "icon-button",
    "layout",
    "list",
    // "login",
    // "main",
    "menu",
    "month-field",
    "navigation-bar",
    "navigation-drawer",
    "navigation-rail",
    "number-field",
    "pagination",
    "pane",
    "password-field",
    "picker",
    "popper",
    "progress-indicator",
    "radio-button",
    "range-field",
    // "register",
    "ripple",
    "scroll",
    "search",
    "search-field",
    "segmented-button",
    "select-field",
    "side-sheet",
    "slider",
    "snackbar",
    "switch",
    "tab",
    "tel-field",
    "text-field",
    "textarea-field",
    "time-field",
    "time-picker",
    "tooltip",
    "top-app-bar",
    "url-field",
    // "user",
    // "users",
    // "verify",
    "virtual-scroll",
    "week-field",
];
const libs = [
    //
    "badge",
    "bottom-app-bar",
    "bottom-sheet",
    "button",
    "card",
    "carousel",
    "checkbox",
    "chip",
    "color-field",
    "color-picker",
    "data-table",
    "date-field",
    "date-picker",
    "datetime-field",
    "datetime-picker",
    "dialog",
    "divider",
    "element",
    "email-field",
    "emoji",
    // "example",
    "extended-fab",
    "fab",
    "file-field",
    "form",
    "form-field",
    "gesture",
    "icon",
    "icon-button",
    "layout",
    "list",
    "localization",
    "marker",
    "menu",
    "month-field",
    "month-picker",
    "navigation-bar",
    "navigation-drawer",
    "navigation-rail",
    "number-field",
    "observer",
    "pagination",
    "pane",
    "password-field",
    "polyfill",
    "popper",
    "progress",
    "progress-indicator",
    "radio-button",
    "range-field",
    "ripple",
    "router",
    "search-field",
    "segmented-button",
    "select-field",
    "side-sheet",
    "slider",
    "snackbar",
    "store",
    "switch",
    "tab",
    "tel-field",
    "text-field",
    "textarea-field",
    "time-field",
    "time-picker",
    "tooltip",
    "top-app-bar",
    "url-field",
    "virtual-scroll",
    "week-field",
    "week-picker",
];

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = libs.concat(
            devs.filter(dev=>!libs.includes(dev))
        ).map((lib) => ({
            icon: "deployed_code",
            label: lib,
            routerLink: `/${lib}`,
        }));

        this.list.forEach((item) => {
            item.selected = item.routerLink === Router.path;
        });
        this.list.sort((a, b) => {
            return a.label.localeCompare(b.label);
        });
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
    handleListItemClick(event) {}
    handleTopAppBarActionClick(event) {
        drawer.show();
    }
    firstUpdated() {
        console.log(color.name);
        console.log(layout.name);
        window.addEventListener("onColorChange", (event) => console.log(event.detail.name));
        window.addEventListener("onLayoutChange", (event) => console.log(event.detail.name));
    }
}

customElements.define("dev-main", DevMain);

export default document.createElement("dev-main");
