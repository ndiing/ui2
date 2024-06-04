import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list";

/**
 *
 * @extends MDElement
 */
/**
 *
 * @class MDNavigationBarComponent
 * @extends MDElement
 */
/**
 *
 * @class MDNavigationBarComponent
 * @extends MDElement
 */
/**
 *
 * @class MDNavigationBarComponent
 * @extends MDElement
 */
class MDNavigationBarComponent extends MDElement {
    /**
     *
     * @property {Array} [leadingActions] -
     * @property {String} [label] -
     * @property {String} [subLabel] -
     * @property {Array} [trailingActions] -
     * @property {Array} [buttons] -
     * @property {String} [ui] -
     * @property {Boolean} [open] -
     */
    /**
     *
     * @property {Array} [leadingActions] - 
     * @property {String} [label] - 
     * @property {String} [subLabel] - 
     * @property {Array} [trailingActions] - 
     * @property {Array} [buttons] - 
     * @property {String} [ui] - 
     * @property {Boolean} [open] - 
     */
    /**
     *
     * @property {Array} [leadingActions] - 
     * @property {String} [label] - 
     * @property {String} [subLabel] - 
     * @property {Array} [trailingActions] - 
     * @property {Array} [buttons] - 
     * @property {String} [ui] - 
     * @property {Boolean} [open] - 
     */
    /**
     *
     * @property {Array} [leadingActions] - 
     * @property {String} [label] - 
     * @property {String} [subLabel] - 
     * @property {Array} [trailingActions] - 
     * @property {Array} [buttons] - 
     * @property {String} [ui] - 
     * @property {Boolean} [open] - 
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
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingActions?.length||this.label||this.subLabel||this.trailingActions?.length?html`
                <div class="md-navigation-bar__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-navigation-bar__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleNavigationBarActionClick}" class="md-navigation-bar__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-navigation-bar__label">
                            ${this.label?html`<div class="md-navigation-bar__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-navigation-bar__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-navigation-bar__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button @click="${this.handleNavigationBarActionClick}" class="md-navigation-bar__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
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
                        .rangeSelection="${ifDefined(this.rangeSelection)}"
                        .multiSelection="${ifDefined(this.multiSelection)}"
                        .singleSelection="${ifDefined(this.singleSelection??true)}"
                        .allSelection="${ifDefined(this.allSelection)}"
                    ></md-list>
                </div>
                ${this.buttons?.length?html`
                    <div class="md-navigation-bar__footer">
                        ${this.buttons.map(button=>html`
                            <md-button @click="${this.handleNavigationBarButtonClick}" class="md-navigation-bar__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
                        `)}
                    </div>
                `:nothing}
            </div>
        `;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-bar");
        await this.updateComplete;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-bar");
        await this.updateComplete;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    close() {
        this.open = false;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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
     * @fires MDNavigationBarComponent#onNavigationBarActionClick
     */
    /**
     *
     * @fires MDNavigationBarComponent#onNavigationBarActionClick 
     */
    /**
     *
     * @fires MDNavigationBarComponent#onNavigationBarActionClick 
     */
    /**
     *
     * @fires MDNavigationBarComponent#onNavigationBarActionClick 
     */
    handleNavigationBarActionClick(event) {
        this.emit("onNavigationBarActionClick", event);
    }

    /**
     *
     * @fires MDNavigationBarComponent#onNavigationBarButtonClick
     */
    /**
     *
     * @fires MDNavigationBarComponent#onNavigationBarButtonClick 
     */
    /**
     *
     * @fires MDNavigationBarComponent#onNavigationBarButtonClick 
     */
    /**
     *
     * @fires MDNavigationBarComponent#onNavigationBarButtonClick 
     */
    handleNavigationBarButtonClick(event) {
        this.emit("onNavigationBarButtonClick", event);
    }
}

customElements.define("md-navigation-bar", MDNavigationBarComponent);

export { MDNavigationBarComponent };
