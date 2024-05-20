import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { Scrolling } from "../scrolling/scrolling";
// import { Scrolling } from "../virtual-scroll/virtual-scroll";

class MDDatePickerYear extends HTMLDivElement {
    connectedCallback() {
        const total = new Date().getFullYear() * 2;
        const itemHeight = 48;
        const viewportHeight = 32 * 7 + 4 * 6;

        const scrollbar = this.querySelector(".md-date-picker__scrollbar");
        const container = this.querySelector(".md-date-picker__list");

        this.scrolling = new Scrolling(this, {
            total,
            itemHeight,
            scrollbar,
            container,
        });

        this.scrollTop = itemHeight * (total / 2) - itemHeight * Math.floor(viewportHeight / itemHeight / 2);
    }
    disconnectedCallback() {
        this.scrolling.destroy();
    }
}

customElements.define("md-date-picker-year", MDDatePickerYear, { extends: "div" });

class MDDatePickerMonth extends HTMLDivElement {
    connectedCallback() {}
    disconnectedCallback() {}
}

customElements.define("md-date-picker-month", MDDatePickerMonth, { extends: "div" });

class MDDatePicker extends MDElement {
    static get properties() {
        return {
            value: { type: String },
            index: { type: Number },
        };
    }

    get first() {
        return new Date(this.selected.getFullYear(), this.selected.getMonth(), 1).getDay();
    }

    get last() {
        return 32 - new Date(this.selected.getFullYear(), this.selected.getMonth(), 1).getDate();
    }

    _years = [];
    get years() {
        return this._years;
    }
    set years(value) {
        this._years = value;
    }

