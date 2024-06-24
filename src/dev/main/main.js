import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDRouter } from "../../material/router/router.js";

class DevMainComponent extends MDComponent {
    get topAppBar() {
        return this.querySelector("#topAppBar");
    }
    get navigationDrawer() {
        return this.querySelector("#navigationDrawer");
    }

    constructor() {
        super();

        this.list = [
            { routerLink: "/icon", label: "icon" },
            { routerLink: "/button", label: "button" },
            { routerLink: "/icon-button", label: "icon-button" },
            { routerLink: "/card", label: "card" },
            { routerLink: "/sheet", label: "sheet" },
            { routerLink: "/dialog", label: "dialog" },
            { routerLink: "/top-app-bar", label: "top-app-bar" },
            { routerLink: "/side-sheet", label: "side-sheet" },
            { routerLink: "/bottom-sheet", label: "bottom-sheet" },
            { routerLink: "/segmented-button", label: "segmented-button" },
            { routerLink: "/snackbar", label: "snackbar" },
            { routerLink: "/localization", label: "localization" },
            { routerLink: "/color", label: "color" },
            { routerLink: "/ripple", label: "ripple" },
            { routerLink: "/tooltip", label: "tooltip" },
            { routerLink: "/picker", label: "picker" },
            { routerLink: "/datetime-picker", label: "datetime-picker" },
            { routerLink: "/date-picker", label: "date-picker" },
            { routerLink: "/month-picker", label: "month-picker" },
            { routerLink: "/time-picker", label: "time-picker" },
            { routerLink: "/week-picker", label: "week-picker" },
            { routerLink: "/color-picker", label: "color-picker" },
            { routerLink: "/fab", label: "fab" },
            { routerLink: "/bottom-app-bar", label: "bottom-app-bar" },
            { routerLink: "/image", label: "image" },
            { routerLink: "/popper", label: "popper" },
            { routerLink: "/badge", label: "badge" },
            { routerLink: "/form", label: "form" },
            { routerLink: "/checkbox", label: "checkbox" },
            { routerLink: "/radio-button", label: "radio-button" },
            { routerLink: "/switch", label: "switch" },
            { routerLink: "/slider", label: "slider" },
            { routerLink: "/form2", label: "form2" },
            { routerLink: "/progress-indicator", label: "progress-indicator" },
            { routerLink: "/gesture", label: "gesture" },
            { routerLink: "/list", label: "list" },
            { routerLink: "/selection", label: "selection" },
            { routerLink: "/tree", label: "tree" },
            { routerLink: "/navigation", label: "navigation" },
            { routerLink: "/navigation-bar", label: "navigation-bar" },
            { routerLink: "/navigation-drawer", label: "navigation-drawer" },
            { routerLink: "/navigation-rail", label: "navigation-rail" },
            { routerLink: "/menu", label: "menu" },
        ]
            .sort((a, b) => {
                return a.label.localeCompare(b.label);
            })
            .map((item) => {
                item.selected = item.routerLink == MDRouter.path;
                return item;
            });
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-top-app-bar
                    id="topAppBar"
                    open
                    leadingActions='[{"icon":"menu"}]'
                    @onCardIconButtonClick="${this.handleCardIconButtonClick}"
                ></md-top-app-bar>
                <md-navigation-drawer
                    id="navigationDrawer"
                    open
                    .list="${this.list}"
                    @onTreeItemSelected="${this.handleTreeItemSelected}"
                ></md-navigation-drawer>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>
                </div>
            </div>
        `;
    }

    handleCardIconButtonClick(event) {
        this.navigationDrawer.toggle();
    }

    handleTreeItemSelected(event) {
        const item = event.detail;
        if (!this.ready) {
            this.ready = true;
            item.scrollIntoView({
                block: "center",
                inline: "center",
                behavior: "instant",
            });
        }
    }
}

customElements.define("dev-main", DevMainComponent);

export default document.createElement("dev-main");
