import { html } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * MDListElement extends MDElement and represents a list component.
 * It provides various selection modes (single, multi, range) and supports keyboard interactions.
 */
class MDListElement extends MDElement {
    /**
     * @property {Object} properties - Properties inherited from MDElement and additional list-specific properties.
     * @property {Array} properties.list - The array of items to render in the list.
     * @property {Boolean} properties.selection - Whether selection mode is enabled.
     * @property {Boolean} properties.allSelection - Whether all selection (Ctrl + A) is enabled.
     * @property {Boolean} properties.singleSelection - Whether single selection mode is enabled.
     * @property {Boolean} properties.multiSelection - Whether multi-selection mode is enabled.
     * @property {Boolean} properties.rangeSelection - Whether range selection mode is enabled.
     */
    static properties = {
        ...MDElement.properties,
        list: { type: Array },
        selection: { type: Boolean },
        allSelection: { type: Boolean },
        singleSelection: { type: Boolean },
        multiSelection: { type: Boolean },
        rangeSelection: { type: Boolean },
    };

    /**
     * Constructs an instance of MDListElement.
     */
    constructor() {
        super();
    }

    /**
     * Renders a list item based on the provided item data.
     * @param {Object} item - The data object representing the list item.
     * @returns {TemplateResult} HTML template result for the list item.
     */
    renderListItem(item) {
        return html`
            <md-list-row>
                <md-list-item
                    .data="${item}"
                    .avatar="${ifDefined(item.avatar)}"
                    .image="${ifDefined(item.image)}"
                    .video="${ifDefined(item.video)}"
                    .icon="${ifDefined(item.icon)}"
                    .label="${ifDefined(item.label)}"
                    .subLabel="${ifDefined(item.subLabel)}"
                    .badge="${ifDefined(item.badge)}"
                    .text="${ifDefined(item.text)}"
                    .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                    .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                    .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                    .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                    .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                    .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                    .selected="${ifDefined(item.selected)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    @click="${this.handleListItemClick}"
                    @onListItemSelected="${this.handleListItemSelected}"
                    @onCheckboxNativeInput="${this.handleListItemCheckboxNativeInput}"
                    @onRadioButtonNativeInput="${this.handleListItemRadioButtonNativeInput}"
                    @onSwitchNativeInput="${this.handleListItemSwitchNativeInput}"
                    @onSelectionStart="${this.handleListItemSelectionStart}"
                    @onSelection="${this.handleListItemSelection}"
                    @onSelectionEnd="${this.handleListItemSelectionEnd}"
                ></md-list-item>
            </md-list-row>
        `;
    }

    /**
     * Renders the list by mapping over the list items and rendering each one.
     * @returns {Array<TemplateResult>} Array of HTML template results for each list item.
     */
    render() {
        return this.list?.map((item) => this.renderListItem(item));
    }

    /**
     * Lifecycle method called when the element is connected to the DOM.
     * Adds event listeners for keyboard interactions.
     */
    connectedCallback() {
        super.connectedCallback();
        this.handleListKeyDown = this.handleListKeyDown.bind(this);
        this.addEventListener("keydown", this.handleListKeyDown);
    }

    /**
     * Lifecycle method called when the element is disconnected from the DOM.
     * Removes event listeners for keyboard interactions.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("keydown", this.handleListKeyDown);
    }

    /**
     * Handles keyboard events for list navigation and selection.
     * @param {KeyboardEvent} event - The keyboard event object.
     */
    handleListKeyDown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            this.allSelect();
            this.requestUpdate();
            this.emit("onListKeyDown", event);
        }
    }

    /**
     * Handles click events on list items, triggering appropriate selection actions.
     * @param {MouseEvent} event - The mouse event object.
     */
    handleListItemClick(event) {
        if (event.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch")) {
            return;
        }

        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            this.rangeSelect(data);
        } else if ((this.multiSelection && event.ctrlKey) || this.selectionMode) {
            this.multiSelect(data);
        } else if (this.singleSelection) {
            this.singleSelect(data);
        }

        this.requestUpdate();
        this.emit("onListItemClick");
    }

    /**
     * Handles native input events from checkbox elements in list items.
     * @param {Event} event - The input event object.
     */
    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        this.multiSelect(data);
        this.requestUpdate();
        this.emit("onListItemCheckboxNativeInput");
    }

    /**
     * Handles native input events from radio button elements in list items.
     * @param {Event} event - The input event object.
     */
    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;
        this.singleSelect(data);
        this.requestUpdate();
        this.emit("onListItemRadioButtonNativeInput");
    }

    /**
     * Handles native input events from switch elements in list items.
     * @param {Event} event - The input event object.
     */
    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;
        this.multiSelect(data);
        this.requestUpdate();
        this.emit("onListItemSwitchNativeInput");
    }

    /**
     * Handles the start of a selection action on a list item.
     * @param {CustomEvent} event - The custom event object.
     */
    handleListItemSelectionStart(event) {
        if (!this.selection) {
            return;
        }
        const data = event.currentTarget.data;
        this.singleSelect(data);
        this.requestUpdate();
        this.emit("onListItemSelectionStart", event);
    }

    /**
     * Handles the ongoing selection action on a list item.
     * @param {CustomEvent} event - The custom event object.
     */
    handleListItemSelection(event) {
        if (!this.selection) {
            return;
        }
        const data = event.detail.target.closest(".md-list__item")?.data;
        if (data && this.temp !== data) {
            this.temp = data;
            this.rangeSelect(data);
            this.requestUpdate();
        }
        this.emit("onListItemSelection", event);
    }

    /**
     * Handles the end of a selection action on a list item.
     * @param {CustomEvent} event - The custom event object.
     */
    handleListItemSelectionEnd(event) {
        if (!this.selection) {
            return;
        }
        this.temp = undefined;
        window.requestAnimationFrame(() => {
            this.selectionMode = true;
        });
        this.emit("onListItemSelectionEnd", event);
    }

    /**
     * Selects all items in the list when the all selection shortcut is triggered (Ctrl + A).
     */
    allSelect() {
        this.list.forEach((item) => {
            item.selected = true;
        });
    }

    /**
     * Selects a single item in the list.
     * @param {Object} data - The data object representing the item to select.
     */
    singleSelect(data) {
        this.list.forEach((item) => {
            item.selected = item === data;
        });
        this.prevIndex = this.list.indexOf(data);
    }

    /**
     * Toggles the selection state of a single item in the list.
     * @param {Object} data - The data object representing the item to toggle selection for.
     */
    multiSelect(data) {
        data.selected = !data.selected;
        this.selectionMode = this.list.some((item) => item.selected);
    }

    /**
     * Selects a range of items in the list.
     * @param {Object} data - The data object representing the item to include in the range selection.
     */
    rangeSelect(data) {
        this.prevIndex = this.prevIndex ?? 0;
        this.currIndex = this.list.indexOf(data);
        this.swapIndex = this.prevIndex > this.currIndex;
        if (this.swapIndex) {
            [this.prevIndex, this.currIndex] = [this.currIndex, this.prevIndex];
        }
        this.list.forEach((item, index) => {
            item.selected = index >= this.prevIndex && index <= this.currIndex;
        });
        if (this.swapIndex) {
            [this.currIndex, this.prevIndex] = [this.prevIndex, this.currIndex];
        }
    }

    handleListItemSelected() {}
}

customElements.define("md-list", MDListElement);

export { MDListElement };
