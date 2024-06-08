"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[9583],{9583:(t,e,m)=>{m.r(e),m.d(e,{default:()=>d});var a=m(6684),i=m(1421);class o extends i.UX{render(){return a.qy`
            <div class="md-layout-border md-layout-fit">
                <md-bottom-app-bar
                    .leadingActions="${[{icon:"image"},{icon:"image"},{icon:"image"},{icon:"image"}]}"
                    .fab="${{icon:"image"}}"
                    id="sidesheet1"
                ></md-bottom-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
                        <md-bottom-app-bar
                            .leadingActions="${[{icon:"image"},{icon:"image"},{icon:"image"},{icon:"image"}]}"
                            id="sidesheet2"
                        ></md-bottom-app-bar>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div
                                class="md-layout-column"
                                style="margin:24px;"
                            >
                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button
                                        @click="${()=>sidesheet1.toggle()}"
                                        label="bottom-app-bar"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button
                                        @click="${()=>sidesheet2.toggle()}"
                                        label="bottom-app-bar"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define("app-bottom-app-bar",o);const d=document.createElement("app-bottom-app-bar")}}]);