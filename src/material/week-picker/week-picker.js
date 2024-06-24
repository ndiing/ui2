import { parseWeek, stringifyWeek, stringifyYear } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

class MDWeekPickerComponent extends MDDatetimePickerComponent {
    /**
     * Getter for weekdays array.
     * @returns {Array<Object>} Array of weekday objects.
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
     * Getter for days grid.
     * @returns {Array<Object>} Array of day objects.
     */
    get days() {
        const rows = [];
        for (let i = 0; i < 6; i++) {
            const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), i * 7 + 0 + 1 - this.first + 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            const week = date.getWeek();
            const children = [];
            const column = {
                activated: year == this.activated.getFullYear() && week == this.activated.getWeek(),
                selected: year == this.selected.getFullYear() && week == this.selected.getWeek(),
                year,
                month,
                week,
            };

            for (let j = 0; j < 7; j++) {
                const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), i * 7 + j + 1 - this.first + 1);
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
            label = stringifyWeek(this.selection);
        }

        return [{ name: "label", component: "button", label }];
    }

    /**
     * Renders the day grid.
     * @returns {TemplateResult} HTML template for rendering days.
     */
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
     * Converts the value to Date object.
     */
    updateDate() {
        const date = parseWeek(this.value);

        this.selection.setFullYear(date.getFullYear());
        this.selection.setWeek(date.getWeek());

        this.selected.setFullYear(date.getFullYear());
        this.selected.setWeek(date.getWeek());
    }

    /**
     * Handles click on previous icon button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onWeekPickerSelection
     * @fires MDDatetimePickerComponent#onWeekPickerIconButtonPrevClick
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

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerIconButtonPrevClick", event);
    }

    /**
     * Handles click on next icon button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onWeekPickerSelection
     * @fires MDDatetimePickerComponent#onWeekPickerIconButtonNextClick
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

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerIconButtonNextClick", event);
    }

    /**
     * Handles click on label button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onWeekPickerButtonLabelClick
     */
    handleCardButtonLabelClick(event) {
        if (this.index == 0) {
            this.index = 2;
        } else if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 2) {
            this.index = 1;
        }

        this.emit("onWeekPickerButtonLabelClick", event);
    }

    /**
     * Handles click on cancel button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onWeekPickerSelection
     * @fires MDDatetimePickerComponent#onWeekPickerButtonCancelClick
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 2;

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerButtonCancelClick", event);
    }

    /**
     * Handles click on OK button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onWeekPickerSelection
     * @fires MDDatetimePickerComponent#onWeekPickerButtonOkClick
     */
    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setWeek(this.selection.getWeek());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 2;

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerButtonOkClick", event);
    }

    /**
     * Handles click on year item in the year selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onWeekPickerSelection
     * @fires MDDatetimePickerComponent#onWeekPickerYearItemClick
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setFullYear(data.year);

        this.index = 1;

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerYearItemClick", event);
    }

    /**
     * Handles click on month item in the month selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onWeekPickerSelection
     * @fires MDDatetimePickerComponent#onWeekPickerMonthItemClick
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setMonth(data.month);

        this.index = 2;

        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerMonthItemClick", event);
    }

    /**
     * Handles click on day item in the day grid.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onWeekPickerSelection
     * @fires MDDatetimePickerComponent#onWeekPickerDayItemClick
     */
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
     * Converts the selected date to a string.
     * @returns {string} String representation of selected date.
     */
    getValue() {
        return stringifyWeek(this.selected);
    }
}

customElements.define("md-week-picker", MDWeekPickerComponent);

export { MDWeekPickerComponent };
