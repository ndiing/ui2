import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDDialog extends MDElement {
    static get properties() {
        return {
            label: { type: String },
            open: { type: Boolean, reflect: true },
            buttons: { type: Array },
        };
    }

    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-dialog__container">
                ${this.label?html`
                    <div class="md-dialog__header">
                        <div class="md-dialog__label">${this.label}</div>
                    </div>
                `:nothing}
                <div class="md-dialog__body">${this.body}</div>
                ${this.buttons?.length?html`
                    <div class="md-dialog__footer">
                        ${this.buttons.map(button=>html`
                            <md-button 
                                label="${button}"
                                @click="${this.handleDialogButtonClick}"
                            ></md-button>
                        `)}
                    </div>
                `:nothing}
            </div>
            <div class="md-dialog__scrim" @click="${this.handleDialogScrimClick}"></div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-dialog");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-dialog");
    }

    updated(changedProperties) {}

    close() {
        this.open = false;
    }

    show() {
        this.open = true;
    }

    showModal() {}

    handleDialogScrimClick(event) {
        this.close();
        this.emit("onDialogScrimClick", event);
    }

    handleDialogButtonClick(event) {
        this.emit("onDialogButtonClick", event);
    }
}
customElements.define("md-dialog", MDDialog);
export { MDDialog };
