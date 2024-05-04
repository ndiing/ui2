import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";

class MDNavigationBar extends MDElement {
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
            <div class="md-navigation-bar__body">
                <div class="md-navigation-bar__inner">
                    <md-list
                        class="md-navigation-bar__list"
                        .list="${this.list}"
                        .selectSingle="${true}"
                        @onListItemContainerClick="${this.handleNavigationBarItemContainerClick}"
                    ></md-list>    
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-bar");

        this.navigationBarScrimElement = document.createElement("div");
        this.parentElement.insertBefore(this.navigationBarScrimElement, this.nextElementSibling);
        this.navigationBarScrimElement.classList.add("md-navigation-bar__scrim");
        this.handleNavigationBarScrimClick = this.handleNavigationBarScrimClick.bind(this);
        this.navigationBarScrimElement.addEventListener("click", this.handleNavigationBarScrimClick);


        this.updateStyle();
    }

    updateStyle() {
        if ( ( this.ui?.includes("modal"))) {
            if (this.open) {
                this.navigationBarScrimElement.classList.add("md-navigation-bar--open");
            } else {
                this.navigationBarScrimElement.classList.remove("md-navigation-bar--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-bar");

        this.navigationBarScrimElement.remove();
        this.navigationBarScrimElement.removeEventListener("click", this.handleNavigationBarScrimClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                "modal",
            ].forEach((ui) => {
                this.classList.remove("md-navigation-bar--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-navigation-bar--" + ui);
                });
            }
        }
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-navigation-bar--open");
            } else {
                this.classList.remove("md-navigation-bar--open");
            }
            this.updateStyle();
        }
    }

    handleNavigationBarActionClick(event) {
        this.emit("onNavigationBarActionClick", event);
    }

    handleNavigationBarButtonClick(event) {
        this.emit("onNavigationBarButtonClick", event);
    }

    handleNavigationBarScrimClick(event) {
        this.close();
        this.emit("onNavigationBarScrimClick", event);
    }

    handleNavigationBarItemContainerClick(event) {
        this.emit("onNavigationBarItemContainerClick", event);
    }

    show() {
        this.open = true;
    }
    close() {
        this.open = false;
    }
}

customElements.define("md-navigation-bar", MDNavigationBar);

export { MDNavigationBar };
