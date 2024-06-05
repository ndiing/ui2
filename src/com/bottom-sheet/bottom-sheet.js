import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDBottomSheetComponent extends MDElement {
    /**
     * Returns the properties of the bottom sheet component.
     *
     * @property {Array} [leadingActions] - An array of actions to be displayed at the leading side of the bottom sheet.
     * @property {String} [label] - The main label of the bottom sheet.
     * @property {String} [subLabel] - A sub-label or description for the bottom sheet.
     * @property {Array} [trailingActions] - An array of actions to be displayed at the trailing side of the bottom sheet.
     * @property {Array} [buttons] - An array of button elements to be displayed in the bottom sheet.
     * @property {String} [ui='modal'] - The user interface type of the bottom sheet. Possible values are 'modal', 'drawer', 'panel'.
     * @property {Boolean} [open=false] - The open state of the bottom sheet, default is false (closed).
     *
     * @returns {Object} The properties of the bottom sheet component.
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
                <div class="md-bottom-sheet__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-bottom-sheet__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleBottomSheetActionClick}" class="md-bottom-sheet__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-bottom-sheet__label">
                            ${this.label?html`<div class="md-bottom-sheet__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-bottom-sheet__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-bottom-sheet__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button @click="${this.handleBottomSheetActionClick}" class="md-bottom-sheet__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-bottom-sheet__body">
                    ${this.body?.length?html`<div class="md-bottom-sheet__inner">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-bottom-sheet__footer">
                            ${this.buttons.map(button=>html`
                                <md-button @click="${this.handleBottomSheetButtonClick}" class="md-bottom-sheet__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
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
        this.classList.add("md-bottom-sheet");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-bottom-sheet__scrim");
        this.handleBottomSheetScrimClick = this.handleBottomSheetScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handleBottomSheetScrimClick);
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-sheet");
        await this.updateComplete;
        this.scrim.removeEventListener("click", this.handleBottomSheetScrimClick);
        this.scrim.remove();
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["modal"].forEach((ui) => {
                this.classList.remove("md-bottom-sheet--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-bottom-sheet--" + ui);
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
     * @fires MDBottomSheetComponent#onBottomSheetActionClick
     */
    handleBottomSheetActionClick(event) {
        this.emit("onBottomSheetActionClick", event);
    }

    /**
     *
     * @fires MDBottomSheetComponent#onBottomSheetButtonClick
     */
    handleBottomSheetButtonClick(event) {
        this.emit("onBottomSheetButtonClick", event);
    }

    /**
     *
     * @fires MDBottomSheetComponent#onBottomSheetScrimClick
     */
    handleBottomSheetScrimClick(event) {
        this.close();

        this.emit("onBottomSheetScrimClick", event);
    }
}

customElements.define("md-bottom-sheet", MDBottomSheetComponent);

export { MDBottomSheetComponent };
