"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[4913],{4913:(t,e,l)=>{l.r(e),l.d(e,{default:()=>d});var o=l(6684),i=l(283);class n extends i.z{get tooltip(){return this.querySelector("#tooltip")}render(){return o.qy`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tooltip
                        id="tooltip"
                        variant="plain"
                        >tooltip</md-tooltip
                    >
                    <md-button
                        label="button"
                        @click="${this.handleButtonClick}"
                    ></md-button>
                </div>
            </div>
        `}handleButtonClick(t){this.tooltip.toggle(t.currentTarget)}}customElements.define("dev-popper",n);const d=document.createElement("dev-popper")}}]);