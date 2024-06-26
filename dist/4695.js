"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[4695],{4695:(e,t,d)=>{d.r(t),d.d(t,{default:()=>o});var i=d(6684),l=d(283);class a extends l.z{get sideSheet(){return this.querySelector("#sideSheet")}get sideSheetModal(){return this.querySelector("#sideSheetModal")}render(){return i.qy`
            <div class="md-layout-border">
                <md-side-sheet
                    id="sideSheet"
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSideSheetClick}
                    @onCardButtonClick=${this.handleSideSheetClick}
                ></md-side-sheet>

                <md-side-sheet
                    id="sideSheetModal"
                    variant="modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                    actions='[{"label":"Save","variant":"filled"},{"label":"Cancel","variant":"outlined"}]'
                    @onCardIconButtonClick=${this.handleSideSheetModalClick}
                    @onCardButtonClick=${this.handleSideSheetModalClick}
                ></md-side-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Standard side sheet"
                                @click="${this.handleButtonSideSheetClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Modal side sheet"
                                @click="${this.handleButtonSideSheetModalClick}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonSideSheetClick(){this.sideSheet.toggle()}handleButtonSideSheetModalClick(){this.sideSheetModal.showModal()}handleSideSheetClick(){this.sideSheet.close()}handleSideSheetModalClick(){this.sideSheetModal.close()}}customElements.define("dev-side-sheet",a);const o=document.createElement("dev-side-sheet")}}]);