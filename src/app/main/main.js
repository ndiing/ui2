import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { msg } from "@lit/localize";
import { toTitleCase } from "../../com/mixin/mixin";
import { layout } from "../../com/layout/layout";
import { MDRouterModule } from "../../com/router/router";

class AppMainElement extends MDElement {
    constructor() {
        super();
        this.list = [
            { leadingIcon: "package_2", label: "Layout", routerLink: "/layout" },
            { leadingIcon: "package_2", label: "Typography", routerLink: "/typography" },
            { leadingIcon: "package_2", label: "Image", routerLink: "/image" },
            { leadingIcon: "package_2", label: "Icon", routerLink: "/icon" },
            { leadingIcon: "package_2", label: "Ripple", routerLink: "/ripple" },
            { leadingIcon: "package_2", label: "Popper", routerLink: "/popper" },
            { leadingIcon: "package_2", label: "Virtual Scroll", routerLink: "/virtual-scroll" },
            { leadingIcon: "package_2", label: "Gesture", routerLink: "/gesture" },

            { leadingIcon: "package_2", label: "Form", routerLink: "/form" },

            { leadingIcon: "package_2", label: "Checkbox", routerLink: "/checkbox" },
            { leadingIcon: "package_2", label: "Radio Button", routerLink: "/radio-button" },
            { leadingIcon: "package_2", label: "Switch", routerLink: "/switch" },

            { leadingIcon: "package_2", label: "Badge", routerLink: "/badge" },

            { leadingIcon: "package_2", label: "Button", routerLink: "/button" },
            { leadingIcon: "package_2", label: "Fab", routerLink: "/fab" },
            { leadingIcon: "package_2", label: "Icon Button", routerLink: "/icon-button" },
            { leadingIcon: "package_2", label: "Segmented Button", routerLink: "/segmented-button" },

            { leadingIcon: "package_2", label: "List", routerLink: "/list" },
            { leadingIcon: "package_2", label: "Nested List", routerLink: "/nested-list" },
            { leadingIcon: "package_2", label: "Navigation", routerLink: "/navigation" },

            { leadingIcon: "package_2", label: "Card", routerLink: "/card" },
            { leadingIcon: "package_2", label: "Dialog", routerLink: "/dialog" },
            { leadingIcon: "package_2", label: "Side Sheet", routerLink: "/side-sheet" },
            { leadingIcon: "package_2", label: "Bottom Sheet", routerLink: "/bottom-sheet" },
            { leadingIcon: "package_2", label: "Navigation Drawer", routerLink: "/navigation-drawer" },
            { leadingIcon: "package_2", label: "Navigation Rail", routerLink: "/navigation-rail" },
            { leadingIcon: "package_2", label: "Navigation Bar", routerLink: "/navigation-bar" },
            { leadingIcon: "package_2", label: "Bottom App Bar", routerLink: "/bottom-app-bar" },
            { leadingIcon: "package_2", label: "Top App Bar", routerLink: "/top-app-bar" },
            { leadingIcon: "package_2", label: "Snackbar", routerLink: "/snackbar" },
            { leadingIcon: "package_2", label: "Menu", routerLink: "/menu" },
            { leadingIcon: "package_2", label: "Tooltip", routerLink: "/tooltip" },

            { leadingIcon: "package_2", label: "Tabs", routerLink: "/tabs" },

            { leadingIcon: "package_2", label: "Datetime Picker", routerLink: "/datetime-picker" },
            { leadingIcon: "package_2", label: "Date Picker", routerLink: "/date-picker" },
            { leadingIcon: "package_2", label: "Time Picker", routerLink: "/time-picker" },
            { leadingIcon: "package_2", label: "Month Picker", routerLink: "/month-picker" },
            { leadingIcon: "package_2", label: "Week Picker", routerLink: "/week-picker" },
            { leadingIcon: "package_2", label: "Color Picker", routerLink: "/color-picker" },

            { leadingIcon: "package_2", label: "Chips", routerLink: "/chips" },

            { leadingIcon: "package_2", label: "Slider", routerLink: "/slider" },

            { leadingIcon: "package_2", label: "Progress Indicator", routerLink: "/progress-indicator" },

            { leadingIcon: "package_2", label: "Text Field", routerLink: "/text-field" },
            { leadingIcon: "package_2", label: "Number Field", routerLink: "/number-field" },
            { leadingIcon: "package_2", label: "Tel Field", routerLink: "/tel-field" },
            { leadingIcon: "package_2", label: "Email Field", routerLink: "/email-field" },
            { leadingIcon: "package_2", label: "Url Field", routerLink: "/url-field" },
            { leadingIcon: "package_2", label: "Password Field", routerLink: "/password-field" },
            { leadingIcon: "package_2", label: "Search Field", routerLink: "/search-field" },
            { leadingIcon: "package_2", label: "Color Field", routerLink: "/color-field" },
            { leadingIcon: "package_2", label: "File Field", routerLink: "/file-field" },
            { leadingIcon: "package_2", label: "Datetime Field", routerLink: "/datetime-field" },
            { leadingIcon: "package_2", label: "Date Field", routerLink: "/date-field" },
            { leadingIcon: "package_2", label: "Month Field", routerLink: "/month-field" },
            { leadingIcon: "package_2", label: "Week Field", routerLink: "/week-field" },
            { leadingIcon: "package_2", label: "Time Field", routerLink: "/time-field" },

            { leadingIcon: "package_2", label: "Data Table", routerLink: "/data-table" },
        ].map((doc) => ({
            ...doc,
            selected: MDRouterModule.path == "/" + doc.path,
        }));
    }

    render() {
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-top-app-bar
                    id="bar"
                    .leadingActions="${[{ icon: "menu" }]}"
                    @onTopAppBarActionClick="${() => this.drawer.toggle()}"
                    .open="${true}"
                ></md-top-app-bar>

                <md-navigation-drawer
                    id="drawer"
                    .list="${this.list}"
                    .open="${true}"
                    @onNestedListItemClick="${this.handleListItemClick}"
                    @onNestedListItemSelected="${this.handleListItemSelected}"
                ></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>
                </div>
            </div>
        `;
    }

    get bar() {
        return this.querySelector("#bar");
    }
    get drawer() {
        return this.querySelector("#drawer");
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.handleLayoutChange = this.handleLayoutChange.bind(this);
        window.addEventListener("onLayoutChange", this.handleLayoutChange);
        this.handleLayoutChange({ detail: layout.item });
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        await this.updateComplete;
    }

    handleLayoutChange(event) {
        if (event.detail.name == "expanded") {
            this.bar.close();
            this.drawer.ui = "";
            this.drawer.show();
        } else {
            this.drawer.ui = "modal";
            this.drawer.close();
            this.bar.show();
        }
    }

    handleListItemClick() {
        if (layout.item.name !== "expanded") {
            this.drawer.close();
        }
    }

    handleListItemSelected(event) {
        window.requestAnimationFrame(() => {
            event.detail.scrollIntoView({
                block: "center",
                inline: "center",
                behavior: "smooth",
            });
        });
    }
}

customElements.define("app-main", AppMainElement);

export default document.createElement("app-main");
