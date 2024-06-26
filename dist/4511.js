"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[4511],{4511:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var a=i(6684),c=i(283),l=i(8611);class m extends c.z{render(){return a.qy`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="datetimeLocal">Select datetime-local</label>
                    <input
                        id="datetimeLocal"
                        name="datetime-local"
                        type="datetime-local"
                        value="1990-10-17T20:30"
                        @input="${this.handleDatetimeLocalInput}"
                    />
                    <md-datetime-picker
                        id="datetimePicker"
                        value="1990-10-17T20:30"
                        @onDatetimePickerButtonCancelClick="${this.handleDatetimePickerButtonCancelClick}"
                        @onDatetimePickerButtonOkClick="${this.handleDatetimePickerButtonOkClick}"
                        @onDatetimePickerSelection="${this.handleDatetimePickerSelection}"
                    ></md-datetime-picker>
                    <md-button
                        variant="tonal"
                        label="Datetime Picker"
                        @click="${this.handleDatetimePickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-datetime-picker id="datetimePicker2"></md-datetime-picker>
                    <md-button
                        variant="tonal"
                        label="Datetime Picker 2"
                        @click="${this.handleDatetimePickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get datetimeLocal(){return this.querySelector("#datetimeLocal")}get datetimePicker(){return this.querySelector("#datetimePicker")}get datetimePicker2(){return this.querySelector("#datetimePicker2")}handleDatetimePickerButtonClick(e){this.datetimePicker.showModal(e.currentTarget)}handleDatetimePickerButtonClick2(e){this.datetimePicker2.showModal(e.currentTarget)}handleDatetimeLocalInput(){this.datetimePicker.value=this.datetimeLocal.value}handleDatetimePickerButtonCancelClick(){this.datetimeLocal.value=this.datetimePicker.value,this.datetimePicker.close()}handleDatetimePickerButtonOkClick(){this.datetimeLocal.value=this.datetimePicker.value,this.datetimePicker.close()}handleDatetimePickerSelection(){this.datetimeLocal.value=(0,l.UI)(this.datetimePicker.selection)}}customElements.define("dev-datetime-picker",m);const d=document.createElement("dev-datetime-picker")}}]);