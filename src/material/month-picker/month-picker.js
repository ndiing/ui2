import { parseMonth, stringifyMonth, stringifyYear } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

class MDMonthPickerComponent extends MDDatetimePickerComponent {
    /**
     * Getter for leading actions.
     * @returns {Object[]} Array of leading action objects.
     */
    get leadingActions() {
        let label;
        if (this.index == 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index == 1) {
            label = stringifyMonth(this.selection);
        }
        return [{ name: "label", component: "button", label }];
    }

    /**
     * Getter for body content.
     * @returns {TemplateResult[]} Array containing the body HTML.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
            </div>
        `];
    }

    /**
     * Setter for body content.
     * @param {TemplateResult[]} value - HTML template to set as body.
     */
    set body(value) {
        this._body = value;
    }

    constructor() {
        super();
        this.index = 1;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-month-picker");
    }

    /**
     * Converts the value to Date object.
     */
    updateDate() {
        const date = parseMonth(this.value);

        this.selection.setFullYear(date.getFullYear());
        this.selection.setMonth(date.getMonth());

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
    }

    /**
     * Handles click on previous icon button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onMonthPickerSelection
     * @fires MDDatetimePickerComponent#onMonthPickerIconButtonPrevClick
     */
    handleCardIconButtonPrevClick(event) {
        if (this.index == 0) {
            this.selection.setFullYear(this.selection.getFullYear() - 10);
        } else if (this.index == 1) {
            this.selection.setFullYear(this.selection.getFullYear() - 1);
        }

        this.requestUpdate();

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerIconButtonPrevClick", event);
    }

    /**
     * Handles click on next icon button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onMonthPickerSelection
     * @fires MDDatetimePickerComponent#onMonthPickerIconButtonNextClick
     */
    handleCardIconButtonNextClick(event) {
        if (this.index == 0) {
            this.selection.setFullYear(this.selection.getFullYear() + 10);
        } else if (this.index == 1) {
            this.selection.setFullYear(this.selection.getFullYear() + 1);
        }

        this.requestUpdate();

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerIconButtonNextClick", event);
    }

    /**
     * Handles click on label button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onMonthPickerButtonLabelClick
     */
    handleCardButtonLabelClick(event) {
        if (this.index == 0) {
            this.index = 1;
        } else if (this.index == 1) {
            this.index = 0;
        }

        this.emit("onMonthPickerButtonLabelClick", event);
    }

    /**
     * Handles click on cancel button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onMonthPickerSelection
     * @fires MDDatetimePickerComponent#onMonthPickerButtonCancelClick
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 1;

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerButtonCancelClick", event);
    }

    /**
     * Handles click on OK button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onMonthPickerSelection
     * @fires MDDatetimePickerComponent#onMonthPickerButtonOkClick
     */
    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setMonth(this.selection.getMonth());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 1;

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerButtonOkClick", event);
    }

    /**
     * Handles click on year item in the year selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onMonthPickerSelection
     * @fires MDDatetimePickerComponent#onMonthPickerYearItemClick
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setFullYear(data.year);

        this.index = 1;

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerYearItemClick", event);
    }

    /**
     * Handles click on month item in the month selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onMonthPickerSelection
     * @fires MDDatetimePickerComponent#onMonthPickerMonthItemClick
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);

        this.requestUpdate();

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerMonthItemClick", event);
    }

    /**
     * Converts the selected date to a string.
     * @returns {string} String representation of selected date.
     */
    getValue() {
        return stringifyMonth(this.selected);
    }
}

customElements.define("md-month-picker", MDMonthPickerComponent);

export { MDMonthPickerComponent };
