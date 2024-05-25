import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { Scrolling } from "../scrolling/scrolling";
import { Popper } from "../popper/popper";

class MDDatetimePickerYear extends HTMLDivElement {
    connectedCallback() {
        const total = new Date().getFullYear() * 2;
        const itemHeight = 48;
        const viewportHeight = 32 * 7 + 4 * 6;

        const scrollbar = this.querySelector(".md-datetime-picker__scrollbar");
        const container = this.querySelector(".md-datetime-picker__list");

        this.scrolling = new Scrolling(this, {
            total,
            itemHeight,
            scrollbar,
            container,
        });

        this.scrollTop = itemHeight * (total / 2) - itemHeight * Math.floor(viewportHeight / itemHeight / 2);
    }
    disconnectedCallback() {
        this.scrolling.destroy();
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
            value: { type: String },
            index: { type: Number },
            ui: { type: String },
            open: { type: Boolean },
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
                selected: year == this.currentValue.getFullYear() && month == this.currentValue.getMonth(),
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
                    selected: year == this.currentValue.getFullYear() && month == this.currentValue.getMonth() && day == this.currentValue.getDate(),
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

            return {
                activated: hour == this.current.getHours(),
                selected: hour == this.currentValue.getHours(),
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

            return {
                activated: minute == this.current.getMinutes(),
                selected: minute == this.currentValue.getMinutes(),
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
        this.monthDTF = new Intl.DateTimeFormat(undefined, { month: "long" });
        this.weekdayDTF = new Intl.DateTimeFormat(undefined, { weekday: "narrow" });
        this.dayDTF = new Intl.DateTimeFormat(undefined, { day: "numeric" });
        this.hourDTF = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false });
        this.minuteDTF = new Intl.DateTimeFormat(undefined, { minute: "numeric" });

        this.labelDTF = new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long" });
        this.label2DTF = new Intl.DateTimeFormat(undefined, { hour: "2-digit", hour12: false, minute: "2-digit" });

        this.currentValue = new Date();
        this.selected = new Date();
        this.current = new Date();

        this.index = 2;
    }

    get cardInnerYear() {
        return this.querySelector(".md-datetime-picker__card-inner--year");
    }

