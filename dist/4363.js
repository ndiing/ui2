"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[4363],{4363:(m,e,t)=>{t.r(e),t.d(e,{default:()=>o});var d=t(6684),i=t(283);class l extends i.z{render(){return d.qy`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider0"
                            min="-5000"
                            max="5000"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider1"
                            min="0"
                            max="5000"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider2"
                            min="0"
                            max="5000"
                            step="500"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider3"
                            min="1000"
                            max="10000"
                            value="[2000,8000]"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch
                            name="switch"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            name="switch"
                            value="item2"
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch
                            icons='["check","close"]'
                            name="switch2"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            icons='["check","close"]'
                            name="switch2"
                            value="item2"
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-radio-button
                            name="radio-button"
                            value="item1"
                            checked
                        ></md-radio-button>
                        <md-radio-button
                            name="radio-button"
                            value="item2"
                        ></md-radio-button>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-checkbox
                            name="checkbox"
                            value="item0"
                            indeterminate
                        ></md-checkbox>
                        <md-checkbox
                            name="checkbox"
                            value="item1"
                            checked
                        ></md-checkbox>
                        <md-checkbox
                            name="checkbox"
                            value="item2"
                        ></md-checkbox>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}handleFormNativeReset(m){console.log(m)}handleFormNativeSubmit(m){console.log(JSON.stringify(m.detail.data,null,4))}}customElements.define("dev-form2",l);const o=document.createElement("dev-form2")}}]);