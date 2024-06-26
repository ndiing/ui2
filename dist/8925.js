"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[8925],{8925:(e,t,m)=>{m.r(t),m.d(t,{default:()=>c});var i=m(6684),d=m(283);class l extends d.z{render(){return i.qy`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
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
                            icons='["close","check"]'
                            name="switch2"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            icons='["close","check"]'
                            name="switch2"
                            value="item2"
                        ></md-switch>
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}}customElements.define("dev-switch",l);const c=document.createElement("dev-switch")}}]);