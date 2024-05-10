import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScroll } from "../virtual-scroll/virtual-scroll";

class MDMonthPickerYear extends HTMLDivElement {
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
            containerSelector: ".md-month-picker__list",
        });

        this.scrollTop = itemHeight * (total / 2) - itemHeight * Math.floor(viewportHeight / itemHeight / 2);
    }
    disconnectedCallback() {
        this.virtualScroll.destroy();
    }
}

customElements.define("md-month-picker-year", MDMonthPickerYear, { extends: "div" });

class MDMonthPickerMonth extends HTMLDivElement {
    connectedCallback() {}
    disconnectedCallback() {}
}

customElements.define("md-month-picker-month", MDMonthPickerMonth, { extends: "div" });

class MDMonthPicker extends MDElement {
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

    get label() {
        if (this.index == 0) {
            return [this.years[0].year, this.years[this.years.length - 1].year].join(" - ");
        } else if (this.index == 1) {
            return this.yearDTF.format(this.selected);
        }
    }

    constructor() {
        super();

        this.yearDTF = new Intl.DateTimeFormat(undefined, { year: "numeric" });
        this.monthDTF = new Intl.DateTimeFormat(undefined, { month: 'long' });

        this.value = new Date();
        this.selected = new Date();
        this.current = new Date();

        this.index = 1;

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
        return this.querySelector(".md-month-picker__card-inner--year");
    }

    renderCardItemYears() {
        // prettier-ignore
        return html`
            <div class="md-month-picker__card-inner md-month-picker__card-inner--year" is="md-month-picker-year" @onVirtualScroll="${this.handleMonthPickerYearVirtualScroll}">
                <div class="md-month-picker__list">
                    ${this.years.map(data=>html`
                        <div 
                            .data="${data}"
                            @click="${this.handleMonthPickerItemYearClick}"
                            class="${classMap({
                                "md-month-picker__list-item":true,
                                "md-month-picker__list-item--activated":data.activated,
                                "md-month-picker__list-item--selected":data.selected,
                                "md-month-picker__list-item--disabled":data.disabled,
                                "md-month-picker__list-item--error":data.error,
                            })}"
                        >
                            <md-icon class="md-month-picker__list-icon">${data.selected?'check':''}</md-icon>
                            <div class="md-month-picker__list-label">${data.label}</div>
                        </div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-month-picker__card-footer"> -->
                <!-- <md-button class="md-month-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-month-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderCardItemMonths() {
        // prettier-ignore
        return html`
            <div class="md-month-picker__card-inner" is="md-month-picker-month" @onVirtualScroll="${this.handleMonthPickerMonthVirtualScroll}">
                <div class="md-month-picker__list">
                    ${this.months.map(data=>html`
                        <div 
                            .data="${data}"
                            @click="${this.handleMonthPickerItemMonthClick}"
                            class="${classMap({
                                "md-month-picker__list-item":true,
                                "md-month-picker__list-item--activated":data.activated,
                                "md-month-picker__list-item--selected":data.selected,
                                "md-month-picker__list-item--disabled":data.disabled,
                                "md-month-picker__list-item--error":data.error,
                            })}"
                        >
                            <md-icon class="md-month-picker__list-icon">${data.selected?'check':''}</md-icon>
                            <div class="md-month-picker__list-label">${data.label}</div>
                        </div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-month-picker__card-footer"> -->
                <!-- <md-button class="md-month-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-month-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderInner() {
        // prettier-ignore
        return html`
            <div class="md-month-picker__card">
                <div class="md-month-picker__card-item">${this.renderCardItemYears()}</div>
                <div class="md-month-picker__card-item">${this.renderCardItemMonths()}</div>
            </div>
        `
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
                <div class="md-month-picker__inner">${this.renderInner()}</div>
                <div class="md-month-picker__footer">
                    <md-button @click="${this.handleMonthPickerButtonCancelClick}" class="md-month-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleMonthPickerButtonOkClick}" class="md-month-picker__button" label="Ok"></md-button>
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

        this.requestUpdate();
    }

    updated(changedProperties) {
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-month-picker-index", this.index);
        }
    }

    async handleMonthPickerYearVirtualScroll(event) {
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

        this.emit("onMonthPickerListYearVirtualScroll", event);
    }

    handleMonthPickerMonthVirtualScroll(event) {
        const {
            start,
            end,
            options: { total },
        } = event.detail;

        this.emit("onMonthPickerListMonthVirtualScroll", event);
    }

    handleMonthPickerItemYearClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.requestUpdate();

        this.index = 1;

        this.emit("onMonthPickerItemYearClick", event);
    }

    handleMonthPickerItemMonthClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());

        this.requestUpdate();

        this.emit("onMonthPickerItemMonthClick", event);
    }

    handleMonthPickerLabelClick(event) {
        if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 0) {
            this.index = 1;
        }

        // this.requestUpdate();

        this.emit("onMonthPickerLabelClick", event);
    }

    handleMonthPickerActionBeforeClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        }
        

        this.requestUpdate();

        this.emit("onMonthPickerActionBeforeClick", event);
    }

    handleMonthPickerActionNextClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        }

        this.requestUpdate();

        this.emit("onMonthPickerActionNextClick", event);
    }

    handleMonthPickerButtonCancelClick(event) {
        const date = new Date();

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());

        this.value.setFullYear(date.getFullYear());
        this.value.setMonth(date.getMonth());

        this.requestUpdate();

        this.index = 1;

        this.emit("onMonthPickerButtonCancelClick", event);
    }

    handleMonthPickerButtonOkClick(event) {
        this.value.setFullYear(this.selected.getFullYear());
        this.value.setMonth(this.selected.getMonth());

        this.requestUpdate();

        this.index = 1;

        this.emit("onMonthPickerButtonOkClick", event);
    }
}

customElements.define("md-month-picker", MDMonthPicker);

export { MDMonthPicker };
