"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[5363],{5363:(a,e,l)=>{l.r(e),l.d(e,{default:()=>n});var i=l(6684),t=l(1421);class d extends t.UX{constructor(){super(),this.list1=[{leadingIcon:"image",label:"Label 1",selected:!0},{leadingIcon:"image",label:"Label 2",badge:{label:0}},{leadingIcon:"image",label:"Label 3",badge:{label:1}},{leadingIcon:"image",label:"Label 4",badge:{label:1e3}}],this.list2=[{label:"Label 1",selected:!0},{label:"Label 2",badge:{label:0}},{label:"Label 3",badge:{label:1}},{label:"Label 4",badge:{label:1e3}}]}render(){return i.qy`
            <div class="md-layout-border md-layout-fit">
                <md-navigation-drawer
                    .list="${this.list1}"
                    id="navigationDrawer1"
                ></md-navigation-drawer>
                <md-navigation-drawer
                    .list="${this.list2}"
                    ui="modal"
                    id="navigationDrawer2"
                ></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div
                        class="md-layout-column"
                        style="margin:24px;"
                    >
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-button
                                @click="${()=>navigationDrawer1.toggle()}"
                                label="navigation-drawer"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-button
                                @click="${()=>navigationDrawer2.toggle()}"
                                label="navigation-drawer modal"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define("app-navigation-drawer",d);const n=document.createElement("app-navigation-drawer")}}]);