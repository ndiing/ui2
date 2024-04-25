import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";
import { Popper } from "../popper/popper";

class MDMenu extends MDElement {
    static get properties() {
        return Object.assign(MDList.properties, {
            open: { type: Boolean, reflect: true },
        });
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-menu__container">
                <div class="md-menu__body">
                    <md-list 
                        class="md-menu__list"
                        .list="${this.list}"
                    ></md-list>
                </div>
            </div>
            <div class="md-menu__scrim" @click="${this.handleMenuScrimClick}"></div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-menu");
    }

    updated(changedProperties) {}

    get menuContainer() {
        return this.querySelector(".md-menu__container");
    }

    close() {
        this.open = false;
        this.popper?.destroy();
    }

    show(button, options = {}) {
        this.open = true;
        this.popper = new Popper(this.menuContainer, {
            button,
            placements: [
                "bottom-start",
                "bottom-end",
                "bottom",
                "top-start",
                "top-end",
                "top",
            ],
            ...options,
        });
        this.popper.setPlacement();
    }

    showModal() {}

    handleMenuScrimClick(event) {
        this.close();
        this.emit("onMenuScrimClick", event);
    }

    handleMenuButtonClick(event) {
        this.emit("onMenuButtonClick", event);
    }
}
customElements.define("md-menu", MDMenu);
export { MDMenu };
