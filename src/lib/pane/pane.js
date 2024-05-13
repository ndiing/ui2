import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
class MDPane extends MDElement {
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
                <div class="md-pane__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-pane__actions">
                            ${this.leadingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-pane__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handlePaneActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label?html`
                        <div class="md-pane__label">${this.label}</div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-pane__actions">
                            ${this.trailingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-pane__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
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
                        ${this.buttons?.map(button=>html`
                            <md-button 
                                class="md-pane__button"
                                .label="${button?.label??button}"
                                .type="${button?.type}"
                                .ui="${button?.ui}"
                                .selected="${button?.selected}"
                                @click="${this.handlePaneButtonClick}"
                            ></md-button>
                        `)}
                    </div>
                `:nothing}
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-pane");
        this.paneScrimElement = document.createElement("div");
        this.parentElement.insertBefore(this.paneScrimElement, this.nextElementSibling);
        this.paneScrimElement.classList.add("md-pane__scrim");
        this.handlePaneScrimClick = this.handlePaneScrimClick.bind(this);
        this.paneScrimElement.addEventListener("click", this.handlePaneScrimClick);
        this.updateStyle();
    }

    updateStyle() {
        if ((this.ui?.includes("dialog") && !this.ui?.includes("full-screen")) || (this.ui?.includes("sheet") && this.ui?.includes("modal"))) {
            if (this.open) {
                this.paneScrimElement.classList.add("md-pane--open");
            } else {
                this.paneScrimElement.classList.remove("md-pane--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-pane");
        this.paneScrimElement.remove();
        this.paneScrimElement.removeEventListener("click", this.handlePaneScrimClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["dialog", "full-screen", "sheet", "modal", "north", "east", "south", "west"].forEach((ui) => {
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
            } else {
                this.classList.remove("md-pane--open");
            }
            this.updateStyle();
        }
    }

    handlePaneActionClick(event) {
        this.emit("onPaneActionClick", event);
    }

    handlePaneButtonClick(event) {
        this.emit("onPaneButtonClick", event);
    }

    handlePaneScrimClick(event) {
        this.close();
        this.emit("onPaneScrimClick", event);
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }
}
customElements.define("md-pane", MDPane);
export { MDPane };
