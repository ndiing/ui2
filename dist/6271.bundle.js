"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[6271],{6271:(e,i,t)=>{t.r(i),t.d(i,{default:()=>a});var c=t(6684),m=t(1421);class n extends m.UX{render(){return c.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-time-picker
                        id="dateTimePicker1"
                        @onTimePickerChange="${e=>{button1.label=[dateTimePicker1.selected.getHours(),dateTimePicker1.selected.getMinutes()].join(":")}}"
                        @onTimePickerButtonOkClick="${e=>dateTimePicker1.close()}"
                        @onTimePickerButtonCancelClick="${e=>dateTimePicker1.close()}"
                        value="10:30"
                    ></md-time-picker>
                    <md-button
                        id="button1"
                        @click="${e=>dateTimePicker1.show(e.currentTarget)}"
                        label="time-picker"
                    ></md-button>
                </div>
            </div>
        `}}customElements.define("app-time-picker",n);const a=document.createElement("app-time-picker")}}]);