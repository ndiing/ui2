import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDDialog extends MDElement {
  static get properties() {
    return {
      leadingActions: { type: Array },
      label: { type: String },
      trailingActions: { type: Array },
      buttons: { type: Array },
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
                <div class="md-dialog__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-dialog__actions">
                            ${this.leadingActions?.map(action=>html`
                                <md-icon-button
                                    .icon="${action.icon??action}"
                                    .type="${action.type}"
                                    .ui="${action.ui}"
                                    @click="${this.handleDialogActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label?html`
                        <div class="md-dialog__label">${this.label}</div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-dialog__actions">
                            ${this.trailingActions?.map(action=>html`
                                <md-icon-button
                                    .icon="${action.icon??action}"
                                    .type="${action.type}"
                                    .ui="${action.ui}"
                                    @click="${this.handleDialogActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-dialog__body">
                    ${this.body?.length?html`
                        <div class="md-dialog__inner">${this.body}</div>
                    `:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-dialog__footer">
                            ${this.buttons?.map(button=>html`
                                <md-button
                                    .label="${button.label??button}"
                                    .type="${button.type}"
                                    .ui="${button.ui}"
                                    .selected="${button.selected}"
                                    @click="${this.handleDialogButtonClick}"
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
    this.classList.add("md-dialog");

    this.dialogScrimElement = document.createElement("div");
    document.body.append(this.dialogScrimElement);
    this.dialogScrimElement.classList.add("md-dialog__scrim");
    this.handleDialogScrimClick = this.handleDialogScrimClick.bind(this);
    this.dialogScrimElement.addEventListener(
      "click",
      this.handleDialogScrimClick
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove("md-dialog");

    this.dialogScrimElement.remove();
  }

  firstUpdated(changedProperties) {
    if(changedProperties.has('open')){
        if(this.open){
            this.dialogScrimElement.classList.add('md-dialog--open')
        }
        else{
            this.dialogScrimElement.classList.remove('md-dialog--open')
        }
    }
  }

  updated(changedProperties) {
    if(changedProperties.has('open')){
        if(this.open){
            this.dialogScrimElement.classList.add('md-dialog--open')
        }
        else{
            this.dialogScrimElement.classList.remove('md-dialog--open')
        }
    }
  }

  handleDialogActionClick(event) {
    this.emit("onDialogActionClick", event);
  }

  handleDialogButtonClick(event) {
    this.emit("onDialogButtonClick", event);
  }

  handleDialogScrimClick(event) {
    this.close();
    this.emit("onDialogScrimClick", event);
  }

  close() {
    this.open = false;
  }
  show() {
    this.open = true;
  }
}

customElements.define("md-dialog", MDDialog);

export { MDDialog };
