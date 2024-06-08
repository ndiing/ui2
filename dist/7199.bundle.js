"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[7199],{7199:(l,e,t)=>{t.r(e),t.d(e,{default:()=>m});var a=t(6684),o=t(1421);class i extends o.UX{render(){return a.qy`
            <md-form
                @onFormNativeSubmit="${l=>{console.log(Object.fromEntries(new FormData(l.detail.currentTarget).entries()))}}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-select-field
                            label="Select Field"
                            name="color0"
                            .options="${[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Option 6",value:"6"},{label:"Option 7",value:"7"},{label:"Option 8",value:"8"},{label:"Option 9",value:"9"},{label:"Option 10",value:"10"}]}"
                        ></md-select-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-select-field
                            label="Select Field (value)"
                            name="color1"
                            .options="${[{label:"Option 1",value:"1",selected:!0},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Option 6",value:"6"},{label:"Option 7",value:"7"},{label:"Option 8",value:"8"},{label:"Option 9",value:"9"},{label:"Option 10",value:"10"}]}"
                        ></md-select-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-select-field
                            label="Select Field (required)"
                            name="color2"
                            required
                            .options="${[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Option 6",value:"6"},{label:"Option 7",value:"7"},{label:"Option 8",value:"8"},{label:"Option 9",value:"9"},{label:"Option 10",value:"10"}]}"
                        ></md-select-field>
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
        `}}customElements.define("app-select-field",i);const m=document.createElement("app-select-field")}}]);