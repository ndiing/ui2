import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScroll } from "../virtual-scroll/virtual-scroll";
import { styleMap } from "lit/directives/style-map.js";

class MDDateTimePickerList extends HTMLDivElement {
    connectedCallback() {
        const total = new Date().getFullYear() * 2;
        const itemHeight = 48;
        const viewportHeight = this.clientHeight;
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

customElements.define("md-datetime-picker-list", MDDateTimePickerList, { extends: "div" });

class MDDateTimePicker extends MDElement {
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
        return Array.from({ length: 6 }, (v, k) => {
            return Array.from({ length: 7 }, (v2, k2) => {
                const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), k * 7 + k2 - this.first + 1);
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDate();
                return { activated: year == this.current.getFullYear() && month == this.current.getMonth() && day == this.current.getDate(), selected: year == this.value.getFullYear() && month == this.value.getMonth() && day == this.value.getDate(), disabled: year !== this.selected.getFullYear() || month !== this.selected.getMonth(), label: this.dayDTF.format(date), year, month, day };
            });
        });
    }

    get hours() {
        return Array.from({ length: 24 }, (v, k) => {
            let x;
            let y;
            let h = (k + 3) % 12;

            if (k < 12) {
                x = 128 * Math.cos((k / 12) * 2 * Math.PI) + 132;
                y = 128 * Math.sin((k / 12) * 2 * Math.PI) + 132;
            } else {
                h = h + 12;
                x = 84 * Math.cos(((k % 12) / 12) * 2 * Math.PI) + 132;
                y = 84 * Math.sin(((k % 12) / 12) * 2 * Math.PI) + 132;
            }
            const date = new Date(0, 0, 1, h, 0);
            const hour = date.getHours();
            const selected = hour == this.value.getHours();

            if (selected) {
                this.style.setProperty("--md-datetime-picker-hour-rotate", (360 / 12) * k + "deg");
                const width = k < 12 ? "216px" : "128px";
                this.style.setProperty("--md-datetime-picker-hour-width", width);
            }
            return {
                x,
                y,
                activated: hour == this.current.getHours(),
                selected,
                label: this.hourDTF.format(date),
                hour,
            };
        });
    }

    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            const x = 128 * Math.cos((k / 60) * 2 * Math.PI) + 132;
            const y = 128 * Math.sin((k / 60) * 2 * Math.PI) + 132;
            const date = new Date(0, 0, 1, 0, (k + 15) % 60);
            const minute = date.getMinutes();
            let label;

            if (k % 5 == 0) {
                label = this.minuteDTF.format(date);
            }
            const selected = minute == this.value.getMinutes();

            if (selected) {
                this.style.setProperty("--md-datetime-picker-minute-rotate", (360 / 60) * k + "deg");
                const width = k % 5 == 0 ? "216px" : "236px";
                this.style.setProperty("--md-datetime-picker-minute-width", width);
            }
            return {
                x,
                y,
                activated: minute == this.current.getMinutes(),
                selected,
                label,
                small: k % 5 > 0,
                minute,
            };
        });
    }

    get label() {
        if (
            this.index == 2||
            this.index == 3||
            this.index == 4
        ) {
            return this.labelDTF.format(this.selected);
        } else if (this.index == 1) {
            return this.yearDTF.format(this.selected);
        } else if (this.index == 0) {
            return [this.years[0].year, this.years[this.years.length - 1].year].join(" - ");
        }
    }

    get label2() {
        if (
            this.index == 2||
            this.index == 3||
            this.index == 4
        ) {
            return this.label2DTF.format(this.selected);
        }
    }

    constructor() {
        super();
        this.yearDTF = new Intl.DateTimeFormat(this.locales, { year: "numeric" });
        this.monthDTF = new Intl.DateTimeFormat(this.locales, { month: "long" });
        this.weekdayDTF = new Intl.DateTimeFormat(this.locales, { weekday: "narrow" });
        this.dayDTF = new Intl.DateTimeFormat(this.locales, { day: "numeric" });
        this.hourDTF = new Intl.DateTimeFormat(this.locales, { hour: "numeric", hour12: false });
        this.minuteDTF = new Intl.DateTimeFormat(this.locales, { minute: "numeric" });
        this.labelDTF = new Intl.DateTimeFormat(this.locales, { year: "numeric", month: "long" });
        this.label2DTF = new Intl.DateTimeFormat(this.locales, { hour:'2-digit',minute:'2-digit',hour12:false });
        this.valueDTF = new Intl.DateTimeFormat(this.locales, { year: "numeric", month: "2-digit", day: "2-digit" });
        this.current = new Date();
        this.value = new Date();
        this.selected = new Date();
        this.index = 2;
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-datetime-picker__header">
                <md-button @click="${this.handleDateTimePickerLabelClick}" class="md-datetime-picker__label" .label="${this.label}"></md-button>
                ${this.label2?html`
                    <md-button @click="${this.handleDateTimePickerLabel2Click}" class="md-datetime-picker__label" .label="${this.label2}"></md-button>
                `:nothing}
                <div class="md-datetime-picker__actions">
                    <md-icon-button @click="${this.handleDateTimePickerActionBeforeClick}" class="md-datetime-picker__action" icon="navigate_before"></md-icon-button>
                    <md-icon-button @click="${this.handleDateTimePickerActionNextClick}" class="md-datetime-picker__action" icon="navigate_next"></md-icon-button>
                </div>
            </div>
            <div class="md-datetime-picker__body">
                <div class="md-datetime-picker__inner">

                    <div class="md-datetime-picker__card">
                        <div class="md-datetime-picker__card-item">
                            <div is="md-datetime-picker-list" class="md-datetime-picker__card-inner" @onVirtualScroll="${this.handleDateTimePickerCardInnerVirtualScroll}">

                                <div class="md-datetime-picker__list">
                                    ${this.years.map(item=>html`
                                        <div 
                                            class="${classMap({
                                                "md-datetime-picker__list-item":true,
                                                "md-datetime-picker__list-item--activated":item.activated,
                                                "md-datetime-picker__list-item--selected":item.selected,
                                                "md-datetime-picker__list-item--disabled":item.disabled,
                                            })}"
                                            .data="${item}"
                                            @click="${this.handleDateTimePickerListItemYearClick}"
                                        >
                                            <md-icon class="md-datetime-picker__list-icon">${item.selected?"check":""}</md-icon>
                                            <div class="md-datetime-picker__list-label">${item.label}</div>
                                        </div>
                                    `)}
                                </div>

                            </div>
                        </div>
                        <div class="md-datetime-picker__card-item">
                            <div class="md-datetime-picker__card-inner">

                                <div class="md-datetime-picker__list">
                                    ${this.months.map(item=>html`
                                        <div 
                                            class="${classMap({
                                                "md-datetime-picker__list-item":true,
                                                "md-datetime-picker__list-item--activated":item.activated,
                                                "md-datetime-picker__list-item--selected":item.selected,
                                                "md-datetime-picker__list-item--disabled":item.disabled,
                                            })}"
                                            .data="${item}"
                                            @click="${this.handleDateTimePickerListItemMonthClick}"
                                        >
                                            <md-icon class="md-datetime-picker__list-icon">${item.selected?"check":""}</md-icon>
                                            <div class="md-datetime-picker__list-label">${item.label}</div>
                                        </div>
                                    `)}
                                </div>

                            </div>
                        </div>
                        <div class="md-datetime-picker__card-item">
                            <div class="md-datetime-picker__card-inner">

                                <div class="md-datetime-picker__table">
                                    <div class="md-datetime-picker__table-row md-datetime-picker__table-row--header">
                                        ${this.weekdays.map(item=>html`
                                            <div class="md-datetime-picker__table-item">${item.label}</div>
                                        `)}
                                    </div>
                                    ${this.days.map(row=>html`
                                        <div class="md-datetime-picker__table-row md-datetime-picker__table-row--body">
                                            ${row.map(item=>html`
                                                <div 
                                                    class="${classMap({
                                                        "md-datetime-picker__table-item":true,
                                                        "md-datetime-picker__table-item--activated":item.activated,
                                                        "md-datetime-picker__table-item--selected":item.selected,
                                                        "md-datetime-picker__table-item--disabled":item.disabled,
                                                    })}"
                                                    .data="${item}"
                                                    @click="${this.handleDateTimePickerTableItemDayClick}"
                                                >${item.label}</div>
                                            `)}
                                        </div>
                                    `)}
                                </div>

                            </div>
                            <!-- <div class="md-datetime-picker__card-footer">
                                <md-button @click="${this.handleDateTimePickerButtonCancelClick}" class="md-datetime-picker__card-button" label="Cancel"></md-button>
                                <md-button @click="${this.handleDateTimePickerButtonOkClick}" class="md-datetime-picker__card-button" label="Ok"></md-button>
                            </div> -->
                        </div>
                        <div class="md-datetime-picker__card-item">
                            <div class="md-datetime-picker__inner">

                                <div class="md-datetime-picker__absolute md-datetime-picker__absolute--hour">
                                    ${this.hours.map(item=>html`
                                        <div 
                                            .data="${item}"
                                            @click="${this.handleDateTimePickerAbsoluteItemHourClick}"
                                            class="${classMap({
                                                'md-datetime-picker__absolute-item':true,
                                                'md-datetime-picker__absolute-item--activated':item.activated,
                                                'md-datetime-picker__absolute-item--selected':item.selected,
                                                'md-datetime-picker__absolute-item--disabled':item.disabled,
                                            })}"
                                            style="${styleMap({
                                                left:item.x+'px',
                                                top:item.y+'px',
                                            })}"
                                        >${item.label}</div>
                                    `)}
                                </div>

                            </div>
                        </div>
                        <div class="md-datetime-picker__card-item">
                            <div class="md-datetime-picker__inner">

                                <div class="md-datetime-picker__absolute md-datetime-picker__absolute--minute">
                                    ${this.minutes.map(item=>html`
                                        <div 
                                            .data="${item}"
                                            @click="${this.handleDateTimePickerAbsoluteItemMinuteClick}"
                                            class="${classMap({
                                                'md-datetime-picker__absolute-item':true,
                                                'md-datetime-picker__absolute-item--activated':item.activated,
                                                'md-datetime-picker__absolute-item--selected':item.selected,
                                                'md-datetime-picker__absolute-item--disabled':item.disabled,
                                                'md-datetime-picker__absolute-item--small':item.small,
                                            })}"
                                            style="${styleMap({
                                                left:item.x+'px',
                                                top:item.y+'px',
                                            })}"
                                        >${item.label}</div>
                                    `)}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="md-datetime-picker__footer">
                    <md-button @click="${this.handleDateTimePickerButtonCancelClick}" class="md-datetime-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleDateTimePickerButtonOkClick}" class="md-datetime-picker__button" label="Ok"></md-button>
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
        this.style.setProperty("--md-datetime-picker-index", this.index);
    }

    handleDateTimePickerListItemYearClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.requestUpdate();
        this.index = 1;
        this.emit("onDateTimePickerListItemYearClick", event);
    }

    handleDateTimePickerListItemMonthClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.requestUpdate();
        this.index = 2;
        this.emit("onDateTimePickerListItemMonthClick", event);
    }

    handleDateTimePickerTableItemDayClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.value.setDate(data.day);
        this.requestUpdate();
        this.emit("onDateTimePickerTableItemDayClick", event);
    }

    handleDateTimePickerAbsoluteItemHourClick(event) {
        const data = event.currentTarget.data;
        this.selected.setHours(data.hour);
        this.value.setHours(this.selected.getHours());
        this.requestUpdate();
        this.index = 4;
        this.emit("onTimePickerAbsoluteItemHourClick", event);
    }

    handleDateTimePickerAbsoluteItemMinuteClick(event) {
        const data = event.currentTarget.data;
        this.selected.setMinutes(data.minute);
        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());
        this.requestUpdate();
        this.index = 2;
        this.emit("onTimePickerAbsoluteItemMinuteClick", event);
    }

    handleDateTimePickerLabelClick(event) {
        if (this.index == 2) {
            this.index = 1;
        } else if (this.index == 1) {
            this.index = 0;
        }else if (
            this.index == 3||
            this.index == 4
        ) {
            this.index = 2;
        }
        this.emit("onDateTimePickerLabelClick", event);
    }

    handleDateTimePickerLabel2Click(event) {
        if (this.index == 2) {
            this.index = 3;
        } else if (this.index == 3) {
            this.index = 4;
        }
        this.emit("onDateTimePickerLabelClick", event);
    }

    handleDateTimePickerActionBeforeClick(event) {
        if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        }else if (this.index == 3) {
            this.selected.setHours(this.selected.getHours() - 1);
        }else if (this.index == 4) {
            this.selected.setMinutes(this.selected.getMinutes() - 1);
        }
        this.requestUpdate();
        this.emit("onDateTimePickerActionBeforeClick", event);
    }

    handleDateTimePickerActionNextClick(event) {
        if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        }else if (this.index == 3) {
            this.selected.setHours(this.selected.getHours() + 1);
        }else if (this.index == 4) {
            this.selected.setMinutes(this.selected.getMinutes() + 1);
        }
        this.requestUpdate();
        this.emit("onDateTimePickerActionNextClick", event);
    }

    handleDateTimePickerButtonCancelClick(event) {
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
        this.emit("onDateTimePickerButtonCancelClick", event);
    }

    handleDateTimePickerButtonOkClick(event) {
        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());
        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());
        this.requestUpdate();
        this.index = 2;
        this.emit("onDateTimePickerButtonOkClick", event);
    }

    async handleDateTimePickerCardInnerVirtualScroll(event) {
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
        this.emit("onDateTimePickerCardInnerVirtualScroll", event);
    }
}

customElements.define("md-datetime-picker", MDDateTimePicker);

export { MDDateTimePicker };
