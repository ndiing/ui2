import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";

class MDExtendedFab extends MDElement {
    static get properties() {
        return {
            icon:{type:String},
            label:{type:String},
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-extended-fab__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-extended-fab__label">${this.label}</div>`:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-extended-fab");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-extended-fab");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-extended-fab", MDExtendedFab);

export { MDExtendedFab };
