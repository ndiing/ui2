import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MDSegmentedButtonComponent extends MDComponent {
    static properties = {
        ...MDComponent.properties,
        buttons: { type: Array },
        singleSelect: { type: Boolean, attribute: "single-select" },
        multiSelect: { type: Boolean, attribute: "multi-select" },
    };

    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button
                class="md-segmented-button__item"
                .data="${item}"
                .name="${ifDefined(item.name)}"
                .variant="${item.variant ?? "outlined"}"
                .type="${ifDefined(item.type)}"
                .icon="${ifDefined(item.selected ? "check" : item.icon)}"
                .label="${ifDefined(item.label)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleSegmentedButtonItemClick}"
            ></md-button>
        `;
    }

    render() {
        /* prettier-ignore */
        return this.buttons.map(item => this.renderButton(item));
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-segmented-button");
    }

    handleSegmentedButtonItemClick(event) {
        if (this.multiSelect || this.singleSelect) {
            const data = event.currentTarget.data;

            if (this.multiSelect) {
                data.selected = !data.selected;
            } else if (this.singleSelect) {
                for (let i = 0; i < this.buttons.length; i++) {
                    let item = this.buttons[i];
                    item.selected = item === data;
                }
            }

            this.requestUpdate();
        }

        this.emit("onSegmentedButtonItemClick", event);
    }
}

customElements.define("md-segmented-button", MDSegmentedButtonComponent);

export { MDSegmentedButtonComponent };
