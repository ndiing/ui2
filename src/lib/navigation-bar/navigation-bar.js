import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";

class MDNavigationBar extends MDElement {
    static get properties() {
        return Object.assign(MDList.properties, {
            open: { type: Boolean, reflect: true },
        });
    }

    constructor() {
        super();
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
                    ></md-list>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-bar");

        this.navigationBarScrimElement = document.createElement("div");
        document.body.append(this.navigationBarScrimElement);
        this.navigationBarScrimElement.classList.add("md-navigation-bar__scrim");
        this.handleNavigationBarScrimClick = this.handleNavigationBarScrimClick.bind(this);
        this.navigationBarScrimElement.addEventListener("click", this.handleNavigationBarScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-bar");

        this.navigationBarScrimElement.remove();
    }

    firstUpdated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.navigationBarScrimElement.classList.add("md-navigation-bar--open");
            } else {
                this.navigationBarScrimElement.classList.remove("md-navigation-bar--open");
            }
        }
    }

    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.navigationBarScrimElement.classList.add("md-navigation-bar--open");
            } else {
                this.navigationBarScrimElement.classList.remove("md-navigation-bar--open");
            }
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

    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}

customElements.define("md-navigation-bar", MDNavigationBar);

export { MDNavigationBar };
