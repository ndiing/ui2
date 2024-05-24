import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";

class MDTopAppBar extends MDElement {
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
                <div class="md-top-app-bar__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-top-app-bar__actions">
                            ${this.leadingActions.map(action => html`
                                <md-icon-button 
                                    class="md-top-app-bar__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleTopAppBarActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.labelSecondary?html`
                        <div class="md-top-app-bar__label">
                            ${this.label?html`<div class="md-top-app-bar__label-primary">${this.label}</div>`:nothing}
                            ${this.labelSecondary?html`<div class="md-top-app-bar__label-secondary">${this.labelSecondary}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-top-app-bar__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button 
                                    class="md-top-app-bar__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleTopAppBarActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-top-app-bar__body">
                    ${this.body?.length?html`<div class="md-top-app-bar__inner">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-top-app-bar__footer">
                            ${this.buttons.map(action => html`
                                <md-button 
                                    class="md-top-app-bar__button" 
                                    .icon="${ifDefined(action?.icon)}"
                                    .label="${ifDefined(action?.label??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    .selected="${ifDefined(action?.selected)}"
                                    @click="${this.handleTopAppBarButtonClick}"
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

        this.classList.add("md-top-app-bar");
        this.classList.add("md-top-app-bar--sheet");
        this.classList.add("md-top-app-bar--north");

        this.scrimElement = document.createElement("div");
        this.scrimElement.classList.add("md-top-app-bar__scrim");
        this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        this.handleTopAppBarScrimClick = this.handleTopAppBarScrimClick.bind(this);
        this.scrimElement.addEventListener("click", this.handleTopAppBarScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-top-app-bar");
        this.classList.remove("md-top-app-bar--sheet");
        this.classList.remove("md-top-app-bar--north");

        this.scrimElement.removeEventListener("click", this.handleTopAppBarScrimClick);
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
                // "north",
                "east",
                "south",
                "west",
                "center",
            ].forEach((ui) => {
                this.classList.remove("md-top-app-bar--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-top-app-bar--" + ui);
                });
            }
        }
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-top-app-bar--open");

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
                    this.scrimElement.classList.add("md-top-app-bar--open");
                }
            } else {
                this.classList.remove("md-top-app-bar--open");
                this.scrimElement.classList.remove("md-top-app-bar--open");
            }
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    handleTopAppBarScrimClick(event) {
        this.close();

        this.emit("onTopAppBarScrimClick", event);
    }

    handleTopAppBarActionClick(event) {
        this.emit("onTopAppBarActionClick", event);
    }

    handleTopAppBarButtonClick(event) {
        this.emit("onTopAppBarButtonClick", event);
    }
}

customElements.define("md-top-app-bar", MDTopAppBar);

export { MDTopAppBar };
