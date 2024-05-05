import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDSideSheet extends MDElement {
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
                <div class="md-side-sheet__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-side-sheet__actions">
                            ${this.leadingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-side-sheet__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleSideSheetActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label?html`
                        <div class="md-side-sheet__label">${this.label}</div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-side-sheet__actions">
                            ${this.trailingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-side-sheet__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleSideSheetActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            <div class="md-side-sheet__body">
                <div class="md-side-sheet__inner">${this.body}</div>
                ${this.buttons?.length?html`
                    <div class="md-side-sheet__footer">
                        ${this.buttons?.map(button=>html`
                            <md-button 
                                class="md-side-sheet__button"
                                .label="${button?.label??button}"
                                .type="${button?.type}"
                                .ui="${button?.ui}"
                                .selected="${button?.selected}"
                                @click="${this.handleSideSheetButtonClick}"
                            ></md-button>
                        `)}
                    </div>
                `:nothing}
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-side-sheet");
        this.sideSheetScrimElement = document.createElement("div");
        this.parentElement.insertBefore(this.sideSheetScrimElement, this.nextElementSibling);
        this.sideSheetScrimElement.classList.add("md-side-sheet__scrim");
        this.handleSideSheetScrimClick = this.handleSideSheetScrimClick.bind(this);
        this.sideSheetScrimElement.addEventListener("click", this.handleSideSheetScrimClick);
        this.updateStyle();
    }

    updateStyle() {
        if ( ( this.ui?.includes("modal"))) {
            if (this.open) {
                this.sideSheetScrimElement.classList.add("md-side-sheet--open");
            } else {
                this.sideSheetScrimElement.classList.remove("md-side-sheet--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-side-sheet");
        this.sideSheetScrimElement.remove();
        this.sideSheetScrimElement.removeEventListener("click", this.handleSideSheetScrimClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["modal"].forEach((ui) => {
                this.classList.remove("md-side-sheet--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-side-sheet--" + ui);
                });
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-side-sheet--open");
            } else {
                this.classList.remove("md-side-sheet--open");
            }
            this.updateStyle();
        }
    }

    handleSideSheetActionClick(event) {
        this.emit("onSideSheetActionClick", event);
    }

    handleSideSheetButtonClick(event) {
        this.emit("onSideSheetButtonClick", event);
    }

    handleSideSheetScrimClick(event) {
        this.close();
        this.emit("onSideSheetScrimClick", event);
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }
}

customElements.define("md-side-sheet", MDSideSheet);

export { MDSideSheet };
