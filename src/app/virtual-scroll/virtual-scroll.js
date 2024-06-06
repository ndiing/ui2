import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { MDVirtualScrollModule } from "../../com/virtual-scroll/virtual-scroll";

class AppVirtualScrollElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div class="viewport" style="height:calc(56px * 5);">
                        <div class="scrollbar"></div>
                        <div class="container">
                            ${this.list?.map(item=>html`
                                <div class="row" style="height:56px;line-height:56px;">${item.label}</div>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    async connectedCallback(){
        super.connectedCallback()
        await this.updateComplete
        
        this.viewport=this.querySelector('.viewport')
        this.scrollbar=this.querySelector('.scrollbar')
        this.container=this.querySelector('.container')
        this.row='.row'

        this.data=Array.from({length:500000},(v,k) => ({label:`Item ${k+1}`}))

        this.viewport.addEventListener('onVirtualScroll',event=>{
            const {start,limit} = event.detail
            const end=start+limit
            this.list=this.data.slice(start,end)
            this.requestUpdate()
        })

        this.virtualScroll = new MDVirtualScrollModule(this.viewport,{
            scrollbar:this.scrollbar,
            container:this.container,
            total: this.data.length,
            rowHeight: 56,
            threshold: 2,
        })
    }
    disconnectedCallback(){
        super.disconnectedCallback()
        this.virtualScroll.destroy()
    }
}

customElements.define("app-virtual-scroll", AppVirtualScrollElement);

export default document.createElement("app-virtual-scroll");
