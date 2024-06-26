"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[5695],{5695:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var m=l(6684),a=l(283);class d extends a.z{render(){return m.qy`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            label="Text field"
                            type="text"
                            value="text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="textarea"
                            label="Textarea field"
                            type="textarea"
                            value="textarea"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="select"
                            label="Select field"
                            type="select"
                            .options="${[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5",selected:!0}]}"
                        ></md-text-field>
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}}customElements.define("dev-text-field3",d);const i=document.createElement("dev-text-field3")}}]);