import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";

class MDNavigationDrawer extends MDElement {
    static get properties() {
        return Object.assign(MDList.properties, {
            ui: { type: String },
            open: { type: Boolean, reflect: true },
        });
    }

    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-navigation-drawer__body">
                <div class="md-navigation-drawer__inner">
                    <md-list 
                        class="md-navigation-drawer__list"
                        .list="${this.list}"
                        .singleSelection="${true}"
                        @onListItemClick="${this.handleNavigationDrawerListItemClick}"
                    ></md-list>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-drawer");
        this.navigationDrawerScrimElement = document.createElement("div");
        this.parentElement.insertBefore(this.navigationDrawerScrimElement, this.nextElementSibling);
        this.navigationDrawerScrimElement.classList.add("md-navigation-drawer__scrim");
        this.handleNavigationDrawerScrimClick = this.handleNavigationDrawerScrimClick.bind(this);
        this.navigationDrawerScrimElement.addEventListener("click", this.handleNavigationDrawerScrimClick);
        this.updateStyle();
    }

    updateStyle() {
        if (this.ui?.includes("modal")) {
            if (this.open) {
                this.navigationDrawerScrimElement.classList.add("md-navigation-drawer--open");
            } else {
                this.navigationDrawerScrimElement.classList.remove("md-navigation-drawer--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-drawer");
        this.navigationDrawerScrimElement.remove();
        this.navigationDrawerScrimElement.removeEventListener("click", this.handleNavigationDrawerScrimClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["modal"].forEach((ui) => {
                this.classList.remove("md-navigation-drawer--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-navigation-drawer--" + ui);
                });
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-navigation-drawer--open");
            } else {
                this.classList.remove("md-navigation-drawer--open");
            }
            this.updateStyle();
        }
    }

    handleNavigationDrawerActionClick(event) {
        this.emit("onNavigationDrawerActionClick", event);
    }

    handleNavigationDrawerButtonClick(event) {
        this.emit("onNavigationDrawerButtonClick", event);
    }

    handleNavigationDrawerScrimClick(event) {
        this.close();
        this.emit("onNavigationDrawerScrimClick", event);
    }

    handleNavigationDrawerListItemClick(event) {
        this.emit("onNavigationDrawerListItemClick", event);
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }
}

customElements.define("md-navigation-drawer", MDNavigationDrawer);

export { MDNavigationDrawer };
