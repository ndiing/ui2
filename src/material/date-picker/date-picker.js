import { html } from "lit";
import { MDDatetimePickerElement } from "../datetime-picker/datetime-picker.js";
import { parseDate, stringifyDate } from "../helper/helper.js";
import { ref } from "lit/directives/ref.js";

/**
 * Custom element for a date picker.
 * Extends MDDatetimePickerElement to provide date selection functionality.
 *
 * @extends MDDatetimePickerElement
 */
class MDDatePickerElement extends MDDatetimePickerElement {
    /**
     * Override of the body property to customize the date picker layout.
     * @type {TemplateResult[]} An array containing the Lit HTML template for date picker layout.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <div class="md-layout-card">
                <div class="md-layout-card__item" ${ref(this.cardItemYear)}>${this.renderYear()}</div>
                <div class="md-layout-card__item" ${ref(this.cardItemMonth)}>${this.renderMonth()}</div>
                <div class="md-layout-card__item">${this.renderDay()}</div>
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
     * Updates the selected date value based on the current input value.
     */
    updateSelectedValue() {
        const date = parseDate(this.value);

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
    }

    /**
     * Handles click events on various buttons within the date picker pane.
     * @param {MouseEvent} event - The click event object.
     */
    handlePaneButtonClick(event) {
        if (event.currentTarget.name == "label") {
            if (this.index == 2) {
                this.index = 1;
            } else if (this.index == 1) {
                this.index = 0;
            } else if (this.index == 0) {
                this.index = 2;
            }
        } else if (event.currentTarget.name == "cancel") {
            this.value = this.defaultValue;

            this.index = 2;

            this.emit("onDatePickerButtonCancelClick", event);
        } else if (event.currentTarget.name == "ok") {
            this.index = 2;

            this.emit("onDatePickerButtonOkClick", event);
        }
    }

    /**
     * Handles click events on year items within the date picker pane.
     * Updates the selected year and emits relevant events.
     * @param {MouseEvent} event - The click event object.
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.value = this.toString();

        this.index = 1;

        this.emit("onDatePickerItemClick", event);
        this.emit("onDatePickerYearItemClick", event);
    }

    /**
     * Handles click events on month items within the date picker pane.
     * Updates the selected month and emits relevant events.
     * @param {MouseEvent} event - The click event object.
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.value = this.toString();

        this.index = 2;

        this.emit("onDatePickerItemClick", event);
        this.emit("onDatePickerMonthItemClick", event);
    }

    /**
     * Handles click events on day items within the date picker pane.
     * Updates the selected day and emits relevant events.
     * @param {MouseEvent} event - The click event object.
     */
    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.value = this.toString();

        this.emit("onDatePickerItemClick", event);
        this.emit("onDatePickerDayItemClick", event);
    }

    /**
     * Converts the selected date to a string representation.
     * @returns {string} A string representation of the selected date.
     */
    toString() {
        return stringifyDate(this.selected);
    }
}

customElements.define("md-date-picker", MDDatePickerElement);

export { MDDatePickerElement };
