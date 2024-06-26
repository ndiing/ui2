"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[7929],{7929:(t,e,m)=>{m.r(e),m.d(e,{default:()=>i});var o=m(6684),d=m(283);class a extends d.z{render(){return o.qy`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
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
        `}handleFormNativeReset(t){console.log(t)}handleFormNativeSubmit(t){console.log(JSON.stringify(t.detail.data,null,4))}}customElements.define("dev-radio-button",a);const i=document.createElement("dev-radio-button")}}]);