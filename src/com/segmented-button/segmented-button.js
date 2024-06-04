import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDSegmentedButtonComponent extends MDElement {
    /**
     * Properties of the MDSegmentedButtonComponent.
     * @property {Array} [buttons] - An array of buttons in the segmented button component.
     * @property {Boolean} [rangeSelection] - Indicates if range selection is enabled for the buttons.
     * @property {Boolean} [multiSelection] - Indicates if multi-selection is enabled for the buttons.
     * @property {Boolean} [singleSelection] - Indicates if single-selection is enabled for the buttons.
     * @property {Boolean} [allSelection] - Indicates if selecting all buttons is enabled.
     */
    static get properties() {
        return {
            buttons: { type: Array },
            rangeSelection: { type: Boolean },
            multiSelection: { type: Boolean },
            singleSelection: { type: Boolean },
            allSelection: { type: Boolean },
        };
    }

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    renderButton(button) {
        /* prettier-ignore */
        return html`
            <md-button 
                class="md-segmented-button__button"
                .data="${button}"
                .icon="${ifDefined(button?.icon??button.selected?"check":undefined)}"
                .label="${ifDefined(button?.label??button)}"
                .ui="${ifDefined(button?.ui??"outlined")}"
                .type="${ifDefined(button?.type)}"
                .selected="${ifDefined(button?.selected)}"
                @click="${this.handleSegmentedButtonButtonClick}"
            ></md-button>
        `;
    }

    /**
     *
     */
    render() {
        return this.buttons?.map((button) => this.renderButton(button));
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-segmented-button");
        await this.updateComplete;
        this.handleSegmentedButtonKeydown = this.handleSegmentedButtonKeydown.bind(this);
        this.addEventListener("keydown", this.handleSegmentedButtonKeydown);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-segmented-button");
        await this.updateComplete;
        this.removeEventListener("keydown", this.handleSegmentedButtonKeydown);
    }

    /**
     *
     * @fires MDSegmentedButtonComponent#onSegmentedButtonButtonClick
     */
    updated(changedProperties) {}

    handleSegmentedButtonButtonClick(event) {
        if (event.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch")) {
            return;
        }
        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            if (this.lastIndex == undefined) {
                this.lastIndex = 0;
            }
            this.currentIndex = this.buttons.indexOf(data);
            this.swapIndex = this.lastIndex > this.currentIndex;

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
            this.buttons.forEach((button, index) => {
                button.selected = index >= this.lastIndex && index <= this.currentIndex;
            });

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
        } else if (this.multiSelection && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.buttons.forEach((button) => {
                button.selected = button == data;
            });
            this.lastIndex = this.buttons.indexOf(data);
        }
        this.requestUpdate();
        this.emit("onSegmentedButtonButtonClick", event);
    }

    /**
     *
     * @fires MDSegmentedButtonComponent#onSegmentedButtonKeydown
     */
    handleSegmentedButtonKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            event.preventDefault();
            this.buttons.forEach((button) => {
                button.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onSegmentedButtonKeydown", event);
    }
}

customElements.define("md-segmented-button", MDSegmentedButtonComponent);

export { MDSegmentedButtonComponent };
