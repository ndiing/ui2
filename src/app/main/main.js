import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { msg } from "@lit/localize";
import { toTitleCase } from "../../com/mixin/mixin";
import { layout } from "../../com/layout/layout";
import { MDRouterModule } from "../../com/router/router";
import { MDDataModule } from "../../com/data/data";

class AppMainElement extends MDElement {
    constructor() {
        super();

        this.list = [
            {
                label: "Foundations",
                children: [
                    { leafIcon: "deployed_code", label: "Gesture", routerLink: "/gesture" },
                    { leafIcon: "deployed_code", label: "Ripple", routerLink: "/ripple" },

                    { leafIcon: "deployed_code", label: "Layout", routerLink: "/layout" },

                    { leafIcon: "deployed_code", label: "Icon", routerLink: "/icon" },
                    { leafIcon: "deployed_code", label: "Typography", routerLink: "/typography" },

                    { leafIcon: "deployed_code", label: "Image", routerLink: "/image" },
                    { leafIcon: "deployed_code", label: "Popper", routerLink: "/popper" },
                    { leafIcon: "deployed_code", label: "Virtual Scroll", routerLink: "/virtual-scroll" },
                ],
            },
            {
                label: "Actions",
                children: [
                    { leafIcon: "deployed_code", label: "Button", routerLink: "/button" },
                    { leafIcon: "deployed_code", label: "Fab", routerLink: "/fab" },
                    { leafIcon: "deployed_code", label: "Icon Button", routerLink: "/icon-button" },
                    { leafIcon: "deployed_code", label: "Segmented Button", routerLink: "/segmented-button" },
                ],
            },
            {
                label: "Communication",
                children: [
                    { leafIcon: "deployed_code", label: "Badge", routerLink: "/badge" },
                    { leafIcon: "deployed_code", label: "Progress Indicator", routerLink: "/progress-indicator" },
                    { leafIcon: "deployed_code", label: "Snackbar", routerLink: "/snackbar" },
                    { leafIcon: "deployed_code", label: "Tooltip", routerLink: "/tooltip" },
                ],
            },
            {
                label: "Containment",
                children: [
                    { leafIcon: "deployed_code", label: "Bottom Sheet", routerLink: "/bottom-sheet" },
                    { leafIcon: "deployed_code", label: "Card", routerLink: "/card" },
                    { leafIcon: "deployed_code", label: "Dialog", routerLink: "/dialog" },
                    { leafIcon: "deployed_code", label: "List", routerLink: "/list" },
                    { leafIcon: "deployed_code", label: "Side Sheet", routerLink: "/side-sheet" },

                    { leafIcon: "deployed_code", label: "Nested List", routerLink: "/nested-list" },
                    { leafIcon: "deployed_code", label: "Navigation", routerLink: "/navigation" },
                    { leafIcon: "deployed_code", label: "Data Table", routerLink: "/data-table" },
                ],
            },
            {
                label: "Navigation",
                children: [
                    { leafIcon: "deployed_code", label: "Bottom App Bar", routerLink: "/bottom-app-bar" },
                    { leafIcon: "deployed_code", label: "Navigation Bar", routerLink: "/navigation-bar" },
                    { leafIcon: "deployed_code", label: "Navigation Drawer", routerLink: "/navigation-drawer" },
                    { leafIcon: "deployed_code", label: "Navigation Rail", routerLink: "/navigation-rail" },
                    { leafIcon: "deployed_code", label: "Tabs", routerLink: "/tabs" },
                    { leafIcon: "deployed_code", label: "Top App Bar", routerLink: "/top-app-bar" },
                ],
            },
            {
                label: "Selection",
                children: [
                    { leafIcon: "deployed_code", label: "Checkbox", routerLink: "/checkbox" },
                    { leafIcon: "deployed_code", label: "Chips", routerLink: "/chips" },
                    { leafIcon: "deployed_code", label: "Datetime Picker", routerLink: "/datetime-picker" },
                    { leafIcon: "deployed_code", label: "Menu", routerLink: "/menu" },
                    { leafIcon: "deployed_code", label: "Radio Button", routerLink: "/radio-button" },
                    { leafIcon: "deployed_code", label: "Slider", routerLink: "/slider" },
                    { leafIcon: "deployed_code", label: "Switch", routerLink: "/switch" },
                    { leafIcon: "deployed_code", label: "Time Picker", routerLink: "/time-picker" },
                    { leafIcon: "deployed_code", label: "Date Picker", routerLink: "/date-picker" },
                    { leafIcon: "deployed_code", label: "Month Picker", routerLink: "/month-picker" },
                    { leafIcon: "deployed_code", label: "Week Picker", routerLink: "/week-picker" },
                    { leafIcon: "deployed_code", label: "Color Picker", routerLink: "/color-picker" },
                ],
            },
            {
                label: "Text inputs",
                children: [
                    { leafIcon: "deployed_code", label: "Form", routerLink: "/form" },
                    { leafIcon: "deployed_code", label: "Text Field", routerLink: "/text-field" },

                    { leafIcon: "deployed_code", label: "Number Field", routerLink: "/number-field" },
                    { leafIcon: "deployed_code", label: "Tel Field", routerLink: "/tel-field" },
                    { leafIcon: "deployed_code", label: "Email Field", routerLink: "/email-field" },
                    { leafIcon: "deployed_code", label: "Url Field", routerLink: "/url-field" },
                    { leafIcon: "deployed_code", label: "Password Field", routerLink: "/password-field" },
                    { leafIcon: "deployed_code", label: "Search Field", routerLink: "/search-field" },

                    { leafIcon: "deployed_code", label: "Color Field", routerLink: "/color-field" },
                    { leafIcon: "deployed_code", label: "File Field", routerLink: "/file-field" },

                    { leafIcon: "deployed_code", label: "Datetime Field", routerLink: "/datetime-field" },
                    { leafIcon: "deployed_code", label: "Date Field", routerLink: "/date-field" },
                    { leafIcon: "deployed_code", label: "Month Field", routerLink: "/month-field" },
                    { leafIcon: "deployed_code", label: "Week Field", routerLink: "/week-field" },
                    { leafIcon: "deployed_code", label: "Time Field", routerLink: "/time-field" },
                    { leafIcon: "deployed_code", label: "Textarea Field", routerLink: "/textarea-field" },
                ],
            },
        ];

        select(this.list);
        function select(list) {
            list.forEach((item) => {
                item.selected = item.routerLink == MDRouterModule.path;
                if (item.children) {
                    select(item.children);
                }
            });
        }
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
                    .ui="${"level"}"
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
            this.drawer.ui = "level";
            this.drawer.show();
        } else {
            this.drawer.ui = "level modal";
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
