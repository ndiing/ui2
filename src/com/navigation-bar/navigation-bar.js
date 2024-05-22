import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { MDList } from "../list/list";

class MDNavigationBar extends MDElement {
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
            <div class="md-navigation-bar__body">
                <div class="md-navigation-bar__inner">
                    <md-list
                        class="md-navigation-bar__list"
                        .list="${ifDefined(this.list)}"
                        .allSelection="${ifDefined(this.allSelection)}"
                        .rangeSelection="${ifDefined(this.rangeSelection)}"
                        .multiSelection="${ifDefined(this.multiSelection)}"
                        .singleSelection="${ifDefined(this.singleSelection??true)}"
                        @onListItemClick="${this.handleNavigationBarListItemClick}"
                    ></md-list>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-bar");

        this.navigationBarScrim = document.createElement("div");
        this.parentElement.insertBefore(this.navigationBarScrim, this.nextElementSibling);
        this.navigationBarScrim.classList.add("md-navigation-bar__scrim");
        this.handleNavigationBarScrimClick = this.handleNavigationBarScrimClick.bind(this);
        this.navigationBarScrim.addEventListener("click", this.handleNavigationBarScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-bar");

        this.navigationBarScrim.removeEventListener("click", this.handleNavigationBarScrimClick);
        this.navigationBarScrim.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
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
                if (
                    [
                        //
                        "modal",
                    ].some((ui) => this.ui?.includes(ui))
                ) {
                    this.navigationBarScrim.classList.add("md-navigation-bar--open");
                }
            } else {
                this.classList.remove("md-navigation-bar--open");
                this.navigationBarScrim.classList.remove("md-navigation-bar--open");
            }
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
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

    handleNavigationBarListItemClick(event) {
        this.emit("onNavigationBarListItemClick", event);
    }
}

customElements.define("md-navigation-bar", MDNavigationBar);

export { MDNavigationBar };
