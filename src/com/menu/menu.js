import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { MDList } from "../list/list";
import { Popper } from "../popper/popper";


class MDMenu extends MDElement {
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
                <div class="md-menu__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-menu__actions">
                            ${this.leadingActions.map(action => html`
                                <md-icon-button 
                                    class="md-menu__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleMenuActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.labelSecondary?html`
                        <div class="md-menu__label">
                            ${this.label?html`<div class="md-menu__label-primary">${this.label}</div>`:nothing}
                            ${this.labelSecondary?html`<div class="md-menu__label-secondary">${this.labelSecondary}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-menu__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button 
                                    class="md-menu__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleMenuActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
                <div class="md-menu__body">
                    <div class="md-menu__inner">
                        <md-list 
                            class="md-menu__list"
                            .list="${ifDefined(this.list)}"
                            .allSelection="${ifDefined(this.allSelection)}"
                            .rangeSelection="${ifDefined(this.rangeSelection)}"
                            .multiSelection="${ifDefined(this.multiSelection)}"
                            .singleSelection="${ifDefined(this.singleSelection??true)}"
                            @onListItemClick="${this.handleMenuListItemClick}"
                        ></md-list>
                    </div>
                    ${this.buttons?.length?html`
                        <div class="md-menu__footer">
                            ${this.buttons.map(action => html`
                                <md-button 
                                    class="md-menu__button" 
                                    .icon="${ifDefined(action?.icon)}"
                                    .label="${ifDefined(action?.label??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    .selected="${ifDefined(action?.selected)}"
                                    @click="${this.handleMenuButtonClick}"
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

        this.classList.add("md-menu");
        this.classList.add("md-menu--dialog");

        this.scrimElement = document.createElement("div");
        this.scrimElement.classList.add("md-menu__scrim");
        this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        this.handleMenuScrimClick = this.handleMenuScrimClick.bind(this);
        this.scrimElement.addEventListener("click", this.handleMenuScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-menu");
        this.classList.remove("md-menu--dialog");

        this.scrimElement.removeEventListener("click", this.handleMenuScrimClick);
        this.scrimElement.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                // "dialog",
                "full-screen",
                "sheet",
                "modal",
                "north",
                "east",
                "south",
                "west",
                "center",
            ].forEach((ui) => {
                this.classList.remove("md-menu--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-menu--" + ui);
                });
            }
        }
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-menu--open");

                // if (
                //     this.ui &&
                //     this.ui.split(" ").some((ui) =>
                //         [
                //             //
                //             "dialog",
                //             "modal",
                //         ].includes(ui)
                //     )
                // ) {
                    this.scrimElement.classList.add("md-menu--open");
                // }
            } else {
                this.classList.remove("md-menu--open");
                this.scrimElement.classList.remove("md-menu--open");
            }
        }
    }

    show(button,options={}) {
        this.open = true;

        this.popper=new Popper(this,{
            button,
            placements: [
                'bottom-start',
                'bottom-end',
                'bottom',
                'top-start',
                'top-end',
                'top',
                'center',
            ],
            ...options
        })
        this.popper.setPlacement()
    }

    close() {
        this.open = false;

        this.popper?.destroy()
    }

    handleMenuScrimClick(event) {
        this.close();

        this.emit("onMenuScrimClick", event);
    }

    handleMenuListItemClick(event) {
        this.close();

        this.emit("onMenuListItemClick", event);
    }

    handleMenuActionClick(event) {
        this.emit("onMenuActionClick", event);
    }

    handleMenuButtonClick(event) {
        this.emit("onMenuButtonClick", event);
    }
}

customElements.define("md-menu", MDMenu);

export { MDMenu };
