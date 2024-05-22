import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../com/router/router";
import { color, layout } from "../../com/observer/observer";

let sorters=[
    "m3-portal",
    "search",
    "home",
    "get-started",
    "develop",
    "develop-overview",
    "android",
    "mdc-android",
    "jetpack-compose",
    "flutter",
    "web",
    "foundation",
    "foundations-overview",
    "accessibility",
    "overview",
    "designing",
    "writing-and-text",
    "content-design",
    "overview",
    "alt-text",
    "global-writing",
    "style-guide",
    "customizing-material",
    "design-token",
    "interaction",
    "gesture",
    "input",
    "selection",
    "state",
    "layout",
    "layout-basic",
    "applying-layout",
    "canonical-layout",
    "material-a-z",
    "style",
    "styles-overview",
    "color",
    "color-system",
    "color-role",
    "color-scheme",
    "choosing-a-scheme",
    "static",
    "dynamic",
    "advanced",
    "color-resource",
    "elevation",
    "icon",
    "motion",
    "overview",
    "easing-and-duration",
    "transition",
    "shape",
    "typography",
    "component",
    "components-overview",
    "app-bar",
    "bottom-app-bar",
    "top-app-bar",
    "badge",
    "button",
    "all-button",
    "common-button",
    "fab",
    "extended-fab",
    "icon-button",
    "segmented-button",
    "card",
    "carousel",
    "checkbox",
    "chip",
    "date-picker",
    "dialog",
    "divider",
    "list",
    "menu",
    "navigation",
    "navigation-bar",
    "navigation-drawer",
    "navigation-rail",
    "progress-indicator",
    "radio-button",
    "search",
    "sheet",
    "bottom-sheet",
    "side-sheet",
    "slider",
    "snackbar",
    "switch",
    "tab",
    "text-field",
    "time-picker",
    "tooltip",
    "blog",
    
]

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = [
            // { label: "polyfill", routerLink: "/polyfill" },
            // { label: "element", routerLink: "/element" },
            // { label: "localization", routerLink: "/localization" },

            // { label: "gesture", routerLink: "/gesture" },
            // { label: "ripple", routerLink: "/ripple" },
            // { label: "popper", routerLink: "/popper" },
            // { label: "scrolling", routerLink: "/scrolling" },

            // { label: "observer", routerLink: "/observer" },
            // { label: "marker", routerLink: "/marker" },
            // { label: "progress", routerLink: "/progress" },
            // { label: "store", routerLink: "/store" },
            // { label: "router", routerLink: "/router" },

            { label: "layout", routerLink: "/layout" },
            { label: "divider", routerLink: "/divider" },
            { label: "icon", routerLink: "/icon" },
            { label: "emoji", routerLink: "/emoji" },
            { label: "image", routerLink: "/image" },
            { label: "badge", routerLink: "/badge" },

            { label: "button", routerLink: "/button" },
            { label: "segmented-button", routerLink: "/segmented-button" },
            { label: "fab", routerLink: "/fab" },
            { label: "extended-fab", routerLink: "/extended-fab" },
            { label: "icon-button", routerLink: "/icon-button" },

            { label: "chip", routerLink: "/chip" },
            { label: "list", routerLink: "/list" },
            { label: "nested-list", routerLink: "/nested-list" },
            { label: "tab", routerLink: "/tab" },

            { label: "color-picker", routerLink: "/color-picker" },
            { label: "date-picker", routerLink: "/date-picker" },
            { label: "datetime-picker", routerLink: "/datetime-picker" },
            { label: "month-picker", routerLink: "/month-picker" },
            { label: "time-picker", routerLink: "/time-picker" },
            { label: "week-picker", routerLink: "/week-picker" },

            { label: "form", routerLink: "/form" },
            { label: "color-field", routerLink: "/color-field" },
            { label: "date-field", routerLink: "/date-field" },
            { label: "datetime-field", routerLink: "/datetime-field" },
            { label: "email-field", routerLink: "/email-field" },
            { label: "file-field", routerLink: "/file-field" },
            { label: "month-field", routerLink: "/month-field" },
            { label: "number-field", routerLink: "/number-field" },
            { label: "password-field", routerLink: "/password-field" },
            { label: "search-field", routerLink: "/search-field" },
            { label: "select-field", routerLink: "/select-field" },
            { label: "tel-field", routerLink: "/tel-field" },
            { label: "text-field", routerLink: "/text-field" },
            { label: "textarea-field", routerLink: "/textarea-field" },
            { label: "time-field", routerLink: "/time-field" },
            { label: "url-field", routerLink: "/url-field" },
            { label: "week-field", routerLink: "/week-field" },
            { label: "checkbox", routerLink: "/checkbox" },
            { label: "radio-button", routerLink: "/radio-button" },
            { label: "switch", routerLink: "/switch" },
            { label: "slider", routerLink: "/slider" },

            { label: "progress-indicator", routerLink: "/progress-indicator" },
            { label: "pane", routerLink: "/pane" },
            { label: "card", routerLink: "/card" },
            { label: "dialog", routerLink: "/dialog" },
            { label: "snackbar", routerLink: "/snackbar" },
            { label: "tooltip", routerLink: "/tooltip" },
            { label: "carousel", routerLink: "/carousel" },

            { label: "side-sheet", routerLink: "/side-sheet" },
            { label: "bottom-sheet", routerLink: "/bottom-sheet" },
            { label: "bottom-app-bar", routerLink: "/bottom-app-bar" },
            { label: "top-app-bar", routerLink: "/top-app-bar" },

            { label: "menu", routerLink: "/menu" },
            { label: "navigation-bar", routerLink: "/navigation-bar" },
            { label: "navigation-rail", routerLink: "/navigation-rail" },
            { label: "navigation-drawer", routerLink: "/navigation-drawer" },

            { label: "data-table", routerLink: "/data-table" },
            { label: "pagination", routerLink: "/pagination" },
        ];

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
