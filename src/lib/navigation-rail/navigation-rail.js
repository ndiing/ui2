import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";

class MDNavigationRail extends MDElement {
    static get properties() {
        return Object.assign(MDList.properties,{
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
            <div class="md-navigation-rail__body">
                <div class="md-navigation-rail__inner">
                    <md-list
                        class="md-navigation-rail__list"
                        .list="${this.list}"
                        .selectSingle="${true}"
                        @onListItemContainerClick="${this.handleNavigationRailItemContainerClick}"
                    ></md-list>    
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-rail");

        this.navigationRailScrimElement = document.createElement("div");
        this.parentElement.insertBefore(this.navigationRailScrimElement, this.nextElementSibling);
        this.navigationRailScrimElement.classList.add("md-navigation-rail__scrim");
        this.handleNavigationRailScrimClick = this.handleNavigationRailScrimClick.bind(this);
        this.navigationRailScrimElement.addEventListener("click", this.handleNavigationRailScrimClick);


        this.updateStyle();
    }

    updateStyle() {
        if ( ( this.ui?.includes("modal"))) {
            if (this.open) {
                this.navigationRailScrimElement.classList.add("md-navigation-rail--open");
            } else {
                this.navigationRailScrimElement.classList.remove("md-navigation-rail--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-rail");

        this.navigationRailScrimElement.remove();
        this.navigationRailScrimElement.removeEventListener("click", this.handleNavigationRailScrimClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                "modal",
            ].forEach((ui) => {
                this.classList.remove("md-navigation-rail--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-navigation-rail--" + ui);
                });
            }
        }
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-navigation-rail--open");
            } else {
                this.classList.remove("md-navigation-rail--open");
            }
            this.updateStyle();
        }
    }

    handleNavigationRailActionClick(event) {
        this.emit("onNavigationRailActionClick", event);
    }

    handleNavigationRailButtonClick(event) {
        this.emit("onNavigationRailButtonClick", event);
    }

    handleNavigationRailScrimClick(event) {
        this.close();
        this.emit("onNavigationRailScrimClick", event);
    }

    handleNavigationRailItemContainerClick(event) {
        this.emit("onNavigationRailItemContainerClick", event);
    }

    show() {
        this.open = true;
    }
    close() {
        this.open = false;
    }
}

customElements.define("md-navigation-rail", MDNavigationRail);

export { MDNavigationRail };
