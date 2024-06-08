"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[5707],{5707:(m,e,l)=>{l.r(e),l.d(e,{default:()=>a});var i=l(6684),d=l(1421);class t extends d.UX{render(){return i.qy`
            <md-form
                @onFormNativeSubmit="${m=>{console.log(Object.fromEntries(new FormData(m.detail.currentTarget).entries()))}}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-email-field
                            label="Email Field"
                            name="number"
                        ></md-email-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-email-field
                            label="Email Field (value)"
                            name="number"
                            value="ndiing.inc@gmail.com"
                        ></md-email-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-email-field
                            label="Email Field (required)"
                            name="number"
                            required
                        ></md-email-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-button
                            type="reset"
                            label="Reset"
                        ></md-button>
                        <md-button
                            type="submit"
                            label="Submit"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}}customElements.define("app-email-field",t);const a=document.createElement("app-email-field")}}]);