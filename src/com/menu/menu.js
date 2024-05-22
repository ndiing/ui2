import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { MDList } from "../list/list";
import { Popper } from "../../com/popper/popper";

class MDMenu extends MDElement {
    static get properties() {
        return {
            ...MDList.properties,


            open: { type: Boolean },
        };
    }

    constructor() {
        super();

        this.body = Array.from(this.childNodes);
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-menu__body">
                <div class="md-menu__inner">
                    <md-list
                        class="md-menu__list"
                        .list="${ifDefined(this.list)}"
                        .allSelection="${ifDefined(this.allSelection)}"
                        .rangeSelection="${ifDefined(this.rangeSelection)}"
                        .multiSelection="${ifDefined(this.multiSelection)}"
                        .singleSelection="${ifDefined(this.singleSelection??true)}"
                        @onListItemClick="${this.handleMenuListItemClick}"
                    ></md-list>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-menu");

        this.menuScrim = document.createElement("div");
        this.parentElement.insertBefore(this.menuScrim, this.nextElementSibling);
        this.menuScrim.classList.add("md-menu__scrim");
        this.handleMenuScrimClick = this.handleMenuScrimClick.bind(this);
        this.menuScrim.addEventListener("click", this.handleMenuScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-menu");

        this.menuScrim.removeEventListener("click", this.handleMenuScrimClick);
        this.menuScrim.remove();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-menu--open");
                this.menuScrim.classList.add("md-menu--open");
            } else {
                this.classList.remove("md-menu--open");
                this.menuScrim.classList.remove("md-menu--open");
            }
        }
    }

    show(button,options={}) {
        this.open = true;
        
        this.poper=new Popper(this,{
            button,
            placements:[
                //
                'bottom-start',
                'bottom-end',
                'bottom',
                'top-start',
                'top-end',
                'top',
            ],
            ...options
        })

        this.poper.setPlacement()
    }

    close() {
        this.open = false;

        this.poper?.destroy()
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

    handleMenuListItemClick(event) {
        this.close();
        this.emit("onMenuListItemClick", event);
    }
}

customElements.define("md-menu", MDMenu);

export { MDMenu };
