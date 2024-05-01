import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";
import { Popper } from "../popper/popper";

class MDMenu extends MDElement {
  static get properties() {
    return Object.assign(MDList.properties,{
        open: { type: Boolean, reflect: true },
      });
  }

  constructor() {
    super();

  }

  render() {
    // prettier-ignore
    return html`
            <div class="md-menu__body">
                <div class="md-menu__inner">
                    <md-list
                        class="md-menu__list"
                        .list="${this.list}"
                        @onListContainerClick="${this.handleListContainerClick}"
                    ></md-list>
                </div>
            </div>
        `
  }

  async connectedCallback() {
    super.connectedCallback();
    this.classList.add("md-menu");

    this.navigationRailScrimElement = document.createElement("div");
    document.body.append(this.navigationRailScrimElement);
    this.navigationRailScrimElement.classList.add("md-menu__scrim");
    this.handleMenuScrimClick = this.handleMenuScrimClick.bind(this);
    this.navigationRailScrimElement.addEventListener(
      "click",
      this.handleMenuScrimClick
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove("md-menu");

    this.navigationRailScrimElement.remove();
  }

  firstUpdated(changedProperties) {
    if(changedProperties.has('open')){
        if(this.open){
            this.navigationRailScrimElement.classList.add('md-menu--open')
        }
        else{
            this.navigationRailScrimElement.classList.remove('md-menu--open')
        }
    }
  }

  updated(changedProperties) {
    if(changedProperties.has('open')){
        if(this.open){
            this.navigationRailScrimElement.classList.add('md-menu--open')
        }
        else{
            this.navigationRailScrimElement.classList.remove('md-menu--open')
        }
    }
  }

  handleMenuActionClick(event) {
    this.emit("onMenuActionClick", event);
  }

  handleMenuButtonClick(event) {
    this.emit("onMenuButtonClick", event);
  }

  handleMenuScrimClick(event) {
    this.close();
    this.emit("onMenuScrimClick", event);
  }

  handleListContainerClick(event) {
    this.close();
    this.emit("onListContainerClick", event);
  }

  close() {
    this.open = false;
    this.popper.destroy()
  }
  show(button) {
    this.open = true;
    this.popper = new Popper(this,{
        button,
        offset: 0,
        placements: [
            'bottom-start',
            'bottom-end',
            'bottom-center',
            'top-start',
            'top-end',
            'top-center',
        ],
    })
    this.popper.setPlacement()
  }
}

customElements.define("md-menu", MDMenu);

export { MDMenu };
