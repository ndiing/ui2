"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[7771],{7771:(e,m,l)=>{l.r(m),l.d(m,{default:()=>a});var t=l(6684),i=l(1421);class d extends i.UX{render(){return t.qy`
            <md-form
                @onFormNativeSubmit="${e=>{console.log(Object.fromEntries(new FormData(e.detail.currentTarget).entries()))}}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-file-field
                            label="File Field"
                            name="file"
                        ></md-file-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-file-field
                            label="File Field (required)"
                            name="file"
                            required
                        ></md-file-field>
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
        `}}customElements.define("app-file-field",d);const a=document.createElement("app-file-field")}}]);