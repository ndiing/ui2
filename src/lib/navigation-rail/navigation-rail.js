import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";

class MDNavigationRail extends MDElement {
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
            <div class="md-navigation-rail__body">
                <div class="md-navigation-rail__inner">
                    <md-list
                        class="md-navigation-rail__list"
                        .list="${this.list}"
                        .selectSingle="${true}"
                    ></md-list>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-rail");

        this.navigationRailScrimElement = document.createElement("div");
        document.body.append(this.navigationRailScrimElement);
        this.navigationRailScrimElement.classList.add("md-navigation-rail__scrim");
        this.handleNavigationRailScrimClick = this.handleNavigationRailScrimClick.bind(this);
        this.navigationRailScrimElement.addEventListener("click", this.handleNavigationRailScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-rail");

        this.navigationRailScrimElement.remove();
    }

    firstUpdated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.navigationRailScrimElement.classList.add("md-navigation-rail--open");
            } else {
                this.navigationRailScrimElement.classList.remove("md-navigation-rail--open");
            }
        }
    }

    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.navigationRailScrimElement.classList.add("md-navigation-rail--open");
            } else {
                this.navigationRailScrimElement.classList.remove("md-navigation-rail--open");
            }
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

    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}

customElements.define("md-navigation-rail", MDNavigationRail);

export { MDNavigationRail };
