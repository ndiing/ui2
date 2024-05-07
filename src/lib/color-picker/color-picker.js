import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDColorPicker extends MDElement {
    static get properties() {
        return {
            value: { type: String },
        };
    }

    get label() {
        return this.selected;
    }

    constructor() {
        super();

        this.selected = "#000000";
        this.value = "#000000";
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-color-picker__header">
                <div class="md-color-picker__label" @click="${this.handleColorPickerLabelClick}">${this.label}</div>
                <div class="md-color-picker__actions">
                    <md-icon-button class="md-color-picker__action" icon="navigate_before" @click="${this.handleColorPickerActionBeforeClick}"></md-icon-button>
                    <md-icon-button class="md-color-picker__action" icon="navigate_next" @click="${this.handleColorPickerActionNextClick}"></md-icon-button>
                </div>
            </div>
            <div class="md-color-picker__body">
                <div class="md-color-picker__inner">
                </div>
                <div class="md-color-picker__footer">
                    <md-button class="md-color-picker__button" label="Clear" @click="${this.handleColorPickerButtonClearClick}"></md-button>
                    <md-button class="md-color-picker__button" label="Ok" @click="${this.handleColorPickerButtonOkClick}"></md-button>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-color-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-color-picker");
    }

    firstUpdated(changedProperties) {
        
    }

    updated(changedProperties) {}

    handleColorPickerLabelClick(event) {}
    handleColorPickerActionBeforeClick(event) {}
    handleColorPickerActionNextClick(event) {}
    handleColorPickerButtonClearClick(event) {}
    handleColorPickerButtonOkClick(event) {}
}

customElements.define("md-color-picker", MDColorPicker);

export { MDColorPicker };
