import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * MDChipsComponent is a class that extends MDComponent and represents a collection of chip components.
 * This component manages an array of chip data and handles their interactions.
 * @extends MDComponent
 * @tagname md-chips
 * @fires MDChipsComponent#onChipClick - Fires when a chip in the collection is clicked.
 */
class MDChipsComponent extends MDComponent {
    /**
     * @property {Array} list - The list of chip data to be rendered.
     * @property {Boolean} multiSelection - Whether multiple chips can be selected simultaneously.
     */
    static properties = {
        list: { type: Array },
        multiSelection: { type: Boolean },
    };

    constructor() {
        super();
    }

    renderChip(item) {
        /* prettier-ignore */
        return html`
            <md-chip
                .data="${item}"
                .variant="${ifDefined(item.variant)}"
                .avatar="${ifDefined(item.avatar)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .action="${ifDefined(item.action)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleChipClick}"
                @onChipActionClick="${this.handleChipActionClick}"
            ></md-chip>
        `;
    }

    render() {
        /* prettier-ignore */
        return this.list?.map(item => this.renderChip(item));
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-chips");
    }

    handleChipClick(event) {
        const data = event.currentTarget.data;

        if (this.multiSelection) {
            data.selected = !data.selected;

            this.requestUpdate();
        }

        this.emit("onChipClick", event);
    }

    handleChipActionClick(event) {
        const data = event.currentTarget.data;

        const index = this.list.indexOf(data);
        if (index > -1) {
            this.list.splice(index, 1);
        }
        this.requestUpdate();
    }
}

customElements.define("md-chips", MDChipsComponent);

export { MDChipsComponent };
