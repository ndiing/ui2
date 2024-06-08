import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDBottomAppBarComponent extends MDElement {
    /**
     *
     * @property {Array} [leadingActions] -
     * @property {String} [label] -
     * @property {String} [subLabel] -
     * @property {Array} [trailingActions] -
     * @property {Array} [buttons] -
     * @property {String} [ui] -
     * @property {Boolean} [open] -
     * @property {Object} [fab] -
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
            fab: { type: Object },
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
                <div class="md-bottom-app-bar__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-bottom-app-bar__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleBottomAppBarActionClick}" class="md-bottom-app-bar__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-bottom-app-bar__label">
                            ${this.label?html`<div class="md-bottom-app-bar__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-bottom-app-bar__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-bottom-app-bar__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button @click="${this.handleBottomAppBarActionClick}" class="md-bottom-app-bar__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.fab?html`<md-fab class="md-bottom-app-bar__fab" .icon="${ifDefined(this.fab?.icon??this.fab)}" .ui="${ifDefined(this.fab?.ui??"unelevated secondary")}"></md-fab>`:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-bottom-app-bar__body">
                    ${this.body?.length?html`<div class="md-bottom-app-bar__inner">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-bottom-app-bar__footer">
                            ${this.buttons.map(button=>html`
                                <md-button @click="${this.handleBottomAppBarButtonClick}" class="md-bottom-app-bar__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
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
        this.classList.add("md-bottom-app-bar");
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-app-bar");
    }

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
     * @fires MDBottomAppBarComponent#onBottomAppBarActionClick
     */
    handleBottomAppBarActionClick(event) {
        this.emit("onBottomAppBarActionClick", event);
    }

    /**
     *
     * @fires MDBottomAppBarComponent#onBottomAppBarButtonClick
     */
    handleBottomAppBarButtonClick(event) {
        this.emit("onBottomAppBarButtonClick", event);
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBarComponent);

export { MDBottomAppBarComponent };
