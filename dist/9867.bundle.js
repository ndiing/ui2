"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[9867],{9867:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var a=i(6684),c=i(1421);class d extends c.UX{render(){return a.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-date-picker
                        id="dateTimePicker1"
                        @onDatePickerChange="${e=>{button1.label=[dateTimePicker1.selected.getFullYear(),dateTimePicker1.selected.getMonth()+1,dateTimePicker1.selected.getDate()].join("-")}}"
                        @onDatePickerButtonOkClick="${e=>dateTimePicker1.close()}"
                        @onDatePickerButtonCancelClick="${e=>dateTimePicker1.close()}"
                        value="1990-10-17"
                    ></md-date-picker>
                    <md-button
                        id="button1"
                        @click="${e=>dateTimePicker1.show(e.currentTarget)}"
                        label="date-picker"
                    ></md-button>
                </div>
            </div>
        `}}customElements.define("app-date-picker",d);const l=document.createElement("app-date-picker")}}]);