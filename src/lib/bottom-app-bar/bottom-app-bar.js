import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDBottomAppBar extends MDElement {
    static get properties() {
        return {
            actions:{type:Array},
            fab:{type:Object},
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-bottom-app-bar__actions">
                ${this.actions?.map(action=>html`
                    <md-icon-button 
                        class="md-bottom-app-bar__action" 
                        .icon="${action?.icon??action}"
                        @click="${this.handleBottomAppBarActionClick}"
                    ></md-icon-button>
                `)}
            </div>
            ${this.fab ? html`
                <md-fab 
                    class="md-bottom-app-bar__fab" 
                    .icon="${this.fab?.icon??this.fab}"
                    .ui="${this.fab?.ui??"unelevated"}"
                    @click="${this.handleBottomAppBarFabClick}"
                ></md-fab>
            ` : nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-app-bar");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-app-bar");
    }

    updated(changedProperties) {}

    handleBottomAppBarActionClick(event) {
        this.emit('onBottomAppBarActionClick',event)
    }

    handleBottomAppBarFabClick(event) {
        this.emit('onBottomAppBarFabClick',event)
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBar);

export { MDBottomAppBar };
