import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDPopperModule } from "../popper/popper";

/**
 *
 * @class MDTooltipComponent
 * @extends MDElement
 */
class MDTooltipComponent extends MDElement {
    /**
     *
     * @property {Array} [leadingActions] -
     * @property {String} [label] -
     * @property {String} [subLabel] -
     * @property {Array} [trailingActions] -
     * @property {Array} [buttons] -
     * @property {String} [ui] - plain
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
                <div class="md-tooltip__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-tooltip__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleTooltipActionClick}" class="md-tooltip__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-tooltip__label">
                            ${this.label?html`<div class="md-tooltip__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-tooltip__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-tooltip__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button @click="${this.handleTooltipActionClick}" class="md-tooltip__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-tooltip__body">
                    ${this.body?.length?html`<div class="md-tooltip__inner">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-tooltip__footer">
                            ${this.buttons.map(button=>html`
                                <md-button @click="${this.handleTooltipButtonClick}" class="md-tooltip__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
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
        this.classList.add("md-tooltip");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-tooltip__scrim");
        this.handleTooltipScrimClick = this.handleTooltipScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handleTooltipScrimClick);
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tooltip");
        await this.updateComplete;
        this.scrim.removeEventListener("click", this.handleTooltipScrimClick);
        this.scrim.remove();
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["plain"].forEach((ui) => {
                this.classList.remove("md-tooltip--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-tooltip--" + ui);
                });
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                if (!this.ui?.includes("plain")) {
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
    show(button, options) {
        this.open = true;
        this.popper = new MDPopperModule(this, {
            button,
            placements: ["bottom", "top", "right", "left"],
            offset: 8,
            options,
        });
        this.popper.set();
    }

    /**
     *
     */
    close() {
        this.open = false;
        this.popper.destroy();
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
     * @fires MDTooltipComponent#onTooltipActionClick
     */
    handleTooltipActionClick(event) {
        this.emit("onTooltipActionClick", event);
    }

    /**
     *
     * @fires MDTooltipComponent#onTooltipButtonClick
     */
    handleTooltipButtonClick(event) {
        this.emit("onTooltipButtonClick", event);
    }

    /**
     *
     * @fires MDTooltipComponent#onTooltipScrimClick
     */
    handleTooltipScrimClick(event) {
        this.close();

        this.emit("onTooltipScrimClick", event);
    }
}

customElements.define("md-tooltip", MDTooltipComponent);

export { MDTooltipComponent };
