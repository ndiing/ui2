"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[2879],{2879:(e,i,t)=>{t.r(i),t.d(i,{default:()=>r});var m=t(6684),c=t(283),l=t(8611);class n extends c.z{render(){return m.qy`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="time">Select time</label>
                    <input
                        id="time"
                        name="time"
                        type="time"
                        value="20:30"
                        @input="${this.handleTimeInput}"
                    />
                    <md-time-picker
                        id="timePicker"
                        value="20:30"
                        @onTimePickerButtonCancelClick="${this.handleTimePickerButtonCancelClick}"
                        @onTimePickerButtonOkClick="${this.handleTimePickerButtonOkClick}"
                        @onTimePickerSelection="${this.handleTimePickerSelection}"
                    ></md-time-picker>
                    <md-button
                        variant="tonal"
                        label="Time Picker"
                        @click="${this.handleTimePickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-time-picker id="timePicker2"></md-time-picker>
                    <md-button
                        variant="tonal"
                        label="Time Picker 2"
                        @click="${this.handleTimePickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get time(){return this.querySelector("#time")}get timePicker(){return this.querySelector("#timePicker")}get timePicker2(){return this.querySelector("#timePicker2")}handleTimePickerButtonClick(e){this.timePicker.showModal(e.currentTarget)}handleTimePickerButtonClick2(e){this.timePicker2.showModal(e.currentTarget)}handleTimeInput(){this.timePicker.value=this.time.value}handleTimePickerButtonCancelClick(){this.time.value=this.timePicker.value,this.timePicker.close()}handleTimePickerButtonOkClick(){this.time.value=this.timePicker.value,this.timePicker.close()}handleTimePickerSelection(){this.time.value=(0,l.t5)(this.timePicker.selection)}}customElements.define("dev-time-picker",n);const r=document.createElement("dev-time-picker")}}]);