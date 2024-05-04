import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDBottomAppBar extends MDElement {
    static get properties() {
        return {
            actions: { type: Array },
            fab: { type: Object },
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
            ${this.actions?.length||this.fab?html`
                <div class="md-bottom-app-bar__header">
                    ${this.actions?.length?html`
                        <div class="md-bottom-app-bar__actions">
                            ${this.actions?.map(action=>html`
                                <md-icon-button 
                                    class="md-bottom-app-bar__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleBottomAppBarActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.fab?html`
                        <md-fab 
                            class="md-bottom-app-bar__fab"
                            .icon="${this.fab?.icon??this.fab}"
                            .type="${this.fab?.type}"
                            .ui="${this.fab?.ui??"unelevated"}"
                            @click="${this.handleBottomAppBarActionClick}"
                        ></md-fab>
                    `:nothing}
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-app-bar");

        this.bottomAppBarScrimElement = document.createElement("div");

        this.parentElement.insertBefore(this.bottomAppBarScrimElement, this.nextElementSibling);
        this.bottomAppBarScrimElement.classList.add("md-bottom-app-bar__scrim");
        this.handleBottomAppBarScrimClick = this.handleBottomAppBarScrimClick.bind(this);
        this.bottomAppBarScrimElement.addEventListener("click", this.handleBottomAppBarScrimClick);

        this.updateStyle();
    }

    updateStyle() {
        if (this.ui?.includes("modal")) {
            if (this.open) {
                this.bottomAppBarScrimElement.classList.add("md-bottom-app-bar--open");
            } else {
                this.bottomAppBarScrimElement.classList.remove("md-bottom-app-bar--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-app-bar");

        this.bottomAppBarScrimElement.remove();
        this.bottomAppBarScrimElement.removeEventListener("click", this.handleBottomAppBarScrimClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
  
                "modal",
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
            } else {
                this.classList.remove("md-bottom-app-bar--open");
            }
            this.updateStyle();
        }
    }

    handleBottomAppBarActionClick(event) {
        this.emit("onBottomAppBarActionClick", event);
    }

    handleBottomAppBarButtonClick(event) {
        this.emit("onBottomAppBarButtonClick", event);
    }

    handleBottomAppBarScrimClick(event) {
        this.close();
        this.emit("onBottomAppBarScrimClick", event);
    }

    show() {
        this.open = true;
    }
    close() {
        this.open = false;
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBar);

export { MDBottomAppBar };
