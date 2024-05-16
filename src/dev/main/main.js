import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";
import { color, layout } from "../../lib/observer/observer";

class DevMain extends MDElement {
    constructor() {
        super();
        this.list = [
            {
                label: "App Bar",
                children: [
                    { label: "Bottom App Bar", routerLink: "/bottom-app-bar" },
                    { label: "Top App Bar", routerLink: "/top-app-bar" },
                ],
            },
            { label: "Badge", routerLink: "/badge" },
            {
                label: "Button",
                children: [
                    { label: "Button", routerLink: "/button" },
                    { label: "Fab", routerLink: "/fab" },
                    { label: "Extended Fab", routerLink: "/extended-fab" },
                    { label: "Icon Button", routerLink: "/icon-button" },
                    { label: "Segmented Button", routerLink: "/segmented-button" },
                ],
            },
            { label: "Card", routerLink: "/card" },
            { label: "Carousel", routerLink: "/carousel" },
            { label: "Checkbox", routerLink: "/checkbox" },
            { label: "Chip", routerLink: "/chip" },
            { label: "Date Picker", routerLink: "/date-picker" },
            { label: "Dialog", routerLink: "/dialog" },
            { label: "Divider", routerLink: "/divider" },
            { label: "List", routerLink: "/list" },
            { label: "Menu", routerLink: "/menu" },
            {
                label: "Navigation",
                children: [
                    { label: "Navigation Bar", routerLink: "/navigation-bar" },
                    { label: "Navigation Drawer", routerLink: "/navigation-drawer" },
                    { label: "Navigation Rail", routerLink: "/navigation-rail" },
                ],
            },
            { label: "Progress Indicator", routerLink: "/progress-indicator" },
            { label: "Radio Button", routerLink: "/radio-button" },
            {
                label: "Sheet",
                children: [
                    { label: "Bottom Sheet", routerLink: "/bottom-sheet" },
                    { label: "Side Sheet", routerLink: "/side-sheet" },
                ],
            },
            { label: "Slider", routerLink: "/slider" },
            { label: "Snackbar", routerLink: "/snackbar" },
            { label: "Switch", routerLink: "/switch" },
            { label: "Tab", routerLink: "/tab" },
            { label: "Text Field", routerLink: "/text-field" },
            { label: "Time Picker", routerLink: "/time-picker" },
            { label: "Tooltip", routerLink: "/tooltip" },
            {
                label: "Foundations",
                children: [
                    { label: "Gesture", routerLink: "/gesture" },
                    { label: "Localization", routerLink: "/localization" },
                    { label: "Marker", routerLink: "/marker" },
                    { label: "Observer", routerLink: "/observer" },
                    { label: "Polyfill", routerLink: "/polyfill" },
                    { label: "Popper", routerLink: "/popper" },
                    { label: "Progress", routerLink: "/progress" },
                    { label: "Ripple", routerLink: "/ripple" },
                    { label: "Router", routerLink: "/router" },
                    { label: "Store", routerLink: "/store" },
                    { label: "Scrolling", routerLink: "/scrolling" },
                    { label: "Element", routerLink: "/element" },
                ],
            },
            {
                label: "Components",
                children: [
                    { label: "Color Field", routerLink: "/color-field" },
                    { label: "Color Picker", routerLink: "/color-picker" },
                    { label: "Data Table", routerLink: "/data-table" },
                    { label: "Date Field", routerLink: "/date-field" },
                    { label: "Datetime Field", routerLink: "/datetime-field" },
                    { label: "Datetime Picker", routerLink: "/datetime-picker" },
                    { label: "Email Field", routerLink: "/email-field" },
                    { label: "Emoji", routerLink: "/emoji" },
                    { label: "File Field", routerLink: "/file-field" },
                    { label: "Form", routerLink: "/form" },
                    { label: "Icon", routerLink: "/icon" },
                    { label: "Image", routerLink: "/image" },
                    { label: "Layout", routerLink: "/layout" },
                    { label: "Month Field", routerLink: "/month-field" },
                    { label: "Month Picker", routerLink: "/month-picker" },
                    { label: "Number Field", routerLink: "/number-field" },
                    { label: "Pagination", routerLink: "/pagination" },
                    { label: "Password Field", routerLink: "/password-field" },
                    { label: "Pane", routerLink: "/pane" },
                    { label: "Search Field", routerLink: "/search-field" },
                    { label: "Select Field", routerLink: "/select-field" },
                    { label: "Tel Field", routerLink: "/tel-field" },
                    { label: "Textarea Field", routerLink: "/textarea-field" },
                    { label: "Time Field", routerLink: "/time-field" },
                    { label: "Url Field", routerLink: "/url-field" },
                    { label: "Week Field", routerLink: "/week-field" },
                    { label: "Week Picker", routerLink: "/week-picker" },
                    { label: "Nested List", routerLink: "/nested-list" },
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
}

customElements.define("dev-main", DevMain);

export default document.createElement("dev-main");
