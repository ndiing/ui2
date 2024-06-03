import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDPopperModule } from "../popper/popper";

class MDDatePickerComponent extends MDElement {
    static get properties() {
        return {
            ui: { type: String },
            open: { type: Boolean, reflect: true },
            index: { type: Number },
            value: { type: String },
        };
    }

    get first() {
        return new Date(this.selected.getFullYear(), this.selected.getMonth()).getDay();
    }

    get last() {}

    get years() {
        return Array.from({ length: 10 }, (v, k) => {
            const date = new Date(this.selected.getFullYear() + (k - 10 / 2), 0);
            const year = date.getFullYear();
            return {
                year,
                activated: year == this.date.getFullYear(),
                selected: year == this.selected.getFullYear(),
                label: this.yearFormat(date),
            };
        });
    }

    get months() {
        return Array.from({ length: 12 }, (v, k) => {
            const date = new Date(this.selected.getFullYear(), k);
            const year = date.getFullYear();
            const month = date.getMonth();
            return {
                year,
                month,
                activated: year == this.date.getFullYear() && month == this.date.getMonth(),
                selected: year == this.selected.getFullYear() && month == this.selected.getMonth(),
                label: this.monthFormat(date),
            };
        });
    }

    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k);
            return {
                error: date.getDay() === 0,
                label: this.weekdayFormat(date),
            };
        });
    }

    get days() {
        return Array.from({ length: 6 }, (v, k) => {
            return {
                children: Array.from({ length: 7 }, (v2, k2) => {
                    const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), k * 7 + k2 + 1 - this.first);
                    const year = date.getFullYear();
                    const month = date.getMonth();
                    const day = date.getDate();
                    return {
                        error: date.getDay() === 0,
                        year,
                        month,
                        day,
                        activated: year == this.date.getFullYear() && month == this.date.getMonth() && day == this.date.getDate(),
                        selected: year == this.selected.getFullYear() && month == this.selected.getMonth() && day == this.selected.getDate(),
                        label: this.dayFormat(date),
                    };
                }),
            };
        });
    }

    get hours() {
        return Array.from({ length: 24 }, (v, k) => {
            const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), this.selected.getDate(), k);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            return {
                year,
                month,
                day,
                hour,
                activated: year == this.date.getFullYear() && month == this.date.getMonth() && day == this.date.getDate() && hour == this.date.getHours(),
                selected: year == this.selected.getFullYear() && month == this.selected.getMonth() && day == this.selected.getDate() && hour == this.selected.getHours(),
                label: this.hourFormat(date),
            };
        });
    }

    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), this.selected.getDate(), this.selected.getHours(), k);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const minute = date.getMinutes();
            return {
                year,
                month,
                day,
                hour,
                minute,
                activated: year == this.date.getFullYear() && month == this.date.getMonth() && day == this.date.getDate() && hour == this.date.getHours() && minute == this.date.getMinutes(),
                selected: year == this.selected.getFullYear() && month == this.selected.getMonth() && day == this.selected.getDate() && hour == this.selected.getHours() && minute == this.selected.getMinutes(),
                label: k % 5 == 0 ? this.minuteFormat(date) : "",
            };
        });
    }

    get label() {
        if (this.index == 0) {
            return [this.years[0].year, this.years[this.years.length - 1].year].join("-");
        }
        if (this.index == 1) {
            return this.yearFormat(this.selected);
        }
        if (this.index == 2) {
            return this.dateFormat(this.selected);
        }
    }

    get subLabel() {
        return this.timeFormat(this.selected);
    }

    constructor() {
        super();

        this.yearFormat = new Intl.DateTimeFormat(undefined, {
            year: "numeric",
        }).format;
        this.monthFormat = new Intl.DateTimeFormat(undefined, {
            month: "long",
        }).format;
        this.weekdayFormat = new Intl.DateTimeFormat(undefined, {
            weekday: "narrow",
        }).format;
        this.dayFormat = new Intl.DateTimeFormat(undefined, {
            day: "numeric",
        }).format;
        this.hourFormat = new Intl.DateTimeFormat(undefined, {
            hour: "numeric",
            hour12: false,
        }).format;
        this.minuteFormat = new Intl.DateTimeFormat(undefined, {
            minute: "numeric",
            hour12: false,
        }).format;
        this.dateFormat = new Intl.DateTimeFormat(undefined, {
            year: "numeric",
            month: "long",
        }).format;
        this.timeFormat = new Intl.DateTimeFormat(undefined, {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
        }).format;

        this.date = new Date();
        this.value = new Date();

        this.selected = new Date();

        this.index = 2;
    }

    renderYears() {
        /* prettier-ignore */
        return html`
            <div class="md-date-picker__list">
                ${this.years.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-date-picker__list-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleDatePickerYearClick}"
                    >
                        <md-icon class="md-date-picker__list-icon">${item.selected?'check':nothing}</md-icon>
                        <div class="md-date-picker__list-label">${item.label}</div>
                    </div>
                `)}
            </div>
        `
    }

    renderMonths() {
        /* prettier-ignore */
        return html`
            <div class="md-date-picker__list">
                ${this.months.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-date-picker__list-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleDatePickerMonthClick}"
                    >
                        <md-icon class="md-date-picker__list-icon">${item.selected?'check':nothing}</md-icon>
                        <div class="md-date-picker__list-label">${item.label}</div>
                    </div>
                `)}
            </div>
        `
    }

    renderDays() {
        /* prettier-ignore */
        return html`
            <div class="md-date-picker__table">
                <div class="md-date-picker__table-header">
                    <div class="md-date-picker__table-row">
                        ${this.weekdays.map(item=>html`
                            <div 
                                class="md-date-picker__table-cell"
                                ?error="${item.error}"
                            >${item.label}</div>
                        `)}
                    </div>
                </div>
                <div class="md-date-picker__table-body">
                    ${this.days.map(item=>html`
                        <div class="md-date-picker__table-row">
                            ${item.children.map(item=>html`
                                <div 
                                    .data="${item}"
                                    class="md-date-picker__table-cell"
                                    ?activated="${item.activated}"
                                    ?selected="${item.selected}"
                                    ?error="${item.error}"
                                    @click="${this.handleDatePickerDayClick}"
                                >${item.label}</div>
                            `)}
                        </div>
                    `)}
                </div>
            </div>
        `
    }

    renderHours() {
        /* prettier-ignore */
        return html`
            <div class="md-date-picker__absolute md-date-picker__absolute--hours">
                ${this.hours.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-date-picker__absolute-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleDatePickerHourClick}"
                    >${item.label}</div>
                `)}
            </div>
        `
    }

    renderMinutes() {
        /* prettier-ignore */
        return html`
            <div class="md-date-picker__absolute md-date-picker__absolute--minutes">
                ${this.minutes.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-date-picker__absolute-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleDatePickerMinuteClick}"
                    >${item.label}</div>
                `)}
            </div>
        `
    }

    renderCard() {
        /* prettier-ignore */
        return html`
            <div class="md-date-picker__card">
                <div class="md-date-picker__card-item">${this.renderYears()}</div>
                <div class="md-date-picker__card-item">${this.renderMonths()}</div>
                <div class="md-date-picker__card-item">${this.renderDays()}</div>
            </div>
        `
    }

    render() {
        /* prettier-ignore */
        return html`
                <div class="md-date-picker__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-date-picker__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleDatePickerActionClick}" class="md-date-picker__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    <div class="md-date-picker__label">
                        ${this.index<=2?html`
                            <div @click="${this.handleDatePickerLabelPrimaryClick}" class="md-date-picker__label-primary">${this.label}</div>
                        `:nothing}
                    </div>
                    <div class="md-date-picker__actions">
                        <md-icon-button @click="${this.handleDatePickerActionNavigateBeforeClick}" class="md-date-picker__action" .icon="${"navigate_before"}"></md-icon-button>
                        <md-icon-button @click="${this.handleDatePickerActionNavigateNextClick}" class="md-date-picker__action" .icon="${"navigate_next"}"></md-icon-button>
                    </div>
                </div>
            <div class="md-date-picker__body">
                <div class="md-date-picker__inner">${this.renderCard()}</div>
                <div class="md-date-picker__footer">
                    <md-button @click="${this.handleDatePickerButtonCancelClick}" class="md-date-picker__button" .label="${"Cancel"}"></md-button>
                    <md-button @click="${this.handleDatePickerButtonOkClick}" class="md-date-picker__button" .label="${"Ok"}"></md-button>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-picker");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-date-picker__scrim");
        this.handleDatePickerScrimClick = this.handleDatePickerScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handleDatePickerScrimClick);
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-date-picker");
        await this.updateComplete;
        this.scrim.removeEventListener("click", this.handleDatePickerScrimClick);
        this.scrim.remove();
    }

    async firstUpdated() {
        await this.updateComplete;

        this.updateFromValue();
    }

    async updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["full-screen"].forEach((ui) => {
                this.classList.remove("md-date-picker--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-date-picker--" + ui);
                });
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                if (!this.ui?.includes("full-screen")) {
                    this.scrim.setAttribute("open", "");
                }
            } else {
                this.scrim.removeAttribute("open", "");
            }
        }

        if (changedProperties.has("value")) {
            if (this.value) {
                await this.updateComplete;

                this.updateFromValue();

                this.emit("onDatePickerChange", { detail: this });
            }
        }

        this.style.setProperty("--md-date-picker-index", this.index);
    }

    updateFromValue() {
        const date = new Date(this.value);

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());

        this.requestUpdate();
    }

    show(button, options) {
        this.open = true;
        this.popper = new MDPopperModule(this, {
            button,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top"],
            ...options,
        });
        this.popper.set();
    }

    close() {
        this.open = false;
        this.popper.destroy();
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleDatePickerScrimClick(event) {
        this.close();

        this.emit("onDatePickerScrimClick", event);
    }

    handleDatePickerLabelPrimaryClick(event) {
        if (this.index == 0) {
            this.index = 2;
        } else if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 2) {
            this.index = 1;
        }

        this.emit("onDatePickerLabelPrimaryClick", event);
    }

    handleDatePickerLabelSecondaryClick(event) {
        if (this.index == 2) {
            this.index = 3;
        } else if (this.index == 3) {
            this.index = 4;
        } else if (this.index == 4) {
            this.index = 2;
        }

        this.emit("onDatePickerLabelSecondaryClick", event);
    }

    handleDatePickerActionNavigateBeforeClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 10);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        } else if (this.index == 3) {
            this.selected.setHours(this.selected.getHours() - 1);
        } else if (this.index == 4) {
            this.selected.setMinutes(this.selected.getMinutes() - 1);
        }

        this.requestUpdate();

        this.emit("onDatePickerActionNavigateBeforeClick", event);
    }

    handleDatePickerActionNavigateNextClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 10);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        } else if (this.index == 3) {
            this.selected.setHours(this.selected.getHours() + 1);
        } else if (this.index == 4) {
            this.selected.setMinutes(this.selected.getMinutes() + 1);
        }

        this.requestUpdate();

        this.emit("onDatePickerActionNavigateNextClick", event);
    }

    handleDatePickerYearClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.index = 1;

        this.emit("onDatePickerYearClick", event);
        this.emit("onDatePickerChange", event);
    }

    handleDatePickerMonthClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.index = 2;

        this.emit("onDatePickerMonthClick", event);
        this.emit("onDatePickerChange", event);
    }

    handleDatePickerDayClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.requestUpdate();

        this.emit("onDatePickerDayClick", event);
        this.emit("onDatePickerChange", event);
    }

    handleDatePickerHourClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);

        this.index = 4;

        this.emit("onDatePickerHourClick", event);
        this.emit("onDatePickerChange", event);
    }

    handleDatePickerMinuteClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);
        this.selected.setMinutes(data.minute);

        this.index = 2;

        this.emit("onDatePickerMinuteClick", event);
        this.emit("onDatePickerChange", event);
    }

    handleDatePickerButtonCancelClick(event) {
        this.emit("onDatePickerButtonCancelClick", event);
        this.emit("onDatePickerChange", event);
    }

    handleDatePickerButtonOkClick(event) {
        this.emit("onDatePickerButtonOkClick", event);
        this.emit("onDatePickerChange", event);
    }
}

customElements.define("md-date-picker", MDDatePickerComponent);

export { MDDatePickerComponent };
