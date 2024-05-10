import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScroll } from "../virtual-scroll/virtual-scroll";
import { langToLocale } from "../date-picker/date-picker";
Date.prototype.getWeek = function () {
    // Create a new Date object with the same year, month, and day
    var date = new Date(this.getTime());
    // Set the date to the first day of the year
    date.setMonth(0, 1);
    // Get the day of the week of this date (0: Sunday, 1: Monday, ..., 6: Saturday)
    var day = date.getDay();
    // Adjust the day to handle cases where the first day of the year is not Sunday
    // (e.g., if it's Monday, we want to start counting weeks from Monday)
    if (day > 0) {
        date.setDate(1 + (7 - day));
    }
    // Get the difference in milliseconds between the date and the first day of the year
    var diff = this - date;
    // Calculate the number of weeks by dividing the difference by the number of milliseconds in a week
    var week = Math.ceil(diff / (7 * 24 * 60 * 60 * 1000));
    return week;
};

// // Example usage:
// var today = new Date();
// console.log("Week number:", today.getWeek());

Date.prototype.setWeek = function (week, year) {
    // Create a new Date object with the provided year
    var date = new Date(year, 0, 1);
    // Adjust the date to handle cases where the first day of the year is not Sunday
    // (e.g., if it's Monday, we want to start counting weeks from Monday)
    var day = date.getDay();
    if (day > 0) {
        date.setDate(1 + (7 - day));
    }
    // Calculate the number of milliseconds to add to the date to set it to the specified week
    var daysToAdd = (week - 1) * 7;
    date.setDate(date.getDate() + daysToAdd);
    // Set this date object to the calculated date
    this.setTime(date.getTime());
};

// // Example usage:
// var myDate = new Date();
// myDate.setWeek(20, 2024); // Sets myDate to the first day of the 20th week of 2024
// console.log("Date set to:", myDate.toDateString());

const formats = {
    "en-GB": "Week $WW$, $YYYY$",
    "en-US": "Week $WW$, $YYYY$",
    "fr-FR": "Semaine $WW$, $YYYY$",
    "es-ES": "Semana $WW$, $YYYY$",
    "de-DE": "Woche $WW$, $YYYY$",
    "it-IT": "Settimana $WW$, $YYYY$",
    "ja-JP": "週 $WW$, $YYYY$",
    "zh-CN": "第$WW$周，$YYYY$",
    "ko-KR": "주 $WW$, $YYYY$",
    "pt-BR": "Semana $WW$, $YYYY$",
    "ru-RU": "Неделя $WW$, $YYYY$",
    "hi-IN": "सप्ताह $WW$, $YYYY$",
    "id-ID": "Pekan $WW$, $YYYY$",
    "ar-SA": "الأسبوع $WW$, $YYYY$",
    "nl-NL": "Week $WW$, $YYYY$",
};

