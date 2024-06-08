"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[441],{441:(a,e,i)=>{i.r(e),i.d(e,{default:()=>n});var l=i(6684),t=i(1421);class d extends t.UX{constructor(){super(),this.list1=[{leadingIcon:"image",label:"Label 1",selected:!0},{leadingIcon:"image",label:"Label 2",badge:{label:0}},{leadingIcon:"image",label:"Label 3",badge:{label:1}},{leadingIcon:"image",label:"Label 4",badge:{label:1e3}}],this.list2=[{leadingIcon:"image",selected:!0},{leadingIcon:"image",badge:{label:0}},{leadingIcon:"image",badge:{label:1}},{leadingIcon:"image",badge:{label:1e3}}]}render(){return l.qy`
            <div class="md-layout-border md-layout-fit">
                <md-navigation-bar
                    .list="${this.list1}"
                    id="navigationDrawer1"
                ></md-navigation-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
                        <md-navigation-bar
                            .list="${this.list2}"
                            id="navigationDrawer2"
                        ></md-navigation-bar>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div
                                class="md-layout-column"
                                style="margin:24px;"
                            >
                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button
                                        @click="${()=>navigationDrawer1.toggle()}"
                                        label="navigation-bar"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button
                                        @click="${()=>navigationDrawer2.toggle()}"
                                        label="navigation-bar"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define("app-navigation-bar",d);const n=document.createElement("app-navigation-bar")}}]);