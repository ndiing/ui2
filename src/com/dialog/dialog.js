import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";

class MDDialog extends MDElement {
    static get properties() {
        return {

            leadingActions: { type: Array },
            label: { type: String },
            labelSecondary: { type: String },
            trailingActions: { type: Array },
            buttons: { type: Array },

            ui: { type: String },

            open: { type: Boolean },
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
                <div class="md-dialog__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-dialog__actions">
                            ${this.leadingActions.map(action => html`
                                <md-icon-button 
                                    class="md-dialog__action"
                                    .icon="${ifDefined(action.icon??action)}"
                                    .type="${ifDefined(action.type)}"
                                    .ui="${ifDefined(action.ui)}"
                                    @click="${this.handleDialogActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.labelSecondary?html`
                        <div class="md-dialog__label">
                            ${this.label?html`<div class="md-dialog__label-primary">${this.label}</div>`:nothing}
                            ${this.labelSecondary?html`<div class="md-dialog__label-secondary">${this.labelSecondary}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-dialog__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button 
                                    class="md-dialog__action"
                                    .icon="${ifDefined(action.icon??action)}"
                                    .type="${ifDefined(action.type)}"
                                    .ui="${ifDefined(action.ui)}"
                                    @click="${this.handleDialogActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-dialog__body">
                    <div class="md-dialog__inner">${this.body}</div>
                    ${this.buttons?.length?html`
                        <div class="md-dialog__footer">
                            ${this.buttons.map(action => html`
                                <md-button 
                                    class="md-dialog__button"
                                    .icon="${ifDefined(action.icon)}"
                                    .label="${ifDefined(action.label??action)}"
                                    .type="${ifDefined(action.type)}"
                                    .ui="${ifDefined(action.ui)}"
                                    .selected="${ifDefined(action.selected)}"
                                    @click="${this.handleDialogButtonClick}"
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

        this.classList.add("md-dialog");

        this.dialogScrim = document.createElement("div");
        this.parentElement.insertBefore(this.dialogScrim, this.nextElementSibling);
        this.dialogScrim.classList.add("md-dialog__scrim");
        this.handleDialogScrimClick = this.handleDialogScrimClick.bind(this);
        this.dialogScrim.addEventListener("click", this.handleDialogScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-dialog");

        this.dialogScrim.removeEventListener("click", this.handleDialogScrimClick);
        this.dialogScrim.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                "full-screen",
            ].forEach((ui) => {
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
                this.classList.add("md-dialog--open");
                this.dialogScrim.classList.add("md-dialog--open");
            } else {
                this.classList.remove("md-dialog--open");
                this.dialogScrim.classList.remove("md-dialog--open");
            }
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    handleDialogActionClick(event) {
        this.emit("onDialogActionClick", event);
    }

    handleDialogButtonClick(event) {
        this.emit("onDialogButtonClick", event);
    }

    handleDialogScrimClick(event) {
        this.close();
        this.emit("onDialogScrimClick", event);
    }
}

customElements.define("md-dialog", MDDialog);

export { MDDialog };
