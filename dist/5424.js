/*! For license information please see 5424.js.LICENSE.txt */
"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[5424],{5424:(e,t,d)=>{d.r(t),d.d(t,{default:()=>m});var n=d(6684),a=d(283),i=d(9155),r=d(6752),o=d(7804);class l extends o.WL{constructor(e){if(super(e),this.it=r.s6,e.type!==o.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===r.s6||null==e)return this._t=void 0,this.it=e;if(e===r.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;const c=(0,o.u$)(l);class s extends a.z{constructor(){super(),new i.d(this,{containerSelector:"#card",updateStyle:!0}),new i.d(this,{containerSelector:"#card2",updateStyle:!0,resize:[],drag:["x"]}),new i.d(this,{containerSelector:"#card3",updateStyle:!0,resize:[],drag:["y"]}),new i.d(this,{containerSelector:"#card4",updateStyle:!0,drag:[],resize:["e","w"]}),new i.d(this,{containerSelector:"#card5",updateStyle:!0,drag:[],resize:["s","n"]}),new i.d(this,{containerSelector:"#card6",updateStyle:!0,dragHandleSelector:'[name="drag_indicator"]'}),new i.d(this,{containerSelector:"#card7",updateStyle:!0,dragAfterLongPress:!0,resizeAfterLongPress:!0}),new i.d(this,{containerSelector:"#card8",updateStyle:!0,selection:!0,dragAfterLongPress:!0,resizeAfterLongPress:!0,selectionAfterLongPress:!0,dragHandleSelector:'[name="drag_indicator"]'})}render(){return n.qy`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card"
                        style="width:224px;height:224px"
                        @onDragStart="${this.handleCardEvent}"
                        @onDrag="${this.handleCardEvent}"
                        @onDragEnd="${this.handleCardEvent}"
                        @onResizeStart="${this.handleCardEvent}"
                        @onResize="${this.handleCardEvent}"
                        @onResizeEnd="${this.handleCardEvent}"
                        @onLongPress="${this.handleCardEvent}"
                        @onTap="${this.handleCardEvent}"
                        @onDoubleTap="${this.handleCardEvent}"
                        @onSwipeTop="${this.handleCardEvent}"
                        @onSwipeRight="${this.handleCardEvent}"
                        @onSwipeBottom="${this.handleCardEvent}"
                        @onSwipeLeft="${this.handleCardEvent}"
                        @onSelectionStart="${this.handleCardEvent}"
                        @onSelection="${this.handleCardEvent}"
                        @onSelectionEnd="${this.handleCardEvent}"
                        >${c(this.cardLog)}</md-card
                    >
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card2"
                        label="no resize, drag only x"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card3"
                        label="no resize, drag only y"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card4"
                        label="no drag, resize only e/w"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card5"
                        label="no drag, resize only s/n"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card6"
                        label="drag handle"
                        leadingActions='[{"component":"icon","icon":"drag_indicator","name":"drag_indicator"}]'
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card7"
                        label="drag/resize After Long Press"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card8"
                        leadingActions='[{"component":"icon","icon":"drag_indicator","name":"drag_indicator"}]'
                        style="width:224px;height:224px"
                        @onDragStart="${this.handleCardEvent8}"
                        @onDrag="${this.handleCardEvent8}"
                        @onDragEnd="${this.handleCardEvent8}"
                        @onResizeStart="${this.handleCardEvent8}"
                        @onResize="${this.handleCardEvent8}"
                        @onResizeEnd="${this.handleCardEvent8}"
                        @onLongPress="${this.handleCardEvent8}"
                        @onTap="${this.handleCardEvent8}"
                        @onDoubleTap="${this.handleCardEvent8}"
                        @onSwipeTop="${this.handleCardEvent8}"
                        @onSwipeRight="${this.handleCardEvent8}"
                        @onSwipeBottom="${this.handleCardEvent8}"
                        @onSwipeLeft="${this.handleCardEvent8}"
                        @onSelectionStart="${this.handleCardEvent8}"
                        @onSelection="${this.handleCardEvent8}"
                        @onSelectionEnd="${this.handleCardEvent8}"
                        >${c(this.cardLog8)}</md-card
                    >
                </div>
            </div>
        `}cardLog="";handleCardEvent(e){const t=e.currentTarget.querySelector(".md-card__inner");this.cardLog+=e.type+"<br>",this.requestUpdate(),window.requestAnimationFrame((()=>{t.scrollTop=t.scrollHeight}))}cardLog8="";handleCardEvent8(e){const t=e.currentTarget.querySelector(".md-card__inner");this.cardLog8+=e.type+"<br>",this.requestUpdate(),window.requestAnimationFrame((()=>{t.scrollTop=t.scrollHeight}))}}customElements.define("dev-gesture",s);const m=document.createElement("dev-gesture")}}]);