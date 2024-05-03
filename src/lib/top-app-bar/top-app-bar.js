import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDTopAppBar extends MDElement {
    static get properties() {
        return {
            leadingActions:{type:Array},
            label:{type:String},
            trailingActions:{type:Array},
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            ${this.leadingActions?.length? html`
                <div class="md-top-app-bar__actions">
                    ${this.leadingActions?.map(action=>html`
                        <md-icon-button 
                            class="md-top-app-bar__action" 
                            .icon="${action.icon??action}"
                        ></md-icon-button>
                    `)}
                </div>
            ` : nothing}
            <div class="md-top-app-bar__label">${this.label}</div>
            ${this.trailingActions?.length? html`
                <div class="md-top-app-bar__actions">
                    ${this.trailingActions?.map(action=>html`
                        <md-icon-button 
                            class="md-top-app-bar__action" 
                            .icon="${action.icon??action}"
                        ></md-icon-button>
                    `)}
                </div>
            ` : nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-top-app-bar");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-top-app-bar");
    }

    updated(changedProperties) {}
}

customElements.define("md-top-app-bar", MDTopAppBar);

export { MDTopAppBar };
