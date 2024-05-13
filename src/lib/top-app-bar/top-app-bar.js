import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDTopAppBar extends MDElement {
    static get properties() {
        return {
            leadingActions: { type: Array },
            label: { type: String },
            trailingActions: { type: Array },
            open: { type: Boolean, reflect: true },
        };
    }

    constructor() {
        super();
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
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-top-app-bar");
    }

    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-top-app-bar--open");
            } else {
                this.classList.remove("md-top-app-bar--open");
            }
        }
    }

    handleTopAppBarActionClick(event) {
        this.emit("onTopAppBarActionClick", event);
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