class MDWeekPickerList extends HTMLDivElement {
    connectedCallback() {
        const total = new Date().getFullYear() * 2;
        const itemHeight = 48;
        const viewportHeight = this.clientHeight;
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

customElements.define("md-week-picker-list", MDWeekPickerList, { extends: "div" });

class MDWeekPicker extends MDElement {
    static get properties() {
        return {
            value: {
                type: Date,

                converter(value) {
                    const [year, week] = value.split("-W");
                    const date = new Date(value);
                    date.setWeek(week, year);
                    return date;
                },
            },
            index: { type: Number },
        };
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
            return { activated: year == this.current.getFullYear() && month == this.current.getMonth(), selected: year == this.value.getFullYear() && month == this.value.getMonth(), disabled: false, label: this.monthDTF.format(date), year, month };
        });
    }

    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k + 1);
            return { label: this.weekdayDTF.format(date) };
        });
    }

    get first() {
        return new Date(this.selected.getFullYear(), this.selected.getMonth(), 1).getDay();
    }

    get days() {
        return Array.from({ length: 6 }, (v, k) => {
            return Array.from({ length: 7 }, (v2, k2) => {
                const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), k * 7 + k2 - this.first + 2);
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDate();
                const week = date.getWeek();
                return {
                    activated: year == this.current.getFullYear() && week == this.current.getWeek(),
                    selected: year == this.value.getFullYear() && week == this.value.getWeek(),
                    // activated: year == this.current.getFullYear() && month == this.current.getMonth() && day == this.current.getDate(),
                    // selected: year == this.value.getFullYear() && month == this.value.getMonth() && day == this.value.getDate(),
                    disabled: year !== this.selected.getFullYear() || month !== this.selected.getMonth(),
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
        if (this.index == 2) {
            const locale=(this.labelDTF.resolvedOptions().locale);
            const WW=("" + (this.selected.getWeek() + 1)).padStart(2, "0")
            const YYYY=this.labelDTF.format(this.selected)
            const data={WW,YYYY}
            return formats[locale].replace(/\$([^\$]+)\$/g,($,$1)=>data[$1]);
        } else if (this.index == 1) {
            return this.yearDTF.format(this.selected);
        } else if (this.index == 0) {
            return [this.years[0].year, this.years[this.years.length - 1].year].join(" - ");
        }
    }

    constructor() {
        super();
        this.locale = langToLocale(document.documentElement.lang);
        this.yearDTF = new Intl.DateTimeFormat(this.locale, { year: "numeric" });
        this.monthDTF = new Intl.DateTimeFormat(this.locale, { month: "long" });
        this.weekdayDTF = new Intl.DateTimeFormat(this.locale, { weekday: "narrow" });
        this.dayDTF = new Intl.DateTimeFormat(this.locale, { day: "numeric" });
        this.labelDTF = new Intl.DateTimeFormat(this.locale, { year: "numeric", week: "2-digit" });
        this.valueDTF = new Intl.DateTimeFormat(this.locale, { year: "numeric", month: "2-digit", day: "2-digit" });
        this.current = new Date();
        this.value = new Date();
        this.selected = new Date();
        this.index = 2;
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-week-picker__header">
                <md-button @click="${this.handleWeekPickerLabelClick}" class="md-week-picker__label" .label="${this.label}"></md-button>
                <div class="md-week-picker__actions">
                    <md-icon-button @click="${this.handleWeekPickerActionBeforeClick}" class="md-week-picker__action" icon="navigate_before"></md-icon-button>
                    <md-icon-button @click="${this.handleWeekPickerActionNextClick}" class="md-week-picker__action" icon="navigate_next"></md-icon-button>
                </div>
            </div>
            <div class="md-week-picker__body">
                <div class="md-week-picker__inner">

                    <div class="md-week-picker__card">
                        <div class="md-week-picker__card-item">
                            <div is="md-week-picker-list" class="md-week-picker__card-inner" @onVirtualScroll="${this.handleWeekPickerCardInnerVirtualScroll}">

                                <div class="md-week-picker__list">
                                    ${this.years.map(item=>html`
                                        <div 
                                            class="${classMap({
                                                "md-week-picker__list-item":true,
                                                "md-week-picker__list-item--activated":item.activated,
                                                "md-week-picker__list-item--selected":item.selected,
                                                "md-week-picker__list-item--disabled":item.disabled,
                                            })}"
                                            .data="${item}"
                                            @click="${this.handleWeekPickerListItemYearClick}"
                                        >
                                            <md-icon class="md-week-picker__list-icon">${item.selected?"check":""}</md-icon>
                                            <div class="md-week-picker__list-label">${item.label}</div>
                                        </div>
                                    `)}
                                </div>

                            </div>
                        </div>
                        <div class="md-week-picker__card-item">
                            <div class="md-week-picker__card-inner">

                                <div class="md-week-picker__list">
                                    ${this.months.map(item=>html`
                                        <div 
                                            class="${classMap({
                                                "md-week-picker__list-item":true,
                                                "md-week-picker__list-item--activated":item.activated,
                                                "md-week-picker__list-item--selected":item.selected,
                                                "md-week-picker__list-item--disabled":item.disabled,
                                            })}"
                                            .data="${item}"
                                            @click="${this.handleWeekPickerListItemMonthClick}"
                                        >
                                            <md-icon class="md-week-picker__list-icon">${item.selected?"check":""}</md-icon>
                                            <div class="md-week-picker__list-label">${item.label}</div>
                                        </div>
                                    `)}
                                </div>

                            </div>
                        </div>
                        <div class="md-week-picker__card-item">
                            <div class="md-week-picker__card-inner">

                                <div class="md-week-picker__table">
                                    <div class="md-week-picker__table-row md-week-picker__table-row--header">
                                        ${this.weekdays.map(item=>html`
                                            <div class="md-week-picker__table-item">${item.label}</div>
                                        `)}
                                    </div>
                                    ${this.days.map(row=>html`
                                        <div 
                                            class="${classMap({
                                                "md-week-picker__table-row":true,
                                                "md-week-picker__table-row--body":true,
                                                "md-week-picker__table-row--activated":row.find(item=>item.activated),
                                                "md-week-picker__table-row--selected":row.find(item=>item.selected),
                                                "md-week-picker__table-row--disabled":row.find(item=>item.disabled),
                                            })}"
                                        >
                                            ${row.map(item=>html`
                                                <div 
                                                    class="${classMap({
                                                        "md-week-picker__table-item":true,
                                                        "md-week-picker__table-item--activated":item.activated,
                                                        "md-week-picker__table-item--selected":item.selected,
                                                        "md-week-picker__table-item--disabled":item.disabled,
                                                    })}"
                                                    .data="${item}"
                                                    @click="${this.handleWeekPickerTableItemDayClick}"
                                                >${item.label}</div>
                                            `)}
                                        </div>
                                    `)}
                                </div>

                            </div>
                            <div class="md-week-picker__card-footer">
                                <md-button @click="${this.handleWeekPickerButtonCancelClick}" class="md-week-picker__card-button" label="Cancel"></md-button>
                                <md-button @click="${this.handleWeekPickerButtonOkClick}" class="md-week-picker__card-button" label="Ok"></md-button>
                            </div>
                        </div>
                    </div>

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
        this.style.setProperty("--md-week-picker-index", this.index);
    }

    handleWeekPickerListItemYearClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.requestUpdate();
        this.index = 1;
        this.emit("onWeekPickerListItemYearClick", event);
    }

    handleWeekPickerListItemMonthClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.requestUpdate();
        this.index = 2;
        this.emit("onWeekPickerListItemMonthClick", event);
    }

    handleWeekPickerTableItemDayClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.value.setDate(data.day);
        this.requestUpdate();
        this.emit("onWeekPickerTableItemDayClick", event);
    }

    handleWeekPickerLabelClick(event) {
        if (this.index == 2) {
            this.index = 1;
        } else if (this.index == 1) {
            this.index = 0;
        }
        this.emit("onWeekPickerLabelClick", event);
    }

    handleWeekPickerActionBeforeClick(event) {
        if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        }
        this.requestUpdate();
        this.emit("onWeekPickerActionBeforeClick", event);
    }

    handleWeekPickerActionNextClick(event) {
        if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
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

    async handleWeekPickerCardInnerVirtualScroll(event) {
        const {
            start,
            end,
            options: { total },
        } = event.detail;
        this.years = Array.from({ length: end - start }, (v, k) => {
            const date = new Date(this.selected.getFullYear() + k + start - total / 2, 0, 1);
            const year = date.getFullYear();
            return { activated: year == this.current.getFullYear(), selected: year == this.value.getFullYear(), disabled: false, label: this.yearDTF.format(date), year };
        });
        await this.updateComplete;
        this.requestUpdate();
        this.emit("onWeekPickerCardInnerVirtualScroll", event);
    }
}

customElements.define("md-week-picker", MDWeekPicker);

export { MDWeekPicker };
