import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { MDList } from "../list/list";
import { Popper } from "../popper/popper";


class MDNavigationBar extends MDElement {
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
                <div class="md-navigation-bar__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-navigation-bar__actions">
                            ${this.leadingActions.map(action => html`
                                <md-icon-button 
                                    class="md-navigation-bar__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleNavigationBarActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.labelSecondary?html`
                        <div class="md-navigation-bar__label">
                            ${this.label?html`<div class="md-navigation-bar__label-primary">${this.label}</div>`:nothing}
                            ${this.labelSecondary?html`<div class="md-navigation-bar__label-secondary">${this.labelSecondary}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-navigation-bar__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button 
                                    class="md-navigation-bar__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleNavigationBarActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
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
                    ${this.buttons?.length?html`
                        <div class="md-navigation-bar__footer">
                            ${this.buttons.map(action => html`
                                <md-button 
                                    class="md-navigation-bar__button" 
                                    .icon="${ifDefined(action?.icon)}"
                                    .label="${ifDefined(action?.label??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    .selected="${ifDefined(action?.selected)}"
                                    @click="${this.handleNavigationBarButtonClick}"
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

        this.classList.add("md-navigation-bar");
        this.classList.add("md-navigation-bar--sheet");
        this.classList.add("md-navigation-bar--south");

        this.scrimElement = document.createElement("div");
        this.scrimElement.classList.add("md-navigation-bar__scrim");
        this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        this.handleNavigationBarScrimClick = this.handleNavigationBarScrimClick.bind(this);
        this.scrimElement.addEventListener("click", this.handleNavigationBarScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-bar");
        this.classList.remove("md-navigation-bar--sheet");
        this.classList.remove("md-navigation-bar--south");

        this.scrimElement.removeEventListener("click", this.handleNavigationBarScrimClick);
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
                // "south",
                "west",
                "center",
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
                    this.ui &&
                    this.ui.split(" ").some((ui) =>
                        [
                            //
                            "dialog",
                            "modal",
                        ].includes(ui)
                    )
                ) {
                    this.scrimElement.classList.add("md-navigation-bar--open");
                }
            } else {
                this.classList.remove("md-navigation-bar--open");
                this.scrimElement.classList.remove("md-navigation-bar--open");
            }
        }
    }

    show(button,options={}) {
        this.open = true;

    }

    close() {
        this.open = false;

    }

    handleNavigationBarScrimClick(event) {
        this.close();

        this.emit("onNavigationBarScrimClick", event);
    }

    handleNavigationBarListItemClick(event) {

        this.emit("onNavigationBarListItemClick", event);
    }

    handleNavigationBarActionClick(event) {
        this.emit("onNavigationBarActionClick", event);
    }

    handleNavigationBarButtonClick(event) {
        this.emit("onNavigationBarButtonClick", event);
    }
}

customElements.define("md-navigation-bar", MDNavigationBar);

export { MDNavigationBar };
