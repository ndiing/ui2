import { html, nothing } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { parseDatetimeLocal, stringifyDatetimeLocal, stringifyTime, stringifyYear } from "../functions/functions.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * MDDatetimePickerComponent merupakan elemen untuk memilih tanggal dan waktu.
 * @fires MDDatetimePickerComponent#onDatetimePickerIconButtonClick
 * @fires MDDatetimePickerComponent#onDatetimePickerButtonClick
 * @fires MDDatetimePickerComponent#onDatetimePickerSelection
 */
class MDDatetimePickerComponent extends MDSheetComponent {
    /**
     * @property {Object} properties - Static properties inherited from MDSheetComponent.
     * @property {number} properties.index - Current index.
     * @property {string} properties.value - Current value.
     */
    static properties = {
        ...MDSheetComponent.properties,
        index: { type: Number },
        value: { type: String },
    };

    /**
     * Getter for years array.
     * @returns {Array<Object>} Array of year objects.
     */
    get years() {
        const rows = [];
        const year = this.selection.getFullYear();
        const start = Math.floor(year / 10) * 10;
        const end = Math.floor((year + 10) / 10) * 10;
        for (let i = 0; i < end - start; i++) {
            const date = new Date(start + i, 0);
            const year = date.getFullYear();
            rows.push({
                label: this.yearFormat(date),
                activated: year == this.activated.getFullYear(),
                selected: year == this.selected.getFullYear(),
                year,
            });
        }
        return rows;
    }

    /**
     * Getter for months array.
     * @returns {Array<Object>} Array of month objects.
     */
    get months() {
        const rows = [];
        for (let i = 0; i < 12; i++) {
            const date = new Date(this.selection.getFullYear(), i);
            const year = date.getFullYear();
            const month = date.getMonth();
            rows.push({
                label: this.monthFormat(date),
                activated: year == this.activated.getFullYear() && month == this.activated.getMonth(),
                selected: year == this.selected.getFullYear() && month == this.selected.getMonth(),
                year,
                month,
            });
        }
        return rows;
    }

    /**
     * Getter for first day of the month.
     * @returns {number} Day index (0-6).
     */
    get first() {
        return new Date(this.selection.getFullYear(), this.selection.getMonth()).getDay();
    }

    /**
     * Getter for last day of the month.
     * @returns {number} Last day of the month.
     */
    get last() {
        return 32 - new Date(this.selection.getFullYear(), this.selection.getMonth(), 32).getDate();
    }

