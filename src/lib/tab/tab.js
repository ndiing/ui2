import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";

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
                class="md-tab__list"
                .list="${this.list}"
                @onListContainerSelected="${this.handleListContainerSelected}"
            ></md-list>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tab");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tab");
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            if (this.ui) {
                this.classList.add("md-tab--" + this.ui);
            } else {
                this.classList.add("md-tab--primary");
                this.classList.add("md-tab--secondary");
            }
        }
    }

    handleListContainerSelected(event) {
        const rect = this.getBoundingClientRect();
        const tabRect = event.detail.getBoundingClientRect();
        const left = tabRect.left - rect.left;
        const width = tabRect.width;
        this.style.setProperty("--md-tab-width", width + "px");
        this.style.setProperty("--md-tab-left", left + "px");
        this.emit('onTabListContainerSelected',event)
    }
}

customElements.define("md-tab", MDTab);

export { MDTab };
