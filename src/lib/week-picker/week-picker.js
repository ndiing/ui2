import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScroll } from "../virtual-scroll/virtual-scroll";

class MDWeekPickerYear extends HTMLDivElement {
    connectedCallback() {
        const total = new Date().getFullYear() * 2;
        const itemHeight = 48;
        // 336
        // 304
        // (40*7)+(4*6)=304
        const viewportHeight = 40 * 7 + 4 * 6;

        this.virtualScroll = new VirtualScroll(this, {
            total,
            itemHeight,
            viewportHeight,
            containerSelector: ".md-week-picker__list",
        });

        this.scrollTop = itemHeight * (total / 2) - itemHeight * Math.floor(viewportHeight / itemHeight / 2);
    }
    disconnectedCallback() {
        this.virtualScroll.destroy();
    }
}

customElements.define("md-week-picker-year", MDWeekPickerYear, { extends: "div" });

class MDWeekPickerMonth extends HTMLDivElement {
    connectedCallback() {}
    disconnectedCallback() {}
}

customElements.define("md-week-picker-month", MDWeekPickerMonth, { extends: "div" });

class MDWeekPicker extends MDElement {
    static get properties() {
        return {
            value: {
                type: Date,
                converter: (value, type) => {
                    const [year, week] = value.split("-W");
                    const date = new Date(value);
                    date.setWeek(week, year);
                    return date;
                },
            },
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
                selected: year == this.value.getFullYear() && month == this.value.getMonth(),
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
            const date = new Date(0, 0, k + 1);
            return {
                label: this.weekdayDTF.format(date),
                error: date.getDay() == 0,
            };
        });
    }

    get days() {
        return Array.from({ length: 6 }, (v, k) => {
            return Array.from({ length: 7 }, (v2, k2) => {
                const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), k * 7 + k2 - this.first + 1 + 1);
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDate();
                const week = date.getWeek();
                return {
                    activated: year == this.current.getFullYear() && week == this.current.getWeek(),
                    selected: year == this.value.getFullYear() && week == this.value.getWeek(),
                    disabled: false,
                    error: date.getDay() == 0,
                    label: this.dayDTF.format(date),
                    year,
                    month,
                    day,
                    week,
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
            return `Week ${(''+(this.selected.getWeek()+1)).padStart(2,'0')}, ${this.labelDTF.format(this.selected)}`;
        }
    }

    constructor() {
        super();

        this.yearDTF = new Intl.DateTimeFormat(undefined, { year: "numeric" });
        this.monthDTF = new Intl.DateTimeFormat(undefined, { month: "long" });
        this.weekdayDTF = new Intl.DateTimeFormat(undefined, { weekday: "narrow" });
        this.dayDTF = new Intl.DateTimeFormat(undefined, { day: "numeric" });

        this.labelDTF = new Intl.DateTimeFormat(undefined, { year: "numeric", });

        this.value = new Date();
        this.selected = new Date();
        this.current = new Date();

        this.index = 2;

        // console.log(this.first);
        // console.log(this.last);
        // console.log(this.years);
        // console.log(this.months);
        // console.log(this.weekdays);
        // console.log(this.days);
        // console.log(this.hours);
        // console.log(this.minutes);
    }

    get cardInnerYear() {
        return this.querySelector(".md-week-picker__card-inner--year");
    }

    renderCardItemYears() {
        // prettier-ignore
        return html`
            <div class="md-week-picker__card-inner md-week-picker__card-inner--year" is="md-week-picker-year" @onVirtualScroll="${this.handleWeekPickerYearVirtualScroll}">
                <div class="md-week-picker__list">
                    ${this.years.map(data=>html`
                        <div 
                            .data="${data}"
                            @click="${this.handleWeekPickerItemYearClick}"
                            class="${classMap({
                                "md-week-picker__list-item":true,
                                "md-week-picker__list-item--activated":data.activated,
                                "md-week-picker__list-item--selected":data.selected,
                                "md-week-picker__list-item--disabled":data.disabled,
                                "md-week-picker__list-item--error":data.error,
                            })}"
                        >
                            <md-icon class="md-week-picker__list-icon">${data.selected?'check':''}</md-icon>
                            <div class="md-week-picker__list-label">${data.label}</div>
                        </div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-week-picker__card-footer"> -->
                <!-- <md-button class="md-week-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-week-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderCardItemMonths() {
        // prettier-ignore
        return html`
            <div class="md-week-picker__card-inner" is="md-week-picker-month" @onVirtualScroll="${this.handleWeekPickerMonthVirtualScroll}">
                <div class="md-week-picker__list">
                    ${this.months.map(data=>html`
                        <div 
                            .data="${data}"
                            @click="${this.handleWeekPickerItemMonthClick}"
                            class="${classMap({
                                "md-week-picker__list-item":true,
                                "md-week-picker__list-item--activated":data.activated,
                                "md-week-picker__list-item--selected":data.selected,
                                "md-week-picker__list-item--disabled":data.disabled,
                                "md-week-picker__list-item--error":data.error,
                            })}"
                        >
                            <md-icon class="md-week-picker__list-icon">${data.selected?'check':''}</md-icon>
                            <div class="md-week-picker__list-label">${data.label}</div>
                        </div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-week-picker__card-footer"> -->
                <!-- <md-button class="md-week-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-week-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderCardItemDays() {
        // prettier-ignore
        return html`
            <div class="md-week-picker__card-inner">
                <div class="md-week-picker__table">
                    <div class="md-week-picker__table-row md-week-picker__table-row--header">
                        ${this.weekdays.map(data=>html`
                            <div 
                                class="${classMap({
                                    "md-week-picker__table-item":true,
                                    "md-week-picker__table-item--activated":data.activated,
                                    "md-week-picker__table-item--selected":data.selected,
                                    "md-week-picker__table-item--disabled":data.disabled,
                                    "md-week-picker__table-item--error":data.error,
                                })}"
                            >${data.label}</div>
                        `)}
                    </div>
                    ${this.days.map(row=>html`
                        <div 
                            class="${classMap({
                                "md-week-picker__table-row":true,
                                "md-week-picker__table-row--body":true,
                                "md-week-picker__table-row--activated":row.find(data=>data.activated),
                                "md-week-picker__table-row--selected":row.find(data=>data.selected),
                                "md-week-picker__table-row--disabled":row.find(data=>data.disabled),
                                "md-week-picker__table-row--error":row.find(data=>data.error),
                            })}"
                        >
                            ${row.map(data=>html`
                                <div 
                                    .data="${data}"
                                    @click="${this.handleWeekPickerItemDayClick}"
                                    class="${classMap({
                                        "md-week-picker__table-item":true,
                                        "md-week-picker__table-item--activated":data.activated,
                                        "md-week-picker__table-item--selected":data.selected,
                                        "md-week-picker__table-item--disabled":data.disabled,
                                        "md-week-picker__table-item--error":data.error,
                                    })}"
                                >${data.label}</div>
                            `)}
                        </div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-week-picker__card-footer"> -->
                <!-- <md-button class="md-week-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-week-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderInner() {
        // prettier-ignore
        return html`
            <div class="md-week-picker__card">
                <div class="md-week-picker__card-item">${this.renderCardItemYears()}</div>
                <div class="md-week-picker__card-item">${this.renderCardItemMonths()}</div>
                <div class="md-week-picker__card-item">${this.renderCardItemDays()}</div>
            </div>
        `
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-week-picker__header">
                <md-button @click="${this.handleWeekPickerLabelClick}" class="md-week-picker__label" .label="${this.label}"></md-button>
                ${this.index!==0?html`
                    <div class="md-week-picker__actions">
                        <md-icon-button @click="${this.handleWeekPickerActionBeforeClick}" class="md-week-picker__action" icon="navigate_before"></md-icon-button>
                        <md-icon-button @click="${this.handleWeekPickerActionNextClick}" class="md-week-picker__action" icon="navigate_next"></md-icon-button>
                    </div>
                `:nothing}
            </div>
            <div class="md-week-picker__body">
                <div class="md-week-picker__inner">${this.renderInner()}</div>
                <div class="md-week-picker__footer">
                    <md-button @click="${this.handleWeekPickerButtonCancelClick}" class="md-week-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleWeekPickerButtonOkClick}" class="md-week-picker__button" label="Ok"></md-button>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-week-picker");
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete;

        this.selected.setFullYear(this.value.getFullYear());
        this.selected.setMonth(this.value.getMonth());
        this.selected.setDate(this.value.getDate());

        this.requestUpdate();
    }

    updated(changedProperties) {
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-week-picker-index", this.index);
        }
    }

    async handleWeekPickerYearVirtualScroll(event) {
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
                selected: year == this.value.getFullYear(),
                disabled: false,
                error: false,
                label: this.yearDTF.format(date),
                year,
            };
        });

        this.requestUpdate();

        this.emit("onWeekPickerListYearVirtualScroll", event);
    }

    handleWeekPickerMonthVirtualScroll(event) {
        const {
            start,
            end,
            options: { total },
        } = event.detail;

        this.emit("onWeekPickerListMonthVirtualScroll", event);
    }

    handleWeekPickerItemYearClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.requestUpdate();

        this.index = 1;

        this.emit("onWeekPickerItemYearClick", event);
    }

    handleWeekPickerItemMonthClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.requestUpdate();

        this.index = 2;

        this.emit("onWeekPickerItemMonthClick", event);
    }

    handleWeekPickerItemDayClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());

        this.requestUpdate();

        this.emit("onWeekPickerItemDayClick", event);
    }

    handleWeekPickerLabelClick(event) {
        if (this.index == 0) {
            this.index = 2;
        } else if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 2) {
            this.index = 1;
        }

        // this.requestUpdate();

        this.emit("onWeekPickerLabelClick", event);
    }

    handleWeekPickerActionBeforeClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        }

        this.requestUpdate();

        this.emit("onWeekPickerActionBeforeClick", event);
    }

    handleWeekPickerActionNextClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        }

        this.requestUpdate();

        this.emit("onWeekPickerActionNextClick", event);
    }

    handleWeekPickerButtonCancelClick(event) {
        const date = new Date();

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());

        this.value.setFullYear(date.getFullYear());
        this.value.setMonth(date.getMonth());
        this.value.setDate(date.getDate());

        this.requestUpdate();

        this.index = 2;

        this.emit("onWeekPickerButtonCancelClick", event);
    }

    handleWeekPickerButtonOkClick(event) {
        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());

        this.requestUpdate();

        this.index = 2;

        this.emit("onWeekPickerButtonOkClick", event);
    }
}

customElements.define("md-week-picker", MDWeekPicker);

export { MDWeekPicker };
