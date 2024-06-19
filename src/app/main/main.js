import { html } from "lit";
import { MDElement } from "../../material/element/element.js";
import { MDRouter } from "../../material/router/router.js";
import { createRef, ref } from "lit/directives/ref.js";

class AppMainComponent extends MDElement {
    constructor() {
        super();

        this.list = [
            { icon: "deployed_code", routerLink: "/icon", label: "icon" },
            { icon: "deployed_code", routerLink: "/image", label: "image" },
            { icon: "deployed_code", routerLink: "/badge", label: "badge" },
            { icon: "deployed_code", routerLink: "/button", label: "button" },
            { icon: "deployed_code", routerLink: "/fab", label: "fab" },
            { icon: "deployed_code", routerLink: "/icon-button", label: "icon-button" },
            { icon: "deployed_code", routerLink: "/segmented-button", label: "segmented-button" },
            { icon: "deployed_code", routerLink: "/pane", label: "pane" },
            { icon: "deployed_code", routerLink: "/form", label: "form" },
            { icon: "deployed_code", routerLink: "/checkbox", label: "checkbox" },
            { icon: "deployed_code", routerLink: "/radio-button", label: "radio-button" },
            { icon: "deployed_code", routerLink: "/switch", label: "switch" },
            { icon: "deployed_code", routerLink: "/chips", label: "chips" },
            { icon: "deployed_code", routerLink: "/datetime-picker", label: "datetime-picker" },
            { icon: "deployed_code", routerLink: "/date-picker", label: "date-picker" },
            { icon: "deployed_code", routerLink: "/month-picker", label: "month-picker" },
            { icon: "deployed_code", routerLink: "/week-picker", label: "week-picker" },
            { icon: "deployed_code", routerLink: "/time-picker", label: "time-picker" },
            { icon: "deployed_code", routerLink: "/dialog", label: "dialog" },
            { icon: "deployed_code", routerLink: "/list", label: "list" },
            { icon: "deployed_code", routerLink: "/selection", label: "selection" },
            { icon: "deployed_code", routerLink: "/navigation", label: "navigation" },
            { icon: "deployed_code", routerLink: "/menu", label: "menu" },
            { icon: "deployed_code", routerLink: "/navigation-bar", label: "navigation-bar" },
            { icon: "deployed_code", routerLink: "/navigation-drawer", label: "navigation-drawer" },
            { icon: "deployed_code", routerLink: "/navigation-rail", label: "navigation-rail" },
            { icon: "deployed_code", routerLink: "/progress-indicator", label: "progress-indicator" },
            { icon: "deployed_code", routerLink: "/bottom-sheet", label: "bottom-sheet" },
            { icon: "deployed_code", routerLink: "/side-sheet", label: "side-sheet" },
            { icon: "deployed_code", routerLink: "/slider", label: "slider" },
            { icon: "deployed_code", routerLink: "/snackbar", label: "snackbar" },
            { icon: "deployed_code", routerLink: "/tabs", label: "tabs" },
            { icon: "deployed_code", routerLink: "/tooltip", label: "tooltip" },
            { icon: "deployed_code", routerLink: "/top-app-bar", label: "top-app-bar" },
            { icon: "deployed_code", routerLink: "/bottom-app-bar", label: "bottom-app-bar" },
        ];

        this.list = this.list.map((item) => {
            item.selected = item.routerLink == MDRouter.path;
            return item;
        });
    }

    topAppBar = createRef();

    navigationDrawer = createRef();

    render() {
        return html`
            <div class="md-layout-border">
                <md-top-app-bar
                    leadingActions='[{"icon":"menu"}]'
                    @onPaneIconButtonClick="${this.handleMainPaneIconButtonClick}"
                    ${ref(this.topAppBar)}
                ></md-top-app-bar>
                <md-navigation-drawer
                    open
                    .list="${this.list}"
                    @onListItemSelected="${this.handleMainListItemSelected}"
                    @onListItemClick="${this.handleMainListItemClick}"
                    ${ref(this.navigationDrawer)}
                ></md-navigation-drawer>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
    }

    handleMainListItemSelected(event) {
        if (!this.ready) {
            this.ready = true;
            const listItem = event.detail;
            listItem.scrollIntoView({
                block: "center",
                inline: "center",
                behavior: "smooth",
            });
        }
    }

    handleMainPaneIconButtonClick() {
        this.navigationDrawer.value.toggle();
    }

    handleMainListItemClick() {
        if (this.navigationDrawer.value.allVariants.includes("modal")) {
            this.navigationDrawer.value.close();
        }
    }
}

customElements.define("app-main", AppMainComponent);

export default document.createElement("app-main");
