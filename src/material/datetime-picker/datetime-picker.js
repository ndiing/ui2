import { html, nothing } from "lit";
import { MDPaneElement } from "../pane/pane.js";
import { stringifyDatetimeLocal, parseDatetimeLocal, stringifyTime } from "../helper/helper.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * Custom element representing a datetime picker.
 * @extends MDPaneElement
 */
class MDDatetimePickerElement extends MDPaneElement {
    /**
     * Properties for the MDDatetimePickerElement.
     * @static
     * @type {Object}
     * @property {Number} index - The current index.
     * @property {String} value - The selected value in string format.
     */
    static properties = {
        ...MDPaneElement.properties,
        index: { type: Number },
        value: { type: String },
    };

    /**
     * Get the first day of the selected month.
     * @type {Number}
     */
    get first() {
        return new Date(this.selected.getFullYear(), this.selected.getMonth()).getDay();
    }

    /**
     * Get the last day of the selected month.
     * @type {Number}
     */
    get last() {
        return 32 - new Date(this.selected.getFullYear(), this.selected.getMonth(), 32).getDate();
    }

    /**
     * Get the list of years around the selected year.
     * @type {Object[]}
     */
    get years() {
        const year = this.selected.getFullYear();
        const start = Math.floor((year - 0) / 10) * 10;
        const end = Math.floor((year + 10) / 10) * 10;
        const list = [];
        for (let i = 0; i < end - start; i++) {
            const date = new Date(start + i, 0);
            const year = date.getFullYear();
            list.push({
                activated: year == this.date.getFullYear(),
                selected: year == this.selected.getFullYear(),
                label: this.yearFormat(date),
                year,
            });
        }
        return list;
    }

    /**
     * Get the list of months in the selected year.
     * @type {Object[]}
     */
    get months() {
        const list = [];
        for (let i = 0; i < 12; i++) {
            const date = new Date(this.selected.getFullYear(), i);
            const year = date.getFullYear();
            const month = date.getMonth();
            list.push({
                activated: year == this.date.getFullYear() && month == this.date.getMonth(),
                selected: year == this.selected.getFullYear() && month == this.selected.getMonth(),
                label: this.monthFormat(date),
                year,
                month,
            });
        }
        return list;
    }

