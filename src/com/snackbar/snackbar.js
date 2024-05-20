import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
class MDSnackbar extends MDElement {
    static get properties() {
        return {
            action: {type:String},
            icon: {type:String},
        };
    }

    constructor() {
        super();

        this.body = Array.from(this.childNodes)
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-snackbar__body">
                ${this.body?html`<div class="md-snackbar__inner">${this.body}</div>`:nothing}
                ${this.icon||this.action?html`
                    <div class="md-snackbar__footer">
                        ${this.action?html`<md-button class="md-snackbar__action" .label="${this.action}"></md-button>`:nothing}
                        ${this.icon?html`<md-icon-button class="md-snackbar__icon" .icon="${this.icon}"></md-icon-button>`:nothing}
                    </div>
                `:nothing}
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-snackbar");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-snackbar");
    }

    updated(changedProperties) {}
}
customElements.define("md-snackbar", MDSnackbar);
export { MDSnackbar };
