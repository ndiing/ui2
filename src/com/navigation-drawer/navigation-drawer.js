import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list";

/**
 *
 * @extends MDElement
 */
class MDNavigationDrawerComponent extends MDElement {
    /**
     * Returns the properties of the navigation drawer component.
     *
     * @property {Array} [leadingActions] - An array of actions to be displayed at the leading side of the navigation drawer.
     * @property {String} [label] - The main label of the navigation drawer.
     * @property {String} [subLabel] - A sub-label or description for the navigation drawer.
     * @property {Array} [trailingActions] - An array of actions to be displayed at the trailing side of the navigation drawer.
     * @property {Array} [buttons] - An array of button elements to be displayed in the navigation drawer.
     * @property {String} [ui='modal'] - The user interface type of the navigation drawer. Possible values are 'modal', 'drawer', 'panel'.
     * @property {Boolean} [open=false] - The open state of the navigation drawer, default is false (closed).
     * @property {Object} [properties] - Additional properties inherited from MDListComponent.
     * 
     * @returns {Object} The properties of the navigation drawer component.
     */
    static get properties() {
        return {
            leadingActions: { type: Array },
            label: { type: String },
            subLabel: { type: String },
            trailingActions: { type: Array },
            buttons: { type: Array },
            ui: { type: String },
            open: { type: Boolean, reflect: true },
            ...MDListComponent.properties,
        };
    }

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingActions?.length||this.label||this.subLabel||this.trailingActions?.length?html`
                <div class="md-navigation-drawer__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-navigation-drawer__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleNavigationDrawerActionClick}" class="md-navigation-drawer__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-navigation-drawer__label">
                            ${this.label?html`<div class="md-navigation-drawer__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-navigation-drawer__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-navigation-drawer__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button @click="${this.handleNavigationDrawerActionClick}" class="md-navigation-drawer__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            <div class="md-navigation-drawer__body">
                <div class="md-navigation-drawer__inner">
                    <md-nested-list 
                        class="md-navigation-drawer__nested-list"
                        .list="${ifDefined(this.list)}"
                        .rangeSelection="${ifDefined(this.rangeSelection)}"
                        .multiSelection="${ifDefined(this.multiSelection)}"
                        .singleSelection="${ifDefined(this.singleSelection??true)}"
                        .allSelection="${ifDefined(this.allSelection)}"
                        .ui="${ifDefined(this.ui?.split(' ').filter(ui=>ui!=='modal').join(' '))}"
                    ></md-nested-list>
                </div>
                ${this.buttons?.length?html`
                    <div class="md-navigation-drawer__footer">
                        ${this.buttons.map(button=>html`
                            <md-button @click="${this.handleNavigationDrawerButtonClick}" class="md-navigation-drawer__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
                        `)}
                    </div>
                `:nothing}
            </div>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-drawer");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-navigation-drawer__scrim");
        this.handleNavigationDrawerScrimClick = this.handleNavigationDrawerScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handleNavigationDrawerScrimClick);
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-drawer");
        await this.updateComplete;
        this.scrim.removeEventListener("click", this.handleNavigationDrawerScrimClick);
        this.scrim.remove();
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["modal"].forEach((ui) => {
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
                if (this.ui?.includes("modal")) {
                    this.scrim.setAttribute("open", "");
                }
            } else {
                this.scrim.removeAttribute("open", "");
            }
        }
    }

    /**
     *
     */
    show() {
        this.open = true;
    }

    /**
     *
     */
    close() {
        this.open = false;
    }

    /**
     *
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    /**
     *
     * @fires MDNavigationDrawerComponent#onNavigationDrawerActionClick
     */
    handleNavigationDrawerActionClick(event) {
        this.emit("onNavigationDrawerActionClick", event);
    }

    /**
     *
     * @fires MDNavigationDrawerComponent#onNavigationDrawerButtonClick
     */
    handleNavigationDrawerButtonClick(event) {
        this.emit("onNavigationDrawerButtonClick", event);
    }

    /**
     *
     * @fires MDNavigationDrawerComponent#onNavigationDrawerScrimClick
     */
    handleNavigationDrawerScrimClick(event) {
        this.close();

        this.emit("onNavigationDrawerScrimClick", event);
    }
}

customElements.define("md-navigation-drawer", MDNavigationDrawerComponent);

export { MDNavigationDrawerComponent };
