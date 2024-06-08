"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[3351],{3351:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var n=i(6684),c=i(1421);class m extends c.UX{render(){return n.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-month-picker
                        id="dateTimePicker1"
                        @onMonthPickerChange="${e=>{button1.label=[dateTimePicker1.selected.getFullYear(),dateTimePicker1.selected.getMonth()+1].join("-")}}"
                        @onMonthPickerButtonOkClick="${e=>dateTimePicker1.close()}"
                        @onMonthPickerButtonCancelClick="${e=>dateTimePicker1.close()}"
                        value="1990-10"
                    ></md-month-picker>
                    <md-button
                        id="button1"
                        @click="${e=>dateTimePicker1.show(e.currentTarget)}"
                        label="month-picker"
                    ></md-button>
                </div>
            </div>
        `}}customElements.define("app-month-picker",m);const l=document.createElement("app-month-picker")}}]);