    get months() {
        return Array.from({ length: 12 }, (v, k) => {
            const date = new Date(this.selected.getFullYear(), k, 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            return {
                activated: year == this.current.getFullYear() && month == this.current.getMonth(),
                selected: year == this.currentValue.getFullYear() && month == this.currentValue.getMonth(),
                disabled: false,
                error: false,
                label: this.monthDTF.format(date),
                year,
                month,
            };
        });
    }

    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k);
            return {
                label: this.weekdayDTF.format(date),
                error: date.getDay() == 0,
            };
        });
    }

    get days() {
        return Array.from({ length: 6 }, (v, k) => {
            return Array.from({ length: 7 }, (v2, k2) => {
                const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), k * 7 + k2 - this.first + 1);
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDate();
                return {
                    activated: year == this.current.getFullYear() && month == this.current.getMonth() && day == this.current.getDate(),
                    selected: year == this.currentValue.getFullYear() && month == this.currentValue.getMonth() && day == this.currentValue.getDate(),
                    disabled: false,
                    error: date.getDay() == 0,
                    label: this.dayDTF.format(date),
                    year,
                    month,
                    day,
                };
            });
        });
    }

    get label() {
        if (this.index == 0) {
            return [this.years[0].year, this.years[this.years.length - 1].year].join(" - ");
        } else if (this.index == 1) {
            return this.yearDTF.format(this.selected);
        } else if (this.index == 2 || this.index == 3 || this.index == 4) {
            return this.labelDTF.format(this.selected);
        }
    }

    constructor() {
        super();

        this.yearDTF = new Intl.DateTimeFormat(undefined, { year: "numeric" });
        this.monthDTF = new Intl.DateTimeFormat(undefined, { month: "long" });
        this.weekdayDTF = new Intl.DateTimeFormat(undefined, { weekday: "narrow" });
        this.dayDTF = new Intl.DateTimeFormat(undefined, { day: "numeric" });

        this.labelDTF = new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long" });

        this.currentValue = new Date();
        this.selected = new Date();
        this.current = new Date();

        this.index = 2;
    }

    get cardInnerYear() {
        return this.querySelector(".md-date-picker__card-inner--year");
    }

    renderCardItemYears() {
        return html`
            <div class="md-date-picker__card-inner md-date-picker__card-inner--year" is="md-date-picker-year" @onScrolling="${this.handleDatePickerYearScrolling}">
                <div class="md-date-picker__scrollbar"></div>
                <div class="md-date-picker__list">
                    ${this.years.map(
                        (data) => html`
                            <div
                                .data="${data}"
                                @click="${this.handleDatePickerItemYearClick}"
                                class="${classMap({
                                    "md-date-picker__list-item": true,
                                    "md-date-picker__list-item--activated": data.activated,
                                    "md-date-picker__list-item--selected": data.selected,
                                    "md-date-picker__list-item--disabled": data.disabled,
                                    "md-date-picker__list-item--error": data.error,
                                })}"
                            >
                                <md-icon class="md-date-picker__list-icon">${data.selected ? "check" : ""}</md-icon>
                                <div class="md-date-picker__list-label">${data.label}</div>
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    renderCardItemMonths() {
        return html`
            <div class="md-date-picker__card-inner" is="md-date-picker-month" @onScrolling="${this.handleDatePickerMonthScrolling}">
                <div class="md-date-picker__list">
                    ${this.months.map(
                        (data) => html`
                            <div
                                .data="${data}"
                                @click="${this.handleDatePickerItemMonthClick}"
                                class="${classMap({
                                    "md-date-picker__list-item": true,
                                    "md-date-picker__list-item--activated": data.activated,
                                    "md-date-picker__list-item--selected": data.selected,
                                    "md-date-picker__list-item--disabled": data.disabled,
                                    "md-date-picker__list-item--error": data.error,
                                })}"
                            >
                                <md-icon class="md-date-picker__list-icon">${data.selected ? "check" : ""}</md-icon>
                                <div class="md-date-picker__list-label">${data.label}</div>
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    renderCardItemDays() {
        return html`
            <div class="md-date-picker__card-inner">
                <div class="md-date-picker__table">
                    <div class="md-date-picker__table-row md-date-picker__table-row--header">
                        ${this.weekdays.map(
                            (data) => html`
                                <div
                                    class="${classMap({
                                        "md-date-picker__table-item": true,
                                        "md-date-picker__table-item--activated": data.activated,
                                        "md-date-picker__table-item--selected": data.selected,
                                        "md-date-picker__table-item--disabled": data.disabled,
                                        "md-date-picker__table-item--error": data.error,
                                    })}"
                                >
                                    ${data.label}
                                </div>
                            `
                        )}
                    </div>
                    ${this.days.map(
                        (row) => html`
                            <div class="md-date-picker__table-row md-date-picker__table-row--body">
                                ${row.map(
                                    (data) => html`
                                        <div
                                            .data="${data}"
                                            @click="${this.handleDatePickerItemDayClick}"
                                            class="${classMap({
                                                "md-date-picker__table-item": true,
                                                "md-date-picker__table-item--activated": data.activated,
                                                "md-date-picker__table-item--selected": data.selected,
                                                "md-date-picker__table-item--disabled": data.disabled,
                                                "md-date-picker__table-item--error": data.error,
                                            })}"
                                        >
                                            ${data.label}
                                        </div>
                                    `
                                )}
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    renderInner() {
        return html`
            <div class="md-date-picker__card">
                <div class="md-date-picker__card-item">${this.renderCardItemYears()}</div>
                <div class="md-date-picker__card-item">${this.renderCardItemMonths()}</div>
                <div class="md-date-picker__card-item">${this.renderCardItemDays()}</div>
            </div>
        `;
    }

    render() {
        return html`
            <div class="md-date-picker__header">
                <md-button @click="${this.handleDatePickerLabelClick}" class="md-date-picker__label" .label="${this.label}"></md-button>
                ${this.index !== 0
                    ? html`
                          <div class="md-date-picker__actions">
                              <md-icon-button @click="${this.handleDatePickerActionBeforeClick}" class="md-date-picker__action" icon="navigate_before"></md-icon-button>
                              <md-icon-button @click="${this.handleDatePickerActionNextClick}" class="md-date-picker__action" icon="navigate_next"></md-icon-button>
                          </div>
                      `
                    : nothing}
            </div>
            <div class="md-date-picker__body">
                <div class="md-date-picker__inner">${this.renderInner()}</div>
                <div class="md-date-picker__footer">
                    <md-button @click="${this.handleDatePickerButtonCancelClick}" class="md-date-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleDatePickerButtonOkClick}" class="md-date-picker__button" label="Ok"></md-button>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-date-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-date-picker");
    }

    async firstUpdated(changedProperties) {}

    async updated(changedProperties) {
        if (changedProperties.has("value")) {
            await this.updateComplete;

            const value = new Date(this.value);

            this.currentValue.setFullYear(value.getFullYear());
            this.currentValue.setMonth(value.getMonth());
            this.currentValue.setDate(value.getDate());

            this.selected.setFullYear(value.getFullYear());
            this.selected.setMonth(value.getMonth());
            this.selected.setDate(value.getDate());

            this.requestUpdate();
        }
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-date-picker-index", this.index);
        }
    }

    async handleDatePickerYearScrolling(event) {
        await this.updateComplete;

        const {
            start,
            end,
            options: { total, itemHeight, viewportHeight },
        } = event.detail;

        this.years = Array.from({ length: end - start }, (v, k) => {
            const date = new Date(this.selected.getFullYear() + (k + start) - total / 2, 0, 1);
            const year = date.getFullYear();
            return {
                activated: year == this.current.getFullYear(),
                selected: year == this.currentValue.getFullYear(),
                disabled: false,
                error: false,
                label: this.yearDTF.format(date),
                year,
            };
        });

        this.requestUpdate();

        this.emit("onDatePickerListYearScrolling", event);
    }

    handleDatePickerMonthScrolling(event) {
        const {
            start,
            end,
            options: { total },
        } = event.detail;

        this.emit("onDatePickerListMonthScrolling", event);
    }

    handleDatePickerItemYearClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.requestUpdate();

        this.index = 1;

        this.emit("onDatePickerItemYearClick", event);
    }

    handleDatePickerItemMonthClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.requestUpdate();

        this.index = 2;

        this.emit("onDatePickerItemMonthClick", event);
    }

    handleDatePickerItemDayClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.currentValue.setFullYear(this.selected.getFullYear());
        this.currentValue.setMonth(this.selected.getMonth());
        this.currentValue.setDate(this.selected.getDate());

        this.requestUpdate();

        this.emit("onDatePickerItemDayClick", event);
    }

    handleDatePickerLabelClick(event) {
        if (this.index == 0) {
            this.index = 2;
        } else if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 2) {
            this.index = 1;
        }

        this.emit("onDatePickerLabelClick", event);
    }

    handleDatePickerActionBeforeClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        }

        this.requestUpdate();

        this.emit("onDatePickerActionBeforeClick", event);
    }

    handleDatePickerActionNextClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        }

        this.requestUpdate();

        this.emit("onDatePickerActionNextClick", event);
    }

    handleDatePickerButtonCancelClick(event) {
        const date = new Date();

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());

        this.currentValue.setFullYear(date.getFullYear());
        this.currentValue.setMonth(date.getMonth());
        this.currentValue.setDate(date.getDate());

        this.requestUpdate();

        this.index = 2;

        this.emit("onDatePickerButtonCancelClick", event);
    }

    handleDatePickerButtonOkClick(event) {
        this.currentValue.setFullYear(this.selected.getFullYear());
        this.currentValue.setMonth(this.selected.getMonth());
        this.currentValue.setDate(this.selected.getDate());

        this.requestUpdate();

        this.index = 2;

        this.emit("onDatePickerButtonOkClick", event);
    }
}

customElements.define("md-date-picker", MDDatePicker);

export { MDDatePicker };
