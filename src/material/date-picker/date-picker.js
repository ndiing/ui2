import { html } from "lit";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { parseDate, stringifyDate, stringifyYear } from "../functions/functions.js";

class MDDatePickerComponent extends MDDatetimePickerComponent {
    /**
     * Getter for leading actions.
     * @returns {Object[]} Array of leading action objects.
     */
    get leadingActions() {
        let label;
        if (this.index == 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index == 1) {
            label = stringifyYear(this.selection);
        } else if (this.index == 2) {
            label = stringifyDate(this.selection);
        }
        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
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
                <div class="md-datetime-picker__card-item">${this.renderDay()}</div>
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

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-date-picker");
    }

    /**
     * Converts the value to Date object.
     */
    updateDate() {
        const date = parseDate(this.value);

        this.selection.setFullYear(date.getFullYear());
        this.selection.setMonth(date.getMonth());
        this.selection.setDate(date.getDate());

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
    }

    /**
     * Handles click on previous icon button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatePickerSelection
     * @fires MDDatetimePickerComponent#onDatePickerIconButtonPrevClick
     */
    handleCardIconButtonPrevClick(event) {
        if (this.index == 0) {
            this.selection.setFullYear(this.selection.getFullYear() - 10);
        } else if (this.index == 1) {
            this.selection.setFullYear(this.selection.getFullYear() - 1);
        } else if (this.index == 2) {
            this.selection.setMonth(this.selection.getMonth() - 1);
        }

        this.requestUpdate();

        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerIconButtonPrevClick", event);
    }

    /**
     * Handles click on next icon button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatePickerSelection
     * @fires MDDatetimePickerComponent#onDatePickerIconButtonNextClick
     */
    handleCardIconButtonNextClick(event) {
        if (this.index == 0) {
            this.selection.setFullYear(this.selection.getFullYear() + 10);
        } else if (this.index == 1) {
            this.selection.setFullYear(this.selection.getFullYear() + 1);
        } else if (this.index == 2) {
            this.selection.setMonth(this.selection.getMonth() + 1);
        }

        this.requestUpdate();

        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerIconButtonNextClick", event);
    }

    /**
     * Handles click on label button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatePickerButtonLabelClick
     */
    handleCardButtonLabelClick(event) {
        if (this.index == 0) {
            this.index = 2;
        } else if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 2) {
            this.index = 1;
        }

        this.emit("onDatePickerButtonLabelClick", event);
    }

    /**
     * Handles click on cancel button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatePickerSelection
     * @fires MDDatetimePickerComponent#onDatePickerButtonCancelClick
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 2;

        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerButtonCancelClick", event);
    }

    /**
     * Handles click on OK button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatePickerSelection
     * @fires MDDatetimePickerComponent#onDatePickerButtonOkClick
     */
    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setMonth(this.selection.getMonth());
        this.selected.setDate(this.selection.getDate());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 2;

        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerButtonOkClick", event);
    }

    /**
     * Handles click on year item in the year selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatePickerSelection
     * @fires MDDatetimePickerComponent#onDatePickerYearItemClick
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setFullYear(data.year);

        this.index = 1;

        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerYearItemClick", event);
    }

    /**
     * Handles click on month item in the month selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatePickerSelection
     * @fires MDDatetimePickerComponent#onDatePickerMonthItemClick
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setMonth(data.month);

        this.index = 2;

        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerMonthItemClick", event);
    }

    /**
     * Handles click on day item in the day grid.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatePickerSelection
     * @fires MDDatetimePickerComponent#onDatePickerDayItemClick
     */
    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);

        this.requestUpdate();

        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerDayItemClick", event);
    }

    /**
     * Converts the selected date to a string.
     * @returns {string} String representation of selected date.
     */
    getValue() {
        return stringifyDate(this.selected);
    }
}

customElements.define("md-date-picker", MDDatePickerComponent);

export { MDDatePickerComponent };
