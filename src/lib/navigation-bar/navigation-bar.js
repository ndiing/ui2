import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";

class MDNavigationBar extends MDElement {
    static get properties() {
        return Object.assign(MDList.properties,{
            open: { type: Boolean, reflect: true },
        });
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-navigation-bar__body">
                <div class="md-navigation-bar__inner">
                    <md-list 
                        class="md-navigation-bar__list"
                        .list="${this.list}"
                        .valueField="${this.valueField??'value'}"
                        .labelField="${this.labelField??'label'}"
                        .selectRange="${this.selectRange}"
                        .selectMulti="${this.selectMulti}"
                        .selectSingle="${this.selectSingle??true}"
                        .selectAll="${this.selectAll}"
                        @onListItemContainerClick="${this.handleNavigationBarListItemContainerClick}"
                    ></md-list>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-bar");

    }


    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-bar");

    }

    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-navigation-bar--open");
            } else {
                this.classList.remove("md-navigation-bar--open");
            }
        }
    }

    handleNavigationBarActionClick(event) {
        this.emit("onNavigationBarActionClick", event);
    }

    handleNavigationBarButtonClick(event) {
        this.emit("onNavigationBarButtonClick", event);
    }

    handleNavigationBarListItemContainerClick(event) {
        this.emit("onNavigationBarListItemContainerClick", event);
    }

    show() {
        this.open = true;
    }
    close() {
        this.open = false;
    }
}

customElements.define("md-navigation-bar", MDNavigationBar);

export { MDNavigationBar };
