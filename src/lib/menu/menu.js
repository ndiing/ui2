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

    render() {
        // prettier-ignore
        return html`
            <div class="md-menu__body">
                <div class="md-menu__inner">
                    <md-list 
                        class="md-menu__list"
                        .list="${this.list}"
                        .valueField="${this.valueField??'value'}"
                        .labelField="${this.labelField??'label'}"
                        .selectRange="${this.selectRange}"
                        .selectMulti="${this.selectMulti}"
                        .selectSingle="${this.selectSingle??true}"
                        .selectAll="${this.selectAll}"
                        @onListItemContainerClick="${this.handleListItemContainerClick}"
                    ></md-list>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");
        this.menuScrimElement = document.createElement("div");
        this.parentElement.insertBefore(this.menuScrimElement, this.nextElementSibling);
        this.menuScrimElement.classList.add("md-menu__scrim");
        this.handleMenuScrimClick = this.handleMenuScrimClick.bind(this);
        this.menuScrimElement.addEventListener("click", this.handleMenuScrimClick);
        this.updateStyle();
    }

    updateStyle() {
        if (!this.ui?.includes("full-screen")) {
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

    handleListItemContainerClick(event) {
        this.close();
        this.emit("onMenuListItemContainerClick", event);
    }

    show(button,options={}) {
        this.open = true;
        
        this.popper=new Popper(this,{
            button,
            placements:[
                'bottom-start',
                'bottom-end',
                'bottom',
                'top-start',
                'top-end',
                'top',
            ],
            ...options
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
