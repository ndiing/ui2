import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScroll } from "../virtual-scroll/virtual-scroll";

class MDDatetimePickerYear extends HTMLDivElement {
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
            containerSelector: ".md-datetime-picker__list",
        });

        this.scrollTop = itemHeight * (total / 2) - itemHeight * Math.floor(viewportHeight / itemHeight / 2);
    }
    disconnectedCallback() {
        this.virtualScroll.destroy();
    }
}

customElements.define("md-datetime-picker-year", MDDatetimePickerYear, { extends: "div" });

class MDDatetimePickerMonth extends HTMLDivElement {
    connectedCallback() {}
    disconnectedCallback() {}
}

customElements.define("md-datetime-picker-month", MDDatetimePickerMonth, { extends: "div" });

class MDDatetimePicker extends MDElement {
    static get properties() {
        return {
            value: {
                type: Date,
                converter: (value, type) => {
                    return new Date(value);
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
                    selected: year == this.value.getFullYear() && month == this.value.getMonth() && day == this.value.getDate(),
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

    get hours() {
        return Array.from({ length: 24 }, (v, k) => {
            let h = (k + 3) % 12;
            if (k > 11) {
                h = h + 12;
            }
            const date = new Date(0, 0, 1, h);
            const hour = date.getHours();

            // if (hour == this.value.getHours()) {
            //     const width = k < 12 ? "216px" : "132px";
            //     this.style.setProperty("--md-datetime-picker-hour-width", width);
            //     const rotate = (360 / 12) * k + "deg";
            //     this.style.setProperty("--md-datetime-picker-hour-rotate", rotate);
            // }

            return {
                activated: hour == this.current.getHours(),
                selected: hour == this.value.getHours(),
                disabled: false,
                error: false,
                label: this.hourDTF.format(date),
                hour,
                hour12: k < 12,
            };
        });
    }

    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            const date = new Date(0, 0, 1, 0, k + 15);
            const minute = date.getMinutes();

            // if (minute == this.value.getMinutes()) {
            //     const width = k % 5 > 0 ? "256px" : "216px";
            //     this.style.setProperty("--md-datetime-picker-minute-width", width);
            //     const rotate = (360 / 60) * k + "deg";
            //     this.style.setProperty("--md-datetime-picker-minute-rotate", rotate);
            // }

            return {
                activated: minute == this.current.getMinutes(),
                selected: minute == this.value.getMinutes(),
                disabled: false,
                error: false,
                label: this.minuteDTF.format(date),
                minute,
                small: k % 5 > 0,
            };
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

    get label2() {
        if (this.index == 0 || this.index == 1) {
            return "";
        } else if (this.index == 2 || this.index == 3 || this.index == 4) {
            return this.label2DTF.format(this.selected);
        }
    }

    constructor() {
        super();

        this.yearDTF = new Intl.DateTimeFormat(undefined, { year: "numeric" });
        this.monthDTF = new Intl.DateTimeFormat(undefined, { month: 'long' });
        this.weekdayDTF = new Intl.DateTimeFormat(undefined, { weekday: "narrow" });
        this.dayDTF = new Intl.DateTimeFormat(undefined, { day: "numeric" });
        this.hourDTF = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false });
        this.minuteDTF = new Intl.DateTimeFormat(undefined, { minute: "numeric" });

        this.labelDTF = new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long" });
        this.label2DTF = new Intl.DateTimeFormat(undefined, { hour: "2-digit", hour12: false, minute: "2-digit" });

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
        return this.querySelector(".md-datetime-picker__card-inner--year");
    }

    renderCardItemYears() {
        // prettier-ignore
        return html`
            <div class="md-datetime-picker__card-inner md-datetime-picker__card-inner--year" is="md-datetime-picker-year" @onVirtualScroll="${this.handleDatetimePickerYearVirtualScroll}">
                <div class="md-datetime-picker__list">
                    ${this.years.map(data=>html`
                        <div 
                            .data="${data}"
                            @click="${this.handleDatetimePickerItemYearClick}"
                            class="${classMap({
                                "md-datetime-picker__list-item":true,
                                "md-datetime-picker__list-item--activated":data.activated,
                                "md-datetime-picker__list-item--selected":data.selected,
                                "md-datetime-picker__list-item--disabled":data.disabled,
                                "md-datetime-picker__list-item--error":data.error,
                            })}"
                        >
                            <md-icon class="md-datetime-picker__list-icon">${data.selected?'check':''}</md-icon>
                            <div class="md-datetime-picker__list-label">${data.label}</div>
                        </div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-datetime-picker__card-footer"> -->
                <!-- <md-button class="md-datetime-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-datetime-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderCardItemMonths() {
        // prettier-ignore
        return html`
            <div class="md-datetime-picker__card-inner" is="md-datetime-picker-month" @onVirtualScroll="${this.handleDatetimePickerMonthVirtualScroll}">
                <div class="md-datetime-picker__list">
                    ${this.months.map(data=>html`
                        <div 
                            .data="${data}"
                            @click="${this.handleDatetimePickerItemMonthClick}"
                            class="${classMap({
                                "md-datetime-picker__list-item":true,
                                "md-datetime-picker__list-item--activated":data.activated,
                                "md-datetime-picker__list-item--selected":data.selected,
                                "md-datetime-picker__list-item--disabled":data.disabled,
                                "md-datetime-picker__list-item--error":data.error,
                            })}"
                        >
                            <md-icon class="md-datetime-picker__list-icon">${data.selected?'check':''}</md-icon>
                            <div class="md-datetime-picker__list-label">${data.label}</div>
                        </div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-datetime-picker__card-footer"> -->
                <!-- <md-button class="md-datetime-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-datetime-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderCardItemDays() {
        // prettier-ignore
        return html`
            <div class="md-datetime-picker__card-inner">
                <div class="md-datetime-picker__table">
                    <div class="md-datetime-picker__table-row md-datetime-picker__table-row--header">
                        ${this.weekdays.map(data=>html`
                            <div 
                                class="${classMap({
                                    "md-datetime-picker__table-item":true,
                                    "md-datetime-picker__table-item--activated":data.activated,
                                    "md-datetime-picker__table-item--selected":data.selected,
                                    "md-datetime-picker__table-item--disabled":data.disabled,
                                    "md-datetime-picker__table-item--error":data.error,
                                })}"
                            >${data.label}</div>
                        `)}
                    </div>
                    ${this.days.map(row=>html`
                        <div class="md-datetime-picker__table-row md-datetime-picker__table-row--body">
                            ${row.map(data=>html`
                                <div 
                                    .data="${data}"
                                    @click="${this.handleDatetimePickerItemDayClick}"
                                    class="${classMap({
                                        "md-datetime-picker__table-item":true,
                                        "md-datetime-picker__table-item--activated":data.activated,
                                        "md-datetime-picker__table-item--selected":data.selected,
                                        "md-datetime-picker__table-item--disabled":data.disabled,
                                        "md-datetime-picker__table-item--error":data.error,
                                    })}"
                                >${data.label}</div>
                            `)}
                        </div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-datetime-picker__card-footer"> -->
                <!-- <md-button class="md-datetime-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-datetime-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderCardItemHours() {
        // prettier-ignore
        return html`
            <div class="md-datetime-picker__card-inner">
                <div class="md-datetime-picker__absolute md-datetime-picker__absolute--hour">
                    ${this.hours.map(data=>html`
                        <div 
                            .data="${data}"
                            @click="${this.handleDatetimePickerItemHourClick}"
                            class="${classMap({
                                "md-datetime-picker__absolute-item":true,
                                "md-datetime-picker__absolute-item--activated":data.activated,
                                "md-datetime-picker__absolute-item--selected":data.selected,
                                "md-datetime-picker__absolute-item--disabled":data.disabled,
                                "md-datetime-picker__absolute-item--error":data.error,
                            })}"
                        >${data.label}</div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-datetime-picker__card-footer"> -->
                <!-- <md-button class="md-datetime-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-datetime-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderCardItemMinutes() {
        // prettier-ignore
        return html`
            <div class="md-datetime-picker__card-inner">
                <div class="md-datetime-picker__absolute md-datetime-picker__absolute--minute">
                    ${this.minutes.map(data=>html`
                        <div 
                            .data="${data}"
                            @click="${this.handleDatetimePickerItemMinuteClick}"
                            class="${classMap({
                                "md-datetime-picker__absolute-item":true,
                                "md-datetime-picker__absolute-item--activated":data.activated,
                                "md-datetime-picker__absolute-item--selected":data.selected,
                                "md-datetime-picker__absolute-item--disabled":data.disabled,
                                "md-datetime-picker__absolute-item--error":data.error,
                                "md-datetime-picker__absolute-item--small":data.small,
                            })}"
                        >${data.label}</div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-datetime-picker__card-footer"> -->
                <!-- <md-button class="md-datetime-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-datetime-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderInner() {
        // prettier-ignore
        return html`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderCardItemYears()}</div>
                <div class="md-datetime-picker__card-item">${this.renderCardItemMonths()}</div>
                <div class="md-datetime-picker__card-item">${this.renderCardItemDays()}</div>
                <div class="md-datetime-picker__card-item">${this.renderCardItemHours()}</div>
                <div class="md-datetime-picker__card-item">${this.renderCardItemMinutes()}</div>
            </div>
        `
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-datetime-picker__header">
                <md-button @click="${this.handleDatetimePickerLabelClick}" class="md-datetime-picker__label" .label="${this.label}"></md-button>
                ${this.label2?html`
                    <md-button @click="${this.handleDatetimePickerLabel2Click}" class="md-datetime-picker__label" .label="${this.label2}"></md-button>
                `:nothing}
                ${this.index!==0?html`
                    <div class="md-datetime-picker__actions">
                        <md-icon-button @click="${this.handleDatetimePickerActionBeforeClick}" class="md-datetime-picker__action" icon="navigate_before"></md-icon-button>
                        <md-icon-button @click="${this.handleDatetimePickerActionNextClick}" class="md-datetime-picker__action" icon="navigate_next"></md-icon-button>
                    </div>
                `:nothing}
            </div>
            <div class="md-datetime-picker__body">
                <div class="md-datetime-picker__inner">${this.renderInner()}</div>
                <div class="md-datetime-picker__footer">
                    <md-button @click="${this.handleDatetimePickerButtonCancelClick}" class="md-datetime-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleDatetimePickerButtonOkClick}" class="md-datetime-picker__button" label="Ok"></md-button>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-datetime-picker");
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete;

        this.selected.setFullYear(this.value.getFullYear());
        this.selected.setMonth(this.value.getMonth());
        this.selected.setDate(this.value.getDate());
        this.selected.setHours(this.value.getHours());
        this.selected.setMinutes(this.value.getMinutes());

        this.requestUpdate();
    }

    updated(changedProperties) {
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-datetime-picker-index", this.index);
        }
    }

    async handleDatetimePickerYearVirtualScroll(event) {
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

        this.emit("onDatetimePickerListYearVirtualScroll", event);
    }

    handleDatetimePickerMonthVirtualScroll(event) {
        const {
            start,
            end,
            options: { total },
        } = event.detail;

        this.emit("onDatetimePickerListMonthVirtualScroll", event);
    }

    handleDatetimePickerItemYearClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.requestUpdate();

        this.index = 1;

        this.emit("onDatetimePickerItemYearClick", event);
    }

    handleDatetimePickerItemMonthClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.requestUpdate();

        this.index = 2;

        this.emit("onDatetimePickerItemMonthClick", event);
    }

    handleDatetimePickerItemDayClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.selected.setHours(this.selected.getHours());
        this.selected.setMinutes(this.selected.getMinutes());

        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());
        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.emit("onDatetimePickerItemDayClick", event);
    }

    handleDatetimePickerItemHourClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(data.hour);

        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());
        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.index = 4;

        this.emit("onDatetimePickerItemHourClick", event);
    }

    handleDatetimePickerItemMinuteClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(this.selected.getHours());
        this.selected.setMinutes(data.minute);

        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());
        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.index = 2;

        this.emit("onDatetimePickerItemMinuteClick", event);
    }

    handleDatetimePickerLabelClick(event) {
        if (this.index == 0) {
            this.index = 2;
        } else if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 2) {
            this.index = 1;
        } else if (this.index == 3) {
        } else if (this.index == 4) {
        }

        // this.requestUpdate();

        this.emit("onDatetimePickerLabelClick", event);
    }

    handleDatetimePickerLabel2Click(event) {
        if (this.index == 0) {
        } else if (this.index == 1) {
        } else if (this.index == 2) {
            this.index = 3;
        } else if (this.index == 3) {
            this.index = 4;
        } else if (this.index == 4) {
            this.index = 2;
        }

        // this.requestUpdate();

        this.emit("onDatetimePickerLabelClick", event);
    }

    handleDatetimePickerActionBeforeClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        } else if (this.index == 3) {
            this.selected.setHours(this.selected.getHours() - 1);
            this.value.setFullYear(this.selected.getFullYear());
            this.value.setMonth(this.selected.getMonth());
            this.value.setDate(this.selected.getDate());
            this.value.setHours(this.selected.getHours());
            this.value.setMinutes(this.selected.getMinutes());
        } else if (this.index == 4) {
            this.selected.setMinutes(this.selected.getMinutes() - 1);
            this.value.setFullYear(this.selected.getFullYear());
            this.value.setMonth(this.selected.getMonth());
            this.value.setDate(this.selected.getDate());
            this.value.setHours(this.selected.getHours());
            this.value.setMinutes(this.selected.getMinutes());
        }

        this.requestUpdate();

        this.emit("onDatetimePickerActionBeforeClick", event);
    }

    handleDatetimePickerActionNextClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        } else if (this.index == 3) {
            this.selected.setHours(this.selected.getHours() + 1);
            this.value.setFullYear(this.selected.getFullYear());
            this.value.setMonth(this.selected.getMonth());
            this.value.setDate(this.selected.getDate());
            this.value.setHours(this.selected.getHours());
            this.value.setMinutes(this.selected.getMinutes());
        } else if (this.index == 4) {
            this.selected.setMinutes(this.selected.getMinutes() + 1);
            this.value.setFullYear(this.selected.getFullYear());
            this.value.setMonth(this.selected.getMonth());
            this.value.setDate(this.selected.getDate());
            this.value.setHours(this.selected.getHours());
            this.value.setMinutes(this.selected.getMinutes());
        }

        this.requestUpdate();

        this.emit("onDatetimePickerActionNextClick", event);
    }

    handleDatetimePickerButtonCancelClick(event) {
        const date = new Date();

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());

        this.value.setFullYear(date.getFullYear());
        this.value.setMonth(date.getMonth());
        this.value.setDate(date.getDate());
        this.value.setHours(date.getHours());
        this.value.setMinutes(date.getMinutes());

        this.requestUpdate();

        this.index = 2;

        this.emit("onDatetimePickerButtonCancelClick", event);
    }

    handleDatetimePickerButtonOkClick(event) {
        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());
        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.index = 2;

        this.emit("onDatetimePickerButtonOkClick", event);
    }
}

customElements.define("md-datetime-picker", MDDatetimePicker);

export { MDDatetimePicker };
