import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { Scrolling } from "../scrolling/scrolling";

class MDMonthPickerYear extends HTMLDivElement {
    connectedCallback() {
        const total = new Date().getFullYear() * 2;
        const itemHeight = 48;
        const viewportHeight = 32 * 7 + 4 * 6;

        const scrollbar = this.querySelector(".md-month-picker__scrollbar");
        const container = this.querySelector(".md-month-picker__list");

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

customElements.define("md-month-picker-year", MDMonthPickerYear, { extends: "div" });

class MDMonthPickerMonth extends HTMLDivElement {
    connectedCallback() {}
    disconnectedCallback() {}
}

customElements.define("md-month-picker-month", MDMonthPickerMonth, { extends: "div" });

class MDMonthPickerListMonthItem extends HTMLDivElement {
    static observedAttributes = ["selected"];
    connectedCallback() {}
    disconnectedCallback() {}
    attributeChangedCallback() {
    }
}

customElements.define("md-month-picker-list-month-item", MDMonthPickerListMonthItem, { extends: "div" });

class MDMonthPicker extends MDElement {
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
        this.monthDTF = new Intl.DateTimeFormat(undefined, { month: "long" });

        this.currentValue = new Date();
        this.selected = new Date();
        this.current = new Date();

        this.index = 1;
    }

    get cardInnerYear() {
        return this.querySelector(".md-month-picker__card-inner--year");
    }

    renderCardItemYears() {
        return html`
            <div class="md-month-picker__card-inner md-month-picker__card-inner--year" is="md-month-picker-year" @onScrolling="${this.handleMonthPickerYearScrolling}">
                <div class="md-month-picker__scrollbar"></div>
                <div class="md-month-picker__list">
                    ${this.years.map(
                        (data) => html`
                            <div
                                .data="${data}"
                                @click="${this.handleMonthPickerItemYearClick}"
                                class="${classMap({
                                    "md-month-picker__list-item": true,
                                    "md-month-picker__list-item--activated": data.activated,
                                    "md-month-picker__list-item--selected": data.selected,
                                    "md-month-picker__list-item--disabled": data.disabled,
                                    "md-month-picker__list-item--error": data.error,
                                })}"
                            >
                                <md-icon class="md-month-picker__list-icon">${data.selected ? "check" : ""}</md-icon>
                                <div class="md-month-picker__list-label">${data.label}</div>
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    renderCardItemMonths() {
        return html`
            <div class="md-month-picker__card-inner" is="md-month-picker-month" @onScrolling="${this.handleMonthPickerMonthScrolling}">
                <div class="md-month-picker__list">
                    ${this.months.map(
                        (data) => html`
                            <div
                                is="md-month-picker-list-month-item"
                                .data="${data}"
                                ?selected="${data.selected}"
                                @click="${this.handleMonthPickerItemMonthClick}"
                                class="${classMap({
                                    "md-month-picker__list-item": true,
                                    "md-month-picker__list-item--activated": data.activated,
                                    "md-month-picker__list-item--selected": data.selected,
                                    "md-month-picker__list-item--disabled": data.disabled,
                                    "md-month-picker__list-item--error": data.error,
                                })}"
                            >
                                <md-icon class="md-month-picker__list-icon">${data.selected ? "check" : ""}</md-icon>
                                <div class="md-month-picker__list-label">${data.label}</div>
                            </div>
                        `
                    )}
                </div>
            </div>
        `;
    }

    renderInner() {
        return html`
            <div class="md-month-picker__card">
                <div class="md-month-picker__card-item">${this.renderCardItemYears()}</div>
                <div class="md-month-picker__card-item">${this.renderCardItemMonths()}</div>
            </div>
        `;
    }

    render() {
        return html`
            <div class="md-month-picker__header">
                <md-button @click="${this.handleMonthPickerLabelClick}" class="md-month-picker__label" .label="${this.label}"></md-button>
                ${this.index !== 0
                    ? html`
                          <div class="md-month-picker__actions">
                              <md-icon-button @click="${this.handleMonthPickerActionBeforeClick}" class="md-month-picker__action" icon="navigate_before"></md-icon-button>
                              <md-icon-button @click="${this.handleMonthPickerActionNextClick}" class="md-month-picker__action" icon="navigate_next"></md-icon-button>
                          </div>
                      `
                    : nothing}
            </div>
            <div class="md-month-picker__body">
                <div class="md-month-picker__inner">${this.renderInner()}</div>
                <div class="md-month-picker__footer">
                    <md-button @click="${this.handleMonthPickerButtonCancelClick}" class="md-month-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleMonthPickerButtonOkClick}" class="md-month-picker__button" label="Ok"></md-button>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-month-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-month-picker");
    }

    get listMonthItemSelected() {
        return this.querySelector(".md-month-picker__list-item--selected");
    }

    async firstUpdated(changedProperties) {}

    async updated(changedProperties) {
        if (changedProperties.has("value")) {
            await this.updateComplete;

            const value = new Date(this.value);

            this.currentValue.setFullYear(value.getFullYear());
            this.currentValue.setMonth(value.getMonth());

            this.selected.setFullYear(value.getFullYear());
            this.selected.setMonth(value.getMonth());

            this.requestUpdate();
        }
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-month-picker-index", this.index);
        }
    }

    async handleMonthPickerYearScrolling(event) {
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

        this.emit("onMonthPickerListYearScrolling", event);
    }

    handleMonthPickerMonthScrolling(event) {
        const {
            start,
            end,
            options: { total },
        } = event.detail;

        this.emit("onMonthPickerListMonthScrolling", event);
    }

    handleMonthPickerItemYearClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);

        this.requestUpdate();

        this.index = 1;

        this.emit("onMonthPickerItemYearClick", event);
    }

    async handleMonthPickerItemMonthClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);

        this.currentValue.setFullYear(this.selected.getFullYear());
        this.currentValue.setMonth(this.selected.getMonth());

        this.requestUpdate();

        this.emit("onMonthPickerItemMonthClick", event);
    }

    handleMonthPickerLabelClick(event) {
        if (this.index == 1) {
            this.index = 0;
        } else if (this.index == 0) {
            this.index = 1;
        }

        this.emit("onMonthPickerLabelClick", event);
    }

    async handleMonthPickerActionBeforeClick(event) {
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

    async handleMonthPickerButtonCancelClick(event) {
        const date = new Date();

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());

        this.currentValue.setFullYear(date.getFullYear());
        this.currentValue.setMonth(date.getMonth());

        this.requestUpdate();

        this.index = 1;

        this.emit("onMonthPickerButtonCancelClick", event);
    }

    async handleMonthPickerButtonOkClick(event) {
        this.currentValue.setFullYear(this.selected.getFullYear());
        this.currentValue.setMonth(this.selected.getMonth());

        this.requestUpdate();

        this.index = 1;

        this.emit("onMonthPickerButtonOkClick", event);
    }
}

customElements.define("md-month-picker", MDMonthPicker);

export { MDMonthPicker };
