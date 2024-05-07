import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";

class MDDatePicker extends MDElement {
    static get properties() {
        return {
            value: { type: Date },
            index: { type: Number },
        };
    }

    get first() {
        return new Date(this.selected.getFullYear(), this.selected.getMonth()).getDay();
    }

    get last() {
        return 32 - new Date(this.selected.getFullYear(), this.selected.getMonth()).getDate();
    }

    get years() {
        return Array.from({ length: 4 * 4 }, (v, k) => {
            const date = new Date(this.selected.getFullYear() + k - 4, 0, 1);
            const year = date.getFullYear();
            return {
                activated: year == this.current.getFullYear(),
                selected: year == this.value.getFullYear(),
                label: this.yearDTF.format(date),
                year,
            };
        });
    }
    get months() {
        return Array.from({ length: 4 * 4 }, (v, k) => {
            const date = new Date(this.selected.getFullYear(), k, 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            return {
                activated: year == this.current.getFullYear() && month == this.current.getMonth(),
                selected: year == this.value.getFullYear() && month == this.value.getMonth(),
                disabled: year !== this.selected.getFullYear(),
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
    get days() {
        return Array.from({ length: 7 * 6 }, (v, k) => {
            const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), k - this.first + 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            return {
                activated: year == this.current.getFullYear() && month == this.current.getMonth() && day == this.current.getDate(),
                selected: year == this.value.getFullYear() && month == this.value.getMonth() && day == this.value.getDate(),
                disabled: month !== this.selected.getMonth(),
                label: this.dayDTF.format(date),
                year,
                month,
                day,
            };
        });
    }

    get label() {
        if (this.index === 2) {
            return this.labelDTF.format(this.selected);
        } else if (this.index === 1) {
            return this.yearDTF.format(this.selected);
        } else if (this.index === 0) {
            return [
                this.years[0].year,
                this.years[this.years.length-1].year,
            ].join(' - ');
        }
    }

    constructor() {
        super();

        this.yearDTF = new Intl.DateTimeFormat("id-ID", { year: "numeric" });
        this.monthDTF = new Intl.DateTimeFormat("id-ID", { month: "short" });
        this.weekdayDTF = new Intl.DateTimeFormat("id-ID", { weekday: "short" });
        this.dayDTF = new Intl.DateTimeFormat("id-ID", { day: "numeric" });
        this.labelDTF = new Intl.DateTimeFormat("id-ID", { year: "numeric", month: "long" });

        this.current = new Date();
        this.selected = new Date();
        this.value = new Date();
        this.index = 2;

        // console.log(this.years);
        // console.log(this.months);
        // console.log(this.days);
        // console.log(this.weekdays);
    }

    render() {
        this.selected=this.value
        // prettier-ignore
        return html`
            <div class="md-date-picker__header">
                <div class="md-date-picker__label" @click="${this.handleDatePickerLabelClick}">${this.label}</div>
                <div class="md-date-picker__actions">
                    <md-icon-button class="md-date-picker__action" icon="navigate_before" @click="${this.handleDatePickerActionBeforeClick}"></md-icon-button>
                    <md-icon-button class="md-date-picker__action" icon="navigate_next" @click="${this.handleDatePickerActionNextClick}"></md-icon-button>
                </div>
            </div>
            <div class="md-date-picker__body">
                <div class="md-date-picker__inner">

                    <div class="md-date-picker__card">
                        
                        <div class="md-date-picker__card-item">
                            <div class="md-date-picker__column md-date-picker__column4">
                                ${this.years.map(data=>html`
                                    <div 
                                        class="${classMap({
                                            'md-date-picker__column-item':true,
                                            'md-date-picker__column-item--action':true,
                                            'md-date-picker__column-item--activated':data.activated,
                                            'md-date-picker__column-item--selected':data.selected,
                                            'md-date-picker__column-item--disabled':data.disabled,
                                        })}" 
                                        .data="${data}" 
                                        @click="${this.handleDatePickerItemYearClick}"
                                    >
                                        <div class="md-date-picker__column-label">${data.label}</div>
                                    </div>
                                `)}
                            </div>
                        </div>

                        <div class="md-date-picker__card-item">
                            <div class="md-date-picker__column md-date-picker__column4">
                                ${this.months.map(data=>html`
                                    <div 
                                        class="${classMap({
                                            'md-date-picker__column-item':true,
                                            'md-date-picker__column-item--action':true,
                                            'md-date-picker__column-item--activated':data.activated,
                                            'md-date-picker__column-item--selected':data.selected,
                                            'md-date-picker__column-item--disabled':data.disabled,
                                        })}" 
                                        .data="${data}" 
                                        @click="${this.handleDatePickerItemMonthClick}"
                                    >
                                        <div class="md-date-picker__column-label">${data.label}</div>
                                    </div>
                                `)}
                            </div>
                        </div>

                        <div class="md-date-picker__card-item">
                            <div class="md-date-picker__column">
                                ${this.weekdays.map(data=>html`
                                    <div class="md-date-picker__column-item">
                                        <div class="md-date-picker__column-label">${data.label}</div>
                                    </div>
                                `)}
                                ${this.days.map(data=>html`
                                    <div 
                                        class="${classMap({
                                            'md-date-picker__column-item':true,
                                            'md-date-picker__column-item--action':true,
                                            'md-date-picker__column-item--activated':data.activated,
                                            'md-date-picker__column-item--selected':data.selected,
                                            'md-date-picker__column-item--disabled':data.disabled,
                                        })}" 
                                        .data="${data}" 
                                        @click="${this.handleDatePickerItemDayClick}"
                                    >
                                        <div class="md-date-picker__column-label">${data.label}</div>
                                    </div>
                                `)}
                            </div>
                        </div>

                    </div>

                </div>
                <div class="md-date-picker__footer">
                    <md-button class="md-date-picker__button" label="Clear" @click="${this.handleDatePickerButtonClearClick}"></md-button>
                    <md-button class="md-date-picker__button" label="Today" @click="${this.handleDatePickerButtonTodayClick}"></md-button>
                </div>
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

    updated(changedProperties) {
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-date-picker-index", this.index);
        }
    }

    handleDatePickerLabelClick(event) {
        if (this.index === 2) {
            this.index = 1;
        } else if (this.index === 1) {
            this.index = 0;
        }
        this.requestUpdate();
        this.emit("onDatePickerLabelClick", event);
    }
    handleDatePickerActionBeforeClick(event) {
        if (this.index === 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        } else if (this.index === 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index === 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 4 * 4);
        }
        this.requestUpdate();
        this.emit("onDatePickerActionBeforeClick", event);
    }
    handleDatePickerActionNextClick(event) {
        if (this.index === 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        } else if (this.index === 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index === 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 4 * 4);
        }
        this.requestUpdate();
        this.emit("onDatePickerActionNextClick", event);
    }
    handleDatePickerItemYearClick(event) {
        this.index = 1;
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.requestUpdate();
        this.emit("onDatePickerItemYearClick", event);
    }
    handleDatePickerItemMonthClick(event) {
        this.index = 2;
        const data = event.currentTarget.data;
        this.selected.setFullYear(this.selected.getFullYear());
        this.selected.setMonth(data.month);
        this.requestUpdate();
        this.emit("onDatePickerItemMonthClick", event);
    }
    handleDatePickerItemDayClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(this.selected.getFullYear());
        this.selected.setMonth(this.selected.getMonth());
        this.selected.setDate(data.day);
        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());
        this.requestUpdate();
        this.emit("onDatePickerItemDayClick", event);
    }
    handleDatePickerButtonClearClick(event) {
        this.index = 2;
        this.selected = new Date();
        this.value = this.selected;
        this.requestUpdate();
        this.emit("onDatePickerButtonClearClick", event);
    }
    handleDatePickerButtonTodayClick(event) {
        this.selected = new Date();
        this.value = this.selected;
        this.requestUpdate();
        this.emit("onDatePickerButtonTodayClick", event);
    }
}

customElements.define("md-date-picker", MDDatePicker);

export { MDDatePicker };
