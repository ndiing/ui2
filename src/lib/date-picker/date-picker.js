import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";

class MDDatePicker extends MDElement {
    static get properties() {
        return {
            index: { type: Number },
            date: { type: Date },
        };
    }

    constructor() {
        super();

        this.format = (date, string) =>
            new Intl.DateTimeFormat("id-ID", {
                ...(string === "y" && { year: "numeric" }),
                ...(string === "m" && { month: "short" }),
                ...(string === "w" && { weekday: "short" }),
                ...(string === "d" && { day: "numeric" }),
            }).format(date);

        this.current = new Date();
        this.date = new Date();
        this.index = 2;
    }

    get dateParts() {
        return new Intl.DateTimeFormat("id-ID", {
            year: "numeric",
            month: "long",
            day: "2-digit",
        }).formatToParts(this.selected);
    }

    render() {
        this.updateData();
        // prettier-ignore
        return html`
            <div class="md-date-picker__header">
                <div class="md-date-picker__label">
                    ${this.dateParts.map(data=>html`
                        <div 
                            .data="${data}" 
                            class="md-date-picker__label-primary md-date-picker__label-primary--${data.type}" 
                            @click="${this.handleDatePickerLabelClick}"
                        >${data.value}</div>
                    `)}
                </div>
                <div class="md-date-picker__actions">
                    <md-icon-button class="md-date-picker__action" icon="navigate_before" @click="${this.handleDatePickerActionPrevClick}"></md-icon-button>
                    <md-icon-button class="md-date-picker__action" icon="navigate_next" @click="${this.handleDatePickerActionNextClick}"></md-icon-button>
                </div>
            </div>
            <div class="md-date-picker__body">
                <div class="md-date-picker__inner">
                    <div class="md-date-picker__card">
                        <div class="md-date-picker__item">
                            <div class="md-date-picker__column md-date-picker__column--year">
                                ${this.years?.map((data,index)=>html`
                                    <div 
                                        .data="${data}"
                                        class="${classMap({
                                            'md-date-picker__item':true,
                                            'md-date-picker__item--current':data.year===this.current.getFullYear(),
                                            'md-date-picker__item--selected':data.year===this.date.getFullYear(),
                                        })}"
                                        @click="${this.handleDatePickerItemYearClick}"
                                    >${data.label}</div>
                                `)}
                            </div>
                        </div>
                        <div class="md-date-picker__item">
                            <div class="md-date-picker__column md-date-picker__column--month">
                                ${this.months?.map(data=>html`
                                    <div 
                                        .data="${data}"
                                        class="${classMap({
                                            'md-date-picker__item':true,
                                            'md-date-picker__item--secondary':data.year!==this.selected.getFullYear(),
                                            'md-date-picker__item--current':data.year===this.current.getFullYear()&&data.month===this.current.getMonth(),
                                            'md-date-picker__item--selected':data.year===this.date.getFullYear()&&data.month===this.date.getMonth(),
                                        })}"
                                        @click="${this.handleDatePickerItemMonthClick}"
                                    >${data.label}</div>
                                `)}
                            </div>
                        </div>
                        <div class="md-date-picker__item">
                            <div class="md-date-picker__column md-date-picker__column--day">
                                ${this.weekdays?.map(data=>html`
                                    <div 
                                        class="${classMap({
                                            'md-date-picker__item':true,
                                            'md-date-picker__item--weekday':true,
                                        })}"
                                    >${data.label}</div>
                                `)}
                                ${this.days?.map(data=>html`
                                    <div 
                                        .data="${data}"
                                        class="${classMap({
                                            'md-date-picker__item':true,
                                            'md-date-picker__item--day':true,
                                            'md-date-picker__item--secondary':data.month!==this.selected.getMonth(),
                                            'md-date-picker__item--current':data.year===this.current.getFullYear()&&data.month===this.current.getMonth()&&data.day===this.current.getDate(),
                                            'md-date-picker__item--selected':data.year===this.date.getFullYear()&&data.month===this.date.getMonth()&&data.day===this.date.getDate(),
                                        })}"
                                        @click="${this.handleDatePickerItemDayClick}"
                                    >${data.label}</div>
                                `)}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md-date-picker__footer">
                    <md-button class="md-date-picker__button" ui="filled-tonal" label="Clear" @click="${this.handleDatePickerButtonClearClick}"></md-button>
                    <md-button class="md-date-picker__button" ui="filled" label="Today" @click="${this.handleDatePickerButtonTodayClick}"></md-button>
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

    updateData() {
        console.log(this.date);
        if (!this.selected) {
            this.selected = this.date;
        }

        this.first = new Date(this.selected.getFullYear(), this.selected.getMonth()).getDay();
        this.last = 32 - new Date(this.selected.getFullYear(), this.selected.getMonth()).getDate();

        this.years = Array.from({ length: 4 * 4 }, (v, k) => {
            const date = new Date(this.selected.getFullYear() + k - 4, 0, 1);
            const year = date.getFullYear();
            return { label: this.format(date, "y"), date, year };
        });
        this.months = Array.from({ length: 4 * 4 }, (v, k) => {
            const date = new Date(this.selected.getFullYear(), k, 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            return { label: this.format(date, "m"), date, year, month };
        });
        this.weekdays = Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k);
            return { label: this.format(date, "w") };
        });
        this.days = Array.from({ length: 7 * 6 }, (v, k) => {
            const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), k - this.first + 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            return { label: this.format(date, "d"), date, year, month, day };
        });
    }

    handleDatePickerActionPrevClick(event) {
        if (this.index === 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        } else if (this.index === 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index === 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 4 * 4);
        }

        this.updateData();
        this.requestUpdate();
    }
    handleDatePickerActionNextClick(event) {
        if (this.index === 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        } else if (this.index === 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index === 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 4 * 4);
        }

        this.updateData();
        this.requestUpdate();
    }

    handleDatePickerLabelClick(event) {
        const data = event.currentTarget.data;
        this.index = { day: 2, month: 1, year: 0 }[data.type];
        this.emit("onDatePickerLabelClick", event);
    }
    handleDatePickerItemYearClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.index = 1;

        this.updateData();
        this.requestUpdate();

        this.emit("onDatePickerItemYearClick", event);
    }
    handleDatePickerItemMonthClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(this.selected.getFullYear());
        this.selected.setMonth(data.month);

        this.index = 2;

        this.updateData();
        this.requestUpdate();

        this.emit("onDatePickerItemMonthClick", event);
    }
    handleDatePickerItemDayClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(this.selected.getFullYear());
        this.selected.setMonth(this.selected.getMonth());
        this.selected.setDate(data.day);

        this.date.setFullYear(data.year);
        this.date.setMonth(data.month);
        this.date.setDate(data.day);

        this.updateData();
        this.requestUpdate();

        this.emit("onDatePickerItemDayClick", event);
    }

    handleDatePickerButtonClearClick(event) {
        this.emit("onDatePickerButtonClearClick", event);
    }

    handleDatePickerButtonTodayClick(event) {
        this.selected = new Date();
        this.date = new Date();

        this.index = 2;

        this.updateData();
        this.requestUpdate();

        this.emit("onDatePickerButtonTodayClick", event);
    }
}

customElements.define("md-date-picker", MDDatePicker);

export { MDDatePicker };