    /**
     * Get the list of weekdays.
     * @type {Object[]}
     */
    get weekdays() {
        const list = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i);
            list.push({
                label: this.weekdayFormat(date),
                error: date.getDay() == 0,
            });
        }
        return list;
    }

    /**
     * Get the list of days in the selected month.
     * @type {Object[]}
     */
    get days() {
        const list = [];
        for (let i = 0; i < 6; i++) {
            const rows = { children: [] };
            for (let j = 0; j < 7; j++) {
                const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), i * 7 + j - this.first + 1);
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDate();
                rows.children.push({
                    activated: year == this.date.getFullYear() && month == this.date.getMonth() && day == this.date.getDate(),
                    selected: year == this.selected.getFullYear() && month == this.selected.getMonth() && day == this.selected.getDate(),
                    error: date.getDay() == 0,
                    disabled: !(year == this.selected.getFullYear() && month == this.selected.getMonth()),
                    label: this.dayFormat(date),
                    year,
                    month,
                    day,
                });
            }
            list.push(rows);
        }
        return list;
    }

    /**
     * Get the list of hours in the selected day.
     * @type {Object[]}
     */
    get hours() {
        const list = [];
        for (let i = 0; i < 24; i++) {
            const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), this.selected.getDate(), i);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            list.push({
                activated: year == this.date.getFullYear() && month == this.date.getMonth() && day == this.date.getDate() && hour == this.date.getHours(),
                selected: year == this.selected.getFullYear() && month == this.selected.getMonth() && day == this.selected.getDate() && hour == this.selected.getHours(),
                label: this.hourFormat(date),
                year,
                month,
                day,
                hour,
            });
        }
        return list;
    }

    /**
     * Get the list of minutes in the selected hour.
     * @type {Object[]}
     */
    get minutes() {
        const list = [];
        for (let i = 0; i < 60; i++) {
            const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), this.selected.getDate(), this.selected.getHours(), i);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const minute = date.getMinutes();
            list.push({
                activated: year == this.date.getFullYear() && month == this.date.getMonth() && day == this.date.getDate() && hour == this.date.getHours() && minute == this.date.getMinutes(),
                selected: year == this.selected.getFullYear() && month == this.selected.getMonth() && day == this.selected.getDate() && hour == this.selected.getHours() && minute == this.selected.getMinutes(),
                label: i % 5 == 0 ? this.minuteFormat(date) : "",
                year,
                month,
                day,
                hour,
                minute,
            });
        }
        return list;
    }

    /**
     * Reference to the card item for years.
     * @type {HTMLElement}
     */
    cardItemYear = createRef();

    /**
     * Reference to the card item for months.
     * @type {HTMLElement}
     */
    cardItemMonth = createRef();

    /**
     * Render the body of the datetime picker.
     * @type {TemplateResult[]}
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <div class="md-layout-card">
                <div class="md-layout-card__item" ${ref(this.cardItemYear)}>${this.renderYear()}</div>
                <div class="md-layout-card__item" ${ref(this.cardItemMonth)}>${this.renderMonth()}</div>
                <div class="md-layout-card__item">${this.renderDay()}</div>
                <div class="md-layout-card__item">${this.renderHour()}</div>
                <div class="md-layout-card__item">${this.renderMinute()}</div>
            </div>
        `];
    }

    /**
     * Set the body content.
     * @param {TemplateResult[]} value - The new body content.
     */
    set body(value) {
        this._body = value;
    }

    /**
     * Get the leading actions for the datetime picker.
     * @type {Object[]}
     */
    get leadingActions() {
        let label;
        if (this.index == 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index == 1) {
            label = this.selected.getFullYear();
        } else if (this.index == 2) {
            label = this.toString();
        } else if (this.index == 3) {
            label = stringifyTime(this.selected);
        } else if (this.index == 4) {
            label = stringifyTime(this.selected);
        }
        return [{ component: "button", name: "label", label }];
    }

    /**
     * Initialize the datetime picker element.
     */
    constructor() {
        super();

        /**
         * Formatter for the year part.
         * @type {Intl.DateTimeFormat}
         */
        this.yearFormat = new Intl.DateTimeFormat(undefined, { year: "numeric" }).format;

        /**
         * Formatter for the month part.
         * @type {Intl.DateTimeFormat}
         */
        this.monthFormat = new Intl.DateTimeFormat(undefined, { month: "long" }).format;

        /**
         * Formatter for the weekday part.
         * @type {Intl.DateTimeFormat}
         */
        this.weekdayFormat = new Intl.DateTimeFormat(undefined, { weekday: "narrow" }).format;

        /**
         * Formatter for the day part.
         * @type {Intl.DateTimeFormat}
         */
        this.dayFormat = new Intl.DateTimeFormat(undefined, { day: "numeric" }).format;

        /**
         * Formatter for the hour part.
         * @type {Intl.DateTimeFormat}
         */
        this.hourFormat = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false }).format;

        /**
         * Formatter for the minute part.
         * @type {Intl.DateTimeFormat}
         */
        this.minuteFormat = new Intl.DateTimeFormat(undefined, { minute: "numeric", hour12: false }).format;

        /**
         * Reference to the currently selected date.
         * @type {Date}
         */
        this.date = new Date();

        /**
         * The currently selected date.
         * @type {Date}
         */
        this.selected = new Date();

        /**
         * The value of the datetime picker in string format.
         * @type {String}
         */
        this.value = this.toString();

        /**
         * The current index of the datetime picker.
         * @type {Number}
         */
        this.index = 2;

        /**
         * Trailing actions for the datetime picker.
         * @type {Object[]}
         */
        this.trailingActions = [
            { name: "prev", icon: "keyboard_arrow_left" },
            { name: "next", icon: "keyboard_arrow_right" },
        ];

        /**
         * Buttons for the datetime picker.
         * @type {Object[]}
         */
        this.buttons = [
            { name: "cancel", label: "Cancel" },
            { name: "ok", label: "Ok" },
        ];

        /**
         * Default variant of the datetime picker.
         * @type {String}
         */
        this.defaultVariant = "menu";
    }

    /**
     * Render the year list.
     * @returns {TemplateResult}
     */
    renderYear() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__list">
                ${this.years.map(item=>html`
                    <div class="md-datetime-picker__list-item" @click="${this.handleDatetimePickerYearItemClick}" .data="${item}" ?activated="${item.activated}" ?selected="${item.selected}">
                        <md-icon class="md-datetime-picker__list-icon">${item.selected?'check':nothing}</md-icon>
                        <div class="md-datetime-picker__list-label">${item.label}</div>
                    </div>
                `)}
            </div>
        `
    }

    /**
     * Render the month list.
     * @returns {TemplateResult}
     */
    renderMonth() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__list">
                ${this.months.map(item=>html`
                    <div class="md-datetime-picker__list-item" @click="${this.handleDatetimePickerMonthItemClick}" .data="${item}" ?activated="${item.activated}" ?selected="${item.selected}">
                        <md-icon class="md-datetime-picker__list-icon">${item.selected?'check':nothing}</md-icon>
                        <div class="md-datetime-picker__list-label">${item.label}</div>
                    </div>
                `)}
            </div>
        `
    }

    /**
     * Render the day grid.
     * @returns {TemplateResult}
     */
    renderDay() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__grid">
                <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--weekday">
                    ${this.weekdays.map(item=>html`
                        <div class="md-datetime-picker__grid-item" ?error="${item.error}">
                            <div class="md-datetime-picker__grid-label">${item.label}</div>
                        </div>
                    `)}
                </div>
                ${this.days.map(row=>html`
                    <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--day">
                        ${row.children.map(item=>html`
                            <div class="md-datetime-picker__grid-item" @click="${this.handleDatetimePickerDayItemClick}" .data="${item}" ?activated="${item.activated}" ?selected="${item.selected}" ?error="${item.error}" ?disabled="${item.disabled}">
                                <div class="md-datetime-picker__grid-label">${item.label}</div>
                            </div>
                        `)}
                    </div>
                `)}
            </div>
        `
    }

    /**
     * Render the hour list.
     * @returns {TemplateResult}
     */
    renderHour() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--hour">
                ${this.hours.map(item=>html`
                    <div class="md-datetime-picker__absolute-item" @click="${this.handleDatetimePickerHourItemClick}" .data="${item}" ?activated="${item.activated}" ?selected="${item.selected}">
                        <div class="md-datetime-picker__absolute-label">${item.label}</div>
                    </div>
                `)}
            </div>
        `
    }

    /**
     * Render the minute list.
     * @returns {TemplateResult}
     */
    renderMinute() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--minute">
                ${this.minutes.map(item=>html`
                    <div class="md-datetime-picker__absolute-item" @click="${this.handleDatetimePickerMinuteItemClick}" .data="${item}" ?activated="${item.activated}" ?selected="${item.selected}">
                        <div class="md-datetime-picker__absolute-label">${item.label}</div>
                    </div>
                `)}
            </div>
        `
    }

    /**
     * Callback when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane");

        this.defaultValue = this.value;
    }

    /**
     * Callback when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-pane");
    }

    /**
     * Callback when the element is updated.
     * @param {Map<any, any>} changedProperties - Map of changed properties.
     */
    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-layout-card-index", this.index);
        }

        if (changedProperties.has("value")) {
            if (this.value) {
                await this.updateComplete;
                this.updateSelectedValue();
                this.requestUpdate();
            }
        }
    }

    /**
     * Update the selected value based on the current value.
     */
    updateSelectedValue() {
        const date = parseDatetimeLocal(this.value);

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());
    }

    /**
     * Callback when a button in the pane is clicked.
     * @param {Event} event - The click event.
     */
    handlePaneButtonClick(event) {
        if (event.currentTarget.name == "label") {
            if (this.index == 2) {
                this.index = 1;
            } else if (this.index == 1) {
                this.index = 0;
            } else if (this.index == 0) {
                this.index = 2;
            } else if (this.index == 3) {
                this.index = 4;
            } else if (this.index == 4) {
                this.index = 2;
            }
        } else if (event.currentTarget.name == "cancel") {
            this.value = this.defaultValue;

            this.index = 2;

            this.emit("onDatetimePickerButtonCancelClick", event);
        } else if (event.currentTarget.name == "ok") {
            this.index = 2;

            this.emit("onDatetimePickerButtonOkClick", event);
        }
    }

    /**
     * Callback when an icon button in the pane is clicked.
     * @param {Event} event - The click event.
     */
    handlePaneIconButtonClick(event) {
        if (event.currentTarget.name == "prev") {
            if (this.index == 0) {
                this.selected.setFullYear(this.selected.getFullYear() - 10);
            } else if (this.index == 1) {
                this.selected.setFullYear(this.selected.getFullYear() - 1);
            } else if (this.index == 2) {
                this.selected.setMonth(this.selected.getMonth() - 1);
            } else if (this.index == 3) {
                this.selected.setHours(this.selected.getHours() - 1);
            } else if (this.index == 4) {
                this.selected.setMinutes(this.selected.getMinutes() - 1);
            }
        } else if (event.currentTarget.name == "next") {
            if (this.index == 0) {
                this.selected.setFullYear(this.selected.getFullYear() + 10);
            } else if (this.index == 1) {
                this.selected.setFullYear(this.selected.getFullYear() + 1);
            } else if (this.index == 2) {
                this.selected.setMonth(this.selected.getMonth() + 1);
            } else if (this.index == 3) {
                this.selected.setHours(this.selected.getHours() + 1);
            } else if (this.index == 4) {
                this.selected.setMinutes(this.selected.getMinutes() + 1);
            }
        }

        this.requestUpdate();
    }

    /**
     * Callback when a year item in the datetime picker is clicked.
     * @param {Event} event - The click event.
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.value = this.toString();

        this.index = 1;

        this.emit("onDatetimePickerItemClick", event);
        this.emit("onDatetimePickerYearItemClick", event);
    }

    /**
     * Callback when a month item in the datetime picker is clicked.
     * @param {Event} event - The click event.
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.value = this.toString();

        this.index = 2;

        this.emit("onDatetimePickerItemClick", event);
        this.emit("onDatetimePickerMonthItemClick", event);
    }

    /**
     * Callback when a day item in the datetime picker is clicked.
     * @param {Event} event - The click event.
     */
    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.value = this.toString();

        this.index = 3;

        this.emit("onDatetimePickerItemClick", event);
        this.emit("onDatetimePickerDayItemClick", event);
    }

    /**
     * Callback when an hour item in the datetime picker is clicked.
     * @param {Event} event - The click event.
     */
    handleDatetimePickerHourItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);

        this.value = this.toString();

        this.index = 4;

        this.emit("onDatetimePickerItemClick", event);
        this.emit("onDatetimePickerHourItemClick", event);
    }

    /**
     * Callback when a minute item in the datetime picker is clicked.
     * @param {Event} event - The click event.
     */
    handleDatetimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);
        this.selected.setMinutes(data.minute);

        this.value = this.toString();

        this.index = 2;

        this.emit("onDatetimePickerItemClick", event);
        this.emit("onDatetimePickerMinuteItemClick", event);
    }

    /**
     * Show the datetime picker relative to a button.
     * @param {HTMLElement} button - The button to show the datetime picker relative to.
     * @param {Object} options - Options for showing the datetime picker.
     */
    show(button, options = {}) {
        this.style.removeProperty("--md-comp-pane-animation");

        this.open = true;

        if (button) {
            let placements = [
                //
                "top-start",
                "top-end",
                "top",
                "below-start",
                "below-end",
                "below",
                "bottom-start",
                "bottom-end",
                "bottom",
                "above-start",
                "above-end",
                "above",
                "left-start",
                "left-end",
                "left",
                "right-start",
                "right-end",
                "right",
                "before-start",
                "before-end",
                "before",
                "after-start",
                "after-end",
                "after",
            ];
            this.popper.show(button, {
                placements,
                ...options,
            });
        }
    }

    /**
     * Convert the selected date to a string.
     * @returns {String} The selected date as a string.
     */
    toString() {
        return stringifyDatetimeLocal(this.selected);
    }
}

customElements.define("md-datetime-picker", MDDatetimePickerElement);

export { MDDatetimePickerElement };
