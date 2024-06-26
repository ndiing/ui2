"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[6865],{6865:(o,l,e)=>{e.r(l),e.d(l,{default:()=>i});var c=e(6684),r=e(283);class t extends r.z{render(){return c.qy`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="color">Select color-local</label>
                    <input
                        id="color"
                        name="color-local"
                        type="color-local"
                        value="#6750a4"
                        @input="${this.handleColorLocalInput}"
                    />
                    <md-color-picker
                        id="colorPicker"
                        value="#6750a4"
                        @onColorPickerButtonCancelClick="${this.handleColorPickerButtonCancelClick}"
                        @onColorPickerButtonOkClick="${this.handleColorPickerButtonOkClick}"
                        @onColorPickerSelection="${this.handleColorPickerSelection}"
                    ></md-color-picker>
                    <md-button
                        variant="tonal"
                        label="Color Picker"
                        @click="${this.handleColorPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-color-picker id="colorPicker2"></md-color-picker>
                    <md-button
                        variant="tonal"
                        label="Color Picker 2"
                        @click="${this.handleColorPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get color(){return this.querySelector("#color")}get colorPicker(){return this.querySelector("#colorPicker")}get colorPicker2(){return this.querySelector("#colorPicker2")}handleColorPickerButtonClick(o){this.colorPicker.showModal(o.currentTarget)}handleColorPickerButtonClick2(o){this.colorPicker2.showModal(o.currentTarget)}handleColorLocalInput(){this.colorPicker.value=this.color.value}handleColorPickerButtonCancelClick(){this.color.value=this.colorPicker.value,this.colorPicker.close()}handleColorPickerButtonOkClick(){this.color.value=this.colorPicker.value,this.colorPicker.close()}handleColorPickerSelection(){this.color.value=this.colorPicker.selection.hex.slice(0,7)}}customElements.define("dev-color-picker",t);const i=document.createElement("dev-color-picker")}}]);