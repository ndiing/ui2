import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTooltip extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tooltip id="tooltip">
                        Save to favorites
                    </md-tooltip>
                    <md-button label="Tooltip"
                        @pointerenter="${this.handlePointerenter}"
                        @pointerleave="${this.handlePointerleave}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tooltip id="tooltip2">
                        Grant value is calculated using the<br>
                        closing stock price from the day<br>
                        before the grant date. Amounts do<br>
                        not reflect tax witholdings.
                    </md-tooltip>
                    <md-button label="Tooltip"
                        @pointerenter="${this.handlePointerenter1}"
                        @pointerleave="${this.handlePointerleave1}"
                    ></md-button>
                </div>

            </div>
        `;
    }

    get tooltip(){return this.querySelector('#tooltip')}
    get tooltip2(){return this.querySelector('#tooltip2')}

    handlePointerenter(event){this.tooltip.show(event.currentTarget)}
    handlePointerleave(){this.tooltip.close()}
    handlePointerenter1(event){this.tooltip2.show(event.currentTarget)}
    handlePointerleave1(){this.tooltip2.close()}
}

customElements.define("dev-tooltip", DevTooltip);

export default document.createElement("dev-tooltip");
