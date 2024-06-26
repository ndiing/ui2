"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[4535],{4535:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var l=n(6684),m=n(283);class i extends m.z{get menu(){return this.querySelector("#menu")}get menu2(){return this.querySelector("#menu2")}render(){return l.qy`
            <div class="md-layout-border">
                <md-menu
                    id="menu"
                    .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    @onCardIconButtonClick=${this.menuClick}
                    @onCardButtonClick=${this.menuClick}
                ></md-menu>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-menu
                            id="menu2"
                            .list="${[{label:"Item 1",selected:!0},{label:"Item 2",badge:0},{label:"Item 3",badge:1},{label:"Item 4",badge:1111}]}"
                            @onCardIconButtonClick=${this.menu2Click}
                            @onCardButtonClick=${this.menu2Click}
                        ></md-menu>

                        <div
                            id="center"
                            class="md-layout-border__item md-layout-border__item--center"
                        >
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Menu icon"
                                        @click="${this.handleButtonMenuClick}"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Menu no icon"
                                        @click="${this.handleButtonMenu2Click}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonMenuClick(e){this.menu.showModal(e.currentTarget)}handleButtonMenu2Click(e){this.menu2.showModal(e.currentTarget)}menuClick(){this.menu.close()}menu2Click(){this.menu2.close()}}customElements.define("dev-menu",i);const d=document.createElement("dev-menu")}}]);