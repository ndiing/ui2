"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[8320],{8320:(t,i,o)=>{o.r(i),o.d(i,{default:()=>h});var l=o(6684),s=o(283);class r{constructor(t,i){(this.host=t).addController(this),this.options={viewportSelector:null,rowTotal:0,rowHeight:52,buffer:2,columnTotal:0,columnWidth:156,...i},this.cache=null}emit(t,i){const o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:i});this.viewport&&this.viewport.dispatchEvent(o)}async hostConnected(){await this.host.updateComplete,this.viewport=this.options.viewportSelector?this.host.querySelector(this.options.viewportSelector):this.host,this.viewport&&(this.handleVirtualScroll=this.handleVirtualScroll.bind(this),this.viewport.addEventListener("scroll",this.handleVirtualScroll),this.handleVirtualScroll())}async hostDisconnected(){await this.host.updateComplete,this.viewport&&this.viewport.removeEventListener("scroll",this.handleVirtualScroll)}handleVirtualScroll(t){window.requestAnimationFrame((()=>{this.options.rowTotal&&(this.scrollbarHeight=this.options.rowTotal*this.options.rowHeight,this.rowStart=Math.floor(this.viewport.scrollTop/this.options.rowHeight)-this.options.buffer,this.rowStart=Math.max(0,this.rowStart),this.rowLimit=Math.ceil(this.viewport.clientHeight/this.options.rowHeight)+2*this.options.buffer,this.rowLimit=Math.min(this.options.rowTotal-this.rowStart,this.rowLimit),this.rowEnd=this.rowStart+this.rowLimit,this.translateY=this.rowStart*this.options.rowHeight),this.options.columnTotal&&(this.scrollbarWidth=this.options.columnTotal*this.options.columnWidth,this.columnStart=Math.floor(this.viewport.scrollLeft/this.options.columnWidth)-this.options.buffer,this.columnStart=Math.max(0,this.columnStart),this.columnLimit=Math.ceil(this.viewport.clientWidth/this.options.columnWidth)+2*this.options.buffer,this.columnLimit=Math.min(this.options.columnTotal-this.columnStart,this.columnLimit),this.columnEnd=this.columnStart+this.columnLimit,this.translateX=this.columnStart*this.options.columnWidth);let i=JSON.stringify([this.rowStart,this.rowEnd,this.columnStart,this.columnEnd]);this.cache!==i&&(this.cache=i,this.emit("onVirtualScrollChange",t)),this.emit("onVirtualScroll",t)}))}}class e extends s.z{get viewport(){return this.querySelector(".md-virtual")}get scrollbar(){return this.querySelector(".md-virtual__scrollbar")}get container(){return this.querySelector(".md-virtual__container")}constructor(){super(),this.virtualScroll=new r(this,{viewportSelector:".md-virtual",rowTotal:1e3,rowHeight:52,buffer:2,columnTotal:1e3,columnWidth:156}),this.addEventListener("onVirtualScrollChange",(()=>{console.log(this.virtualScroll.rowStart,this.virtualScroll.rowEnd,this.virtualScroll.columnStart,this.virtualScroll.columnEnd),this.scrollbar.style.height=this.virtualScroll.scrollbarHeight+"px",this.scrollbar.style.width=this.virtualScroll.scrollbarWidth+"px"}))}render(){return l.qy`
            <div
                class="md-layout-column"
                style="margin:0;padding:24px;min-height:0;min-width:0;height:100%;width:100%;"
            >
                <div
                    class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4"
                    style="min-height:0;min-width:0;height:100%;width:100%;"
                >
                    <div class="md-virtual">
                        <div class="md-virtual__scrollbar"></div>
                        <div class="md-virtual__container"></div>
                    </div>
                </div>
            </div>
        `}}customElements.define("dev-virtual",e);const h=document.createElement("dev-virtual")}}]);