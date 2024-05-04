import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDBottomSheet extends MDElement {
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
                <div class="md-bottom-sheet__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-bottom-sheet__actions">
                            ${this.leadingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-bottom-sheet__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleBottomSheetActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label?html`
                        <div class="md-bottom-sheet__label">${this.label}</div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-bottom-sheet__actions">
                            ${this.trailingActions?.map(action=>html`
                                <md-icon-button 
                                    class="md-bottom-sheet__action"
                                    .icon="${action?.icon??action}"
                                    .type="${action?.type}"
                                    .ui="${action?.ui}"
                                    @click="${this.handleBottomSheetActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            <div class="md-bottom-sheet__body">
                <div class="md-bottom-sheet__inner">${this.body}</div>
                ${this.buttons?.length?html`
                    <div class="md-bottom-sheet__footer">
                        ${this.buttons?.map(button=>html`
                            <md-button 
                                class="md-bottom-sheet__button"
                                .label="${button?.label??button}"
                                .type="${button?.type}"
                                .ui="${button?.ui}"
                                .selected="${button?.selected}"
                                @click="${this.handleBottomSheetButtonClick}"
                            ></md-button>
                        `)}
                    </div>
                `:nothing}
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-sheet");

        this.bottomSheetScrimElement = document.createElement("div");
        // document.body.append(this.bottomSheetScrimElement);
        this.parentElement.insertBefore(this.bottomSheetScrimElement, this.nextElementSibling);
        this.bottomSheetScrimElement.classList.add("md-bottom-sheet__scrim");
        this.handleBottomSheetScrimClick = this.handleBottomSheetScrimClick.bind(this);
        this.bottomSheetScrimElement.addEventListener("click", this.handleBottomSheetScrimClick);

        // dialog&&!full-screen
        // sheet&&modal

        this.updateStyle();
    }

    updateStyle() {
        if (this.ui?.includes("modal")) {
            if (this.open) {
                this.bottomSheetScrimElement.classList.add("md-bottom-sheet--open");
            } else {
                this.bottomSheetScrimElement.classList.remove("md-bottom-sheet--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-sheet");

        this.bottomSheetScrimElement.remove();
        this.bottomSheetScrimElement.removeEventListener("click", this.handleBottomSheetScrimClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                "modal",
            ].forEach((ui) => {
                this.classList.remove("md-bottom-sheet--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-bottom-sheet--" + ui);
                });
            }
        }
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-bottom-sheet--open");
            } else {
                this.classList.remove("md-bottom-sheet--open");
            }
            this.updateStyle();
        }
    }

    handleBottomSheetActionClick(event) {
        this.emit("onBottomSheetActionClick", event);
    }

    handleBottomSheetButtonClick(event) {
        this.emit("onBottomSheetButtonClick", event);
    }

    handleBottomSheetScrimClick(event) {
        this.close();
        this.emit("onBottomSheetScrimClick", event);
    }

    show() {
        this.open = true;
    }
    close() {
        this.open = false;
    }
}

customElements.define("md-bottom-sheet", MDBottomSheet);

export { MDBottomSheet };
