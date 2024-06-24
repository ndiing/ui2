import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDRouter } from "../../material/router/router.js";

MDRouter.historyApiFallback = false;

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
            { routerLink: "/icon", label: "Icon" },
            { routerLink: "/button", label: "Button" },
            { routerLink: "/icon-button", label: "Icon Button" },
            { routerLink: "/card", label: "Card" },
            { routerLink: "/sheet", label: "Sheet" },
            { routerLink: "/dialog", label: "Dialog" },
            { routerLink: "/top-app-bar", label: "Top App Bar" },
            { routerLink: "/side-sheet", label: "Side Sheet" },
            { routerLink: "/bottom-sheet", label: "Bottom Sheet" },
            { routerLink: "/segmented-button", label: "Segmented Button" },
            { routerLink: "/snackbar", label: "Snackbar" },
            { routerLink: "/localization", label: "Localization" },
            { routerLink: "/color", label: "Color" },
            { routerLink: "/ripple", label: "Ripple" },
            { routerLink: "/tooltip", label: "Tooltip" },
            { routerLink: "/picker", label: "Picker" },
            { routerLink: "/datetime-picker", label: "Datetime Picker" },
            { routerLink: "/date-picker", label: "Date Picker" },
            { routerLink: "/month-picker", label: "Month Picker" },
            { routerLink: "/time-picker", label: "Time Picker" },
            { routerLink: "/week-picker", label: "Week Picker" },
            { routerLink: "/color-picker", label: "Color Picker" },
            { routerLink: "/fab", label: "Fab" },
            { routerLink: "/bottom-app-bar", label: "Bottom App Bar" },
            { routerLink: "/image", label: "Image" },
            { routerLink: "/popper", label: "Popper" },
            { routerLink: "/badge", label: "Badge" },
            { routerLink: "/form", label: "Form" },
            { routerLink: "/checkbox", label: "Checkbox" },
            { routerLink: "/radio-button", label: "Radio Button" },
            { routerLink: "/switch", label: "Switch" },
            { routerLink: "/slider", label: "Slider" },
            { routerLink: "/form2", label: "Form2" },
            { routerLink: "/progress-indicator", label: "Progress Indicator" },
            { routerLink: "/gesture", label: "Gesture" },
            { routerLink: "/list", label: "List" },
            { routerLink: "/selection", label: "Selection" },
            { routerLink: "/tree", label: "Tree" },
            { routerLink: "/navigation", label: "Navigation" },
            { routerLink: "/navigation-bar", label: "Navigation Bar" },
            { routerLink: "/navigation-drawer", label: "Navigation Drawer" },
            { routerLink: "/navigation-rail", label: "Navigation Rail" },
            { routerLink: "/menu", label: "Menu" },
            { routerLink: "/tabs", label: "Tabs" },
        ];

        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = item.routerLink === MDRouter.path;
        }

        this.list.sort((a, b) => {
            return a.label.localeCompare(b.label);
        });
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-top-app-bar
                    id="topAppBar"
                    label="Material Design"
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
        const treeItem = event.detail;
        if (!this.ready) {
            this.ready = true;
            treeItem.scrollIntoView({
                block: "center",
                inline: "center",
                behavior: "instant",
            });
        }
    }
}

customElements.define("dev-main", DevMainComponent);

export default document.createElement("dev-main");
