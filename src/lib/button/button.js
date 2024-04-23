import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Ripple } from "../ripple/ripple";

class MDButton extends MDElement {
    static get properties() {
        return {
            label:{type:String},
            type:{type:String},
            ui:{type:String},
        };
    }

    constructor() {
        super();

        this.type='button'
    }

    render() {
        // prettier-ignore
        return html`
            <button class="md-button__native" .type="${this.type}"></button>
            <div class="md-button__label">${this.label}</div>
        `
    }

    get buttonNative(){
        return this.querySelector('.md-button__native')
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
        await this.updateComplete
        this.ripple=new Ripple(this,{
            button:this.buttonNative,
            inverted:this.ui==='filled'
        })
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-button");
        this.ripple?.destroy()
    }

    updated(changedProperties) {
        if(changedProperties.has('ui')){
            if(this.ui){
                this.classList.add('md-button--'+this.ui)
            }else{
                this.classList.add('md-button--filled')
                this.classList.add('md-button--filled-tonal')
            }
        }
    }
}

customElements.define("md-button", MDButton);

export { MDButton };
