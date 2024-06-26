"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[1519],{1519:(e,t,m)=>{m.r(t),m.d(t,{default:()=>c});var o=m(6684),d=m(283);class a extends d.z{render(){return o.qy`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}}customElements.define("dev-checkbox",a);const c=document.createElement("dev-checkbox")}}]);