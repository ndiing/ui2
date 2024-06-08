"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[347],{347:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var c=i(6684),l=i(1421);class n extends l.UX{render(){return c.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-week-picker
                        id="dateTimePicker1"
                        @onWeekPickerChange="${e=>{button1.label=[dateTimePicker1.selected.getFullYear(),dateTimePicker1.selected.getWeek()].join("-W")}}"
                        @onWeekPickerButtonOkClick="${e=>dateTimePicker1.close()}"
                        @onWeekPickerButtonCancelClick="${e=>dateTimePicker1.close()}"
                        value="2024-W22"
                    ></md-week-picker>
                    <md-button
                        id="button1"
                        @click="${e=>dateTimePicker1.show(e.currentTarget)}"
                        label="week-picker"
                    ></md-button>
                </div>
            </div>
        `}}customElements.define("app-week-picker",n);const a=document.createElement("app-week-picker")}}]);