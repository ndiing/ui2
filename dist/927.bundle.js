"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[927],{927:(t,o,l)=>{l.r(o),l.d(o,{default:()=>m});var e=l(6684),i=l(1421);class n extends i.UX{render(){return e.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        label="Rich tooltip"
                        .buttons="${[{label:"Action"},{label:"Action"}]}"
                        id="tooltip1"
                        @onTooltipButtonClick="${()=>tooltip1.close()}"
                        @pointerleave="${()=>tooltip1.close()}"
                    >
                        Rich tooltips bring attention to a particular<br />
                        element of feature that warrants the user's<br />
                        focus.
                    </md-tooltip>
                    <md-button
                        @pointerenter="${t=>tooltip1.show(t.currentTarget)}"
                        label="tooltip"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        label="Rich tooltip"
                        .buttons="${[{label:"Action"}]}"
                        id="tooltip2"
                        @onTooltipButtonClick="${()=>tooltip2.close()}"
                        @pointerleave="${()=>tooltip2.close()}"
                    >
                        Rich tooltips bring attention to a particular<br />
                        element of feature that warrants the user's<br />
                        focus.
                    </md-tooltip>
                    <md-button
                        @pointerenter="${t=>tooltip2.show(t.currentTarget)}"
                        label="tooltip"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        label="Rich tooltip"
                        id="tooltip3"
                        @onTooltipButtonClick="${()=>tooltip3.close()}"
                        @pointerleave="${()=>tooltip3.close()}"
                    >
                        Rich tooltips bring attention to a particular<br />
                        element of feature that warrants the user's<br />
                        focus.
                    </md-tooltip>
                    <md-button
                        @pointerenter="${t=>tooltip3.show(t.currentTarget)}"
                        label="tooltip"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        id="tooltip4"
                        @onTooltipButtonClick="${()=>tooltip4.close()}"
                        @pointerleave="${()=>tooltip4.close()}"
                    >
                        Rich tooltips bring attention to a particular<br />
                        element of feature that warrants the user's<br />
                        focus.
                    </md-tooltip>
                    <md-button
                        @pointerenter="${t=>tooltip4.show(t.currentTarget)}"
                        label="tooltip"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        id="tooltip5"
                        ui="plain"
                        @onTooltipButtonClick="${()=>tooltip5.close()}"
                        >Save to favorites</md-tooltip
                    >
                    <md-button
                        @pointerleave="${()=>tooltip5.close()}"
                        @pointerenter="${t=>tooltip5.show(t.currentTarget)}"
                        label="tooltip"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        id="tooltip6"
                        ui="plain"
                        @onTooltipButtonClick="${()=>tooltip6.close()}"
                    >
                        Grant value is calculated using the<br />
                        closing stock price from the day<br />
                        before the grant date. Amounts do<br />
                        not reflect tax witholdings.
                    </md-tooltip>
                    <md-button
                        @pointerleave="${()=>tooltip6.close()}"
                        @pointerenter="${t=>tooltip6.show(t.currentTarget)}"
                        label="tooltip"
                    ></md-button>
                </div>
            </div>
        `}}customElements.define("app-tooltip",n);const m=document.createElement("app-tooltip")}}]);