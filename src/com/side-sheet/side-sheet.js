import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";

class MDSideSheet extends MDElement {
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
                <div class="md-side-sheet__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-side-sheet__actions">
                            ${this.leadingActions.map(action => html`
                                <md-icon-button 
                                    class="md-side-sheet__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleSideSheetActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.labelSecondary?html`
                        <div class="md-side-sheet__label">
                            ${this.label?html`<div class="md-side-sheet__label-primary">${this.label}</div>`:nothing}
                            ${this.labelSecondary?html`<div class="md-side-sheet__label-secondary">${this.labelSecondary}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-side-sheet__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button 
                                    class="md-side-sheet__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleSideSheetActionClick}"
                                ></md-icon-button>
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
                            ${this.buttons.map(action => html`
                                <md-button 
                                    class="md-side-sheet__button" 
                                    .icon="${ifDefined(action?.icon)}"
                                    .label="${ifDefined(action?.label??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    .selected="${ifDefined(action?.selected)}"
                                    @click="${this.handleSideSheetButtonClick}"
                                ></md-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.classList.add("md-side-sheet");
        this.classList.add("md-side-sheet--sheet");
        this.classList.add("md-side-sheet--east");

        this.scrimElement = document.createElement("div");
        this.scrimElement.classList.add("md-side-sheet__scrim");
        this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        this.handleSideSheetScrimClick = this.handleSideSheetScrimClick.bind(this);
        this.scrimElement.addEventListener("click", this.handleSideSheetScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-side-sheet");
        this.classList.remove("md-side-sheet--sheet");
        this.classList.remove("md-side-sheet--east");

        this.scrimElement.removeEventListener("click", this.handleSideSheetScrimClick);
        this.scrimElement.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                "dialog",
                "full-screen",
                // "sheet",
                "modal",
                "north",
                // "east",
                "south",
                "west",
                "center",
            ].forEach((ui) => {
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
                this.classList.add("md-side-sheet--open");

                if (
                    this.ui &&
                    this.ui.split(" ").some((ui) =>
                        [
                            //
                            "dialog",
                            "modal",
                        ].includes(ui)
                    )
                ) {
                    this.scrimElement.classList.add("md-side-sheet--open");
                }
            } else {
                this.classList.remove("md-side-sheet--open");
                this.scrimElement.classList.remove("md-side-sheet--open");
            }
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    handleSideSheetScrimClick(event) {
        this.close();

        this.emit("onSideSheetScrimClick", event);
    }

    handleSideSheetActionClick(event) {
        this.emit("onSideSheetActionClick", event);
    }

    handleSideSheetButtonClick(event) {
        this.emit("onSideSheetButtonClick", event);
    }
}

customElements.define("md-side-sheet", MDSideSheet);

export { MDSideSheet };
