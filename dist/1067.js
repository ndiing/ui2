"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[1067],{1067:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var k=i(6684),c=i(283),l=i(8611);class n extends c.z{render(){return k.qy`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="week">Select week</label>
                    <input
                        id="week"
                        name="week"
                        type="week"
                        value="1990-W42"
                        @input="${this.handleWeekInput}"
                    />
                    <md-week-picker
                        id="weekPicker"
                        value="1990-W42"
                        @onWeekPickerButtonCancelClick="${this.handleWeekPickerButtonCancelClick}"
                        @onWeekPickerButtonOkClick="${this.handleWeekPickerButtonOkClick}"
                        @onWeekPickerSelection="${this.handleWeekPickerSelection}"
                    ></md-week-picker>
                    <md-button
                        variant="tonal"
                        label="Week Picker"
                        @click="${this.handleWeekPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-week-picker id="weekPicker2"></md-week-picker>
                    <md-button
                        variant="tonal"
                        label="Week Picker 2"
                        @click="${this.handleWeekPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get week(){return this.querySelector("#week")}get weekPicker(){return this.querySelector("#weekPicker")}get weekPicker2(){return this.querySelector("#weekPicker2")}handleWeekPickerButtonClick(e){this.weekPicker.showModal(e.currentTarget)}handleWeekPickerButtonClick2(e){this.weekPicker2.showModal(e.currentTarget)}handleWeekInput(){this.weekPicker.value=this.week.value}handleWeekPickerButtonCancelClick(){this.week.value=this.weekPicker.value,this.weekPicker.close()}handleWeekPickerButtonOkClick(){this.week.value=this.weekPicker.value,this.weekPicker.close()}handleWeekPickerSelection(){this.week.value=(0,l._j)(this.weekPicker.selection)}}customElements.define("dev-week-picker",n);const r=document.createElement("dev-week-picker")}}]);