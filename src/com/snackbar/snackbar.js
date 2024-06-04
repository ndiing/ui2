import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { queue } from "../mixin/mixin";

/**
 *
 * @class MDSnackbarComponent
 * @extends MDElement
 */
class MDSnackbarComponent extends MDElement {
    /**
     *
     * @property {Array} [leadingActions] -
     * @property {String} [label] -
     * @property {String} [subLabel] -
     * @property {Array} [trailingActions] -
     * @property {Array} [buttons] -
     * @property {String} [ui] -
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

    static task = queue();

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
                <div class="md-snackbar__header">

                ${this.leadingActions?.length?html`
                        <div class="md-snackbar__actions">

                        ${this.leadingActions.map(action=>html`

                            <md-icon-button @click="${this.handleSnackbarActionClick}" class="md-snackbar__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}

                    ${this.label||this.subLabel?html`
                        <div class="md-snackbar__label">

                        ${this.label?html`<div class="md-snackbar__label-primary">${this.label}</div>`:nothing}

                            ${this.subLabel?html`<div class="md-snackbar__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}

                    ${this.trailingActions?.length?html`
                        <div class="md-snackbar__actions">

                        ${this.trailingActions.map(action=>html`

                            <md-icon-button @click="${this.handleSnackbarActionClick}" class="md-snackbar__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}

            ${this.body?.length||this.buttons?.length?html`
                <div class="md-snackbar__body">

                ${this.body?.length?html`<div class="md-snackbar__inner">${this.body}</div>`:nothing}

                    ${this.buttons?.length?html`
                        <div class="md-snackbar__footer">

${this.buttons.map(button=>choose(button.is,[
                                ['icon-button',() => html`

<md-icon-button @click="${this.handleSnackbarButtonClick}" class="md-snackbar__icon-button" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-icon-button>
                                `]
                            ],() => html`

<md-button @click="${this.handleSnackbarButtonClick}" class="md-snackbar__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
                            `))}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
        `;
    }

    /**
     *
     */
    get snackbarInner() {
        return this.querySelector(".md-snackbar__inner");
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-snackbar");
        await this.updateComplete;

        if (this.clientHeight > this.snackbarInner.clientHeight) {
            this.classList.add("md-snackbar--longer-action");
        }
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-snackbar");
        await this.updateComplete;
    }

    /**
     *
     * @fires MDSnackbarComponent#onSnackbarShow
     * @fires MDSnackbarComponent#onSnackbarClose
     */
    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.emit("onSnackbarShow", this);
            } else {
                this.emit("onSnackbarClose", this);
            }
        }
    }

    /**
     *
     */
    show() {
        MDSnackbarComponent.task(
            () =>
                new Promise((resolve) => {
                    const callback = () => {
                        window.clearTimeout(this.timeout);
                        this.removeEventListener("onSnackbarClose", callback);
                        resolve();
                    };
                    this.addEventListener("onSnackbarClose", callback);

                    this.timeout = window.setTimeout(() => {
                        this.close();
                    }, 5 * 1000);
                    this.open = true;
                }),
        );
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
     * @fires MDSnackbarComponent#onSnackbarActionClick
     */
    handleSnackbarActionClick(event) {
        this.emit("onSnackbarActionClick", event);
    }

    /**
     *
     * @fires MDSnackbarComponent#onSnackbarButtonClick
     */
    handleSnackbarButtonClick(event) {
        this.emit("onSnackbarButtonClick", event);
    }
}

customElements.define("md-snackbar", MDSnackbarComponent);

export { MDSnackbarComponent };
