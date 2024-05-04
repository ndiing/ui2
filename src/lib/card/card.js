import { MDElement } from "../element/element";
import { html, nothing } from "lit";

class MDCard extends MDElement {
    static get properties() {
        return {
            leadingActions: { type: Array },
            label: { type: String },
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
            ${this.leadingActions?.length||this.label||this.trailingActions?.length?html`
                <div class="md-card__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-card__actions">
                            ${this.leadingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-card__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleCardActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label?html`
                        <div class="md-card__label">${this.label}</div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-card__actions">
                            ${this.trailingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-card__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleCardActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            <div class="md-card__body">
                <div class="md-card__inner">${this.body}</div>
                ${this.buttons?.length?html`
                    <div class="md-card__footer">
                        ${this.buttons?.map(button=>html`
                            <md-button 
                                class="md-card__button"
                                .label="${button?.label??button}"
                                .type="${button?.type}"
                                .ui="${button?.ui}"
                                .selected="${button?.selected}"
                                @click="${this.handleCardButtonClick}"
                            ></md-button>
                        `)}
                    </div>
                `:nothing}
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-card");
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
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