    renderCardItemYears() {
        return html`
            <div class="md-datetime-picker__card-inner md-datetime-picker__card-inner--year" is="md-datetime-picker-year" @onScrolling="${this.handleDatetimePickerYearScrolling}">
                <div class="md-datetime-picker__scrollbar"></div>
                <div class="md-datetime-picker__list">
                    ${this.years.map(
                        (data) => html`
                            <div
                                .data="${data}"
                                @click="${this.handleDatetimePickerItemYearClick}"
                                class="${classMap({
                                    "md-datetime-picker__list-item": true,
                                    "md-datetime-picker__list-item--activated": data.activated,
                                    "md-datetime-picker__list-item--selected": data.selected,
                                    "md-datetime-picker__list-item--disabled": data.disabled,
                                    "md-datetime-picker__list-item--error": data.error,
                                })}"
                            >
                                <md-icon class="md-datetime-picker__list-icon">${data.selected ? "check" : ""}</md-icon>
                                <div class="md-datetime-picker__list-label">${data.label}</div>
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    renderCardItemMonths() {
        return html`
            <div class="md-datetime-picker__card-inner" is="md-datetime-picker-month" @onScrolling="${this.handleDatetimePickerMonthScrolling}">
                <div class="md-datetime-picker__list">
                    ${this.months.map(
                        (data) => html`
                            <div
                                .data="${data}"
                                @click="${this.handleDatetimePickerItemMonthClick}"
                                class="${classMap({
                                    "md-datetime-picker__list-item": true,
                                    "md-datetime-picker__list-item--activated": data.activated,
                                    "md-datetime-picker__list-item--selected": data.selected,
                                    "md-datetime-picker__list-item--disabled": data.disabled,
                                    "md-datetime-picker__list-item--error": data.error,
                                })}"
                            >
                                <md-icon class="md-datetime-picker__list-icon">${data.selected ? "check" : ""}</md-icon>
                                <div class="md-datetime-picker__list-label">${data.label}</div>
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    renderCardItemDays() {
        return html`
            <div class="md-datetime-picker__card-inner">
                <div class="md-datetime-picker__table">
                    <div class="md-datetime-picker__table-row md-datetime-picker__table-row--header">
                        ${this.weekdays.map(
                            (data) => html`
                                <div
                                    class="${classMap({
                                        "md-datetime-picker__table-item": true,
                                        "md-datetime-picker__table-item--activated": data.activated,
                                        "md-datetime-picker__table-item--selected": data.selected,
                                        "md-datetime-picker__table-item--disabled": data.disabled,
                                        "md-datetime-picker__table-item--error": data.error,
                                    })}"
                                >
                                    ${data.label}
                                </div>
                            `
                        )}
                    </div>
                    ${this.days.map(
                        (row) => html`
                            <div class="md-datetime-picker__table-row md-datetime-picker__table-row--body">
                                ${row.map(
                                    (data) => html`
                                        <div
                                            .data="${data}"
                                            @click="${this.handleDatetimePickerItemDayClick}"
                                            class="${classMap({
                                                "md-datetime-picker__table-item": true,
                                                "md-datetime-picker__table-item--activated": data.activated,
                                                "md-datetime-picker__table-item--selected": data.selected,
                                                "md-datetime-picker__table-item--disabled": data.disabled,
                                                "md-datetime-picker__table-item--error": data.error,
                                            })}"
                                        >
                                            ${data.label}
                                        </div>
                                    `
                                )}
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    renderCardItemHours() {
        return html`
            <div class="md-datetime-picker__card-inner">
                <div class="md-datetime-picker__absolute md-datetime-picker__absolute--hour">
                    ${this.hours.map(
                        (data) => html`
                            <div
                                .data="${data}"
                                @click="${this.handleDatetimePickerItemHourClick}"
                                class="${classMap({
                                    "md-datetime-picker__absolute-item": true,
                                    "md-datetime-picker__absolute-item--activated": data.activated,
                                    "md-datetime-picker__absolute-item--selected": data.selected,
                                    "md-datetime-picker__absolute-item--disabled": data.disabled,
                                    "md-datetime-picker__absolute-item--error": data.error,
                                })}"
                            >
                                ${data.label}
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    renderCardItemMinutes() {
        return html`
            <div class="md-datetime-picker__card-inner">
                <div class="md-datetime-picker__absolute md-datetime-picker__absolute--minute">
                    ${this.minutes.map(
                        (data) => html`
                            <div
                                .data="${data}"
                                @click="${this.handleDatetimePickerItemMinuteClick}"
                                class="${classMap({
                                    "md-datetime-picker__absolute-item": true,
                                    "md-datetime-picker__absolute-item--activated": data.activated,
                                    "md-datetime-picker__absolute-item--selected": data.selected,
                                    "md-datetime-picker__absolute-item--disabled": data.disabled,
                                    "md-datetime-picker__absolute-item--error": data.error,
                                    "md-datetime-picker__absolute-item--small": data.small,
                                })}"
                            >
                                ${data.label}
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    renderInner() {
        return html`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderCardItemYears()}</div>
                <div class="md-datetime-picker__card-item">${this.renderCardItemMonths()}</div>
                <div class="md-datetime-picker__card-item">${this.renderCardItemDays()}</div>
                <div class="md-datetime-picker__card-item">${this.renderCardItemHours()}</div>
                <div class="md-datetime-picker__card-item">${this.renderCardItemMinutes()}</div>
            </div>
        `;
    }

    render() {
        return html`
            <div class="md-datetime-picker__header">
                <md-button @click="${this.handleDatetimePickerLabelClick}" class="md-datetime-picker__label" .label="${this.label}"></md-button>
                ${this.label2 ? html` <md-button @click="${this.handleDatetimePickerLabel2Click}" class="md-datetime-picker__label" .label="${this.label2}"></md-button> ` : nothing}
                ${this.index !== 0
                    ? html`
                          <div class="md-datetime-picker__actions">
                              <md-icon-button @click="${this.handleDatetimePickerActionBeforeClick}" class="md-datetime-picker__action" icon="navigate_before"></md-icon-button>
                              <md-icon-button @click="${this.handleDatetimePickerActionNextClick}" class="md-datetime-picker__action" icon="navigate_next"></md-icon-button>
                          </div>
                      `
                    : nothing}
            </div>
            <div class="md-datetime-picker__body">
                <div class="md-datetime-picker__inner">${this.renderInner()}</div>
                <div class="md-datetime-picker__footer">
                    <md-button @click="${this.handleDatetimePickerButtonCancelClick}" class="md-datetime-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleDatetimePickerButtonOkClick}" class="md-datetime-picker__button" label="Ok"></md-button>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-datetime-picker");
        this.classList.add("md-datetime-picker--dialog");

        this.scrimElement = document.createElement("div");
        this.scrimElement.classList.add("md-datetime-picker__scrim");
        this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        this.handleDatetimePickerScrimClick = this.handleDatetimePickerScrimClick.bind(this);
        this.scrimElement.addEventListener("click", this.handleDatetimePickerScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-datetime-picker");
        this.classList.remove("md-datetime-picker--dialog");

        this.scrimElement?.removeEventListener("click", this.handleDatetimePickerScrimClick);
        this.scrimElement?.remove();
    }

    async firstUpdated(changedProperties) {}

    async updated(changedProperties) {
        if (changedProperties.has("value")) {
            await this.updateComplete;

            const value = new Date(this.value);

            this.currentValue.setFullYear(value.getFullYear());
            this.currentValue.setMonth(value.getMonth());
            this.currentValue.setDate(value.getDate());
            this.currentValue.setHours(value.getHours());
            this.currentValue.setMinutes(value.getMinutes());

            this.selected.setFullYear(value.getFullYear());
            this.selected.setMonth(value.getMonth());
            this.selected.setDate(value.getDate());
            this.selected.setHours(value.getHours());
            this.selected.setMinutes(value.getMinutes());

            this.requestUpdate();
        }
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-datetime-picker-index", this.index);
        }
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-datetime-picker--open");

                // if (
                //     this.ui &&
                //     this.ui.split(" ").some((ui) =>
                //         [
                //             //
                //             "dialog",
                //             "modal",
                //         ].includes(ui)
                //     )
                // ) {
                    this.scrimElement.classList.add("md-datetime-picker--open");
                // }
            } else {
                this.classList.remove("md-datetime-picker--open");
                this.scrimElement.classList.remove("md-datetime-picker--open");
            }
        }
    }

    show(button,options={}) {
        this.open = true;

        this.popper=new Popper(this,{
            button,
            placements: [
                'bottom-start',
                'bottom-end',
                'bottom',
                'top-start',
                'top-end',
                'top',
                'center',
            ],
            ...options
        })
        this.popper.setPlacement()
    }
    
    close() {
        this.open = false;

        this.popper?.destroy()
    }

    handleDatetimePickerScrimClick(event) {
        this.close();

        this.emit("onDatetimePickerScrimClick", event);
    }


    async handleDatetimePickerYearScrolling(event) {
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
                selected: year == this.currentValue.getFullYear(),
                disabled: false,
                error: false,
                label: this.yearDTF.format(date),
                year,
            };
        });

        this.requestUpdate();

        this.emit("onDatetimePickerListYearScrolling", event);
    }

    handleDatetimePickerMonthScrolling(event) {
        const {
            start,
            end,
            options: { total },
        } = event.detail;

        this.emit("onDatetimePickerListMonthScrolling", event);
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

        this.currentValue.setFullYear(this.selected.getFullYear());
        this.currentValue.setMonth(this.selected.getMonth());
        this.currentValue.setDate(this.selected.getDate());
        this.currentValue.setHours(this.selected.getHours());
        this.currentValue.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.emit("onDatetimePickerItemDayClick", event);
    }

    handleDatetimePickerItemHourClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(data.hour);

        this.currentValue.setFullYear(this.selected.getFullYear());
        this.currentValue.setMonth(this.selected.getMonth());
        this.currentValue.setDate(this.selected.getDate());
        this.currentValue.setHours(this.selected.getHours());
        this.currentValue.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.index = 4;

        this.emit("onDatetimePickerItemHourClick", event);
    }

    handleDatetimePickerItemMinuteClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(this.selected.getHours());
        this.selected.setMinutes(data.minute);

        this.currentValue.setFullYear(this.selected.getFullYear());
        this.currentValue.setMonth(this.selected.getMonth());
        this.currentValue.setDate(this.selected.getDate());
        this.currentValue.setHours(this.selected.getHours());
        this.currentValue.setMinutes(this.selected.getMinutes());

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
            this.currentValue.setFullYear(this.selected.getFullYear());
            this.currentValue.setMonth(this.selected.getMonth());
            this.currentValue.setDate(this.selected.getDate());
            this.currentValue.setHours(this.selected.getHours());
            this.currentValue.setMinutes(this.selected.getMinutes());
        } else if (this.index == 4) {
            this.selected.setMinutes(this.selected.getMinutes() - 1);
            this.currentValue.setFullYear(this.selected.getFullYear());
            this.currentValue.setMonth(this.selected.getMonth());
            this.currentValue.setDate(this.selected.getDate());
            this.currentValue.setHours(this.selected.getHours());
            this.currentValue.setMinutes(this.selected.getMinutes());
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
            this.currentValue.setFullYear(this.selected.getFullYear());
            this.currentValue.setMonth(this.selected.getMonth());
            this.currentValue.setDate(this.selected.getDate());
            this.currentValue.setHours(this.selected.getHours());
            this.currentValue.setMinutes(this.selected.getMinutes());
        } else if (this.index == 4) {
            this.selected.setMinutes(this.selected.getMinutes() + 1);
            this.currentValue.setFullYear(this.selected.getFullYear());
            this.currentValue.setMonth(this.selected.getMonth());
            this.currentValue.setDate(this.selected.getDate());
            this.currentValue.setHours(this.selected.getHours());
            this.currentValue.setMinutes(this.selected.getMinutes());
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

        this.currentValue.setFullYear(date.getFullYear());
        this.currentValue.setMonth(date.getMonth());
        this.currentValue.setDate(date.getDate());
        this.currentValue.setHours(date.getHours());
        this.currentValue.setMinutes(date.getMinutes());

        this.requestUpdate();

        this.index = 2;

        this.emit("onDatetimePickerButtonCancelClick", event);
    }

    handleDatetimePickerButtonOkClick(event) {
        this.currentValue.setFullYear(this.selected.getFullYear());
        this.currentValue.setMonth(this.selected.getMonth());
        this.currentValue.setDate(this.selected.getDate());
        this.currentValue.setHours(this.selected.getHours());
        this.currentValue.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.index = 2;

        this.emit("onDatetimePickerButtonOkClick", event);
    }
}

customElements.define("md-datetime-picker", MDDatetimePicker);

export { MDDatetimePicker };
