import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDTopAppBar extends MDElement {
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
                <div class="md-top-app-bar__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-top-app-bar__actions">
                            ${this.leadingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-top-app-bar__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleTopAppBarActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label?html`
                        <div class="md-top-app-bar__label">${this.label}</div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-top-app-bar__actions">
                            ${this.trailingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-top-app-bar__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleTopAppBarActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-top-app-bar");

        this.topAppBarScrimElement = document.createElement("div");
        this.parentElement.insertBefore(this.topAppBarScrimElement, this.nextElementSibling);
        this.topAppBarScrimElement.classList.add("md-top-app-bar__scrim");
        this.handleTopAppBarScrimClick = this.handleTopAppBarScrimClick.bind(this);
        this.topAppBarScrimElement.addEventListener("click", this.handleTopAppBarScrimClick);


        this.updateStyle();
    }

    updateStyle() {
        if (this.ui?.includes("modal")) {
            if (this.open) {
                this.topAppBarScrimElement.classList.add("md-top-app-bar--open");
            } else {
                this.topAppBarScrimElement.classList.remove("md-top-app-bar--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-top-app-bar");

        this.topAppBarScrimElement.remove();
        this.topAppBarScrimElement.removeEventListener("click", this.handleTopAppBarScrimClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
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
            } else {
                this.classList.remove("md-top-app-bar--open");
            }
            this.updateStyle();
        }
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

    show() {
        this.open = true;
    }
    close() {
        this.open = false;
    }
}

customElements.define("md-top-app-bar", MDTopAppBar);

export { MDTopAppBar };
