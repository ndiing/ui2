import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { MDList } from "../list/list";

class MDNavigationRail extends MDElement {
    static get properties() {
        return {
            ...MDList.properties,

            ui: { type: String },

            open: { type: Boolean },
        };
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
                        .list="${ifDefined(this.list)}"
                        .allSelection="${ifDefined(this.allSelection)}"
                        .rangeSelection="${ifDefined(this.rangeSelection)}"
                        .multiSelection="${ifDefined(this.multiSelection)}"
                        .singleSelection="${ifDefined(this.singleSelection??true)}"
                    ></md-list>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-rail");

        this.navigationRailScrim = document.createElement("div");
        this.parentElement.insertBefore(this.navigationRailScrim, this.nextElementSibling);
        this.navigationRailScrim.classList.add("md-navigation-rail__scrim");
        this.handleNavigationRailScrimClick = this.handleNavigationRailScrimClick.bind(this);
        this.navigationRailScrim.addEventListener("click", this.handleNavigationRailScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-rail");

        this.navigationRailScrim.removeEventListener("click", this.handleNavigationRailScrimClick);
        this.navigationRailScrim.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
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
                if (
                    [
                        //
                        "modal",
                    ].some((ui) => this.ui?.includes(ui))
                ) {
                    this.navigationRailScrim.classList.add("md-navigation-rail--open");
                }
            } else {
                this.classList.remove("md-navigation-rail--open");
                this.navigationRailScrim.classList.remove("md-navigation-rail--open");
            }
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
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
}

customElements.define("md-navigation-rail", MDNavigationRail);

export { MDNavigationRail };
