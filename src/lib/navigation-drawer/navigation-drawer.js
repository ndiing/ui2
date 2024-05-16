import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { MDList } from "../list/list";

class MDNavigationDrawer extends MDElement {
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
            <div class="md-navigation-drawer__body">
                <div class="md-navigation-drawer__inner">
                    <md-nested-list
                        class="md-navigation-drawer__nested-list"
                        .list="${ifDefined(this.list)}"
                        .allSelection="${ifDefined(this.allSelection)}"
                        .rangeSelection="${ifDefined(this.rangeSelection)}"
                        .multiSelection="${ifDefined(this.multiSelection)}"
                        .singleSelection="${ifDefined(this.singleSelection??true)}"
                    ></md-nested-list>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-drawer");

        this.navigationDrawerScrim = document.createElement("div");
        this.parentElement.insertBefore(this.navigationDrawerScrim, this.nextElementSibling);
        this.navigationDrawerScrim.classList.add("md-navigation-drawer__scrim");
        this.handleNavigationDrawerScrimClick = this.handleNavigationDrawerScrimClick.bind(this);
        this.navigationDrawerScrim.addEventListener("click", this.handleNavigationDrawerScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-drawer");

        this.navigationDrawerScrim.removeEventListener("click", this.handleNavigationDrawerScrimClick);
        this.navigationDrawerScrim.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                "modal",
            ].forEach((ui) => {
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
                if (
                    [
                        //
                        "modal",
                    ].some((ui) => this.ui?.includes(ui))
                ) {
                    this.navigationDrawerScrim.classList.add("md-navigation-drawer--open");
                }
            } else {
                this.classList.remove("md-navigation-drawer--open");
                this.navigationDrawerScrim.classList.remove("md-navigation-drawer--open");
            }
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
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
}

customElements.define("md-navigation-drawer", MDNavigationDrawer);

export { MDNavigationDrawer };
