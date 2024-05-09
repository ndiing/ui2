import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScroll } from "../virtual-scroll/virtual-scroll";

class MDDatePickerList extends HTMLDivElement {
    connectedCallback() {
        const total = new Date().getFullYear() * 2;
        const itemHeight = 48;
        const viewportHeight = this.clientHeight;

        this.virtualScroll = new VirtualScroll(this, {
            total,
            itemHeight,
            viewportHeight,
            containerSelector: ".md-date-picker__list",
        });

        this.scrollTop=itemHeight * (total / 2) - itemHeight * Math.floor(viewportHeight / itemHeight / 2)
    }
    disconnectedCallback() {
        this.virtualScroll.destroy();
    }
}
customElements.define("md-date-picker-list", MDDatePickerList, { extends: "div" });

class MDDatePicker extends MDElement {
    static get properties() {
        return {
            value: {
                type: Date,
                converter(value) {
                    return new Date(value);
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

            return {
                activated: year == this.current.getFullYear() && month == this.current.getMonth(),
                selected: year == this.value.getFullYear() && month == this.value.getMonth(),
                disabled: false,
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
            };
        });
    }

    get first() {
        return new Date(this.selected.getFullYear(), this.selected.getMonth(), 1).getDay();
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
                    selected: year == this.value.getFullYear() && month == this.value.getMonth() && day == this.value.getDate(),
                    disabled: false,
                    label: this.dayDTF.format(date),
                    year,
                    month,
                    day,
                };
            });
        });
    }

    get label() {
        if (this.index == 2) {
            return this.labelDTF.format(this.selected);
        } else if (this.index == 1) {
            return this.yearDTF.format(this.selected);
        } else if (this.index == 0) {
            return [this.years[0].year, this.years[this.years.length - 1].year].join(" - ");
        }
    }

    constructor() {
        super();

        const locales = 'id-ID'
        
        this.yearDTF = new Intl.DateTimeFormat(locales, { year: "numeric" });
        this.monthDTF = new Intl.DateTimeFormat(locales, { month: "long" });
        this.weekdayDTF = new Intl.DateTimeFormat(locales, { weekday: "narrow" });
        this.dayDTF = new Intl.DateTimeFormat(locales, { day: "numeric" });
        this.labelDTF = new Intl.DateTimeFormat(locales, { year: "numeric", month: "long" });
        this.valueDTF = new Intl.DateTimeFormat(locales, { year: "numeric", month: "2-digit", day: "2-digit" });

        this.current = new Date();
        this.value = new Date();
        this.selected = new Date();

        this.index = 2;

        // console.log(this.years, this.months, this.days, this.weekdays);
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-date-picker__header">
                <md-button @click="${this.handleDatePickerLabelClick}" class="md-date-picker__label" .label="${this.label}"></md-button>
                <div class="md-date-picker__actions">
                    <md-icon-button @click="${this.handleDatePickerActionBeforeClick}" class="md-date-picker__action" icon="navigate_before"></md-icon-button>
                    <md-icon-button @click="${this.handleDatePickerActionNextClick}" class="md-date-picker__action" icon="navigate_next"></md-icon-button>
                </div>
            </div>
            <div class="md-date-picker__body">
                <div class="md-date-picker__inner">

                    <div class="md-date-picker__card">
                        <div class="md-date-picker__card-item">
                            <div is="md-date-picker-list" class="md-date-picker__card-inner" @onVirtualScroll="${this.handleDatePickerCardInnerVirtualScroll}">

                                <div class="md-date-picker__list">
                                    ${this.years.map(item=>html`
                                        <div 
                                            class="${classMap({
                                                "md-date-picker__list-item":true,
                                                "md-date-picker__list-item--activated":item.activated,
                                                "md-date-picker__list-item--selected":item.selected,
                                                "md-date-picker__list-item--disabled":item.disabled,
                                            })}"
                                            .data="${item}"
                                            @click="${this.handleDatePickerListItemYearClick}"
                                        >
                                            <md-icon class="md-date-picker__list-icon">${item.selected?"check":""}</md-icon>
                                            <div class="md-date-picker__list-label">${item.label}</div>
                                        </div>
                                    `)}
                                </div>

                            </div>
                        </div>
                        <div class="md-date-picker__card-item">
                            <div class="md-date-picker__card-inner">

                                <div class="md-date-picker__list">
                                    ${this.months.map(item=>html`
                                        <div 
                                            class="${classMap({
                                                "md-date-picker__list-item":true,
                                                "md-date-picker__list-item--activated":item.activated,
                                                "md-date-picker__list-item--selected":item.selected,
                                                "md-date-picker__list-item--disabled":item.disabled,
                                            })}"
                                            .data="${item}"
                                            @click="${this.handleDatePickerListItemMonthClick}"
                                        >
                                            <md-icon class="md-date-picker__list-icon">${item.selected?"check":""}</md-icon>
                                            <div class="md-date-picker__list-label">${item.label}</div>
                                        </div>
                                    `)}
                                </div>

                            </div>
                        </div>
                        <div class="md-date-picker__card-item">
                            <div class="md-date-picker__card-inner">

                                <div class="md-date-picker__table">
                                    <div class="md-date-picker__table-row md-date-picker__table-row--header">
                                        ${this.weekdays.map(item=>html`
                                            <div class="md-date-picker__table-item">${item.label}</div>
                                        `)}
                                    </div>
                                    ${this.days.map(row=>html`
                                        <div class="md-date-picker__table-row md-date-picker__table-row--body">
                                            ${row.map(item=>html`
                                                <div 
                                                    class="${classMap({
                                                        "md-date-picker__table-item":true,
                                                        "md-date-picker__table-item--activated":item.activated,
                                                        "md-date-picker__table-item--selected":item.selected,
                                                        "md-date-picker__table-item--disabled":item.disabled,
                                                    })}"
                                                    .data="${item}"
                                                    @click="${this.handleDatePickerTableItemDayClick}"
                                                >${item.label}</div>
                                            `)}
                                        </div>
                                    `)}
                                </div>

                            </div>
                            <div class="md-date-picker__card-footer">
                                <md-button @click="${this.handleDatePickerButtonCancelClick}" class="md-date-picker__card-button" label="Cancel"></md-button>
                                <md-button @click="${this.handleDatePickerButtonOkClick}" class="md-date-picker__card-button" label="Ok"></md-button>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- <div class="md-date-picker__footer">
                    <md-button class="md-date-picker__button" label="Cancel"></md-button>
                    <md-button class="md-date-picker__button" label="Ok"></md-button>
                </div> -->
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-date-picker");
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete;

        this.selected.setFullYear(this.value.getFullYear());
        this.selected.setMonth(this.value.getMonth());
        this.selected.setDate(this.value.getDate());

        this.requestUpdate();
    }

    updated(changedProperties) {
        this.style.setProperty("--md-date-picker-index", this.index);
    }

    handleDatePickerListItemYearClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.index = 1;

        this.requestUpdate();

        this.emit("onDatePickerListItemYearClick", event);
    }
    handleDatePickerListItemMonthClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.index = 2;

        this.requestUpdate();

        this.emit("onDatePickerListItemMonthClick", event);
    }
    handleDatePickerTableItemDayClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.value.setDate(data.day);

        this.requestUpdate();

        this.emit("onDatePickerTableItemDayClick", event);
    }

    handleDatePickerLabelClick(event) {
        if (this.index == 2) {
            this.index = 1;
        } else if (this.index == 1) {
            this.index = 0;
        }
        this.emit("onDatePickerLabelClick", event);
    }

    handleDatePickerActionBeforeClick(event) {
        if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        }

        this.requestUpdate();

        this.emit("onDatePickerActionBeforeClick", event);
    }
    handleDatePickerActionNextClick(event) {
        if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        }

        this.requestUpdate();

        this.emit("onDatePickerActionNextClick", event);
    }

    handleDatePickerButtonCancelClick(event) {
        
        const date = new Date()

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());

        this.value.setFullYear(date.getFullYear());
        this.value.setMonth(date.getMonth());
        this.value.setDate(date.getDate());

        this.requestUpdate();

        this.emit("onDatePickerButtonCancelClick", event);
    }
    handleDatePickerButtonOkClick(event) {

        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());

        this.requestUpdate();

        this.emit("onDatePickerButtonOkClick", event);
    }

    async handleDatePickerCardInnerVirtualScroll(event) {
        const {start,end,options:{total}} = event.detail

        this.years= Array.from({ length: end-start }, (v, k) => {
            const date = new Date(this.selected.getFullYear() + k + start - total / 2, 0, 1);
            const year = date.getFullYear();

            return {
                activated: year == this.current.getFullYear(),
                selected: year == this.value.getFullYear(),
                disabled: false,
                label: this.yearDTF.format(date),
                year,
            };
        });

        await this.updateComplete

        this.requestUpdate()

        this.emit("onDatePickerCardInnerVirtualScroll", event);
    }
}

customElements.define("md-date-picker", MDDatePicker);

export { MDDatePicker };
