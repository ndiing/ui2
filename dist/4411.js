"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[4411],{4411:(t,a,e)=>{e.r(a),e.d(a,{default:()=>p});var o=e(6684),l=e(283);class i extends l.z{get topAppBarCenter(){return this.querySelector("#topAppBarCenter")}get topAppBarSmall(){return this.querySelector("#topAppBarSmall")}get topAppBarMedium(){return this.querySelector("#topAppBarMedium")}get topAppBarLarge(){return this.querySelector("#topAppBarLarge")}get center(){return this.querySelector("#center")}render(){return o.qy`
            <div class="md-layout-border">
                <md-top-app-bar
                    id="topAppBarCenter"
                    variant="center"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title Large"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.topAppBarCenterClick}
                    @onCardButtonClick=${this.topAppBarCenterClick}
                ></md-top-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-top-app-bar
                            id="topAppBarSmall"
                            variant="small"
                            leadingActions='[{"icon":"arrow_back"}]'
                            label="Title Large"
                            trailingActions='[{"icon":"close"}]'
                            @onCardIconButtonClick=${this.topAppBarSmallClick}
                            @onCardButtonClick=${this.topAppBarSmallClick}
                        ></md-top-app-bar>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-border">
                                <md-top-app-bar
                                    id="topAppBarMedium"
                                    variant="medium"
                                    leadingActions='[{"icon":"arrow_back"}]'
                                    label="Headline Small"
                                    trailingActions='[{"icon":"close"}]'
                                    @onCardIconButtonClick=${this.topAppBarMediumClick}
                                    @onCardButtonClick=${this.topAppBarMediumClick}
                                ></md-top-app-bar>

                                <div class="md-layout-border__item md-layout-border__item--center">
                                    <div class="md-layout-border">
                                        <md-top-app-bar
                                            id="topAppBarLarge"
                                            variant="large"
                                            leadingActions='[{"icon":"arrow_back"}]'
                                            label="Headline Medium"
                                            trailingActions='[{"icon":"close"}]'
                                            @onCardIconButtonClick=${this.topAppBarLargeClick}
                                            @onCardButtonClick=${this.topAppBarLargeClick}
                                        ></md-top-app-bar>

                                        <div
                                            id="center"
                                            class="md-layout-border__item md-layout-border__item--center"
                                        >
                                            <div class="md-layout-column">
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button
                                                        variant="tonal"
                                                        label="Center-aligned top app bar"
                                                        @click="${this.handleButtonTopAppBarCenterClick}"
                                                    ></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button
                                                        variant="tonal"
                                                        label="Small top app bar"
                                                        @click="${this.handleButtonTopAppBarSmallClick}"
                                                    ></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button
                                                        variant="tonal"
                                                        label="Medium top app bar"
                                                        @click="${this.handleButtonTopAppBarMediumClick}"
                                                    ></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button
                                                        variant="tonal"
                                                        label="Large top app bar"
                                                        @click="${this.handleButtonTopAppBarLargeClick}"
                                                    ></md-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonTopAppBarCenterClick(){this.topAppBarCenter.toggle()}handleButtonTopAppBarSmallClick(){this.topAppBarSmall.toggle()}handleButtonTopAppBarMediumClick(){this.topAppBarMedium.toggle()}handleButtonTopAppBarLargeClick(){this.topAppBarLarge.toggle()}topAppBarCenterClick(){this.topAppBarCenter.close()}topAppBarSmallClick(){this.topAppBarSmall.close()}topAppBarMediumClick(){this.topAppBarMedium.close()}topAppBarLargeClick(){this.topAppBarLarge.close()}}customElements.define("dev-top-app-bar",i);const p=document.createElement("dev-top-app-bar")}}]);