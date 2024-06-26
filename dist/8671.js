"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[8671],{8671:(e,a,l)=>{l.r(a),l.d(a,{default:()=>m});var n=l(6684),t=l(283),i=l(3878),o=l(5222);const d=Object.keys(i.r4).map((e=>({name:e,value:i.r4[e]})));class c extends t.z{render(){return n.qy`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <div>${(0,o.ab)("The older sisters perched on the window of grandma, her old teeth were only two")}</div>
                    <label for="localization">Select localization</label>
                    <select
                        name=""
                        id="localization"
                        @change="${this.handleChange}"
                    >
                        <option value="en">Select language</option>
                        ${d.map((e=>n.qy`
                                <option
                                    value="${e.value}"
                                    ?disabled="${!["af","ak","am","id"].includes(e.value)}"
                                >
                                    ${e.name}
                                </option>
                            `))}
                    </select>
                </div>
            </div>
        `}handleChange(e){(0,i.xS)(e.currentTarget.value)}}customElements.define("dev-localization",c);const m=document.createElement("dev-localization")}}]);