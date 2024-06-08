"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[2999],{2999:(e,l,n)=>{n.r(l),n.d(l,{default:()=>i});var m=n(6684),a=n(1421);class t extends a.UX{constructor(){super(),this.list=[{leadingIcon:"image",label:"Label 1",selected:!0},{leadingIcon:"image",label:"Label 2"},{leadingIcon:"image",label:"Label 3"},{leadingIcon:"image",label:"Label 4"}]}render(){return m.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-menu
                        id="menu1"
                        .list="${this.list}"
                        @onListItemClick="${()=>menu1.close()}"
                    ></md-menu>
                    <md-button
                        @click="${e=>menu1.show(e.currentTarget,{})}"
                        label="menu"
                    ></md-button>
                </div>
            </div>
        `}}customElements.define("app-menu",t);const i=document.createElement("app-menu")}}]);