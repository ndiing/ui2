import { html } from "lit";
import { MDDatetimePickerElement } from "../datetime-picker/datetime-picker.js";
import { parseWeek, stringifyWeek } from "../helper/helper.js";
import { ref } from "lit/directives/ref.js";

/**
 * Custom element for a week picker.
 * Extends MDDatetimePickerElement to provide week selection functionality.
 *
 * @extends MDDatetimePickerElement
 */
class MDWeekPickerElement extends MDDatetimePickerElement {
    /**
     * Retrieves the list of weekdays with labels and error flags for Sundays.
     * @type {Object[]} An array containing objects with label and error properties for each weekday.
     */
    get weekdays() {
        const list = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i + 1);
            list.push({
                label: this.weekdayFormat(date),
                error: date.getDay() === 0,
            });
        }
        return list;
    }

    /**
     * Retrieves the list of days organized by weeks and their child days.
     * @type {Object[]} An array containing objects representing rows of weeks and their child day objects.
     */
    get days() {
        const list = [];
        for (let i = 0; i < 6; i++) {
            const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), i * 7 + 6 - this.first + 1 + 1);
            const year = date.getFullYear();
            const week = date.getWeek();
            const rows = {
                activated: year === this.date.getFullYear() && week === this.date.getWeek(),
                selected: year === this.selected.getFullYear() && week === this.selected.getWeek(),
                year,
                week,
                children: [],
            };
            for (let j = 0; j < 7; j++) {
                const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), i * 7 + j - this.first + 1 + 1);

                rows.children.push({
                    label: this.dayFormat(date),
                });
            }
            list.push(rows);
        }
        return list;
    }

    /**
     * Override of the body property to customize the week picker layout.
     * @type {TemplateResult[]} An array containing the Lit HTML template for week picker layout.
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
     * Renders the day grid for the week picker.
     * @returns {TemplateResult} The Lit HTML template result for the day grid.
     */
    renderDay() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__grid">
                <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--weekday">
                    ${this.weekdays.map(item => html`
                        <div class="md-datetime-picker__grid-item" ?error="${item.error}">
                            <div class="md-datetime-picker__grid-label">${item.label}</div>
                        </div>
                    `)}
                </div>
                ${this.days.map(row => html`
                    <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--day"
                        @click="${this.handleDatetimePickerDayItemClick}" .data="${row}"
                        ?activated="${row.activated}" ?selected="${row.selected}" ?error="${row.error}" ?disabled="${row.disabled}">
                        ${row.children.map(item => html`
                            <div class="md-datetime-picker__grid-item">
                                <div class="md-datetime-picker__grid-label">${item.label}</div>
                            </div>
                        `)}
                    </div>
                `)}
            </div>
        `;
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
     * Updates the selected week value based on the current input value.
     */
    updateSelectedValue() {
        const date = parseWeek(this.value);

        this.selected.setFullYear(date.getFullYear());
        this.selected.setWeek(date.getWeek());
    }

    /**
     * Handles click events on various buttons within the week picker pane.
     * @param {MouseEvent} event - The click event object.
     */
    handlePaneButtonClick(event) {
        if (event.currentTarget.name === "label") {
            if (this.index === 2) {
                this.index = 1;
            } else if (this.index === 1) {
                this.index = 0;
            } else if (this.index === 0) {
                this.index = 2;
            }
        } else if (event.currentTarget.name === "cancel") {
            this.value = this.defaultValue;

            this.index = 2;

            this.emit("onWeekPickerButtonCancelClick", event);
        } else if (event.currentTarget.name === "ok") {
            this.index = 2;

            this.emit("onWeekPickerButtonOkClick", event);
        }
    }

    /**
     * Handles click events on year items within the week picker pane.
     * Updates the selected year and emits relevant events.
     * @param {MouseEvent} event - The click event object.
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.value = this.toString();

        this.index = 1;

        this.emit("onWeekPickerItemClick", event);
        this.emit("onWeekPickerYearItemClick", event);
    }

    /**
     * Handles click events on month items within the week picker pane.
     * Updates the selected year and emits relevant events.
     * @param {MouseEvent} event - The click event object.
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.value = this.toString();

        this.index = 2;

        this.emit("onWeekPickerItemClick", event);
        this.emit("onWeekPickerMonthItemClick", event);
    }

    /**
     * Handles click events on day items within the week picker pane.
     * Updates the selected year and week, and emits relevant events.
     * @param {MouseEvent} event - The click event object.
     */
    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setWeek(data.week);

        this.value = this.toString();

        this.emit("onWeekPickerItemClick", event);
        this.emit("onWeekPickerDayItemClick", event);
    }

    /**
     * Converts the selected week to a string representation.
     * @returns {string} A string representation of the selected week.
     */
    toString() {
        return stringifyWeek(this.selected);
    }
}

customElements.define("md-week-picker", MDWeekPickerElement);

export { MDWeekPickerElement };
