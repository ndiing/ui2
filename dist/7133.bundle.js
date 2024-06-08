"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[7133],{7133:(e,m,l)=>{l.r(m),l.d(m,{default:()=>n});var t=l(6684),d=l(1421);class u extends d.UX{render(){return t.qy`
            <md-form
                @onFormNativeSubmit="${e=>{console.log(Object.fromEntries(new FormData(e.detail.currentTarget).entries()))}}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-number-field
                            label="Number Field"
                            name="number"
                        ></md-number-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-number-field
                            label="Number Field (value)"
                            name="number"
                            value="123456"
                        ></md-number-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-number-field
                            label="Number Field (required)"
                            name="number"
                            required
                        ></md-number-field>
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
        `}}customElements.define("app-number-field",u);const n=document.createElement("app-number-field")}}]);