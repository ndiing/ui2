import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
class MDSegmentedButton extends MDElement {
    static get properties() {
        return {
            buttons: { type: Array },
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            ${this.buttons?.map(button=>html`
                <md-button
                    .label="${button?.label??button}"
                    .type="${button?.type}"
                    .ui="${button?.ui??"outlined"}"
                    .selected="${button?.selected}"
                    .data="${button}"
                    @click="${this.handleSegmentedButtonClick}"
                ></md-button>
            `)}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-segmented-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-segmented-button");
    }

    updated(changedProperties) {}

    handleSegmentedButtonClick(event) {
        const data = event.currentTarget.data;
        this.currentSelectedIndex = this.buttons.indexOf(data);

        if (event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;

            if (this.lastSelectedIndex > this.currentSelectedIndex) {
                [this.lastSelectedIndex, this.currentSelectedIndex] = [this.currentSelectedIndex, this.lastSelectedIndex];
            }
            this.buttons.forEach((item, index) => {
                item.selected = index >= this.lastSelectedIndex && index <= this.currentSelectedIndex;
            });
        } else if (event.ctrlKey) {
            data.selected = !data.selected;
        } else {
            this.buttons.forEach((item) => {
                item.selected = item === data;
            });
        }
        this.lastSelectedIndex = this.currentSelectedIndex;
        this.requestUpdate();
        this.emit("onSegmentedButtonClick", event);
    }
}
customElements.define("md-segmented-button", MDSegmentedButton);
export { MDSegmentedButton };
