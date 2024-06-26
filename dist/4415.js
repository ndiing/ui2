"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[4415],{4415:(t,e,o)=>{o.r(e),o.d(e,{default:()=>a});var l=o(6684),m=o(283);class d extends m.z{get bottomSheet(){return this.querySelector("#bottomSheet")}get bottomSheetModal(){return this.querySelector("#bottomSheetModal")}render(){return l.qy`
            <div class="md-layout-border">
                <md-bottom-sheet
                    id="bottomSheet"
                    @onCardIconButtonClick=${this.handleBottomSheetClick}
                    @onCardButtonClick=${this.handleBottomSheetClick}
                >
                </md-bottom-sheet>

                <md-bottom-sheet
                    id="bottomSheetModal"
                    variant="modal"
                    @onCardIconButtonClick=${this.handleBottomSheetModalClick}
                    @onCardButtonClick=${this.handleBottomSheetModalClick}
                >
                </md-bottom-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Bottom sheets standard"
                                @click="${this.handleButtonBottomSheetClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Bottom sheets modal"
                                @click="${this.handleButtonBottomSheetModalClick}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonBottomSheetClick(){this.bottomSheet.toggle()}handleButtonBottomSheetModalClick(){this.bottomSheetModal.showModal()}handleBottomSheetClick(){this.bottomSheet.close()}handleBottomSheetModalClick(){this.bottomSheetModal.close()}}customElements.define("dev-bottom-sheet",d);const a=document.createElement("dev-bottom-sheet")}}]);