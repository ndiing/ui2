import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @class MDTopAppBarComponent
 * @extends MDElement
 */
class MDTopAppBarComponent extends MDElement {
    /**
     *
     * @property {Array} [leadingActions] -
     * @property {String} [label] -
     * @property {String} [subLabel] -
     * @property {Array} [trailingActions] -
     * @property {Array} [buttons] -
     * @property {String} [ui] - center-aligned,small,medium,large
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
                <div class="md-top-app-bar__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-top-app-bar__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleTopAppBarActionClick}" class="md-top-app-bar__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-top-app-bar__label">
                            ${this.label?html`<div class="md-top-app-bar__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-top-app-bar__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-top-app-bar__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button @click="${this.handleTopAppBarActionClick}" class="md-top-app-bar__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-top-app-bar__body">
                    ${this.body?.length?html`<div class="md-top-app-bar__inner">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-top-app-bar__footer">
                            ${this.buttons.map(button=>html`
                                <md-button @click="${this.handleTopAppBarButtonClick}" class="md-top-app-bar__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
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
        this.classList.add("md-top-app-bar");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-top-app-bar");
        await this.updateComplete;
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["center-aligned", "small", "medium", "large"].forEach((ui) => {
                this.classList.remove("md-top-app-bar--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-top-app-bar--" + ui);
                });
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
     * @fires MDTopAppBarComponent#onTopAppBarActionClick
     */
    handleTopAppBarActionClick(event) {
        this.emit("onTopAppBarActionClick", event);
    }

    /**
     *
     * @fires MDTopAppBarComponent#onTopAppBarButtonClick
     */
    handleTopAppBarButtonClick(event) {
        this.emit("onTopAppBarButtonClick", event);
    }
}

customElements.define("md-top-app-bar", MDTopAppBarComponent);

export { MDTopAppBarComponent };
