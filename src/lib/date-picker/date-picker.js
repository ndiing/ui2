import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDDatePicker extends MDElement {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-date-picker__header">
                <div class="md-date-picker__label">label</div>
                <div class="md-date-picker__actions">
                    <md-icon-button class="md-date-picker__action" icon="navigate_before"></md-icon-button>
                    <md-icon-button class="md-date-picker__action" icon="navigate_next"></md-icon-button>
                </div>
            </div>
            <div class="md-date-picker__body">
                <div class="md-date-picker__inner"></div>
                <div class="md-date-picker__footer">
                    <md-button class="md-date-picker__button" label="Clear"></md-button>
                    <md-button class="md-date-picker__button" label="Today"></md-button>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-date-picker");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-date-picker", MDDatePicker);

export { MDDatePicker };
