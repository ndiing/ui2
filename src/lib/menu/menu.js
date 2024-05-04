import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { Popper } from "../popper/popper";
import { MDList } from "../list/list";

class MDMenu extends MDElement {
    static get properties() {
        return Object.assign(MDList.properties,{
            ui: { type: String },
            open: { type: Boolean, reflect: true },
        });
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
                        .list="${this.list}"
                        .selectSingle="${true}"
                        @onListItemContainerClick="${this.handleMenuItemContainerClick}"
                    ></md-list>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");

        this.menuScrimElement = document.createElement("div");
        // document.body.append(this.menuScrimElement);
        this.parentElement.insertBefore(this.menuScrimElement, this.nextElementSibling);
        this.menuScrimElement.classList.add("md-menu__scrim");
        this.handleMenuScrimClick = this.handleMenuScrimClick.bind(this);
        this.menuScrimElement.addEventListener("click", this.handleMenuScrimClick);

        // menu&&!full-screen
        // sheet&&modal

        this.updateStyle();
    }

    updateStyle() {
        if (!this.ui?.includes("full-screen") ) {
            if (this.open) {
                this.menuScrimElement.classList.add("md-menu--open");
            } else {
                this.menuScrimElement.classList.remove("md-menu--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-menu");

        this.menuScrimElement.remove();
        this.menuScrimElement.removeEventListener("click", this.handleMenuScrimClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                "full-screen",
            ].forEach((ui) => {
                this.classList.remove("md-menu--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-menu--" + ui);
                });
            }
        }
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-menu--open");
            } else {
                this.classList.remove("md-menu--open");
            }
            this.updateStyle();
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

    handleMenuItemContainerClick(event) {
        this.close();
        this.emit("onMenuItemContainerClick", event);
    }

    show(button,options={}) {
        this.open = true;

        this.popper=new Popper(this,{
            button,
            placements: [
                'bottom-start',
                'bottom-end',
                'bottom-center',
            ],
        })

        this.popper.setPlacement()
    }
    close() {
        this.open = false;

        this.popper.destroy()
    }
}

customElements.define("md-menu", MDMenu);

export { MDMenu };