    /**
     * Getter for weekdays array.
     * @returns {Array<Object>} Array of weekday objects.
     */
    get weekdays() {
        const rows = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i);
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
            const column = {};
            const children = [];
            for (let j = 0; j < 7; j++) {
                const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), i * 7 + j + 1 - this.first);
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDate();
                children.push({
                    label: this.dayFormat(date),
                    activated: year == this.activated.getFullYear() && month == this.activated.getMonth() && day == this.activated.getDate(),
                    selected: year == this.selected.getFullYear() && month == this.selected.getMonth() && day == this.selected.getDate(),
                    year,
                    month,
                    day,
                });
            }
            column.children = children;
            rows.push(column);
        }
        return rows;
    }

    /**
     * Getter for hours array.
     * @returns {Array<Object>} Array of hour objects.
     */
    get hours() {
        const rows = [];
        for (let i = 0; i < 24; i++) {
            const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), this.selection.getDate(), i);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            rows.push({
                label: this.hourFormat(date),
                activated: hour == this.activated.getHours(),
                selected: hour == this.selected.getHours(),
                year,
                month,
                day,
                hour,
            });
        }
        return rows;
    }

    /**
     * Getter for minutes array.
     * @returns {Array<Object>} Array of minute objects.
     */
    get minutes() {
        const rows = [];
        for (let i = 0; i < 60; i++) {
            const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), this.selection.getDate(), this.selection.getHours(), i);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const minute = date.getMinutes();
            rows.push({
                label: this.minuteFormat(date),
                activated: hour == this.activated.getHours() && minute == this.activated.getMinutes(),

                selected: hour == this.selected.getHours() && minute == this.selected.getMinutes(),
                year,
                month,
                day,
                hour,
                minute,
            });
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
                <div class="md-datetime-picker__card-item">${this.renderHour()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMinute()}</div>
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
            label = stringifyDatetimeLocal(this.selection);
        } else if (this.index == 3) {
            label = stringifyTime(this.selection);
        } else if (this.index == 4) {
            label = stringifyTime(this.selection);
        }
        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    /**
     * Getter for trailing actions.
     * @returns {Object[]} Array of trailing action objects.
     */
    get trailingActions() {
        return [
            { name: "prev", icon: "keyboard_arrow_left" },
            { name: "next", icon: "keyboard_arrow_right" },
        ];
    }

    /**
     * Getter for general actions.
     * @returns {Object[]} Array of action objects.
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

    /**
     * Constructor for initializing the component.
     */
    constructor() {
        super();

        this.yearFormat = new Intl.DateTimeFormat(undefined, { year: "numeric" }).format;
        this.monthFormat = new Intl.DateTimeFormat(undefined, { month: "long" }).format;
        this.weekdayFormat = new Intl.DateTimeFormat(undefined, { weekday: "narrow" }).format;
        this.dayFormat = new Intl.DateTimeFormat(undefined, { day: "numeric" }).format;
        this.hourFormat = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false }).format;
        this.minuteFormat = new Intl.DateTimeFormat(undefined, { minute: "numeric", hour12: false }).format;

        this.activated = new Date();
        this.selection = new Date();
        this.selected = new Date();

        this.index = 2;
        this.value = this.getValue();

        this.popper = new MDPopperController(this, {});
    }

    /**
     * Renders the year selector.
     * @returns {TemplateResult} HTML template for rendering years.
     */
    renderYear() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__list md-datetime-picker__list--years">
                ${this.years.map(item=>html`
                    <div class="md-datetime-picker__list-item" ?activated="${item.activated}" ?selected="${item.selected}" .data="${item}" @click="${this.handleDatetimePickerYearItemClick}">
                        <md-icon class="md-datetime-picker__list-icon">${item.selected?'check':nothing}</md-icon>
                        <div class="md-datetime-picker__list-label">${item.label}</div>
                    </div>    
                `)}
            </div>
        `;
    }

    /**
     * Renders the month selector.
     * @returns {TemplateResult} HTML template for rendering months.
     */
    renderMonth() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__list md-datetime-picker__list--months">
                ${this.months.map(item=>html`
                    <div class="md-datetime-picker__list-item" ?activated="${item.activated}" ?selected="${item.selected}" .data="${item}" @click="${this.handleDatetimePickerMonthItemClick}">
                        <md-icon class="md-datetime-picker__list-icon">${item.selected?'check':nothing}</md-icon>
                        <div class="md-datetime-picker__list-label">${item.label}</div>
                    </div>    
                `)}
            </div>
        `;
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
                    <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--days">
                        ${row.children.map(item=>html`
                            <div class="md-datetime-picker__grid-item" ?activated="${item.activated}" ?selected="${item.selected}" .data="${item}" @click="${this.handleDatetimePickerDayItemClick}">
                                <div class="md-datetime-picker__grid-label">${item.label}</div>
                            </div>    
                        `)}
                    </div>
                `)}
            </div>
        `;
    }

    /**
     * Renders the hour selector.
     * @returns {TemplateResult} HTML template for rendering hours.
     */
    renderHour() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--hours">
                ${this.hours.map(item=>html`
                    <div class="md-datetime-picker__absolute-item" ?activated="${item.activated}" ?selected="${item.selected}" .data="${item}" @click="${this.handleDatetimePickerHourItemClick}">
                        <div class="md-datetime-picker__absolute-label">${item.label}</div>
                    </div>    
                `)}
            </div>
        `;
    }

    /**
     * Renders the minute selector.
     * @returns {TemplateResult} HTML template for rendering minutes.
     */
    renderMinute() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--minutes">
                ${this.minutes.map(item=>html`
                    <div class="md-datetime-picker__absolute-item" ?activated="${item.activated}" ?selected="${item.selected}" .data="${item}" @click="${this.handleDatetimePickerMinuteItemClick}">
                        <div class="md-datetime-picker__absolute-label">${item.label}</div>
                    </div>    
                `)}
            </div>
        `;
    }

    /**
     * Callback when the component is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-datetime-picker");

        this.defaultValue = this.value;
        this.updateDate();
    }

    /**
     * Callback when the component is updated.
     * @param {Map} changedProperties - Map of changed properties.
     */
    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-datetime-picker-card-index", this.index);
        }

        if (changedProperties.has("value") && changedProperties.get("value")) {
            if (this.value) {
                await this.updateComplete;
                this.updateDate();
                this.requestUpdate();
            }
        }
    }

    /**
     * Handles click on icon buttons.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerIconButtonClick
     */
    handleCardIconButtonClick(event) {
        if (event.currentTarget.name == "prev") {
            this.handleCardIconButtonPrevClick(event);
        } else if (event.currentTarget.name == "next") {
            this.handleCardIconButtonNextClick(event);
        }

        this.emit("onDatetimePickerIconButtonClick", event);
    }

    /**
     * Handles click on action buttons.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerButtonClick
     */
    handleCardButtonClick(event) {
        if (event.currentTarget.name == "label") {
            this.handleCardButtonLabelClick(event);
        } else if (event.currentTarget.name == "cancel") {
            this.handleCardButtonCancelClick(event);
        } else if (event.currentTarget.name == "ok") {
            this.handleCardButtonOkClick(event);
        }

        this.emit("onDatetimePickerButtonClick", event);
    }

    /**
     * Converts the value to Date object.
     */
    updateDate() {
        const date = parseDatetimeLocal(this.value);

        this.selection.setFullYear(date.getFullYear());
        this.selection.setMonth(date.getMonth());
        this.selection.setDate(date.getDate());
        this.selection.setHours(date.getHours());
        this.selection.setMinutes(date.getMinutes());

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());
    }

    /**
     * Handles click on previous icon button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerSelection
     * @fires MDDatetimePickerComponent#onDatetimePickerIconButtonPrevClick
     */
    handleCardIconButtonPrevClick(event) {
        if (this.index == 0) {
            this.selection.setFullYear(this.selection.getFullYear() - 10);
        } else if (this.index == 1) {
            this.selection.setFullYear(this.selection.getFullYear() - 1);
        } else if (this.index == 2) {
            this.selection.setMonth(this.selection.getMonth() - 1);
        } else if (this.index == 3) {
            this.selection.setHours(this.selection.getHours() - 1);
        } else if (this.index == 4) {
            this.selection.setMinutes(this.selection.getMinutes() - 1);
        }

        this.requestUpdate();

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerIconButtonPrevClick", event);
    }

    /**
     * Handles click on next icon button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerSelection
     * @fires MDDatetimePickerComponent#onDatetimePickerIconButtonNextClick
     */
    handleCardIconButtonNextClick(event) {
        if (this.index == 0) {
            this.selection.setFullYear(this.selection.getFullYear() + 10);
        } else if (this.index == 1) {
            this.selection.setFullYear(this.selection.getFullYear() + 1);
        } else if (this.index == 2) {
            this.selection.setMonth(this.selection.getMonth() + 1);
        } else if (this.index == 3) {
            this.selection.setHours(this.selection.getHours() + 1);
        } else if (this.index == 4) {
            this.selection.setMinutes(this.selection.getMinutes() + 1);
        }

        this.requestUpdate();

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerIconButtonNextClick", event);
    }

    /**
     * Handles click on label button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerButtonLabelClick
     */
    handleCardButtonLabelClick(event) {
        if (this.index == 0) {
            this.index = 2;
        } else if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 2) {
            this.index = 1;
        } else if (this.index == 3) {
            this.index = 4;
        } else if (this.index == 4) {
            this.index = 2;
        }

        this.emit("onDatetimePickerButtonLabelClick", event);
    }

    /**
     * Handles click on cancel button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerSelection
     * @fires MDDatetimePickerComponent#onDatetimePickerButtonCancelClick
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 2;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerButtonCancelClick", event);
    }

    /**
     * Handles click on OK button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerSelection
     * @fires MDDatetimePickerComponent#onDatetimePickerButtonOkClick
     */
    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setMonth(this.selection.getMonth());
        this.selected.setDate(this.selection.getDate());
        this.selected.setHours(this.selection.getHours());
        this.selected.setMinutes(this.selection.getMinutes());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 2;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerButtonOkClick", event);
    }

    /**
     * Handles click on year item in the year selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerSelection
     * @fires MDDatetimePickerComponent#onDatetimePickerYearItemClick
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setFullYear(data.year);

        this.index = 1;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerYearItemClick", event);
    }

    /**
     * Handles click on month item in the month selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerSelection
     * @fires MDDatetimePickerComponent#onDatetimePickerMonthItemClick
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setMonth(data.month);

        this.index = 2;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerMonthItemClick", event);
    }

    /**
     * Handles click on day item in the day grid.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerSelection
     * @fires MDDatetimePickerComponent#onDatetimePickerDayItemClick
     */
    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);

        this.index = 3;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerDayItemClick", event);
    }

    /**
     * Handles click on hour item in the hour selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerSelection
     * @fires MDDatetimePickerComponent#onDatetimePickerHourItemClick
     */
    handleDatetimePickerHourItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);

        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);
        this.selection.setHours(data.hour);

        this.index = 4;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerHourItemClick", event);
    }

    /**
     * Handles click on minute item in the minute selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onDatetimePickerSelection
     * @fires MDDatetimePickerComponent#onDatetimePickerMinuteItemClick
     */
    handleDatetimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);
        this.selected.setMinutes(data.minute);

        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);
        this.selection.setHours(data.hour);
        this.selection.setMinutes(data.minute);

        this.index = 2;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerMinuteItemClick", event);
    }

    /**
     * Converts the selected date to a string.
     * @returns {string} String representation of selected date.
     */
    getValue() {
        return stringifyDatetimeLocal(this.selected);
    }

    /**
     * Displays the datetime-picker relative to the provided button element with specified options.
     * @param {HTMLElement} button - The button or element to which the datetime-picker is anchored.
     * @param {Object} options - Additional options for configuring the datetime-picker's behavior.
     * @param {Array.<String>} [options.placements=["below", "above", "after", "before", "north-east", "south-east", "south-west", "north-west"]] - List of possible placements for the datetime-picker relative to the button.
     * @param {Number} [options.offset=8] - Offset value in pixels for adjusting the datetime-picker's position.
     */
    show(button, options) {
        this.showModal();

        this.popper.setPlacement(button, {
            placements: ["top-start", "top-end", "top", "below-start", "below-end", "below", "bottom-start", "bottom-end", "bottom", "above-start", "above-end", "above", "left-start", "left-end", "left", "after-start", "after-end", "after", "right-start", "right-end", "right", "before-start", "before-end", "before", "center"],
            ...options,
        });
    }
}

customElements.define("md-datetime-picker", MDDatetimePickerComponent);

export { MDDatetimePickerComponent };
