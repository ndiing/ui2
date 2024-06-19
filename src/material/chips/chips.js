import { html } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * MDChipsElement extends MDElement and represents a collection of chips.
 * It supports rendering chips based on the provided list of items.
 */
class MDChipsElement extends MDElement {
    /**
     * @property {Object} properties - Properties inherited from MDElement and specific to MDChipsElement.
     * @property {Array} properties.list - The list of items to render as chips.
     * @property {Boolean} properties.multiSelection - Whether multiple chips can be selected.
     * @property {Boolean} properties.singleSelection - Whether only one chip can be selected at a time.
     */
    static properties = {
        ...MDElement.properties,
        list: { type: Array },
        multiSelection: { type: Boolean },
        singleSelection: { type: Boolean },
    };

    /**
     * Constructs an instance of MDChipsElement.
     */
    constructor() {
        super();
    }

    /**
     * Renders a single chip based on the provided item.
     * @param {Object} item - The item object to render as a chip.
     * @returns {TemplateResult} HTML template result for the chip.
     */
    renderChip(item) {
        /* prettier-ignore */
        return html`
            <md-chip
                .data="${item}"
                .name="${ifDefined(item.name)}"
                .avatar="${ifDefined(item.avatar)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .action="${ifDefined(item.action)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                @onChipIconButtonClick="${this.handleChipsItemIconButtonClick}"
                @click="${this.handleChipsItemClick}"
            ></md-chip>
        `;
    }

    /**
     * Renders all chips based on the list of items.
     * @returns {TemplateResult[]} Array of HTML template results for all chips.
     */
    render() {
        /* prettier-ignore */
        return this.list.map(item => this.renderChip(item));
    }

    /**
     * Handles click events on a chip's action button.
     * Removes the clicked chip from the list.
     * @param {MouseEvent} event - The click event object.
     */
    handleChipsItemIconButtonClick(event) {
        const data = event.currentTarget.data;

        const index = this.list.indexOf(data);
        if (index > -1) {
            this.list.splice(index, 1);
            this.requestUpdate();
        }

        this.emit("onChipsItemIconButtonClick", event);
    }

    /**
     * Handles click events on a chip.
     * Updates the selected state of the clicked chip based on the selection mode.
     * @param {MouseEvent} event - The click event object.
     */
    handleChipsItemClick(event) {
        const data = event.currentTarget.data;

        if (this.multiSelection) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.list.forEach((item) => {
                item.selected = item === data;
            });
        }

        this.requestUpdate();

        this.emit("onChipsItemClick", event);
    }
}

customElements.define("md-chips", MDChipsElement);

export { MDChipsElement };
