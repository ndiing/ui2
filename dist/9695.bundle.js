"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[9695],{9695:(e,m,t)=>{t.r(m),t.d(m,{default:()=>i});var d=t(6684),l=t(1421);class a extends l.UX{render(){return d.qy`
            <md-form
                @onFormNativeSubmit="${e=>{console.log(Object.fromEntries(new FormData(e.detail.currentTarget).entries()))}}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-date-field
                            label="Date Field"
                            name="color0"
                        ></md-date-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-date-field
                            label="Date Field (value)"
                            name="color1"
                            value="1990-10-17"
                        ></md-date-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-date-field
                            label="Date Field (required)"
                            name="color2"
                            required
                        ></md-date-field>
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
        `}}customElements.define("app-date-field",a);const i=document.createElement("app-date-field")}}]);