import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";

class MDCard extends MDElement {
    static get properties() {
        return {
            leadingActions: { type: Array },
            label: { type: String },
            labelSecondary: { type: String },
            trailingActions: { type: Array },
            buttons: { type: Array },

            ui: { type: String },
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
                <div class="md-card__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-card__actions">
                            ${this.leadingActions.map(action => html`
                                <md-icon-button 
                                    class="md-card__action"
                                    .icon="${ifDefined(action.icon??action)}"
                                    .type="${ifDefined(action.type)}"
                                    .ui="${ifDefined(action.ui)}"
                                    @click="${this.handleCardActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.labelSecondary?html`
                        <div class="md-card__label">
                            ${this.label?html`<div class="md-card__label-primary">${this.label}</div>`:nothing}
                            ${this.labelSecondary?html`<div class="md-card__label-secondary">${this.labelSecondary}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-card__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button 
                                    class="md-card__action"
                                    .icon="${ifDefined(action.icon??action)}"
                                    .type="${ifDefined(action.type)}"
                                    .ui="${ifDefined(action.ui)}"
                                    @click="${this.handleCardActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-card__body">
                    <div class="md-card__inner">${this.body}</div>
                    ${this.buttons?.length?html`
                        <div class="md-card__footer">
                            ${this.buttons.map(action => html`
                                <md-button 
                                    class="md-card__button"
                                    .icon="${ifDefined(action.icon)}"
                                    .label="${ifDefined(action.label??action)}"
                                    .type="${ifDefined(action.type)}"
                                    .ui="${ifDefined(action.ui)}"
                                    .selected="${ifDefined(action.selected)}"
                                    @click="${this.handleCardButtonClick}"
                                ></md-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-card");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                "elevated",
                "filled",
                "outlined",
            ].forEach((ui) => {
                this.classList.remove("md-card--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-card--" + ui);
                });
            }
        }
    }

    handleCardActionClick(event) {
        this.emit("onCardActionClick", event);
    }

    handleCardButtonClick(event) {
        this.emit("onCardButtonClick", event);
    }
}

customElements.define("md-card", MDCard);

export { MDCard };
