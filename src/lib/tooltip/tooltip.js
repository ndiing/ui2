import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Popper } from "../popper/popper";

class MDTooltip extends MDElement {
    static get properties() {
        return {
            open:{type:Boolean,reflect:true},
        };
    }

    constructor() {
        super();
        this.body=Array.from(this.childNodes)
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-tooltip__body">${this.body}</div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tooltip");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tooltip");
    }

    updated(changedProperties) {
    }

    close(){
        this.open=false
        this.popper?.destroy()
    }
    show(button,options={}){
        this.open=true
        this.popper=new Popper(this,{
            button,
            placements:[
                'bottom',
                'bottom-start',
                'bottom-end',
                'top',
                'top-start',
                'top-end',
            ],
            offset:4,
            ...options
        })
        this.popper.setPlacement()
    }
}

customElements.define("md-tooltip", MDTooltip);

export { MDTooltip };
