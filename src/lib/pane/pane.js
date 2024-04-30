import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDPane extends MDElement {
    static get properties() {
        return {
            leadingActions:{type:Array},
            label:{type:String},
            trailingActions:{type:Array},
            buttons:{type:Array},
        };
    }

    constructor() {
        super();

        this.body = Array.from(this.childNodes)
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
                                    .icon="${action.icon??action}"
                                    .type="${action.type}"
                                    .ui="${action.ui}"
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
                                    .icon="${action.icon??action}"
                                    .type="${action.type}"
                                    .ui="${action.ui}"
                                    @click="${this.handlePaneActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-pane__body">
                    ${this.body?.length?html`
                        <div class="md-pane__inner">${this.body}</div>
                    `:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-pane__footer">
                            ${this.buttons?.map(button=>html`
                                <md-button
                                    .label="${button.label??button}"
                                    .type="${button.type}"
                                    .ui="${button.ui}"
                                    .selected="${button.selected}"
                                    @click="${this.handlePaneButtonClick}"
                                ></md-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-pane");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-pane");
    }

    updated(changedProperties) {
    }

    handlePaneActionClick(event) {
        this.emit('onPaneActionClick',event)
    }

    handlePaneButtonClick(event) {
        this.emit('onPaneButtonClick',event)
    }
}

customElements.define("md-pane", MDPane);

export { MDPane };
