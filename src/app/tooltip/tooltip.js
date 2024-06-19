import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppTooltipComponent extends MDElement {


    get tooltipPlain() {
        return this.querySelector("#tooltipPlain");
    }

    get tooltipPlain2() {
        return this.querySelector("#tooltipPlain2");
    }

    get tooltipRich() {
        return this.querySelector("#tooltipRich");
    }


    get buttonTooltipPlain() {
        return this.querySelector("#buttonTooltipPlain");
    }

    get buttonTooltipPlain2() {
        return this.querySelector("#buttonTooltipPlain2");
    }

    get buttonTooltipRich() {
        return this.querySelector("#buttonTooltipRich");
    }


    render() {
        return html`
            <div
                style=""
                class="md-layout-grid"
            >
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-tooltip
                        id="tooltipPlain"
                        @onPaneButtonClick="${this.handleTooltipPlainClick}"
                        @onPaneIconButtonClick="${this.handleTooltipPlainClick}"
                        variant="tooltip plain"
                    >
                        Save to favorites
                    </md-tooltip>
                    <md-button
                        id="buttonTooltipPlain"
                        label="Tooltip Plain"
                        variant="plain"
                        @click="${this.handleTooltipPlainClick}"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-tooltip
                        id="tooltipPlain2"
                        @onPaneButtonClick="${this.handleTooltipPlain2Click}"
                        @onPaneIconButtonClick="${this.handleTooltipPlain2Click}"
                        variant="plain"
                    >
                        Grant value is calculated using the<br />
                        closing stock price from the day<br />
                        before the grant date. Amounts do<br />
                        not reflect tax witholdings.
                    </md-tooltip>
                    <md-button
                        id="buttonTooltipPlain2"
                        label="Tooltip Plain 2"
                        @click="${this.handleTooltipPlain2Click}"
                    ></md-button>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-tooltip
                        id="tooltipRich"
                        @onPaneButtonClick="${this.handleTooltipRichClick}"
                        @onPaneIconButtonClick="${this.handleTooltipRichClick}"
                        label="Rich tooltip"
                        buttons='[{"label":"Action"},{"label":"Action"}]'
                    >
                        Rich tooltips bring attention to a particular<br />
                        element of feature that warrants the user's<br />
                        focus.
                    </md-tooltip>
                    <md-button
                        id="buttonTooltipRich"
                        label="Tooltip Rich"
                        @click="${this.handleTooltipRichClick}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    handleTooltipPlainClick() {
        this.tooltipPlain.toggle(this.buttonTooltipPlain);
    }

    handleTooltipPlain2Click() {
        this.tooltipPlain2.toggle(this.buttonTooltipPlain2);
    }

    handleTooltipRichClick() {
        this.tooltipRich.toggle(this.buttonTooltipRich);
    }

}

customElements.define("app-tooltip", AppTooltipComponent);

export default document.createElement("app-tooltip");
