import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";

class MDNavigationRail extends MDElement {
    static get properties() {
        return Object.assign(MDList.properties,{
            open: { type: Boolean, reflect: true },
        });
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-navigation-rail__body">
                <div class="md-navigation-rail__inner">
                    <md-list 
                        class="md-navigation-rail__list"
                        .list="${this.list}"
                        .valueField="${this.valueField??'value'}"
                        .labelField="${this.labelField??'label'}"
                        .selectRange="${this.selectRange}"
                        .selectMulti="${this.selectMulti}"
                        .selectSingle="${this.selectSingle??true}"
                        .selectAll="${this.selectAll}"
                        @onListItemClick="${this.handleNavigationRailListItemClick}"
                    ></md-list>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-rail");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-rail");
    }

    updated(changedProperties) {


        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-navigation-rail--open");
            } else {
                this.classList.remove("md-navigation-rail--open");
            }
        }
    }

    handleNavigationRailActionClick(event) {
        this.emit("onNavigationRailActionClick", event);
    }

    handleNavigationRailButtonClick(event) {
        this.emit("onNavigationRailButtonClick", event);
    }

    handleNavigationRailListItemClick(event) {
        this.emit("onNavigationRailListItemClick", event);
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }
}

customElements.define("md-navigation-rail", MDNavigationRail);

export { MDNavigationRail };
