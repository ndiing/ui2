import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { Ripple } from "../ripple/ripple";

class MDChip extends MDElement {
    static get properties() {
        return {
            avatar:{type:String},
            leadingIcon:{type:String},
            label:{type:String},
            trailingIcon:{type:String},
            selected:{type:Boolean,reflect:true},
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            ${this.selected?html`
                <md-icon class="md-chip__indicator">check</md-icon>
            `:html`
                ${this.avatar?html`<md-image class="md-chip__avatar" .src="${this.avatar}" .ratio="${"1/1"}" .rounded="${true}"></md-image>`:nothing}
                ${this.leadingIcon?html`<md-icon class="md-chip__icon">${this.leadingIcon}</md-icon>`:nothing}
            `}
            ${this.label?html`<div class="md-chip__label">${this.label}</div>`:nothing}
            ${this.trailingIcon?html`<md-icon class="md-chip__icon">${this.trailingIcon}</md-icon>`:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-chip");

        this.ripple=new Ripple(this,{})
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-chip");

        this.ripple.destroy()
    }

    updated(changedProperties) {}
}

customElements.define("md-chip", MDChip);

export { MDChip };
