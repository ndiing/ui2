import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list";

class MDNavigationRailComponent extends MDElement {
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

    constructor() {
        super();
    }

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

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-rail");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-rail");
        await this.updateComplete;
    }

    updated(changedProperties) {}

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleNavigationRailActionClick(event) {
        this.emit("onNavigationRailActionClick", event);
    }

    handleNavigationRailButtonClick(event) {
        this.emit("onNavigationRailButtonClick", event);
    }
}

customElements.define("md-navigation-rail", MDNavigationRailComponent);

export { MDNavigationRailComponent };
