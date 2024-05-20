import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";
import { classMap } from "lit/directives/class-map.js";

class MDTab extends MDElement {
    static get properties() {
        return Object.assign(MDList.properties, {
            ui: { type: String },
        });
    }

    constructor() {
        super();
        this.ui = "primary";
    }

    render() {
        // prettier-ignore
        return html`
            <md-list
                class="${classMap({
                    'md-tab__list':true,
                    'md-tab__list--primary':this.ui=='primary',
                    'md-tab__list--secondary':this.ui=='secondary',
                })}"
                .list="${this.list}"
                .singleSelection="${true}"
                @onListItemSelected="${this.handleTabListItemSelected}"
            ></md-list>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-tab");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tab");
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.add("md-tab--primary");
            this.classList.add("md-tab--secondary");
            if (this.ui) {
                this.classList.add("md-tab--" + this.ui);
            }
        }
    }

    handleTabListItemSelected(event) {
        window.requestAnimationFrame(() => {
            let width;
            let left;
    
            width = event.detail.clientWidth;
            left = event.detail.offsetLeft;
    
            if (this.ui == "primary") {
                const label = event.detail.querySelector(".md-list__label");
    
                width = label.clientWidth;
                left = event.detail.offsetLeft + label.offsetLeft;
            }
    
            this.style.setProperty("--md-tab-width", width + "px");
            this.style.setProperty("--md-tab-left", left + "px");
    
            this.emit("onTabListItemSelected", event);
        })
    }
}

customElements.define("md-tab", MDTab);

export { MDTab };
