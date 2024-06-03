import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @class MDDialogComponent
 * @extends MDElement
 */
class MDDialogComponent extends MDElement {
    /**
     *
     * @property {Array} [leadingActions] -
     * @property {String} [label] -
     * @property {String} [subLabel] -
     * @property {Array} [trailingActions] -
     * @property {Array} [buttons] -
     * @property {String} [ui] - full-screen
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
                <div class="md-dialog__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-dialog__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleDialogActionClick}" class="md-dialog__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-dialog__label">
                            ${this.label?html`<div class="md-dialog__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-dialog__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-dialog__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button @click="${this.handleDialogActionClick}" class="md-dialog__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-dialog__body">
                    ${this.body?.length?html`<div class="md-dialog__inner">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-dialog__footer">
                            ${this.buttons.map(button=>html`
                                <md-button @click="${this.handleDialogButtonClick}" class="md-dialog__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
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
        this.classList.add("md-dialog");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-dialog__scrim");
        this.handleDialogScrimClick = this.handleDialogScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handleDialogScrimClick);
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-dialog");
        await this.updateComplete;
        this.scrim.removeEventListener("click", this.handleDialogScrimClick);
        this.scrim.remove();
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["full-screen"].forEach((ui) => {
                this.classList.remove("md-dialog--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-dialog--" + ui);
                });
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                if (!this.ui?.includes("full-screen")) {
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
     * @fires MDDialogComponent#onDialogActionClick
     */
    handleDialogActionClick(event) {
        this.emit("onDialogActionClick", event);
    }

    /**
     *
     * @fires MDDialogComponent#onDialogButtonClick
     */
    handleDialogButtonClick(event) {
        this.emit("onDialogButtonClick", event);
    }

    /**
     *
     * @fires MDDialogComponent#onDialogScrimClick
     */
    handleDialogScrimClick(event) {
        this.close();

        this.emit("onDialogScrimClick", event);
    }
}

customElements.define("md-dialog", MDDialogComponent);

export { MDDialogComponent };
