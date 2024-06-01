import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list";
import { classMap } from "lit/directives/class-map.js";

class MDTabsComponent extends MDElement {
    static get properties() {
        return {
            ...MDListComponent.properties,
            ui: { type: String },
        };
    }

    constructor() {
        super();
    }

    /* prettier-ignore */

    render() {
        return html`
            <md-list 
                class="${classMap({
                    'md-tabs__list':true,
                    'md-tabs__list--primary':!this.ui?.includes('secondary'),
                    'md-tabs__list--secondary':this.ui?.includes('secondary'),
                })}"
                .list="${ifDefined(this.list)}"
                .rangeSelection="${ifDefined(this.rangeSelection)}"
                .multiSelection="${ifDefined(this.multiSelection)}"
                .singleSelection="${ifDefined(this.singleSelection??true)}"
                .allSelection="${ifDefined(this.allSelection)}"
                @onListItemSelected="${this.handleListItemSelected}"
            ></md-list>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tabs");
        await this.updateComplete;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tabs");
        await this.updateComplete;
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["scrollable", "primary", "secondary"].forEach((ui) => {
                this.classList.remove("md-tabs--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-tabs--" + ui);
                });
            }
        }
    }

    handleListItemSelected(event) {
        const item = event.detail;

        window.requestAnimationFrame(() => {
            let left = item.offsetLeft;
            let width = item.clientWidth;
            if (!this.ui?.includes("secondary")) {
                const label = item.querySelector(".md-list__label");
                left = item.offsetLeft + label.offsetLeft;
                width = label.clientWidth;
            }
            this.style.setProperty("--md-tabs-width", width + "px");
            this.style.setProperty("--md-tabs-left", left + "px");
            if (this.ui?.includes("scrollable")) {
                item.scrollIntoView({
                    block: "center",
                    inline: "center",
                    behavior: "smooth",
                });
            }
        });
    }
}

customElements.define("md-tabs", MDTabsComponent);

export { MDTabsComponent };
