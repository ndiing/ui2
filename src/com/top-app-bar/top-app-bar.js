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
                                    .icon="${ifDefined(action.icon??action)}"
                                    .type="${ifDefined(action.type)}"
                                    .ui="${ifDefined(action.ui)}"
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
                                    .icon="${ifDefined(action.icon??action)}"
                                    .type="${ifDefined(action.type)}"
                                    .ui="${ifDefined(action.ui)}"
                                    @click="${this.handleTopAppBarActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-top-app-bar");

        this.topAppBarScrim = document.createElement("div");
        this.parentElement.insertBefore(this.topAppBarScrim, this.nextElementSibling);
        this.topAppBarScrim.classList.add("md-top-app-bar__scrim");
        this.handleTopAppBarScrimClick = this.handleTopAppBarScrimClick.bind(this);
        this.topAppBarScrim.addEventListener("click", this.handleTopAppBarScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-top-app-bar");

        this.topAppBarScrim.removeEventListener("click", this.handleTopAppBarScrimClick);
        this.topAppBarScrim.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                "modal",
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
                    [
                        //
                        "modal",
                    ].some((ui) => this.ui?.includes(ui))
                ) {
                    this.topAppBarScrim.classList.add("md-top-app-bar--open");
                }
            } else {
                this.classList.remove("md-top-app-bar--open");
                this.topAppBarScrim.classList.remove("md-top-app-bar--open");
            }
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    handleTopAppBarActionClick(event) {
        this.emit("onTopAppBarActionClick", event);
    }

    handleTopAppBarButtonClick(event) {
        this.emit("onTopAppBarButtonClick", event);
    }

    handleTopAppBarScrimClick(event) {
        this.close();
        this.emit("onTopAppBarScrimClick", event);
    }
}

customElements.define("md-top-app-bar", MDTopAppBar);

export { MDTopAppBar };
