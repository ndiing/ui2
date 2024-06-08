"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[2559],{2559:(e,m,l)=>{l.r(m),l.d(m,{default:()=>i});var t=l(6684),d=l(1421);class a extends d.UX{render(){return t.qy`
            <md-form
                @onFormNativeSubmit="${e=>{console.log(Object.fromEntries(new FormData(e.detail.currentTarget).entries()))}}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-search-field
                            label="Search Field"
                            name="number"
                        ></md-search-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-search-field
                            label="Search Field (value)"
                            name="number"
                            value="123456"
                        ></md-search-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-search-field
                            label="Search Field (required)"
                            name="number"
                            required
                        ></md-search-field>
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
        `}}customElements.define("app-search-field",a);const i=document.createElement("app-search-field")}}]);