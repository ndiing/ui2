import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";

class MDPane extends MDElement {
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
                <div class="md-pane__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-pane__actions">
                            ${this.leadingActions.map(action => html`
                                <md-icon-button 
                                    class="md-pane__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handlePaneActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.labelSecondary?html`
                        <div class="md-pane__label">
                            ${this.label?html`<div class="md-pane__label-primary">${this.label}</div>`:nothing}
                            ${this.labelSecondary?html`<div class="md-pane__label-secondary">${this.labelSecondary}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-pane__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button 
                                    class="md-pane__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handlePaneActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            <div class="md-pane__body">
                <div class="md-pane__inner">${this.body}</div>
                ${this.buttons?.length?html`
                    <div class="md-pane__footer">
                        ${this.buttons.map(action => html`
                            <md-button 
                                class="md-pane__button" 
                                .icon="${ifDefined(action?.icon)}"
                                .label="${ifDefined(action?.label??action)}"
                                .type="${ifDefined(action?.type)}"
                                .ui="${ifDefined(action?.ui)}"
                                .selected="${ifDefined(action?.selected)}"
                                @click="${this.handlePaneButtonClick}"
                            ></md-button>
                        `)}
                    </div>
                `:nothing}
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.classList.add("md-pane");

        this.scrimElement = document.createElement("div");
        this.scrimElement.classList.add("md-pane__scrim");
        this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        this.handlePaneScrimClick = this.handlePaneScrimClick.bind(this);
        this.scrimElement.addEventListener("click", this.handlePaneScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-pane");

        this.scrimElement.removeEventListener("click", this.handlePaneScrimClick);
        this.scrimElement.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                "dialog",
                "full-screen",
                "sheet",
                "modal",
                "north",
                "east",
                "south",
                "west",
                "center",
            ].forEach((ui) => {
                this.classList.remove("md-pane--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-pane--" + ui);
                });
            }
        }
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-pane--open");

                if (
                    this.ui.split(' ').some(ui => [
                        //
                        "dialog",
                        "modal",
                    ].includes(ui))
                ) {
                    this.scrimElement.classList.add("md-pane--open");
                }
            } else {
                this.classList.remove("md-pane--open");
                this.scrimElement.classList.remove("md-pane--open");
            }
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    handlePaneScrimClick(event) {
        this.close();

        this.emit("onPaneScrimClick", event);
    }

    handlePaneActionClick(event) {
        this.emit("onPaneActionClick", event);
    }

    handlePaneButtonClick(event) {
        this.emit("onPaneButtonClick", event);
    }
}

customElements.define("md-pane", MDPane);

export { MDPane };
