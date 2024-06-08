"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[8967],{8967:(m,e,t)=>{t.r(e),t.d(e,{default:()=>n});var l=t(6684),d=t(1421);class o extends d.UX{render(){return l.qy`
            <md-form
                @onFormNativeSubmit="${m=>{console.log(Object.fromEntries(new FormData(m.detail.currentTarget).entries()))}}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-month-field
                            label="Month Field"
                            name="color0"
                        ></md-month-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-month-field
                            label="Month Field (value)"
                            name="color1"
                            value="1990-10"
                        ></md-month-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-month-field
                            label="Month Field (required)"
                            name="color2"
                            required
                        ></md-month-field>
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
        `}}customElements.define("app-month-field",o);const n=document.createElement("app-month-field")}}]);