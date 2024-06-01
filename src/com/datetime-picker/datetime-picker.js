import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDPopperModule } from "../popper/popper";

class MDDatetimePickerComponent extends MDElement {
    static get properties() {
        return {
            ui: { type: String },
            open: { type: Boolean, reflect: true },
            index: { type: Number },
            value: { type: String },
        };
    }

    get first() {
        return new Date(
            this.selected.getFullYear(),
            this.selected.getMonth(),
        ).getDay();
    }
    get last() {}

    get years() {
        return Array.from({ length: 10 }, (v, k) => {
            const date = new Date(
                this.selected.getFullYear() + (k - 10 / 2),
                0,
            );
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
                activated:
                    year == this.date.getFullYear() &&
                    month == this.date.getMonth(),
                selected:
                    year == this.selected.getFullYear() &&
                    month == this.selected.getMonth(),
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
                    const date = new Date(
                        this.selected.getFullYear(),
                        this.selected.getMonth(),
                        k * 7 + k2 + 1 - this.first,
                    );
                    const year = date.getFullYear();
                    const month = date.getMonth();
                    const day = date.getDate();
                    return {
                        error: date.getDay() === 0,
                        year,
                        month,
                        day,
                        activated:
                            year == this.date.getFullYear() &&
                            month == this.date.getMonth() &&
                            day == this.date.getDate(),
                        selected:
                            year == this.selected.getFullYear() &&
                            month == this.selected.getMonth() &&
                            day == this.selected.getDate(),
                        label: this.dayFormat(date),
                    };
                }),
            };
        });
    }
    get hours() {
        return Array.from({ length: 24 }, (v, k) => {
            const date = new Date(
                this.selected.getFullYear(),
                this.selected.getMonth(),
                this.selected.getDate(),
                k,
            );
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            return {
                year,
                month,
                day,
                hour,
                activated:
                    year == this.date.getFullYear() &&
                    month == this.date.getMonth() &&
                    day == this.date.getDate() &&
                    hour == this.date.getHours(),
                selected:
                    year == this.selected.getFullYear() &&
                    month == this.selected.getMonth() &&
                    day == this.selected.getDate() &&
                    hour == this.selected.getHours(),
                label: this.hourFormat(date),
            };
        });
    }
    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            const date = new Date(
                this.selected.getFullYear(),
                this.selected.getMonth(),
                this.selected.getDate(),
                this.selected.getHours(),
                k,
            );
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
                activated:
                    year == this.date.getFullYear() &&
                    month == this.date.getMonth() &&
                    day == this.date.getDate() &&
                    hour == this.date.getHours() &&
                    minute == this.date.getMinutes(),
                selected:
                    year == this.selected.getFullYear() &&
                    month == this.selected.getMonth() &&
                    day == this.selected.getDate() &&
                    hour == this.selected.getHours() &&
                    minute == this.selected.getMinutes(),
                label: k % 5 == 0 ? this.minuteFormat(date) : "",
            };
        });
    }

    get label() {
        if (this.index == 0) {
            return [
                this.years[0].year,
                this.years[this.years.length - 1].year,
            ].join("-");
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

    /* prettier-ignore */
    renderYears(){
        return html`
            <div class="md-datetime-picker__list">
                ${this.years.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-datetime-picker__list-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleDatetimePickerYearClick}"
                    >
                        <md-icon class="md-datetime-picker__list-icon">${item.selected?'check':nothing}</md-icon>
                        <div class="md-datetime-picker__list-label">${item.label}</div>
                    </div>
                `)}
            </div>
        `
    }

    /* prettier-ignore */
    renderMonths(){
        return html`
            <div class="md-datetime-picker__list">
                ${this.months.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-datetime-picker__list-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleDatetimePickerMonthClick}"
                    >
                        <md-icon class="md-datetime-picker__list-icon">${item.selected?'check':nothing}</md-icon>
                        <div class="md-datetime-picker__list-label">${item.label}</div>
                    </div>
                `)}
            </div>
        `
    }

    /* prettier-ignore */
    renderDays(){
        return html`
            <div class="md-datetime-picker__table">
                <div class="md-datetime-picker__table-header">
                    <div class="md-datetime-picker__table-row">
                        ${this.weekdays.map(item=>html`
                            <div 
                                class="md-datetime-picker__table-cell"
                                ?error="${item.error}"
                            >${item.label}</div>
                        `)}
                    </div>
                </div>
                <div class="md-datetime-picker__table-body">
                    ${this.days.map(item=>html`
                        <div class="md-datetime-picker__table-row">
                            ${item.children.map(item=>html`
                                <div 
                                    .data="${item}"
                                    class="md-datetime-picker__table-cell"
                                    ?activated="${item.activated}"
                                    ?selected="${item.selected}"
                                    ?error="${item.error}"
                                    @click="${this.handleDatetimePickerDayClick}"
                                >${item.label}</div>
                            `)}
                        </div>
                    `)}
                </div>
            </div>
        `
    }

    /* prettier-ignore */
    renderHours(){
        return html`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--hours">
                ${this.hours.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-datetime-picker__absolute-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleDatetimePickerHourClick}"
                    >${item.label}</div>
                `)}
            </div>
        `
    }

    /* prettier-ignore */
    renderMinutes(){
        return html`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--minutes">
                ${this.minutes.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-datetime-picker__absolute-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleDatetimePickerMinuteClick}"
                    >${item.label}</div>
                `)}
            </div>
        `
    }

    /* prettier-ignore */
    renderCard(){
        return html`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYears()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonths()}</div>
                <div class="md-datetime-picker__card-item">${this.renderDays()}</div>
                <div class="md-datetime-picker__card-item">${this.renderHours()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMinutes()}</div>
            </div>
        `
    }

    /* prettier-ignore */

    render() {
        return html`
                <div class="md-datetime-picker__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-datetime-picker__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleDatetimePickerActionClick}" class="md-datetime-picker__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    <div class="md-datetime-picker__label">
                        ${this.index<=2?html`
                            <div @click="${this.handleDatetimePickerLabelPrimaryClick}" class="md-datetime-picker__label-primary">${this.label}</div>
                        `:nothing}
                        ${this.index>=2?html`
                            <div @click="${this.handleDatetimePickerLabelSecondaryClick}" class="md-datetime-picker__label-secondary">${this.subLabel}</div>
                        `:nothing}
                    </div>
                    <div class="md-datetime-picker__actions">
                        <md-icon-button @click="${this.handleDatetimePickerActionNavigateBeforeClick}" class="md-datetime-picker__action" .icon="${"navigate_before"}"></md-icon-button>
                        <md-icon-button @click="${this.handleDatetimePickerActionNavigateNextClick}" class="md-datetime-picker__action" .icon="${"navigate_next"}"></md-icon-button>
                    </div>
                </div>
            <div class="md-datetime-picker__body">
                <div class="md-datetime-picker__inner">${this.renderCard()}</div>
                <div class="md-datetime-picker__footer">
                    <md-button @click="${this.handleDatetimePickerButtonCancelClick}" class="md-datetime-picker__button" .label="${"Cancel"}"></md-button>
                    <md-button @click="${this.handleDatetimePickerButtonOkClick}" class="md-datetime-picker__button" .label="${"Ok"}"></md-button>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-picker");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-datetime-picker__scrim");
        this.handleDatetimePickerScrimClick =
            this.handleDatetimePickerScrimClick.bind(this);
        this.scrim.addEventListener(
            "click",
            this.handleDatetimePickerScrimClick,
        );
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-datetime-picker");
        await this.updateComplete;
        this.scrim.removeEventListener(
            "click",
            this.handleDatetimePickerScrimClick,
        );
        this.scrim.remove();
    }

    async firstUpdated() {
        await this.updateComplete;

        this.updateFromValue();
    }

    async updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["full-screen"].forEach((ui) => {
                this.classList.remove("md-datetime-picker--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-datetime-picker--" + ui);
                });
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                // if (!this.ui?.includes("full-screen")) {
                // }
                this.scrim.setAttribute("open", "");
                this.emit("onDatetimePickerShow", this);
            } else {
                this.scrim.removeAttribute("open", "");
                this.emit("onDatetimePickerClose", this);
            }
        }

        if (changedProperties.has("value")) {
            if (this.value) {
                await this.updateComplete;

                this.updateFromValue();

                this.emit("onDatetimePickerChange", { detail: this });
            }
        }

        this.style.setProperty("--md-datetime-picker-index", this.index);
    }

    updateFromValue() {
        // console.log(this.value)
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
            placements: [
                "bottom-start",
                "bottom-end",
                "bottom",
                "top-start",
                "top-end",
                "top",
            ],
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

    handleDatetimePickerScrimClick(event) {
        this.close();

        this.emit("onDatetimePickerScrimClick", event);
    }

    handleDatetimePickerLabelPrimaryClick(event) {
        if (this.index == 0) {
            this.index = 2;
        } else if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 2) {
            this.index = 1;
        }

        this.emit("onDatetimePickerLabelPrimaryClick", event);
    }

    handleDatetimePickerLabelSecondaryClick(event) {
        if (this.index == 2) {
            this.index = 3;
        } else if (this.index == 3) {
            this.index = 4;
        } else if (this.index == 4) {
            this.index = 2;
        }

        this.emit("onDatetimePickerLabelSecondaryClick", event);
    }

    handleDatetimePickerActionNavigateBeforeClick(event) {
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

        this.emit("onDatetimePickerActionNavigateBeforeClick", event);
    }

    handleDatetimePickerActionNavigateNextClick(event) {
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

        this.emit("onDatetimePickerActionNavigateNextClick", event);
    }

    handleDatetimePickerYearClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.index = 1;

        this.emit("onDatetimePickerYearClick", event);
        this.emit("onDatetimePickerChange", event);
    }
    handleDatetimePickerMonthClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.index = 2;

        this.emit("onDatetimePickerMonthClick", event);
        this.emit("onDatetimePickerChange", event);
    }
    handleDatetimePickerDayClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.requestUpdate();

        this.emit("onDatetimePickerDayClick", event);
        this.emit("onDatetimePickerChange", event);
    }
    handleDatetimePickerHourClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);

        this.index = 4;

        this.emit("onDatetimePickerHourClick", event);
        this.emit("onDatetimePickerChange", event);
    }
    handleDatetimePickerMinuteClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);
        this.selected.setMinutes(data.minute);

        this.index = 2;

        this.emit("onDatetimePickerMinuteClick", event);
        this.emit("onDatetimePickerChange", event);
    }
    handleDatetimePickerButtonCancelClick(event) {
        this.emit("onDatetimePickerButtonCancelClick", event);
        this.emit("onDatetimePickerChange", event);
    }
    handleDatetimePickerButtonOkClick(event) {
        this.emit("onDatetimePickerButtonOkClick", event);
        this.emit("onDatetimePickerChange", event);
    }
}

customElements.define("md-datetime-picker", MDDatetimePickerComponent);

export { MDDatetimePickerComponent };
