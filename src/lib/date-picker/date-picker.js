import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";

class MDDatePicker extends MDElement {
    static get properties() {
        return {
            value: { type: Date, converter: (value) => new Date(value) },
            index: { type: Number },
        };
    }

    get first() {
        return new Date(this.selected.getFullYear(), this.selected.getMonth(), 1).getDay();
    }

    get last() {
        return 32 - new Date(this.selected.getFullYear(), this.selected.getMonth(), 1).getDate();
    }

    get years() {
        return Array.from({ length: 4 * 4 }, (v, k) => {
            const date = new Date(this.selected.getFullYear() + k - 4, 0, 1);
            const year = date.getFullYear();
            return {
                activated: year === this.current.getFullYear(),
                selected: year === this.value.getFullYear(),
                disabled: false,
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
                activated: year === this.current.getFullYear() && month === this.current.getMonth(),
                selected: year === this.value.getFullYear() && month === this.value.getMonth(),
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
            return { label: this.weekdayDTF.format(date) };
        });
    }

    get days() {
        return Array.from({ length: 7 * 6 }, (v, k) => {
            const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), k - this.first + 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const sunday = date.getDay()===0
            return {
                activated: year === this.current.getFullYear() && month === this.current.getMonth() && day === this.current.getDate(),
                selected: year === this.value.getFullYear() && month === this.value.getMonth() && day === this.value.getDate(),
                disabled: month !== this.selected.getMonth(),
                error: sunday,
                label: this.dayDTF.format(date),
                year,
                month,
                day,
                sunday,
            };
        });
    }

    get label() {
        if(this.index===2){return this.labelDTF.format(this.selected);}
        else if(this.index===1){return this.yearDTF.format(this.selected);}
        else if(this.index===0){return [
            this.years[0].year,
            this.years[this.years.length-1].year,
        ].join(' - ')}
    }

