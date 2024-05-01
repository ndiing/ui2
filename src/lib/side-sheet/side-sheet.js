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
                                    .icon="${action.icon??action}"
                                    .type="${action.type}"
                                    .ui="${action.ui}"
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
                                    .icon="${action.icon??action}"
                                    .type="${action.type}"
                                    .ui="${action.ui}"
                                    @click="${this.handleSideSheetActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-side-sheet__body">
                    ${this.body?.length?html`
                        <div class="md-side-sheet__inner">${this.body}</div>
                    `:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-side-sheet__footer">
                            ${this.buttons?.map(button=>html`
                                <md-button
                                    .label="${button.label??button}"
                                    .type="${button.type}"
                                    .ui="${button.ui}"
                                    .selected="${button.selected}"
                                    @click="${this.handleSideSheetButtonClick}"
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
    this.classList.add("md-side-sheet");

    this.sideSheetScrimElement = document.createElement("div");
    document.body.append(this.sideSheetScrimElement);
    this.sideSheetScrimElement.classList.add("md-side-sheet__scrim");
    this.handleSideSheetScrimClick = this.handleSideSheetScrimClick.bind(this);
    this.sideSheetScrimElement.addEventListener(
      "click",
      this.handleSideSheetScrimClick
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove("md-side-sheet");

    this.sideSheetScrimElement.remove();
  }

  firstUpdated(changedProperties) {
    if(changedProperties.has('open')){
        if(this.open){
            this.sideSheetScrimElement.classList.add('md-side-sheet--open')
        }
        else{
            this.sideSheetScrimElement.classList.remove('md-side-sheet--open')
        }
    }
  }

  updated(changedProperties) {
    if(changedProperties.has('open')){
        if(this.open){
            this.sideSheetScrimElement.classList.add('md-side-sheet--open')
        }
        else{
            this.sideSheetScrimElement.classList.remove('md-side-sheet--open')
        }
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

  close() {
    this.open = false;
  }
  show() {
    this.open = true;
  }
}

customElements.define("md-side-sheet", MDSideSheet);

export { MDSideSheet };
