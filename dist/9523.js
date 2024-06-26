"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[9523],{9523:(a,i,t)=>{t.r(i),t.d(i,{default:()=>o});var e=t(6684),n=t(283);class r extends n.z{get navigationDrawer(){return this.querySelector("#navigationDrawer")}get navigationDrawer2(){return this.querySelector("#navigationDrawer2")}render(){return e.qy`
            <div class="md-layout-border">
                <md-navigation-drawer
                    id="navigationDrawer"
                    .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    @onCardIconButtonClick=${this.navigationDrawerClick}
                    @onCardButtonClick=${this.navigationDrawerClick}
                ></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-drawer
                            id="navigationDrawer2"
                            variant="modal"
                            .list="${[{label:"Item 1",selected:!0},{label:"Item 2",badge:0},{label:"Item 3",badge:1},{label:"Item 4",badge:1111}]}"
                            @onCardIconButtonClick=${this.navigationDrawer2Click}
                            @onCardButtonClick=${this.navigationDrawer2Click}
                        ></md-navigation-drawer>

                        <div
                            id="center"
                            class="md-layout-border__item md-layout-border__item--center"
                        >
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Standard navigation drawer"
                                        @click="${this.handleButtonNavigationDrawerClick}"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Modal navigation drawer"
                                        @click="${this.handleButtonNavigationDrawer2Click}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonNavigationDrawerClick(){this.navigationDrawer.toggle()}handleButtonNavigationDrawer2Click(){this.navigationDrawer2.showModal()}navigationDrawerClick(){this.navigationDrawer.close()}navigationDrawer2Click(){this.navigationDrawer2.close()}}customElements.define("dev-navigation-drawer",r);const o=document.createElement("dev-navigation-drawer")}}]);