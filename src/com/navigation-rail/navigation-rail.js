import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list";

/**
 *
 * @extends MDElement
 */
class MDNavigationRailComponent extends MDElement {
    /**
     * Returns the properties of the navigation rail component.
     *
     * @property {Array} [leadingActions] - An array of actions to be displayed at the leading side of the navigation rail.
     * @property {String} [label] - The main label of the navigation rail.
     * @property {String} [subLabel] - A sub-label or description for the navigation rail.
     * @property {Array} [trailingActions] - An array of actions to be displayed at the trailing side of the navigation rail.
     * @property {Array} [buttons] - An array of button elements to be displayed in the navigation rail.
     * @property {String} [ui] - The user interface type of the navigation rail.
     * @property {Boolean} [open=false] - The open state of the navigation rail, default is false (closed).
     * @property {Object} [properties] - Additional properties inherited from MDListComponent.
     * 
     * @returns {Object} The properties of the navigation rail component.
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
                <div class="md-navigation-rail__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-navigation-rail__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleNavigationRailActionClick}" class="md-navigation-rail__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-navigation-rail__label">
                            ${this.label?html`<div class="md-navigation-rail__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-navigation-rail__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-navigation-rail__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button @click="${this.handleNavigationRailActionClick}" class="md-navigation-rail__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
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
                        .rangeSelection="${ifDefined(this.rangeSelection)}"
                        .multiSelection="${ifDefined(this.multiSelection)}"
                        .singleSelection="${ifDefined(this.singleSelection??true)}"
                        .allSelection="${ifDefined(this.allSelection)}"
                    ></md-list>
                </div>
                ${this.buttons?.length?html`
                    <div class="md-navigation-rail__footer">
                        ${this.buttons.map(button=>html`
                            <md-button @click="${this.handleNavigationRailButtonClick}" class="md-navigation-rail__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
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
        this.classList.add("md-navigation-rail");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-rail");
        await this.updateComplete;
    }

    /**
     *
     */
    updated(changedProperties) {}

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
     * @fires MDNavigationRailComponent#onNavigationRailActionClick
     */
    handleNavigationRailActionClick(event) {
        this.emit("onNavigationRailActionClick", event);
    }

    /**
     *
     * @fires MDNavigationRailComponent#onNavigationRailButtonClick
     */
    handleNavigationRailButtonClick(event) {
        this.emit("onNavigationRailButtonClick", event);
    }
}

customElements.define("md-navigation-rail", MDNavigationRailComponent);

export { MDNavigationRailComponent };
