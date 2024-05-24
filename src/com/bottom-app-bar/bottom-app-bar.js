import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";

class MDBottomAppBar extends MDElement {
    static get properties() {
        return {
            actions: { type: Array },
            label: { type: String },
            labelSecondary: { type: String },
            trailingActions: { type: Array },
            buttons: { type: Array },
            ui: { type: String },
            open: { type: Boolean },
            fab: { type: Object },
        };
    }

    constructor() {
        super();

        this.body = Array.from(this.childNodes);
    }

    render() {
        // prettier-ignore
        return html`
            ${this.actions?.length||this.label||this.labelSecondary||this.trailingActions?.length||this.fab?html`
                <div class="md-bottom-app-bar__header">
                    ${this.actions?.length?html`
                        <div class="md-bottom-app-bar__actions">
                            ${this.actions.map(action => html`
                                <md-icon-button 
                                    class="md-bottom-app-bar__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleBottomAppBarActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.labelSecondary?html`
                        <div class="md-bottom-app-bar__label">
                            ${this.label?html`<div class="md-bottom-app-bar__label-primary">${this.label}</div>`:nothing}
                            ${this.labelSecondary?html`<div class="md-bottom-app-bar__label-secondary">${this.labelSecondary}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-bottom-app-bar__actions">
                            ${this.trailingActions.map(action => html`
                                <md-icon-button 
                                    class="md-bottom-app-bar__action" 
                                    .icon="${ifDefined(action?.icon??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    @click="${this.handleBottomAppBarActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.fab?html`
                        <md-fab 
                            class="md-bottom-app-bar__fab"
                            .icon="${ifDefined(this.fab?.icon??this.fab)}"
                            .ui="${ifDefined(this.fab?.ui??'unelevated')}"
                        ></md-fab>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-bottom-app-bar__body">
                    ${this.body?.length?html`<div class="md-bottom-app-bar__inner">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-bottom-app-bar__footer">
                            ${this.buttons.map(action => html`
                                <md-button 
                                    class="md-bottom-app-bar__button" 
                                    .icon="${ifDefined(action?.icon)}"
                                    .label="${ifDefined(action?.label??action)}"
                                    .type="${ifDefined(action?.type)}"
                                    .ui="${ifDefined(action?.ui)}"
                                    .selected="${ifDefined(action?.selected)}"
                                    @click="${this.handleBottomAppBarButtonClick}"
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

        this.classList.add("md-bottom-app-bar");
        this.classList.add("md-bottom-app-bar--sheet");
        this.classList.add("md-bottom-app-bar--south");

        this.scrimElement = document.createElement("div");
        this.scrimElement.classList.add("md-bottom-app-bar__scrim");
        this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        this.handleBottomAppBarScrimClick = this.handleBottomAppBarScrimClick.bind(this);
        this.scrimElement.addEventListener("click", this.handleBottomAppBarScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-app-bar");
        this.classList.remove("md-bottom-app-bar--sheet");
        this.classList.remove("md-bottom-app-bar--south");

        this.scrimElement.removeEventListener("click", this.handleBottomAppBarScrimClick);
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
                "east",
                // "south",
                "west",
                "center",
            ].forEach((ui) => {
                this.classList.remove("md-bottom-app-bar--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-bottom-app-bar--" + ui);
                });
            }
        }
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-bottom-app-bar--open");

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
                    this.scrimElement.classList.add("md-bottom-app-bar--open");
                }
            } else {
                this.classList.remove("md-bottom-app-bar--open");
                this.scrimElement.classList.remove("md-bottom-app-bar--open");
            }
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    handleBottomAppBarScrimClick(event) {
        this.close();

        this.emit("onBottomAppBarScrimClick", event);
    }

    handleBottomAppBarActionClick(event) {
        this.emit("onBottomAppBarActionClick", event);
    }

    handleBottomAppBarButtonClick(event) {
        this.emit("onBottomAppBarButtonClick", event);
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBar);

export { MDBottomAppBar };
