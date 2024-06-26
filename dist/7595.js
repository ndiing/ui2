"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[7595],{7595:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var i=a(6684),c=a(283),d=a(8611);class l extends c.z{render(){return i.qy`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="date">Select date</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        value="1990-10-17"
                        @input="${this.handleDateInput}"
                    />
                    <md-date-picker
                        id="datePicker"
                        value="1990-10-17"
                        @onDatePickerButtonCancelClick="${this.handleDatePickerButtonCancelClick}"
                        @onDatePickerButtonOkClick="${this.handleDatePickerButtonOkClick}"
                        @onDatePickerSelection="${this.handleDatePickerSelection}"
                    ></md-date-picker>
                    <md-button
                        variant="tonal"
                        label="Date Picker"
                        @click="${this.handleDatePickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-date-picker id="datePicker2"></md-date-picker>
                    <md-button
                        variant="tonal"
                        label="Date Picker 2"
                        @click="${this.handleDatePickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get date(){return this.querySelector("#date")}get datePicker(){return this.querySelector("#datePicker")}get datePicker2(){return this.querySelector("#datePicker2")}handleDatePickerButtonClick(e){this.datePicker.showModal(e.currentTarget)}handleDatePickerButtonClick2(e){this.datePicker2.showModal(e.currentTarget)}handleDateInput(){this.datePicker.value=this.date.value}handleDatePickerButtonCancelClick(){this.date.value=this.datePicker.value,this.datePicker.close()}handleDatePickerButtonOkClick(){this.date.value=this.datePicker.value,this.datePicker.close()}handleDatePickerSelection(){this.date.value=(0,d.sq)(this.datePicker.selection)}}customElements.define("dev-date-picker",l);const n=document.createElement("dev-date-picker")}}]);