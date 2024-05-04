import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDDialog extends MDElement {
    static get properties() {
        return {
            leadingActions: { type: Array },
            label: { type: String },
            trailingActions: { type: Array },
            buttons: { type: Array },
            ui: { type: String },
            open: { type: Boolean, reflect: true },
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
                <div class="md-dialog__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-dialog__actions">
                            ${this.leadingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-dialog__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleDialogActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label?html`
                        <div class="md-dialog__label">${this.label}</div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-dialog__actions">
                            ${this.trailingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-dialog__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleDialogActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            <div class="md-dialog__body">
                <div class="md-dialog__inner">${this.body}</div>
                ${this.buttons?.length?html`
                    <div class="md-dialog__footer">
                        ${this.buttons?.map(button=>html`
                            <md-button 
                                class="md-dialog__button"
                                .label="${button?.label??button}"
                                .type="${button?.type}"
                                .ui="${button?.ui}"
                                .selected="${button?.selected}"
                                @click="${this.handleDialogButtonClick}"
                            ></md-button>
                        `)}
                    </div>
                `:nothing}
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-dialog");

        this.dialogScrimElement = document.createElement("div");
        // document.body.append(this.dialogScrimElement);
        this.parentElement.insertBefore(this.dialogScrimElement, this.nextElementSibling);
        this.dialogScrimElement.classList.add("md-dialog__scrim");
        this.handleDialogScrimClick = this.handleDialogScrimClick.bind(this);
        this.dialogScrimElement.addEventListener("click", this.handleDialogScrimClick);

        // dialog&&!full-screen
        // sheet&&modal

        this.updateStyle();
    }

    updateStyle() {
        if (!this.ui?.includes("full-screen") ) {
            if (this.open) {
                this.dialogScrimElement.classList.add("md-dialog--open");
            } else {
                this.dialogScrimElement.classList.remove("md-dialog--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-dialog");

        this.dialogScrimElement.remove();
        this.dialogScrimElement.removeEventListener("click", this.handleDialogScrimClick);
    }

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
            } else {
                this.classList.remove("md-dialog--open");
            }
            this.updateStyle();
        }
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

    show() {
        this.open = true;
    }
    close() {
        this.open = false;
    }
}

customElements.define("md-dialog", MDDialog);

export { MDDialog };
