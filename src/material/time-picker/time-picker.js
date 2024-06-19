import { html } from "lit";
import { MDDatetimePickerElement } from "../datetime-picker/datetime-picker.js";
import { parseTime, stringifyTime } from "../helper/helper.js";

/**
 * Custom element for a time picker.
 * Extends MDDatetimePickerElement to provide time selection functionality.
 *
 * @extends MDDatetimePickerElement
 */
class MDTimePickerElement extends MDDatetimePickerElement {
    /**
     * Retrieves the body of the time picker, which includes hour and minute sections.
     * @type {TemplateResult[]} An array containing the Lit HTML template for time picker body.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <div class="md-layout-card">
                <div class="md-layout-card__item">${this.renderHour()}</div>
                <div class="md-layout-card__item">${this.renderMinute()}</div>
            </div>
        `];
    }

    /**
     * Setter for the body property.
     * @param {TemplateResult[]} value - The value to set for the body property.
     */
    set body(value) {
        this._body = value;
    }

    /**
     * Retrieves the leading actions for the time picker, which includes a button with current time label.
     * @type {Object[]} An array containing objects with component and label properties for leading actions.
     */
    get leadingActions() {
        let label;
        if (this.index === 0 || this.index === 1) {
            label = stringifyTime(this.selected);
        }
        return [{ component: "button", name: "label", label }];
    }

    /**
     * Constructor for MDTimePickerElement class.
     * Initializes the index property to 0.
     */
    constructor() {
        super();
        this.index = 0;
    }

    /**
     * Callback when the element is connected to the DOM.
     * Adds necessary CSS classes for styling.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-picker");
        this.defaultValue = this.value;
    }

    /**
     * Callback when the element is disconnected from the DOM.
     * Removes added CSS classes.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-datetime-picker");
    }

    /**
     * Updates the selected time value based on the current input value.
     */
    updateSelectedValue() {
        const date = parseTime(this.value);
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());
    }

    /**
     * Handles click events on various buttons within the time picker pane.
     * @param {MouseEvent} event - The click event object.
     */
    handlePaneButtonClick(event) {
        if (event.currentTarget.name === "label") {
            this.index = this.index === 0 ? 1 : 0;
        } else if (event.currentTarget.name === "cancel") {
            this.value = this.defaultValue;
            this.index = 0;
            this.emit("onTimePickerButtonCancelClick", event);
        } else if (event.currentTarget.name === "ok") {
            this.index = 0;
            this.emit("onTimePickerButtonOkClick", event);
        }
    }

    /**
     * Handles click events on previous/next buttons within the time picker pane.
     * Adjusts the selected hour or minute based on the button clicked.
     * @param {MouseEvent} event - The click event object.
     */
    handlePaneIconButtonClick(event) {
        if (event.currentTarget.name === "prev") {
            if (this.index === 0) {
                this.selected.setHours(this.selected.getHours() - 1);
            } else if (this.index === 1) {
                this.selected.setMinutes(this.selected.getMinutes() - 1);
            }
        } else if (event.currentTarget.name === "next") {
            if (this.index === 0) {
                this.selected.setHours(this.selected.getHours() + 1);
            } else if (this.index === 1) {
                this.selected.setMinutes(this.selected.getMinutes() + 1);
            }
        }
        this.requestUpdate();
    }

    /**
     * Handles click events on hour items within the time picker pane.
     * Updates the selected hour and emits relevant events.
     * @param {MouseEvent} event - The click event object.
     */
    handleDatetimePickerHourItemClick(event) {
        const data = event.currentTarget.data;
        this.selected.setHours(data.hour);
        this.value = this.toString();
        this.index = 1;
        this.emit("onTimePickerItemClick", event);
        this.emit("onTimePickerHourItemClick", event);
    }

    /**
     * Handles click events on minute items within the time picker pane.
     * Updates the selected hour and minute, and emits relevant events.
     * @param {MouseEvent} event - The click event object.
     */
    handleDatetimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;
        this.selected.setHours(data.hour);
        this.selected.setMinutes(data.minute);
        this.value = this.toString();
        this.index = 0;
        this.emit("onTimePickerItemClick", event);
        this.emit("onTimePickerMinuteItemClick", event);
    }

    /**
     * Converts the selected time to a string representation.
     * @returns {string} A string representation of the selected time.
     */
    toString() {
        return stringifyTime(this.selected);
    }
}

customElements.define("md-time-picker", MDTimePickerElement);

export { MDTimePickerElement };
