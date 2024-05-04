import { MDElement } from "../element/element";
import { html, nothing } from "lit";

class MDBottomAppBar extends MDElement {
    static get properties() {
        return {
            actions: { type: Array },
            fab: { type: Array },
            open: { type: Boolean, reflect: true },
        };
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
                            .ui="${this.fab?.ui??"unelevated"}"
                            @click="${this.handleBottomAppBarFabClick}"
                        ></md-fab>
                    `:nothing}
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-app-bar");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-app-bar");
    }

    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-bottom-app-bar--open");
            } else {
                this.classList.remove("md-bottom-app-bar--open");
            }
        }
    }

    handleBottomAppBarActionClick(event) {
        this.emit("onBottomAppBarActionClick", event);
    }

    handleBottomAppBarFabClick(event) {
        this.emit("onBottomAppBarFabClick", event);
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
