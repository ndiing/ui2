"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[735],{735:(t,o,e)=>{e.r(o),e.d(o,{default:()=>a});var l=e(6684),i=e(283);class n extends i.z{get tooltip(){return this.querySelector("#tooltip")}get tooltip1(){return this.querySelector("#tooltip1")}get tooltip2(){return this.querySelector("#tooltip2")}get tooltip3(){return this.querySelector("#tooltip3")}get tooltip4(){return this.querySelector("#tooltip4")}get tooltip5(){return this.querySelector("#tooltip5")}get tooltip6(){return this.querySelector("#tooltip6")}render(){return l.qy`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip"
                                label="Rich tooltip"
                                actions='[{"label":"Action"},{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltipClick}
                                @onCardButtonClick=${this.handleTooltipClick}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Subhead, supporting text, and two buttons"
                                @pointerenter="${this.handleButtonTooltipPointerenter}"
                                @pointerleave="${this.handleButtonTooltipPointerleave}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip1"
                                label="Rich tooltip"
                                actions='[{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltip1Click}
                                @onCardButtonClick=${this.handleTooltip1Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Subhead, supporting text, and one button"
                                @pointerenter="${this.handleButtonTooltip1Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip1Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip2"
                                label="Rich tooltip"
                                @onCardIconButtonClick=${this.handleTooltip2Click}
                                @onCardButtonClick=${this.handleTooltip2Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Subhead and supporting text"
                                @pointerenter="${this.handleButtonTooltip2Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip2Pointerleave}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip3"
                                actions='[{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltip3Click}
                                @onCardButtonClick=${this.handleTooltip3Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Supporting text and one button"
                                @pointerenter="${this.handleButtonTooltip3Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip3Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip4"
                                label="Rich tooltip"
                                actions='[{"label":"Action"},{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltip4Click}
                                @onCardButtonClick=${this.handleTooltip4Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Button text and two buttons"
                                @pointerenter="${this.handleButtonTooltip4Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip4Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip5"
                                variant="plain"
                                @onCardIconButtonClick=${this.handleTooltip5Click}
                                @onCardButtonClick=${this.handleTooltip5Click}
                            >
                                Save to favorites
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Plain tooltip"
                                @pointerenter="${this.handleButtonTooltip5Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip5Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip6"
                                variant="plain"
                                @onCardIconButtonClick=${this.handleTooltip6Click}
                                @onCardButtonClick=${this.handleTooltip6Click}
                            >
                                Grant value is calculated using the<br />
                                closing stock price from the day<br />
                                before the grant date. Amounts do<br />
                                not reflect tax witholdings.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Plain tooltip 2"
                                @pointerenter="${this.handleButtonTooltip6Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip6Pointerleave}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonTooltipPointerenter(t){this.tooltip.show(t.currentTarget)}handleButtonTooltipPointerleave(){this.tooltip.close()}handleButtonTooltip1Pointerenter(t){this.tooltip1.show(t.currentTarget)}handleButtonTooltip1Pointerleave(){this.tooltip1.close()}handleButtonTooltip2Pointerenter(t){this.tooltip2.show(t.currentTarget)}handleButtonTooltip2Pointerleave(){this.tooltip2.close()}handleButtonTooltip3Pointerenter(t){this.tooltip3.show(t.currentTarget)}handleButtonTooltip3Pointerleave(){this.tooltip3.close()}handleButtonTooltip4Pointerenter(t){this.tooltip4.show(t.currentTarget)}handleButtonTooltip4Pointerleave(){this.tooltip4.close()}handleButtonTooltip5Pointerenter(t){this.tooltip5.show(t.currentTarget)}handleButtonTooltip5Pointerleave(){this.tooltip5.close()}handleButtonTooltip6Pointerenter(t){this.tooltip6.show(t.currentTarget)}handleButtonTooltip6Pointerleave(){this.tooltip6.close()}handleTooltipClick(){this.tooltip.close()}handleTooltip1Click(){this.tooltip1.close()}handleTooltip2Click(){this.tooltip2.close()}handleTooltip3Click(){this.tooltip3.close()}handleTooltip4Click(){this.tooltip4.close()}handleTooltip5Click(){this.tooltip5.close()}handleTooltip6Click(){this.tooltip6.close()}}customElements.define("dev-tooltip",n);const a=document.createElement("dev-tooltip")}}]);