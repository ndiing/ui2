import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Ripple } from "../ripple/ripple";

class MDButton extends MDElement {
    static get properties() {
        return {
            icon:{type:String},
            type:{type:String},
            ui:{type:String},
        };
    }

    constructor() {
        super();

        this.type='icon-button'
    }

    render() {
        // prettier-ignore
        return html`
            <icon-button class="md-icon-button__native" .type="${this.type}"></icon-button>
            <div class="md-icon-button__icon">${this.icon}</div>
        `
    }

    get iconButtonNative(){
        return this.querySelector('.md-icon-button__native')
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon-button");
        await this.updateComplete
        this.ripple=new Ripple(this,{
            button:this.iconButtonNative,
            containment:false,
            size:this.ui?40/40*100:40/24*100,
            fadeout:true
        })
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-icon-button");
        this.ripple.destroy()
    }

    updated(changedProperties) {
        if(changedProperties.has('ui')){
            if(this.ui){
                this.classList.add('md-icon-button--'+this.ui)
            }else{
                this.classList.add('md-icon-button--filled')
                this.classList.add('md-icon-button--filled-tonal')
            }
        }
    }
}

customElements.define("md-icon-button", MDButton);

export { MDButton };
