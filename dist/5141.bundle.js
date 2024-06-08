"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[5141],{5141:(e,m,d)=>{d.r(m),d.d(m,{default:()=>o});var l=d(6684),t=d(1421);class a extends t.UX{render(){return l.qy`
            <md-form
                @onFormNativeSubmit="${e=>{console.log(Object.fromEntries(new FormData(e.detail.currentTarget).entries()))}}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-password-field
                            label="Password Field"
                            name="number"
                        ></md-password-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-password-field
                            label="Password Field (value)"
                            name="number"
                            value="123456"
                        ></md-password-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-password-field
                            label="Password Field (required)"
                            name="number"
                            required
                        ></md-password-field>
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
        `}}customElements.define("app-password-field",a);const o=document.createElement("app-password-field")}}]);