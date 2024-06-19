import { html } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Material Design Segmented Button element.
 * @extends MDElement
 */
class MDSegmentedButtonElement extends MDElement {
    /**
     * Static properties for defining behavior and attributes.
     * @property {Array} list - Array of items to render as segmented buttons.
     * @property {Boolean} singleSelection - Indicates single selection mode.
     * @property {Boolean} multiSelection - Indicates multi-selection mode.
     */
    static properties = {
        ...MDElement.properties,
        list: { type: Array },
        singleSelection: { type: Boolean },
        multiSelection: { type: Boolean },
    };

    /**
     * Renders a segmented button for the given item.
     * @param {Object} item - The item to render as a segmented button.
     * @returns {TemplateResult} Rendered template for the segmented button item.
     */
    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button 
                .data="${item}"
                class="md-segmented-button__item"
                .name="${ifDefined(item.name)}"
                .label="${ifDefined(item.label)}"
                .icon="${ifDefined(item.selected ? 'check' : item.icon)}"
                .type="${ifDefined(item.type)}"
                .selected="${ifDefined(item.selected)}"
                .variant="${ifDefined(item.variant ?? 'outlined')}"
                @click="${this.handleSegmentedButtonItemClick}"
            ></md-button>
        `;
    }

    /**
     * Renders the segmented button element.
     * @returns {TemplateResult[]} Array of rendered segmented button items.
     */
    render() {
        return this.list?.map((item) => this.renderButton(item));
    }

    /**
     * Handles click events on segmented button items.
     * Depending on the selection mode, updates the `selected` state of items.
     * @param {MouseEvent} event - The click event.
     * @fires MDSegmentedButtonElement#onSegmentedButtonItemClick
     */
    handleSegmentedButtonItemClick(event) {
        const data = event.currentTarget.data;

        if (this.multiSelection) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.list.forEach((item) => {
                item.selected = item === data;
            });
        }
        this.requestUpdate();

        this.emit("onSegmentedButtonItemClick", event);
    }
}

// Define the custom element 'md-segmented-button' using MDSegmentedButtonElement class
customElements.define("md-segmented-button", MDSegmentedButtonElement);

export { MDSegmentedButtonElement };
