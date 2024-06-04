import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @class MDSideSheetComponent
 * @extends MDElement
 */
class MDSideSheetComponent extends MDElement {
    /**
     *
     * @property {Array} [leadingActions] -
     * @property {String} [label] -
     * @property {String} [subLabel] -
     * @property {Array} [trailingActions] -
     * @property {Array} [buttons] -
     * @property {String} [ui] - modal
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
                <div class="md-side-sheet__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-side-sheet__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleSideSheetActionClick}" class="md-side-sheet__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-side-sheet__label">
                            ${this.label?html`<div class="md-side-sheet__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-side-sheet__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-side-sheet__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button @click="${this.handleSideSheetActionClick}" class="md-side-sheet__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-side-sheet__body">
                    ${this.body?.length?html`<div class="md-side-sheet__inner">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-side-sheet__footer">
                            ${this.buttons.map(button=>html`
                                <md-button @click="${this.handleSideSheetButtonClick}" class="md-side-sheet__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
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
        this.classList.add("md-side-sheet");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-side-sheet__scrim");
        this.handleSideSheetScrimClick = this.handleSideSheetScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handleSideSheetScrimClick);
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-side-sheet");
        await this.updateComplete;
        this.scrim.removeEventListener("click", this.handleSideSheetScrimClick);
        this.scrim.remove();
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["modal"].forEach((ui) => {
                this.classList.remove("md-side-sheet--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-side-sheet--" + ui);
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
     * @fires MDSideSheetComponent#onSideSheetActionClick
     */
    handleSideSheetActionClick(event) {
        this.emit("onSideSheetActionClick", event);
    }

    /**
     *
     * @fires MDSideSheetComponent#onSideSheetButtonClick
     */
    handleSideSheetButtonClick(event) {
        this.emit("onSideSheetButtonClick", event);
    }

    /**
     *
     * @fires MDSideSheetComponent#onSideSheetScrimClick
     */
    handleSideSheetScrimClick(event) {
        this.close();

        this.emit("onSideSheetScrimClick", event);
    }
}

customElements.define("md-side-sheet", MDSideSheetComponent);

export { MDSideSheetComponent };
