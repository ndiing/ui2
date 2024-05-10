import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScroll } from "../virtual-scroll/virtual-scroll";
import { langToLocale } from "../date-picker/date-picker";

class MDMonthPickerList extends HTMLDivElement {
    connectedCallback() {
        const total = new Date().getFullYear() * 2;
        const itemHeight = 48;
        const viewportHeight = this.clientHeight;
        this.virtualScroll = new VirtualScroll(this, {
            total,
            itemHeight,
            viewportHeight,
            containerSelector: ".md-month-picker__list",
        });
        this.scrollTop = itemHeight * (total / 2) - itemHeight * Math.floor(viewportHeight / itemHeight / 2);
    }

    disconnectedCallback() {
        this.virtualScroll.destroy();
    }
}

customElements.define("md-month-picker-list", MDMonthPickerList, { extends: "div" });

class MDMonthPicker extends MDElement {
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
            return { activated: year == this.current.getFullYear() && month == this.current.getMonth(), selected: year == this.value.getFullYear() && month == this.value.getMonth(), disabled: false, label: this.monthDTF.format(date), year, month };
        });
    }

    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k);
            return { label: this.weekdayDTF.format(date) };
        });
    }

    get first() {
        return new Date(this.selected.getFullYear(), this.selected.getMonth(), 1).getDay();
    }

    get days() {
        return []
        // return Array.from({ length: 6 }, (v, k) => {
        //     return Array.from({ length: 7 }, (v2, k2) => {
        //         const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), k * 7 + k2 - this.first + 1);
        //         const year = date.getFullYear();
        //         const month = date.getMonth();
        //         const day = date.getDate();
        //         return { activated: year == this.current.getFullYear() && month == this.current.getMonth() && day == this.current.getDate(), selected: year == this.value.getFullYear() && month == this.value.getMonth() && day == this.value.getDate(), disabled: year !== this.selected.getFullYear() || month !== this.selected.getMonth(), label: this.dayDTF.format(date), year, month, day };
        //     });
        // });
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
        this.locale = langToLocale(document.documentElement.lang);
        this.yearDTF = new Intl.DateTimeFormat(this.locale, { year: "numeric" });
        this.monthDTF = new Intl.DateTimeFormat(this.locale, { month: "long" });
        this.weekdayDTF = new Intl.DateTimeFormat(this.locale, { weekday: "narrow" });
        this.dayDTF = new Intl.DateTimeFormat(this.locale, { day: "numeric" });
        this.labelDTF = new Intl.DateTimeFormat(this.locale, { year: "numeric", month: "long" });
        this.valueDTF = new Intl.DateTimeFormat(this.locale, { year: "numeric", month: "2-digit", day: "2-digit" });
        this.current = new Date();
        this.value = new Date();
        this.selected = new Date();
        this.index = 1;
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-month-picker__header">
                <md-button @click="${this.handleMonthPickerLabelClick}" class="md-month-picker__label" .label="${this.label}"></md-button>
                <div class="md-month-picker__actions">
                    <md-icon-button @click="${this.handleMonthPickerActionBeforeClick}" class="md-month-picker__action" icon="navigate_before"></md-icon-button>
                    <md-icon-button @click="${this.handleMonthPickerActionNextClick}" class="md-month-picker__action" icon="navigate_next"></md-icon-button>
                </div>
            </div>
            <div class="md-month-picker__body">
                <div class="md-month-picker__inner">

                    <div class="md-month-picker__card">
                        <div class="md-month-picker__card-item">
                            <div is="md-month-picker-list" class="md-month-picker__card-inner" @onVirtualScroll="${this.handleMonthPickerCardInnerVirtualScroll}">

                                <div class="md-month-picker__list">
                                    ${this.years.map(item=>html`
                                        <div 
                                            class="${classMap({
                                                "md-month-picker__list-item":true,
                                                "md-month-picker__list-item--activated":item.activated,
                                                "md-month-picker__list-item--selected":item.selected,
                                                "md-month-picker__list-item--disabled":item.disabled,
                                            })}"
                                            .data="${item}"
                                            @click="${this.handleMonthPickerListItemYearClick}"
                                        >
                                            <md-icon class="md-month-picker__list-icon">${item.selected?"check":""}</md-icon>
                                            <div class="md-month-picker__list-label">${item.label}</div>
                                        </div>
                                    `)}
                                </div>

                            </div>
                        </div>
                        <div class="md-month-picker__card-item">
                            <div class="md-month-picker__card-inner">

                                <div class="md-month-picker__list">
                                    ${this.months.map(item=>html`
                                        <div 
                                            class="${classMap({
                                                "md-month-picker__list-item":true,
                                                "md-month-picker__list-item--activated":item.activated,
                                                "md-month-picker__list-item--selected":item.selected,
                                                "md-month-picker__list-item--disabled":item.disabled,
                                            })}"
                                            .data="${item}"
                                            @click="${this.handleMonthPickerListItemMonthClick}"
                                        >
                                            <md-icon class="md-month-picker__list-icon">${item.selected?"check":""}</md-icon>
                                            <div class="md-month-picker__list-label">${item.label}</div>
                                        </div>
                                    `)}
                                </div>

                            </div>
                            <div class="md-month-picker__card-footer">
                                <md-button @click="${this.handleMonthPickerButtonCancelClick}" class="md-month-picker__card-button" label="Cancel"></md-button>
                                <md-button @click="${this.handleMonthPickerButtonOkClick}" class="md-month-picker__card-button" label="Ok"></md-button>
                            </div>
                        </div>
                        <!-- <div class="md-month-picker__card-item">
                            <div class="md-month-picker__card-inner">

                                <div class="md-month-picker__table">
                                    <div class="md-month-picker__table-row md-month-picker__table-row--header">
                                        ${this.weekdays.map(item=>html`
                                            <div class="md-month-picker__table-item">${item.label}</div>
                                        `)}
                                    </div>
                                    ${this.days.map(row=>html`
                                        <div class="md-month-picker__table-row md-month-picker__table-row--body">
                                            ${row.map(item=>html`
                                                <div 
                                                    class="${classMap({
                                                        "md-month-picker__table-item":true,
                                                        "md-month-picker__table-item--activated":item.activated,
                                                        "md-month-picker__table-item--selected":item.selected,
                                                        "md-month-picker__table-item--disabled":item.disabled,
                                                    })}"
                                                    .data="${item}"
                                                    @click="${this.handleMonthPickerTableItemDayClick}"
                                                >${item.label}</div>
                                            `)}
                                        </div>
                                    `)}
                                </div>

                            </div>
                            <div class="md-month-picker__card-footer">
                                <md-button @click="${this.handleMonthPickerButtonCancelClick}" class="md-month-picker__card-button" label="Cancel"></md-button>
                                <md-button @click="${this.handleMonthPickerButtonOkClick}" class="md-month-picker__card-button" label="Ok"></md-button>
                            </div>
                        </div> -->
                    </div>

                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-month-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-month-picker");
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete;
        this.selected.setFullYear(this.value.getFullYear());
        this.selected.setMonth(this.value.getMonth());
        this.selected.setDate(this.value.getDate());
        this.requestUpdate();
    }

    updated(changedProperties) {
        this.style.setProperty("--md-month-picker-index", this.index);
    }

    handleMonthPickerListItemYearClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.requestUpdate();
        this.index = 1;
        this.emit("onMonthPickerListItemYearClick", event);
    }

    handleMonthPickerListItemMonthClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.requestUpdate();
        // this.index = 2;
        this.emit("onMonthPickerListItemMonthClick", event);
    }

    // handleMonthPickerTableItemDayClick(event) {
    //     const data = event.currentTarget.data;
    //     this.selected.setFullYear(data.year);
    //     this.selected.setMonth(data.month);
    //     this.selected.setDate(data.day);
    //     this.value.setFullYear(data.year);
    //     this.value.setMonth(data.month);
    //     this.value.setDate(data.day);
    //     this.requestUpdate();
    //     this.emit("onMonthPickerTableItemDayClick", event);
    // }

    handleMonthPickerLabelClick(event) {
        if (this.index == 2) {
            this.index = 1;
        } else if (this.index == 1) {
            this.index = 0;
        }
        this.emit("onMonthPickerLabelClick", event);
    }

    handleMonthPickerActionBeforeClick(event) {
        if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        }
        this.requestUpdate();
        this.emit("onMonthPickerActionBeforeClick", event);
    }

    handleMonthPickerActionNextClick(event) {
        if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        }
        this.requestUpdate();
        this.emit("onMonthPickerActionNextClick", event);
    }

    handleMonthPickerButtonCancelClick(event) {
        const date = new Date();
        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
        this.value.setFullYear(date.getFullYear());
        this.value.setMonth(date.getMonth());
        this.value.setDate(date.getDate());
        this.requestUpdate();
        this.index = 1;
        this.emit("onMonthPickerButtonCancelClick", event);
    }

    handleMonthPickerButtonOkClick(event) {
        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());
        this.requestUpdate();
        this.index = 1;
        this.emit("onMonthPickerButtonOkClick", event);
    }

    async handleMonthPickerCardInnerVirtualScroll(event) {
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
        this.emit("onMonthPickerCardInnerVirtualScroll", event);
    }
}

customElements.define("md-month-picker", MDMonthPicker);

export { MDMonthPicker };
