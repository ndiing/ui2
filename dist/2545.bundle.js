"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[2545],{2545:(e,t,c)=>{c.r(t),c.d(t,{default:()=>r});var o=c(6684),i=c(1421);class l extends i.UX{render(){return o.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-color-picker
                        id="dateTimePicker1"
                        @onColorPickerChange="${e=>{document.querySelector('[name="theme-color"]').setAttribute("content",dateTimePicker1.selected),button1.label=dateTimePicker1.selected}}"
                        @onColorPickerButtonOkClick="${e=>dateTimePicker1.close()}"
                        @onColorPickerButtonCancelClick="${e=>dateTimePicker1.close()}"
                        value="#6750a4"
                    ></md-color-picker>
                    <md-button
                        id="button1"
                        @click="${e=>dateTimePicker1.show(e.currentTarget)}"
                        label="color-picker"
                    ></md-button>
                </div>
            </div>
        `}}customElements.define("app-color-picker",l);const r=document.createElement("app-color-picker")}}]);