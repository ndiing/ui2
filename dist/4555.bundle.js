"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[4555],{4555:(t,l,e)=>{e.r(l),e.d(l,{default:()=>o});var i=e(6684),a=e(1421),r=e(673);class s extends a.UX{constructor(){super()}render(){return i.qy`
            <div
                class="viewport"
                style="width:100%;height:100%;"
            >
                <div class="scrollbar scrollbar--x"></div>
                <div class="scrollbar scrollbar--y"></div>
                <div class="container">
                    ${this.list?.map((t=>i.qy`
                            <div
                                .data="${t}"
                                class="row"
                                style="display:flex;height:56px;"
                            >
                                ${t.map((t=>i.qy`
                                        <div
                                            .data="${t}"
                                            class="column"
                                            style="flex:1 0 auto;width:200px;border:1px solid var(--md-sys-color-outline-variant);"
                                        >
                                            ${t.label}
                                        </div>
                                    `))}
                            </div>
                        `))}
                </div>
            </div>
        `}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.data=Array.from({length:1e3},((t,l)=>Array.from({length:100},((t,e)=>({label:100*l+e+1}))))),this.viewport=this.querySelector(".viewport"),this.viewport.addEventListener("onVirtualScroll",this.onVirtualScroll.bind(this)),this.virtualScroll=new r.i(this.viewport,{container:".container",scrollbar:".scrollbar",row:".row",totalY:this.data.length})}disconnectedCallback(){super.disconnectedCallback(),this.viewport.removeEventListener("onVirtualScroll",this.onVirtualScroll),this.virtualScroll&&this.virtualScroll.destroy()}onVirtualScroll(t){const{startX:l,startY:e,endX:i,endY:a,options:{column:r}}=t.detail;this.list=r?this.data.slice(e,a).map((t=>t.slice(l,i))):this.data.slice(e,a),this.requestUpdate()}}customElements.define("app-virtual-scroll",s);const o=document.createElement("app-virtual-scroll")}}]);