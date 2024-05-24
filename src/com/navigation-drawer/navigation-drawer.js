import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { MDList } from "../list/list";
import { Popper } from "../popper/popper";


class MDNavigationDrawer extends MDElement {
    static get properties() {
        return {
            leadingActions: { type: Array },
            label: { type: String },
            labelSecondary: { type: String },
            trailingActions: { type: Array },
            buttons: { type: Array },
            ui: { type: String },
            open: { type: Boolean },
            ...MDList.properties
        };
    }

    constructor() {
        super();

        this.body = Array.from(this.childNodes);
    }

    render() {
        // prettier-ignore
        return html`
            ${this.leadingActions?.length||this.label||this.labelSecondary||this.trailingActions?.length?html`
                <div class="md-navigation-drawer__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-navigation-drawer__actions">
                            ${this.leadingActions.map(action => html`
                                <md-icon-button 
                                    class="md-navigation-drawer__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleNavigationDrawerActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.labelSecondary?html`
                        <div class="md-navigation-drawer__label">
                            ${this.label?html`<div class="md-navigation-drawer__label-primary">${this.label}</div>`:nothing}
                            ${this.labelSecondary?html`<div class="md-navigation-drawer__label-secondary">${this.labelSecondary}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-navigation-drawer__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button 
                                    class="md-navigation-drawer__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleNavigationDrawerActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
                <div class="md-navigation-drawer__body">
                    <div class="md-navigation-drawer__inner">
                        <md-list 
                            class="md-navigation-drawer__list"
                            .list="${ifDefined(this.list)}"
                            .allSelection="${ifDefined(this.allSelection)}"
                            .rangeSelection="${ifDefined(this.rangeSelection)}"
                            .multiSelection="${ifDefined(this.multiSelection)}"
                            .singleSelection="${ifDefined(this.singleSelection??true)}"
                            @onListItemClick="${this.handleNavigationDrawerListItemClick}"
                        ></md-list>
                    </div>
                    ${this.buttons?.length?html`
                        <div class="md-navigation-drawer__footer">
                            ${this.buttons.map(action => html`
                                <md-button 
                                    class="md-navigation-drawer__button" 
                                    .icon="${ifDefined(action?.icon)}"
                                    .label="${ifDefined(action?.label??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    .selected="${ifDefined(action?.selected)}"
                                    @click="${this.handleNavigationDrawerButtonClick}"
                                ></md-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.classList.add("md-navigation-drawer");
        this.classList.add("md-navigation-drawer--sheet");
        this.classList.add("md-navigation-drawer--west");

        this.scrimElement = document.createElement("div");
        this.scrimElement.classList.add("md-navigation-drawer__scrim");
        this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        this.handleNavigationDrawerScrimClick = this.handleNavigationDrawerScrimClick.bind(this);
        this.scrimElement.addEventListener("click", this.handleNavigationDrawerScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-drawer");
        this.classList.remove("md-navigation-drawer--sheet");
        this.classList.remove("md-navigation-drawer--west");

        this.scrimElement.removeEventListener("click", this.handleNavigationDrawerScrimClick);
        this.scrimElement.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                "dialog",
                "full-screen",
                // "sheet",
                "modal",
                "north",
                "east",
                "south",
                // "west",
                "center",
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
                    this.ui &&
                    this.ui.split(" ").some((ui) =>
                        [
                            //
                            "dialog",
                            "modal",
                        ].includes(ui)
                    )
                ) {
                    this.scrimElement.classList.add("md-navigation-drawer--open");
                }
            } else {
                this.classList.remove("md-navigation-drawer--open");
                this.scrimElement.classList.remove("md-navigation-drawer--open");
            }
        }
    }

    show(button,options={}) {
        this.open = true;

    }

    close() {
        this.open = false;

    }

    handleNavigationDrawerScrimClick(event) {
        this.close();

        this.emit("onNavigationDrawerScrimClick", event);
    }

    handleNavigationDrawerListItemClick(event) {

        this.emit("onNavigationDrawerListItemClick", event);
    }

    handleNavigationDrawerActionClick(event) {
        this.emit("onNavigationDrawerActionClick", event);
    }

    handleNavigationDrawerButtonClick(event) {
        this.emit("onNavigationDrawerButtonClick", event);
    }
}

customElements.define("md-navigation-drawer", MDNavigationDrawer);

export { MDNavigationDrawer };
