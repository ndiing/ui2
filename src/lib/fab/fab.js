import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Ripple } from "../ripple/ripple";

class MDFab extends MDElement {
  static get properties() {
    return {
      icon: { type: String },
      ui: { type: String },
    };
  }

  constructor() {
    super();
  }

  render() {
    // prettier-ignore
    return html`
            <div class="md-fab__icon">${this.icon}</div>
        `
  }


  async connectedCallback() {
    super.connectedCallback();
    this.classList.add("md-fab");
    this.ripple=new Ripple(this,{
    })
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove("md-fab");
    this.ripple.destroy()
  }

  updated(changedProperties) {
    if (changedProperties.has("ui")) {
      if (this.ui) {
        this.ui.split(' ').forEach(ui=>{
          this.classList.add("md-fab--" + ui);
        })
      } else {
        this.classList.add("md-fab--small");
        this.classList.add("md-fab--large");
        this.classList.add("md-fab--unelevated");
      }
    }
  }
}
customElements.define("md-fab", MDFab);
export { MDFab };
