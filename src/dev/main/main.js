import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../com/router/router";
import { color, layout } from "../../com/observer/observer";

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = [
            {
                label: "Foundations",
                nodeIcons: ["deployed_code", "deployed_code"],
                children: [
                    { leafIcon: "deployed_code", label: "Gesture", routerLink: "/gesture" },
                    { leafIcon: "deployed_code", label: "Localization", routerLink: "/localization" },
                    { leafIcon: "deployed_code", label: "Marker", routerLink: "/marker" },
                    { leafIcon: "deployed_code", label: "Observer", routerLink: "/observer" },
                    { leafIcon: "deployed_code", label: "Polyfill", routerLink: "/polyfill" },
                    { leafIcon: "deployed_code", label: "Popper", routerLink: "/popper" },
                    { leafIcon: "deployed_code", label: "Progress", routerLink: "/progress" },
                    { leafIcon: "deployed_code", label: "Ripple", routerLink: "/ripple" },
                    { leafIcon: "deployed_code", label: "Router", routerLink: "/router" },
                    { leafIcon: "deployed_code", label: "Store", routerLink: "/store" },
                    { leafIcon: "deployed_code", label: "Scrolling", routerLink: "/scrolling" },
                    { leafIcon: "deployed_code", label: "Element", routerLink: "/element" },
                ],
            },

            {
                label: "Components",
                nodeIcons: ["deployed_code", "deployed_code"],
                expanded: true,
                children: [
                    {
                        label: "App Bar",
                        nodeIcons: ["deployed_code", "deployed_code"],
                        children: [
                            { leafIcon: "deployed_code", label: "Bottom App Bar", routerLink: "/bottom-app-bar" },
                            { leafIcon: "deployed_code", label: "Top App Bar", routerLink: "/top-app-bar" },
                        ],
                    },
                    { leafIcon: "deployed_code", label: "Badge", routerLink: "/badge" },
                    {
                        label: "Button",
                        nodeIcons: ["deployed_code", "deployed_code"],
                        children: [
                            { leafIcon: "deployed_code", label: "Button", routerLink: "/button" },
                            { leafIcon: "deployed_code", label: "Fab", routerLink: "/fab" },
                            { leafIcon: "deployed_code", label: "Extended Fab", routerLink: "/extended-fab" },
                            { leafIcon: "deployed_code", label: "Icon Button", routerLink: "/icon-button" },
                            { leafIcon: "deployed_code", label: "Segmented Button", routerLink: "/segmented-button" },
                        ],
                    },
                    { leafIcon: "deployed_code", label: "Card", routerLink: "/card" },
                    // { leafIcon: "deployed_code", label: "Carousel", routerLink: "/carousel" },
                    { leafIcon: "deployed_code", label: "Checkbox", routerLink: "/checkbox" },
                    { leafIcon: "deployed_code", label: "Chip", routerLink: "/chip" },
                    { leafIcon: "deployed_code", label: "Date Picker", routerLink: "/date-picker" },
                    { leafIcon: "deployed_code", label: "Dialog", routerLink: "/dialog" },
                    { leafIcon: "deployed_code", label: "Divider", routerLink: "/divider" },
                    { leafIcon: "deployed_code", label: "List", routerLink: "/list" },
                    { leafIcon: "deployed_code", label: "Menu", routerLink: "/menu" },
                    {
                        label: "Navigation",
                        nodeIcons: ["deployed_code", "deployed_code"],
                        children: [
                            { leafIcon: "deployed_code", label: "Navigation Bar", routerLink: "/navigation-bar" },
                            { leafIcon: "deployed_code", label: "Navigation Drawer", routerLink: "/navigation-drawer" },
                            { leafIcon: "deployed_code", label: "Navigation Rail", routerLink: "/navigation-rail" },
                        ],
                    },
                    { leafIcon: "deployed_code", label: "Progress Indicator", routerLink: "/progress-indicator" },
                    { leafIcon: "deployed_code", label: "Radio Button", routerLink: "/radio-button" },
                    {
                        label: "Sheet",
                        nodeIcons: ["deployed_code", "deployed_code"],
                        children: [
                            { leafIcon: "deployed_code", label: "Bottom Sheet", routerLink: "/bottom-sheet" },
                            { leafIcon: "deployed_code", label: "Side Sheet", routerLink: "/side-sheet" },
                        ],
                    },
                    { leafIcon: "deployed_code", label: "Slider", routerLink: "/slider" },
                    { leafIcon: "deployed_code", label: "Snackbar", routerLink: "/snackbar" },
                    { leafIcon: "deployed_code", label: "Switch", routerLink: "/switch" },
                    { leafIcon: "deployed_code", label: "Tab", routerLink: "/tab" },
                    { leafIcon: "deployed_code", label: "Text Field", routerLink: "/text-field" },
                    { leafIcon: "deployed_code", label: "Time Picker", routerLink: "/time-picker" },
                    { leafIcon: "deployed_code", label: "Tooltip", routerLink: "/tooltip" },
                ],
            },

            {
                label: "Supporting components",
                nodeIcons: ["deployed_code", "deployed_code"],
                children: [
                    { leafIcon: "deployed_code", label: "Color Field", routerLink: "/color-field" },
                    { leafIcon: "deployed_code", label: "Color Picker", routerLink: "/color-picker" },
                    { leafIcon: "deployed_code", label: "Data Table", routerLink: "/data-table" },
                    { leafIcon: "deployed_code", label: "Date Field", routerLink: "/date-field" },
                    { leafIcon: "deployed_code", label: "Datetime Field", routerLink: "/datetime-field" },
                    { leafIcon: "deployed_code", label: "Datetime Picker", routerLink: "/datetime-picker" },
                    { leafIcon: "deployed_code", label: "Email Field", routerLink: "/email-field" },
                    { leafIcon: "deployed_code", label: "Emoji", routerLink: "/emoji" },
                    { leafIcon: "deployed_code", label: "File Field", routerLink: "/file-field" },
                    { leafIcon: "deployed_code", label: "Form", routerLink: "/form" },
                    { leafIcon: "deployed_code", label: "Icon", routerLink: "/icon" },
                    { leafIcon: "deployed_code", label: "Image", routerLink: "/image" },
                    { leafIcon: "deployed_code", label: "Layout", routerLink: "/layout" },
                    { leafIcon: "deployed_code", label: "Month Field", routerLink: "/month-field" },
                    { leafIcon: "deployed_code", label: "Month Picker", routerLink: "/month-picker" },
                    { leafIcon: "deployed_code", label: "Number Field", routerLink: "/number-field" },
                    { leafIcon: "deployed_code", label: "Pagination", routerLink: "/pagination" },
                    { leafIcon: "deployed_code", label: "Password Field", routerLink: "/password-field" },
                    { leafIcon: "deployed_code", label: "Pane", routerLink: "/pane" },
                    { leafIcon: "deployed_code", label: "Search Field", routerLink: "/search-field" },
                    { leafIcon: "deployed_code", label: "Select Field", routerLink: "/select-field" },
                    { leafIcon: "deployed_code", label: "Tel Field", routerLink: "/tel-field" },
                    { leafIcon: "deployed_code", label: "Textarea Field", routerLink: "/textarea-field" },
                    { leafIcon: "deployed_code", label: "Time Field", routerLink: "/time-field" },
                    { leafIcon: "deployed_code", label: "Url Field", routerLink: "/url-field" },
                    { leafIcon: "deployed_code", label: "Week Field", routerLink: "/week-field" },
                    { leafIcon: "deployed_code", label: "Week Picker", routerLink: "/week-picker" },
                    { leafIcon: "deployed_code", label: "Nested List", routerLink: "/nested-list" },
                ],
            },
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

        // window.requestAnimationFrame(() => {
        //     event.detail.scrollIntoView({
        //         behavior: "smooth",
        //         block: "center",
        //         inline: "center",
        //     });
        // })
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
