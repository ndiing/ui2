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
                                    .icon="${action.icon??action}"
                                    .type="${action.type}"
                                    .ui="${action.ui}"
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
                                    .icon="${action.icon??action}"
                                    .type="${action.type}"
                                    .ui="${action.ui}"
                                    @click="${this.handleBottomSheetActionClick}"
                                ></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-bottom-sheet__body">
                    ${this.body?.length?html`
                        <div class="md-bottom-sheet__inner">${this.body}</div>
                    `:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-bottom-sheet__footer">
                            ${this.buttons?.map(button=>html`
                                <md-button
                                    .label="${button.label??button}"
                                    .type="${button.type}"
                                    .ui="${button.ui}"
                                    .selected="${button.selected}"
                                    @click="${this.handleBottomSheetButtonClick}"
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
    this.classList.add("md-bottom-sheet");

    this.bottomSheetScrimElement = document.createElement("div");
    document.body.append(this.bottomSheetScrimElement);
    this.bottomSheetScrimElement.classList.add("md-bottom-sheet__scrim");
    this.handleBottomSheetScrimClick = this.handleBottomSheetScrimClick.bind(this);
    this.bottomSheetScrimElement.addEventListener(
      "click",
      this.handleBottomSheetScrimClick
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove("md-bottom-sheet");

    this.bottomSheetScrimElement.remove();
  }

  firstUpdated(changedProperties) {
    if(changedProperties.has('open')){
        if(this.open){
            this.bottomSheetScrimElement.classList.add('md-bottom-sheet--open')
        }
        else{
            this.bottomSheetScrimElement.classList.remove('md-bottom-sheet--open')
        }
    }
  }

  updated(changedProperties) {
    if(changedProperties.has('open')){
        if(this.open){
            this.bottomSheetScrimElement.classList.add('md-bottom-sheet--open')
        }
        else{
            this.bottomSheetScrimElement.classList.remove('md-bottom-sheet--open')
        }
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

  close() {
    this.open = false;
  }
  show() {
    this.open = true;
  }
}

customElements.define("md-bottom-sheet", MDBottomSheet);

export { MDBottomSheet };
