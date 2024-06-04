import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDPopperModule } from "../popper/popper";

/**
 *
 * @extends MDElement
 */
/**
 *
 * @class MDWeekPickerComponent
 * @extends MDElement
 */
/**
 *
 * @class MDWeekPickerComponent
 * @extends MDElement
 */
/**
 *
 * @class MDWeekPickerComponent
 * @extends MDElement
 */
class MDWeekPickerComponent extends MDElement {
    /**
     *
     * @property {String} [ui] - full-screen
     * @property {Boolean} [open] -
     * @property {Number} [index] -
     * @property {String} [value] -
     */
    /**
     *
     * @property {String} [ui] - full-screen
     * @property {Boolean} [open] - 
     * @property {Number} [index] - 
     * @property {String} [value] - 
     */
    /**
     *
     * @property {String} [ui] - full-screen
     * @property {Boolean} [open] - 
     * @property {Number} [index] - 
     * @property {String} [value] - 
     */
    /**
     *
     * @property {String} [ui] - full-screen
     * @property {Boolean} [open] - 
     * @property {Number} [index] - 
     * @property {String} [value] - 
     */
    static get properties() {
        return {
            ui: { type: String },
            open: { type: Boolean, reflect: true },
            index: { type: Number },
            value: { type: String },
        };
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    get first() {
        return new Date(this.selected.getFullYear(), this.selected.getMonth()).getDay();
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k + 1);
            return {
                error: date.getDay() === 0,
                label: this.weekdayFormat(date),
            };
        });
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    get days() {
        return Array.from({ length: 6 }, (v, k) => {
            return {
                children: Array.from({ length: 7 }, (v2, k2) => {
                    const date = new Date(this.selected.getFullYear(), this.selected.getMonth(), k * 7 + k2 + 1 - this.first + 1);
                    const year = date.getFullYear();
                    const month = date.getMonth();
                    const day = date.getDate();
                    const week = date.getWeek();
                    return {
                        error: date.getDay() === 0,
                        year,
                        month,
                        day,
                        week,
                        activated: year == this.date.getFullYear() && week == this.date.getWeek(),
                        selected: year == this.selected.getFullYear() && week == this.selected.getWeek(),
                        label: this.dayFormat(date),
                    };
                }),
            };
        });
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    get label() {
        if (this.index == 0) {
            return [this.years[0].year, this.years[this.years.length - 1].year].join("-");
        }
        if (this.index == 1) {
            return this.yearFormat(this.selected);
        }
        if (this.index == 2) {
            return "Week " + [this.selected.getWeek(), this.selected.getFullYear()].join(", ");
        }
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    renderYears() {
        /* prettier-ignore */
        return html`
            <div class="md-week-picker__list">
                ${this.years.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-week-picker__list-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleWeekPickerYearClick}"
                    >
                        <md-icon class="md-week-picker__list-icon">${item.selected?'check':nothing}</md-icon>
                        <div class="md-week-picker__list-label">${item.label}</div>
                    </div>
                `)}
            </div>
        `
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    renderMonths() {
        /* prettier-ignore */
        return html`
            <div class="md-week-picker__list">
                ${this.months.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-week-picker__list-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleWeekPickerMonthClick}"
                    >
                        <md-icon class="md-week-picker__list-icon">${item.selected?'check':nothing}</md-icon>
                        <div class="md-week-picker__list-label">${item.label}</div>
                    </div>
                `)}
            </div>
        `
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    renderDays() {
        /* prettier-ignore */
        return html`
            <div class="md-week-picker__table">
                <div class="md-week-picker__table-header">
                    <div class="md-week-picker__table-row">
                        ${this.weekdays.map(item=>html`
                            <div 
                                class="md-week-picker__table-cell"
                                ?error="${item.error}"
                            >${item.label}</div>
                        `)}
                    </div>
                </div>
                <div class="md-week-picker__table-body">
                    ${this.days.map(item=>html`
                        <div 
                            class="md-week-picker__table-row"
                            ?activated="${!!item.children.find(item=>item.activated)}"
                            ?selected="${!!item.children.find(item=>item.selected)}"
                        >
                            ${item.children.map(item=>html`
                                <div 
                                    .data="${item}"
                                    class="md-week-picker__table-cell"
                                    ?error="${item.error}"
                                    @click="${this.handleWeekPickerDayClick}"
                                >${item.label}</div>
                            `)}
                        </div>
                    `)}
                </div>
            </div>
        `
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    renderCard() {
        /* prettier-ignore */
        return html`
            <div class="md-week-picker__card">
                <div class="md-week-picker__card-item">${this.renderYears()}</div>
                <div class="md-week-picker__card-item">${this.renderMonths()}</div>
                <div class="md-week-picker__card-item">${this.renderDays()}</div>
            </div>
        `
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
                <div class="md-week-picker__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-week-picker__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleWeekPickerActionClick}" class="md-week-picker__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    <div class="md-week-picker__label">
                        ${this.index<=2?html`
                            <div @click="${this.handleWeekPickerLabelPrimaryClick}" class="md-week-picker__label-primary">${this.label}</div>
                        `:nothing}
                    </div>
                    <div class="md-week-picker__actions">
                        <md-icon-button @click="${this.handleWeekPickerActionNavigateBeforeClick}" class="md-week-picker__action" .icon="${"navigate_before"}"></md-icon-button>
                        <md-icon-button @click="${this.handleWeekPickerActionNavigateNextClick}" class="md-week-picker__action" .icon="${"navigate_next"}"></md-icon-button>
                    </div>
                </div>
            <div class="md-week-picker__body">
                <div class="md-week-picker__inner">${this.renderCard()}</div>
                <div class="md-week-picker__footer">
                    <md-button @click="${this.handleWeekPickerButtonCancelClick}" class="md-week-picker__button" .label="${"Cancel"}"></md-button>
                    <md-button @click="${this.handleWeekPickerButtonOkClick}" class="md-week-picker__button" .label="${"Ok"}"></md-button>
                </div>
            </div>
        `;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-picker");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-week-picker__scrim");
        this.handleWeekPickerScrimClick = this.handleWeekPickerScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handleWeekPickerScrimClick);
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-week-picker");
        await this.updateComplete;
        this.scrim.removeEventListener("click", this.handleWeekPickerScrimClick);
        this.scrim.remove();
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    async firstUpdated() {
        await this.updateComplete;

        this.updateFromValue();
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerShow
     * @fires MDWeekPickerComponent#onWeekPickerClose
     * @fires MDWeekPickerComponent#onWeekPickerChange
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerShow 
     * @fires MDWeekPickerComponent#onWeekPickerClose 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerShow 
     * @fires MDWeekPickerComponent#onWeekPickerClose 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerShow 
     * @fires MDWeekPickerComponent#onWeekPickerClose 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    async updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["full-screen"].forEach((ui) => {
                this.classList.remove("md-week-picker--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-week-picker--" + ui);
                });
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                this.scrim.setAttribute("open", "");
                this.emit("onWeekPickerShow", this);
            } else {
                this.scrim.removeAttribute("open", "");
                this.emit("onWeekPickerClose", this);
            }
        }

        if (changedProperties.has("value")) {
            if (this.value) {
                await this.updateComplete;

                this.updateFromValue();

                this.emit("onWeekPickerChange", { detail: this });
            }
        }

        this.style.setProperty("--md-week-picker-index", this.index);
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    updateFromValue() {
        const date = new Date();

        const [year, week] = (typeof this.value == "string" && this.value.split("-W")) || [date.getFullYear(), date.getWeek()];

        date.setWeek(week, year);

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());

        this.requestUpdate();
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    show(button, options) {
        this.open = true;
        this.popper = new MDPopperModule(this, {
            button,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top"],
            ...options,
        });
        this.popper.set();
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    close() {
        this.open = false;
        this.popper.destroy();
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerScrimClick
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerScrimClick 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerScrimClick 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerScrimClick 
     */
    handleWeekPickerScrimClick(event) {
        this.close();

        this.emit("onWeekPickerScrimClick", event);
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerLabelPrimaryClick
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerLabelPrimaryClick 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerLabelPrimaryClick 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerLabelPrimaryClick 
     */
    handleWeekPickerLabelPrimaryClick(event) {
        if (this.index == 0) {
            this.index = 2;
        } else if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 2) {
            this.index = 1;
        }

        this.emit("onWeekPickerLabelPrimaryClick", event);
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerLabelSecondaryClick
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerLabelSecondaryClick 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerLabelSecondaryClick 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerLabelSecondaryClick 
     */
    handleWeekPickerLabelSecondaryClick(event) {
        if (this.index == 2) {
            this.index = 3;
        } else if (this.index == 3) {
            this.index = 4;
        } else if (this.index == 4) {
            this.index = 2;
        }

        this.emit("onWeekPickerLabelSecondaryClick", event);
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerActionNavigateBeforeClick
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerActionNavigateBeforeClick 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerActionNavigateBeforeClick 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerActionNavigateBeforeClick 
     */
    handleWeekPickerActionNavigateBeforeClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() - 10);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() - 1);
        } else if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() - 1);
        }

        this.requestUpdate();

        this.emit("onWeekPickerActionNavigateBeforeClick", event);
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerActionNavigateNextClick
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerActionNavigateNextClick 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerActionNavigateNextClick 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerActionNavigateNextClick 
     */
    handleWeekPickerActionNavigateNextClick(event) {
        if (this.index == 0) {
            this.selected.setFullYear(this.selected.getFullYear() + 10);
        } else if (this.index == 1) {
            this.selected.setFullYear(this.selected.getFullYear() + 1);
        } else if (this.index == 2) {
            this.selected.setMonth(this.selected.getMonth() + 1);
        }

        this.requestUpdate();

        this.emit("onWeekPickerActionNavigateNextClick", event);
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerYearClick
     * @fires MDWeekPickerComponent#onWeekPickerChange
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerYearClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerYearClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerYearClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    handleWeekPickerYearClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.index = 1;

        this.emit("onWeekPickerYearClick", event);
        this.emit("onWeekPickerChange", event);
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerMonthClick
     * @fires MDWeekPickerComponent#onWeekPickerChange
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerMonthClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerMonthClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerMonthClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    handleWeekPickerMonthClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.index = 2;

        this.emit("onWeekPickerMonthClick", event);
        this.emit("onWeekPickerChange", event);
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerDayClick
     * @fires MDWeekPickerComponent#onWeekPickerChange
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerDayClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerDayClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerDayClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    handleWeekPickerDayClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.requestUpdate();

        this.emit("onWeekPickerDayClick", event);
        this.emit("onWeekPickerChange", event);
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerButtonCancelClick
     * @fires MDWeekPickerComponent#onWeekPickerChange
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerButtonCancelClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerButtonCancelClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerButtonCancelClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    handleWeekPickerButtonCancelClick(event) {
        this.emit("onWeekPickerButtonCancelClick", event);
        this.emit("onWeekPickerChange", event);
    }

    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerButtonOkClick
     * @fires MDWeekPickerComponent#onWeekPickerChange
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerButtonOkClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerButtonOkClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    /**
     *
     * @fires MDWeekPickerComponent#onWeekPickerButtonOkClick 
     * @fires MDWeekPickerComponent#onWeekPickerChange 
     */
    handleWeekPickerButtonOkClick(event) {
        this.emit("onWeekPickerButtonOkClick", event);
        this.emit("onWeekPickerChange", event);
    }
}

customElements.define("md-week-picker", MDWeekPickerComponent);

export { MDWeekPickerComponent };
