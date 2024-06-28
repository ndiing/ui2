import { parseWeek, stringifyWeek, stringifyYear } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

/**
 * Week picker component for selecting a specific week.
 * @extends MDDatetimePickerComponent
 * @tagname md-week-picker
 * @fires MDWeekPickerComponent#onWeekPickerSelection - Fired when a week is selected.
 * @fires MDWeekPickerComponent#onWeekPickerIconButtonPrevClick - Fired when the previous button is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerIconButtonNextClick - Fired when the next button is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerButtonLabelClick - Fired when the label button is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerButtonCancelClick - Fired when the cancel button is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerButtonOkClick - Fired when the OK button is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerYearItemClick - Fired when a year item is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerMonthItemClick - Fired when a month item is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerDayItemClick - Fired when a day item is clicked.
 */
class MDWeekPickerComponent extends MDDatetimePickerComponent {
    /**
     * Gets the formatted weekdays.
     * @returns {Array} An array of weekday objects.
     */
    get weekdays() {
        const rows = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i + 1);
            rows.push({
                label: this.weekdayFormat(date),
            });
        }
        return rows;
    }

    /**
     * Gets the formatted days of the current selection.
     * @returns {Array} An array of day objects with their corresponding weeks.
     */
    get days() {
        const rows = [];
        for (let i = 0; i < 6; i++) {
            const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), i * 7 + 1 - this.first);
            const year = date.getFullYear();
            const month = date.getMonth();
            const week = date.getWeek();
            const children = [];
            const column = {
                activated: year === this.activated.getFullYear() && week === this.activated.getWeek(),
                selected: year === this.selected.getFullYear() && week === this.selected.getWeek(),
                year,
                month,
                week,
            };

            for (let j = 0; j < 7; j++) {
                const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), i * 7 + j + 1 - this.first);
                children.push({
                    label: this.dayFormat(date),
                });
            }
            column.children = children;
            rows.push(column);
        }
        return rows;
    }

    /**
     * Gets the body of the week picker component.
     * @returns {Array} An array containing the HTML template for the body.
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
     * Sets the body of the week picker component.
     * @param {Array} value - The new body value.
     */
    set body(value) {
        this._body = value;
    }

    /**
     * Gets the leading actions of the week picker component.
     * @returns {Array} An array containing the leading action buttons.
     */
    get leadingActions() {
        let label;
        if (this.index === 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index === 1) {
            label = stringifyYear(this.selection);
        } else if (this.index === 2) {
            label = stringifyWeek(this.selection);
        }

        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    renderDay() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__grid">
                <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--weekdays">
                    ${this.weekdays.map(item=>html`
                        <div class="md-datetime-picker__grid-item">
                            <div class="md-datetime-picker__grid-label">${item.label}</div>
                        </div>    
                    `)}
                </div>
                ${this.days.map(row=>html`
                    <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--days" ?activated="${row.activated}" ?selected="${row.selected}" .data="${row}" @click="${this.handleDatetimePickerDayItemClick}">
                        ${row.children.map(item=>html`
                            <div class="md-datetime-picker__grid-item" >
                                <div class="md-datetime-picker__grid-label">${item.label}</div>
                            </div>    
                        `)}
                    </div>
                `)}
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-week-picker");
    }

    /**
     * Updates the date based on the selected week.
     */
    updateDate() {
        const date = parseWeek(this.value);

        this.selection.setFullYear(date.getFullYear());
        this.selection.setWeek(date.getWeek());

        this.selected.setFullYear(date.getFullYear());
        this.selected.setWeek(date.getWeek());
    }

    handleCardIconButtonPrevClick(event) {
        if (this.index === 0) {
            this.selection.setFullYear(this.selection.getFullYear() - 10);
        } else if (this.index === 1) {
            this.selection.setFullYear(this.selection.getFullYear() - 1);
        } else if (this.index === 2) {
            this.selection.setMonth(this.selection.getMonth() - 1);
        }

        this.requestUpdate();

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerIconButtonPrevClick", event);
    }

    handleCardIconButtonNextClick(event) {
        if (this.index === 0) {
            this.selection.setFullYear(this.selection.getFullYear() + 10);
        } else if (this.index === 1) {
            this.selection.setFullYear(this.selection.getFullYear() + 1);
        } else if (this.index === 2) {
            this.selection.setMonth(this.selection.getMonth() + 1);
        }

        this.requestUpdate();

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerIconButtonNextClick", event);
    }

    handleCardButtonLabelClick(event) {
        if (this.index === 0) {
            this.index = 2;
        } else if (this.index === 1) {
            this.index = 0;
        } else if (this.index === 2) {
            this.index = 1;
        }

        this.emit("onWeekPickerButtonLabelClick", event);
    }

    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 2;

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerButtonCancelClick", event);
    }

    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setWeek(this.selection.getWeek());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 2;

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerButtonOkClick", event);
    }

    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setFullYear(data.year);

        this.index = 1;

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerYearItemClick", event);
    }

    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setMonth(data.month);

        this.index = 2;

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerMonthItemClick", event);
    }

    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setWeek(data.week);

        this.selection.setFullYear(data.year);
        this.selection.setWeek(data.week);

        this.requestUpdate();

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerDayItemClick", event);
    }

    /**
     * Gets the stringified value of the selected week.
     * @returns {String} The stringified week.
     */
    getValue() {
        return stringifyWeek(this.selected);
    }
}

customElements.define("md-week-picker", MDWeekPickerComponent);

export { MDWeekPickerComponent };
