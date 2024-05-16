import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";

class MDBottomAppBar extends MDElement {
    static get properties() {
        return {
            actions: { type: Array },
            fab: { type: Object },
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
            <div class="md-bottom-app-bar__header">
                ${this.actions?.length?html`
                    <div class="md-bottom-app-bar__actions">
                        ${this.actions.map(action => html`
                            <md-icon-button 
                                class="md-bottom-app-bar__action"
                                .icon="${ifDefined(action.icon??action)}"
                                .type="${ifDefined(action.type)}"
                                .ui="${ifDefined(action.ui)}"
                                @click="${this.handleBottomAppBarActionClick}"
                            ></md-icon-button>
                        `)}
                    </div>
                `:nothing}
                ${this.fab?html`
                    <md-fab class="md-bottom-app-bar__fab"
                        .icon="${ifDefined(this.fab?.icon??this.fab)}"
                        .ui="${ifDefined(this.fab?.ui??'unelevated')}"
                    ></md-fab>
                `:nothing}
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-app-bar");
        this.bottomAppBarScrim = document.createElement("div");
        this.parentElement.insertBefore(this.bottomAppBarScrim, this.nextElementSibling);
        this.bottomAppBarScrim.classList.add("md-bottom-app-bar__scrim");
        this.handleBottomAppBarScrimClick = this.handleBottomAppBarScrimClick.bind(this);
        this.bottomAppBarScrim.addEventListener("click", this.handleBottomAppBarScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-app-bar");
        this.bottomAppBarScrim.removeEventListener("click", this.handleBottomAppBarScrimClick);
        this.bottomAppBarScrim.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["modal"].forEach((ui) => this.classList.remove("md-bottom-app-bar--" + ui));

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => this.classList.add("md-bottom-app-bar--" + ui));
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-bottom-app-bar--open");

                if (["modal"].some((ui) => this.ui?.includes(ui))) {
                    this.bottomAppBarScrim.classList.add("md-bottom-app-bar--open");
                }
            } else {
                this.classList.remove("md-bottom-app-bar--open");
                this.bottomAppBarScrim.classList.remove("md-bottom-app-bar--open");
            }
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
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
}

customElements.define("md-bottom-app-bar", MDBottomAppBar);

export { MDBottomAppBar };