    constructor() {
        super();

        this.yearDTF = new Intl.DateTimeFormat(undefined, { year: "numeric" });
        this.monthDTF = new Intl.DateTimeFormat(undefined, { month: "short" });
        this.weekdayDTF = new Intl.DateTimeFormat(undefined, { weekday: 'narrow' });
        this.dayDTF = new Intl.DateTimeFormat(undefined, { day: "numeric" });
        this.labelDTF = new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long" });

        this.current = new Date();
        this.selected = new Date();
        this.value = new Date();

        this.index=2

        // console.log(this.years);
        // console.log(this.months);
        // console.log(this.days);
        // console.log(this.weekdays);
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-date-picker__header">
                <div @click="${this.handleDatePickerLabelClick}" class="md-date-picker__label">${this.label}</div>
                <div class="md-date-picker__actions">
                    <md-icon-button @click="${this.handleDatePickerActionBeforeClick}" class="md-date-picker__action" icon="navigate_before"></md-icon-button>
                    <md-icon-button @click="${this.handleDatePickerActionNextClick}" class="md-date-picker__action" icon="navigate_next"></md-icon-button>
                </div>
            </div>
            <div class="md-date-picker__body">
                <div class="md-date-picker__inner">
                
                    <div class="md-date-picker__card">
                        <div class="md-date-picker__card-item">

                            <div class="md-date-picker__column md-date-picker__column--year">
                                ${this.years.map((data)=>html`
                                    <div class="md-date-picker__column-item md-date-picker__column-item--year">
                                        <div .data="${data}" @click="${this.handleDatePickerColumnLabelYearClick}" 
                                            class="${classMap({
                                                'md-date-picker__column-label':true,
                                                'md-date-picker__column-label--year':true,
                                                'md-date-picker__column-label--activated':data.activated,
                                                'md-date-picker__column-label--selected':data.selected,
                                                'md-date-picker__column-label--disabled':data.disabled,
                                            })}"
                                        >${data.label}</div>
                                    </div>
                                `)}
                            </div>

                        </div>
                        
                        <div class="md-date-picker__card-item">

                            <div class="md-date-picker__column md-date-picker__column--month">
                                ${this.months.map((data)=>html`
                                    <div class="md-date-picker__column-item md-date-picker__column-item--month">
                                        <div .data="${data}" @click="${this.handleDatePickerColumnLabelMonthClick}" 
                                            class="${classMap({
                                                'md-date-picker__column-label':true,
                                                'md-date-picker__column-label--month':true,
                                                'md-date-picker__column-label--activated':data.activated,
                                                'md-date-picker__column-label--selected':data.selected,
                                                'md-date-picker__column-label--disabled':data.disabled,
                                            })}"
                                        >${data.label}</div>
                                    </div>
                                `)}
                            </div>

                        </div>
                        
                        
                        <div class="md-date-picker__card-item">

                            <div class="md-date-picker__column md-date-picker__column--day">
                                ${this.weekdays.map((data)=>html`
                                    <div class="md-date-picker__column-item md-date-picker__column-item--weekday">
                                        <div 
                                            class="${classMap({
                                                'md-date-picker__column-label':true,
                                                'md-date-picker__column-label--weekday':true,
                                                'md-date-picker__column-label--activated':data.activated,
                                                'md-date-picker__column-label--selected':data.selected,
                                                'md-date-picker__column-label--disabled':data.disabled,
                                            })}"
                                        >${data.label}</div>
                                    </div>
                                `)}
                                ${this.days.map((data)=>html`
                                    <div class="md-date-picker__column-item md-date-picker__column-item--day">
                                        <div .data="${data}" @click="${this.handleDatePickerColumnLabelDayClick}" 
                                            class="${classMap({
                                                'md-date-picker__column-label':true,
                                                'md-date-picker__column-label--day':true,
                                                'md-date-picker__column-label--activated':data.activated,
                                                'md-date-picker__column-label--selected':data.selected,
                                                'md-date-picker__column-label--disabled':data.disabled,
                                                'md-date-picker__column-label--error':data.error,
                                            })}"
                                        >${data.label}</div>
                                    </div>
                                `)}
                            </div>

                        </div>
                        
                    </div>

                </div>
                <div class="md-date-picker__footer">
                    <md-button @click="${this.handleDatePickerButtonCancelClick}" class="md-date-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleDatePickerButtonOkClick}" class="md-date-picker__button" label="Ok"></md-button>
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

    async firstUpdated(changedProperties) {
        await this.updateComplete
        this.selected.setFullYear(this.value.getFullYear())
        this.selected.setMonth(this.value.getMonth())
        this.selected.setDate(this.value.getDate())
        this.requestUpdate()
    }

    updated(changedProperties) {
        this.style.setProperty('--md-date-picker-index',this.index)
    }

    handleDatePickerLabelClick(event) {
        if(this.index===2){this.index=1}
        else if(this.index===1){this.index=0}
        else if(this.index===0){this.index=2}
        this.emit("onDatePickerLabelClick", event);
    }
    handleDatePickerActionBeforeClick(event) {
        if(this.index===2){this.selected.setMonth(this.selected.getMonth()-1)}
        else if(this.index===1){this.selected.setFullYear(this.selected.getFullYear()-1)}
        else if(this.index===0){this.selected.setFullYear(this.selected.getFullYear()-4*4)}
        this.requestUpdate()
        this.emit("onDatePickerActionBeforeClick", event);
    }
    handleDatePickerActionNextClick(event) {
        if(this.index===2){this.selected.setMonth(this.selected.getMonth()+1)}
        else if(this.index===1){this.selected.setFullYear(this.selected.getFullYear()+1)}
        else if(this.index===0){this.selected.setFullYear(this.selected.getFullYear()+4*4)}
        this.requestUpdate()
        this.emit("onDatePickerActionNextClick", event);
    }
    handleDatePickerColumnLabelYearClick(event) {
        this.index=1

        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.requestUpdate();
        this.emit("onDatePickerColumnLabelYearClick", event);
    }
    handleDatePickerColumnLabelMonthClick(event) {
        this.index=2

        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.requestUpdate();
        this.emit("onDatePickerColumnLabelMonthClick", event);
    }
    handleDatePickerColumnLabelDayClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.value.setDate(data.day);

        this.requestUpdate();
        this.emit("onDatePickerColumnLabelDayClick", event);
    }
    handleDatePickerButtonCancelClick(event) {
        this.index=2

        const date=new Date()
        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());

        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());
        this.value.setDate(this.selected.getDate());
        this.requestUpdate();
        this.emit("onDatePickerButtonCancelClick", event);
    }
    handleDatePickerButtonOkClick(event) {
        // this.index=2
        // this.value.setFullYear(this.selected.getFullYear());
        // this.value.setMonth(this.selected.getMonth());
        // this.value.setDate(this.selected.getDate());
        // this.requestUpdate();
        console.log(this.value)
        this.emit("onDatePickerButtonOkClick", event);
    }
}

customElements.define("md-date-picker", MDDatePicker);

export { MDDatePicker };
