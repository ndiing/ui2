"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[9331],{9331:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var n=l(6684),m=l(1421);class u extends m.UX{constructor(){super(),this.buttons1=[{label:"Label 1",selected:!0},{label:"Label 2"},{label:"Label 3"}],this.buttons2=[{label:"Label 1",selected:!0},{label:"Label 2",selected:!0},{label:"Label 3"}]}render(){return n.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-segmented-button
                        .singleSelection="${!0}"
                        .buttons="${this.buttons1}"
                    ></md-segmented-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-segmented-button
                        .singleSelection="${!0}"
                        .multiSelection="${!0}"
                        .buttons="${this.buttons2}"
                    ></md-segmented-button>
                </div>
            </div>
        `}}customElements.define("app-segmented-button",u);const d=document.createElement("app-segmented-button")}}]);