"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[8991],{8991:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var c=i(6684),m=i(1421);class d extends m.UX{render(){return c.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-datetime-picker
                        id="dateTimePicker1"
                        @onDatetimePickerChange="${e=>{button1.label=[[dateTimePicker1.selected.getFullYear(),dateTimePicker1.selected.getMonth()+1,dateTimePicker1.selected.getDate()].join("-"),[dateTimePicker1.selected.getHours(),dateTimePicker1.selected.getMinutes()].join(":")].join("T")}}"
                        @onDatetimePickerButtonOkClick="${e=>dateTimePicker1.close()}"
                        @onDatetimePickerButtonCancelClick="${e=>dateTimePicker1.close()}"
                    ></md-datetime-picker>
                    <md-button
                        id="button1"
                        @click="${e=>dateTimePicker1.show(e.currentTarget)}"
                        label="datetime-picker"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-datetime-picker
                        id="dateTimePicker2"
                        @onDatetimePickerChange="${e=>{button1.label=[[dateTimePicker2.selected.getFullYear(),dateTimePicker2.selected.getMonth()+1,dateTimePicker2.selected.getDate()].join("-"),[dateTimePicker2.selected.getHours(),dateTimePicker2.selected.getMinutes()].join(":")].join("T")}}"
                        @onDatetimePickerButtonOkClick="${e=>dateTimePicker2.close()}"
                        @onDatetimePickerButtonCancelClick="${e=>dateTimePicker2.close()}"
                        value="1990-10-17T20:30"
                    ></md-datetime-picker>
                    <md-button
                        id="button1"
                        @click="${e=>dateTimePicker2.show(e.currentTarget)}"
                        label="datetime-picker"
                    ></md-button>
                </div>
            </div>
        `}}customElements.define("app-datetime-picker",d);const a=document.createElement("app-datetime-picker")}}]);