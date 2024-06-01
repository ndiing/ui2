import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppTooltipElement extends MDElement{

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        label="Rich tooltip"
                        .buttons="${[{label:'Action'},{label:'Action'}]}"
                        id="tooltip1"
                        @onTooltipButtonClick="${() => tooltip1.close()}"
                        @pointerleave="${() => tooltip1.close()}" 
                    >   
                        Rich tooltips bring attention to a particular<br>
                        element of feature that warrants the user's<br>
                        focus.
                    </md-tooltip>
                    <md-button @pointerenter="${(event) => tooltip1.show(event.currentTarget)}" label="tooltip"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        label="Rich tooltip"
                        .buttons="${[{label:'Action'}]}"
                        id="tooltip2"
                        @onTooltipButtonClick="${() => tooltip2.close()}"
                        @pointerleave="${() => tooltip2.close()}" 
                    >   
                        Rich tooltips bring attention to a particular<br>
                        element of feature that warrants the user's<br>
                        focus.
                    </md-tooltip>
                    <md-button @pointerenter="${(event) => tooltip2.show(event.currentTarget)}" label="tooltip"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        label="Rich tooltip"
                        id="tooltip3"
                        @onTooltipButtonClick="${() => tooltip3.close()}"
                        @pointerleave="${() => tooltip3.close()}"
                    >   
                        Rich tooltips bring attention to a particular<br>
                        element of feature that warrants the user's<br>
                        focus.
                    </md-tooltip>
                    <md-button @pointerenter="${(event) => tooltip3.show(event.currentTarget)}" label="tooltip"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        id="tooltip4"
                        @onTooltipButtonClick="${() => tooltip4.close()}"
                        @pointerleave="${() => tooltip4.close()}"
                    >   
                        Rich tooltips bring attention to a particular<br>
                        element of feature that warrants the user's<br>
                        focus.
                    </md-tooltip>
                    <md-button @pointerenter="${(event) => tooltip4.show(event.currentTarget)}" label="tooltip"></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        id="tooltip5"
                        ui="plain"
                        @onTooltipButtonClick="${() => tooltip5.close()}"
                    >Save to favorites</md-tooltip>
                    <md-button @pointerleave="${() => tooltip5.close()}" @pointerenter="${(event) => tooltip5.show(event.currentTarget)}" label="tooltip"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tooltip
                        id="tooltip6"
                        ui="plain"
                        @onTooltipButtonClick="${() => tooltip6.close()}"
                    >   
                        Grant value is calculated using the<br>
                        closing stock price from the day<br>
                        before the grant date. Amounts do<br>
                        not reflect tax witholdings.
                    </md-tooltip>
                    <md-button @pointerleave="${() => tooltip6.close()}" @pointerenter="${(event) => tooltip6.show(event.currentTarget)}" label="tooltip"></md-button>
                </div>

            </div>
        `
    }
}

customElements.define('app-tooltip',AppTooltipElement)

export default document.createElement('app-tooltip')