import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";

function format(date, string) {
    return new Intl.DateTimeFormat("id-ID", {
        ...(string === "y" && { year: "numeric" }),
        ...(string === "m" && { month: "short" }),
        ...(string === "w" && { weekday: "short" }),
        ...(string === "d" && { day: "numeric" }),
    }).format(date);
}

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
                label: format(date, "y"),
                year,
                activated: year === this.current.getFullYear(),
                selected: year === this.value.getFullYear(),
            };
        });
    }
    get months() {
        return Array.from({ length: 4 * 4 }, (v, k) => {
            const date = new Date(this.selected.getFullYear(), k, 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            return {
                label: format(date, "m"),
                year,
                month,
                activated: year === this.current.getFullYear() && month === this.current.getMonth(),
                selected: year === this.value.getFullYear() && month === this.value.getMonth(),
                disabled: year !== this.selected.getFullYear(),
            };
        });
    }
    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k);
            return {
                label: format(date, "w"),
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
                label: format(date, "d"),
                year,
                month,
                day,
                activated: year === this.current.getFullYear() && month === this.current.getMonth() && day === this.current.getDate(),
                selected: year === this.value.getFullYear() && month === this.value.getMonth() && day === this.value.getDate(),
                disabled: month !== this.selected.getMonth(),
            };
        });
    }

    get label() {
        
        if (this.index === 2) {
            return new Intl.DateTimeFormat("id-ID", {
                year: "numeric",
                month: "long",
            }).format(this.selected);
        } else if (this.index === 1) {
            return new Intl.DateTimeFormat("id-ID", {
                year: "numeric",
            }).format(this.selected);
        } else if (this.index === 0) {
            return `${this.years[0].year} - ${this.years[this.years.length-1].year}`
        }
    }

    constructor() {
        super();

        this.current = new Date();
        this.selected = new Date();
        this.value = new Date();

        this.index = 2;
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-date-picker__header">
                <div 
                    class="md-date-picker__label"
                    @click="${this.handleDatePickerLabelClick}"
                >${this.label}</div>
                <div class="md-date-picker__actions">
                    <md-icon-button 
                        class="md-date-picker__action" 
                        icon="navigate_before"
                        @click="${this.handleDatePickerActionBeforeClick}"
                    ></md-icon-button>
                    <md-icon-button 
                        class="md-date-picker__action" 
                        icon="navigate_next"
                        @click="${this.handleDatePickerActionNextClick}"
                    ></md-icon-button>
                </div>
            </div>
            <div class="md-date-picker__body">
                <div class="md-date-picker__inner">
                    <div class="md-date-picker__card">
                        <div class="md-date-picker__item">
                            <div class="md-date-picker__column md-date-picker__column--years">
                                ${this.years.map(data=>html`
                                    <div
                                        .data="${data}" 
                                        class="${classMap({
                                            'md-date-picker__item':true,
                                            'md-date-picker__item--year':true,
                                            'md-date-picker__item--activated':data.activated,
                                            'md-date-picker__item--selected':data.selected,
                                            'md-date-picker__item--disabled':data.disabled,
                                        })}"
                                        @click="${this.handleDatePickerItemYearClick}"
                                    >${data.label}</div>
                                `)}
                            </div>
                        </div>
                        <div class="md-date-picker__item">
                            <div class="md-date-picker__column md-date-picker__column--months">
                                ${this.months.map(data=>html`
                                    <div
                                        .data="${data}" 
                                        class="${classMap({
                                            'md-date-picker__item':true,
                                            'md-date-picker__item--month':true,
                                            'md-date-picker__item--activated':data.activated,
                                            'md-date-picker__item--selected':data.selected,
                                            'md-date-picker__item--disabled':data.disabled,
                                        })}"
                                        @click="${this.handleDatePickerItemMonthClick}"
                                    >${data.label}</div>
                                `)}
                            </div>
                        </div>
                        <div class="md-date-picker__item">
                            <div class="md-date-picker__column md-date-picker__column--days">
                                ${this.weekdays.map(data=>html`
                                    <div
                                        .data="${data}" 
                                        class="${classMap({
                                            'md-date-picker__item':true,
                                            'md-date-picker__item--weekday':true,
                                        })}"
                                        @click="${this.handleDatePickerItemDayClick}"
                                    >${data.label}</div>
                                `)}
                                ${this.days.map(data=>html`
                                    <div
                                        .data="${data}" 
                                        class="${classMap({
                                            'md-date-picker__item':true,
                                            'md-date-picker__item--day':true,
                                            'md-date-picker__item--activated':data.activated,
                                            'md-date-picker__item--selected':data.selected,
                                            'md-date-picker__item--disabled':data.disabled,
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
            this.style.setProperty('--md-date-picker-index',this.index)
        }
    }

    handleDatePickerLabelClick(event) {
        if (this.index === 2) {
            this.index = 1;
        } else if (this.index === 1) {
            this.index = 0;
        }
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
        const data=event.currentTarget.data
        
        this.selected.setFullYear(data.year)

        this.index=1
        
        this.requestUpdate()

        this.emit("onDatePickerItemYearClick", event);
    }
    handleDatePickerItemMonthClick(event) {
        const data=event.currentTarget.data
        
        this.selected.setFullYear(data.year)
        this.selected.setMonth(data.month)

        this.index=2
        
        this.requestUpdate()

        this.emit("onDatePickerItemMonthClick", event);
    }
    handleDatePickerItemDayClick(event) {
        const data=event.currentTarget.data
        
        this.selected.setFullYear(data.year)
        this.selected.setMonth(data.month)
        this.selected.setDate(data.day)
        
        
        this.value.setFullYear(data.year)
        this.value.setMonth(data.month)
        this.value.setDate(data.day)
        
        this.requestUpdate()

        this.emit("onDatePickerItemDayClick", event);
    }

    handleDatePickerButtonClearClick(event){

    
        this.emit('onDatePickerButtonClearClick',event)
    }
    handleDatePickerButtonTodayClick(event){
        
        this.selected=new Date()
        this.value=new Date()
        
        this.requestUpdate()

        this.emit('onDatePickerButtonTodayClick',event)
    }
}

customElements.define("md-date-picker", MDDatePicker);

export { MDDatePicker };
