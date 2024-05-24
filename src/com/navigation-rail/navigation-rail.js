import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { MDList } from "../list/list";
import { Popper } from "../popper/popper";


class MDNavigationRail extends MDElement {
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
                <div class="md-navigation-rail__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-navigation-rail__actions">
                            ${this.leadingActions.map(action => html`
                                <md-icon-button 
                                    class="md-navigation-rail__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleNavigationRailActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.labelSecondary?html`
                        <div class="md-navigation-rail__label">
                            ${this.label?html`<div class="md-navigation-rail__label-primary">${this.label}</div>`:nothing}
                            ${this.labelSecondary?html`<div class="md-navigation-rail__label-secondary">${this.labelSecondary}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-navigation-rail__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button 
                                    class="md-navigation-rail__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleNavigationRailActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
                <div class="md-navigation-rail__body">
                    <div class="md-navigation-rail__inner">
                        <md-list 
                            class="md-navigation-rail__list"
                            .list="${ifDefined(this.list)}"
                            .allSelection="${ifDefined(this.allSelection)}"
                            .rangeSelection="${ifDefined(this.rangeSelection)}"
                            .multiSelection="${ifDefined(this.multiSelection)}"
                            .singleSelection="${ifDefined(this.singleSelection??true)}"
                            @onListItemClick="${this.handleNavigationRailListItemClick}"
                        ></md-list>
                    </div>
                    ${this.buttons?.length?html`
                        <div class="md-navigation-rail__footer">
                            ${this.buttons.map(action => html`
                                <md-button 
                                    class="md-navigation-rail__button" 
                                    .icon="${ifDefined(action?.icon)}"
                                    .label="${ifDefined(action?.label??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    .selected="${ifDefined(action?.selected)}"
                                    @click="${this.handleNavigationRailButtonClick}"
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

        this.classList.add("md-navigation-rail");
        this.classList.add("md-navigation-rail--sheet");
        this.classList.add("md-navigation-rail--west");

        this.scrimElement = document.createElement("div");
        this.scrimElement.classList.add("md-navigation-rail__scrim");
        this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        this.handleNavigationRailScrimClick = this.handleNavigationRailScrimClick.bind(this);
        this.scrimElement.addEventListener("click", this.handleNavigationRailScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-rail");
        this.classList.remove("md-navigation-rail--sheet");
        this.classList.remove("md-navigation-rail--west");

        this.scrimElement.removeEventListener("click", this.handleNavigationRailScrimClick);
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
                    this.ui &&
                    this.ui.split(" ").some((ui) =>
                        [
                            //
                            "dialog",
                            "modal",
                        ].includes(ui)
                    )
                ) {
                    this.scrimElement.classList.add("md-navigation-rail--open");
                }
            } else {
                this.classList.remove("md-navigation-rail--open");
                this.scrimElement.classList.remove("md-navigation-rail--open");
            }
        }
    }

    show(button,options={}) {
        this.open = true;

    }

    close() {
        this.open = false;

    }

    handleNavigationRailScrimClick(event) {
        this.close();

        this.emit("onNavigationRailScrimClick", event);
    }

    handleNavigationRailListItemClick(event) {

        this.emit("onNavigationRailListItemClick", event);
    }

    handleNavigationRailActionClick(event) {
        this.emit("onNavigationRailActionClick", event);
    }

    handleNavigationRailButtonClick(event) {
        this.emit("onNavigationRailButtonClick", event);
    }
}

customElements.define("md-navigation-rail", MDNavigationRail);

export { MDNavigationRail };
