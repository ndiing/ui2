import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDCardComponent extends MDElement {
    /**
     * Properties of the MDCardComponent.
     * @property {Array} [leadingActions] - Actions displayed on the leading side of the card.
     * @property {String} [label] - The main label of the card.
     * @property {String} [subLabel] - The sublabel of the card.
     * @property {Array} [trailingActions] - Actions displayed on the trailing side of the card.
     * @property {String} [image] - URL of the image displayed on the card.
     * @property {Array} [buttons] - Buttons displayed on the card.
     * @property {String} [ui] - Specifies the UI style of the card. Possible values are 'elevated', 'filled', 'outlined'.
     */
    static get properties() {
        return {
            leadingActions: { type: Array },
            label: { type: String },
            subLabel: { type: String },
            trailingActions: { type: Array },
            image: { type: String },
            buttons: { type: Array },
            ui: { type: String },
        };
    }

    /**
     *
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingActions?.length||this.label||this.subLabel||this.trailingActions?.length?html`
                <div class="md-card__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-card__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button class="md-card__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-card__label">
                            ${this.label?html`<div class="md-card__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-card__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-card__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button class="md-card__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.image||this.buttons?.length?html`
                <div class="md-card__body">
                    ${this.image?html`<md-image class="md-card__image" .src="${ifDefined(this.image?.src??this.image)}" .ratio="${ifDefined(this.image?.ratio??"16/9")}"></md-image>`:nothing}
                    ${this.body?.length?html`<div class="md-card__inner">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-card__footer">
                            ${this.buttons.map(button=>html`
                                <md-button class="md-card__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-card");
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["elevated", "filled", "outlined"].forEach((ui) => {
                this.classList.remove("md-card--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-card--" + ui);
                });
            }
        }
    }
}

customElements.define("md-card", MDCardComponent);

export { MDCardComponent };
