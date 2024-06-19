import { html } from "lit";
import { MDDatetimePickerElement } from "../datetime-picker/datetime-picker.js";
import { parseMonth, stringifyMonth } from "../helper/helper.js";
import { ref } from "lit/directives/ref.js";

/**
 * Custom element for a month picker.
 * Extends MDDatetimePickerElement to provide month selection functionality.
 *
 * @extends MDDatetimePickerElement
 */
class MDMonthPickerElement extends MDDatetimePickerElement {
    /**
     * Override of the body property to customize the month picker layout.
     * @type {TemplateResult[]} An array containing the Lit HTML template for month picker layout.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <div class="md-layout-card">
                <div class="md-layout-card__item" ${ref(this.cardItemYear)}>${this.renderYear()}</div>
                <div class="md-layout-card__item" ${ref(this.cardItemMonth)}>${this.renderMonth()}</div>
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
     * Override of the leadingActions property to provide dynamic label based on the current index.
     * @type {Object[]} An array containing an object with component, name, and label properties.
     */
    get leadingActions() {
        let label;
        if (this.index == 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index == 1) {
            label = this.toString();
        }

        return [{ component: "button", name: "label", label }];
    }

    /**
     * Initializes the month picker with index set to 1 (months view).
     */
    constructor() {
        super();
        this.index = 1;
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
     * Updates the selected month value based on the current input value.
     */
    updateSelectedValue() {
        const date = parseMonth(this.value);

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
    }

    /**
     * Handles click events on various buttons within the month picker pane.
     * @param {MouseEvent} event - The click event object.
     */
    handlePaneButtonClick(event) {
        if (event.currentTarget.name == "label") {
            if (this.index == 0) {
                this.index = 1;
            } else if (this.index == 1) {
                this.index = 0;
            }
        } else if (event.currentTarget.name == "cancel") {
            this.value = this.defaultValue;

            this.index = 1;

            this.emit("onMonthPickerButtonCancelClick", event);
        } else if (event.currentTarget.name == "ok") {
            this.index = 1;

            this.emit("onMonthPickerButtonOkClick", event);
        }
    }

    /**
     * Handles click events on year items within the month picker pane.
     * Updates the selected year and emits relevant events.
     * @param {MouseEvent} event - The click event object.
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.value = this.toString();

        this.index = 1;

        this.emit("onMonthPickerItemClick", event);
        this.emit("onMonthPickerYearItemClick", event);
    }

    /**
     * Handles click events on month items within the month picker pane.
     * Updates the selected month and emits relevant events.
     * @param {MouseEvent} event - The click event object.
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.value = this.toString();

        this.emit("onMonthPickerItemClick", event);
        this.emit("onMonthPickerMonthItemClick", event);
    }

    /**
     * Converts the selected month to a string representation.
     * @returns {string} A string representation of the selected month.
     */
    toString() {
        return stringifyMonth(this.selected);
    }
}

customElements.define("md-month-picker", MDMonthPickerElement);

export { MDMonthPickerElement };
