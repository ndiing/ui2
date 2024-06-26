"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[7479],{7479:(i,a,t)=>{t.r(a),t.d(a,{default:()=>o});var n=t(6684),l=t(283);class e extends l.z{get navigationRail(){return this.querySelector("#navigationRail")}get navigationRail2(){return this.querySelector("#navigationRail2")}render(){return n.qy`
            <div class="md-layout-border">
                <md-navigation-rail
                    id="navigationRail"
                    .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    @onCardIconButtonClick=${this.navigationRailClick}
                    @onCardButtonClick=${this.navigationRailClick}
                ></md-navigation-rail>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-rail
                            id="navigationRail2"
                            .list="${[{icon:"image",selected:!0},{icon:"image",badge:0},{icon:"image",badge:1},{icon:"image",badge:1111}]}"
                            @onCardIconButtonClick=${this.navigationRail2Click}
                            @onCardButtonClick=${this.navigationRail2Click}
                        ></md-navigation-rail>

                        <div
                            id="center"
                            class="md-layout-border__item md-layout-border__item--center"
                        >
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Navigation rail label text"
                                        @click="${this.handleButtonNavigationRailClick}"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Navigation rail no label text"
                                        @click="${this.handleButtonNavigationRail2Click}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonNavigationRailClick(){this.navigationRail.toggle()}handleButtonNavigationRail2Click(){this.navigationRail2.toggle()}navigationRailClick(){this.navigationRail.close()}navigationRail2Click(){this.navigationRail2.close()}}customElements.define("dev-navigation-rail",e);const o=document.createElement("dev-navigation-rail")}}]);