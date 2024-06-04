import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDPopperModule } from "../popper/popper";

/**
 *
 * @extends MDElement
 */
class MDTimePickerComponent extends MDElement {
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

    /**
     *
     */
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

    /**
     *
     */
    get subLabel() {
        return this.timeFormat(this.selected);
    }

    /**
     *
     */
    constructor() {
        super();

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

        this.index = 0;
    }

    /**
     *
     */
    renderHours() {
        /* prettier-ignore */
        return html`
            <div class="md-time-picker__absolute md-time-picker__absolute--hours">
                ${this.hours.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-time-picker__absolute-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleTimePickerHourClick}"
                    >${item.label}</div>
                `)}
            </div>
        `
    }

    /**
     *
     */
    renderMinutes() {
        /* prettier-ignore */
        return html`
            <div class="md-time-picker__absolute md-time-picker__absolute--minutes">
                ${this.minutes.map(item=>html`
                    <div 
                        .data="${item}"
                        class="md-time-picker__absolute-item"
                        ?activated="${item.activated}"
                        ?selected="${item.selected}"
                        @click="${this.handleTimePickerMinuteClick}"
                    >${item.label}</div>
                `)}
            </div>
        `
    }

    /**
     *
     */
    renderCard() {
        /* prettier-ignore */
        return html`
            <div class="md-time-picker__card">
                <div class="md-time-picker__card-item">${this.renderHours()}</div>
                <div class="md-time-picker__card-item">${this.renderMinutes()}</div>
            </div>
        `
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
                <div class="md-time-picker__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-time-picker__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleTimePickerActionClick}" class="md-time-picker__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    <div class="md-time-picker__label">
                        ${this.index<=1?html`
                            <div @click="${this.handleTimePickerLabelSecondaryClick}" class="md-time-picker__label-secondary">${this.subLabel}</div>
                        `:nothing}
                    </div>
                    <div class="md-time-picker__actions">
                        <md-icon-button @click="${this.handleTimePickerActionNavigateBeforeClick}" class="md-time-picker__action" .icon="${"navigate_before"}"></md-icon-button>
                        <md-icon-button @click="${this.handleTimePickerActionNavigateNextClick}" class="md-time-picker__action" .icon="${"navigate_next"}"></md-icon-button>
                    </div>
                </div>
            <div class="md-time-picker__body">
                <div class="md-time-picker__inner">${this.renderCard()}</div>
                <div class="md-time-picker__footer">
                    <md-button @click="${this.handleTimePickerButtonCancelClick}" class="md-time-picker__button" .label="${"Cancel"}"></md-button>
                    <md-button @click="${this.handleTimePickerButtonOkClick}" class="md-time-picker__button" .label="${"Ok"}"></md-button>
                </div>
            </div>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-picker");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-time-picker__scrim");
        this.handleTimePickerScrimClick = this.handleTimePickerScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handleTimePickerScrimClick);
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-time-picker");
        await this.updateComplete;
        this.scrim.removeEventListener("click", this.handleTimePickerScrimClick);
        this.scrim.remove();
    }

    /**
     *
     */
    async firstUpdated() {
        await this.updateComplete;

        this.updateFromValue();
    }

    /**
     *
     * @fires MDTimePickerComponent#onTimePickerShow
     * @fires MDTimePickerComponent#onTimePickerClose
     * @fires MDTimePickerComponent#onTimePickerChange
     */
    async updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["full-screen"].forEach((ui) => {
                this.classList.remove("md-time-picker--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-time-picker--" + ui);
                });
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                this.scrim.setAttribute("open", "");
                this.emit("onTimePickerShow", this);
            } else {
                this.scrim.removeAttribute("open", "");
                this.emit("onTimePickerClose", this);
            }
        }

        if (changedProperties.has("value")) {
            if (this.value) {
                await this.updateComplete;

                this.updateFromValue();

                this.emit("onTimePickerChange", { detail: this });
            }
        }

        this.style.setProperty("--md-time-picker-index", this.index);
    }

    /**
     *
     */
    updateFromValue() {
        const date = new Date();

        const [hour, minute] = (typeof this.value == "string" && this.value.split(":")) || [date.getHours(), date.getMinutes()];

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
        this.selected.setHours(hour);
        this.selected.setMinutes(minute);

        this.requestUpdate();
    }

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
    close() {
        this.open = false;
        this.popper.destroy();
    }

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
     * @fires MDTimePickerComponent#onTimePickerScrimClick
     */
    handleTimePickerScrimClick(event) {
        this.close();

        this.emit("onTimePickerScrimClick", event);
    }

    /**
     *
     * @fires MDTimePickerComponent#onTimePickerLabelSecondaryClick
     */
    handleTimePickerLabelSecondaryClick(event) {
        if (this.index == 0) {
            this.index = 1;
        } else if (this.index == 1) {
            this.index = 0;
        }

        this.emit("onTimePickerLabelSecondaryClick", event);
    }

    /**
     *
     * @fires MDTimePickerComponent#onTimePickerActionNavigateBeforeClick
     */
    handleTimePickerActionNavigateBeforeClick(event) {
        if (this.index == 0) {
            this.selected.setHours(this.selected.getHours() - 1);
        } else if (this.index == 1) {
            this.selected.setMinutes(this.selected.getMinutes() - 1);
        }

        this.requestUpdate();

        this.emit("onTimePickerActionNavigateBeforeClick", event);
    }

    /**
     *
     * @fires MDTimePickerComponent#onTimePickerActionNavigateNextClick
     */
    handleTimePickerActionNavigateNextClick(event) {
        if (this.index == 0) {
            this.selected.setHours(this.selected.getHours() + 1);
        } else if (this.index == 1) {
            this.selected.setMinutes(this.selected.getMinutes() + 1);
        }

        this.requestUpdate();

        this.emit("onTimePickerActionNavigateNextClick", event);
    }

    /**
     *
     * @fires MDTimePickerComponent#onTimePickerHourClick
     * @fires MDTimePickerComponent#onTimePickerChange
     */
    handleTimePickerHourClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);

        this.index = 1;

        this.emit("onTimePickerHourClick", event);
        this.emit("onTimePickerChange", event);
    }

    /**
     *
     * @fires MDTimePickerComponent#onTimePickerMinuteClick
     * @fires MDTimePickerComponent#onTimePickerChange
     */
    handleTimePickerMinuteClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);
        this.selected.setMinutes(data.minute);

        this.index = 0;

        this.emit("onTimePickerMinuteClick", event);
        this.emit("onTimePickerChange", event);
    }

    /**
     *
     * @fires MDTimePickerComponent#onTimePickerButtonCancelClick
     * @fires MDTimePickerComponent#onTimePickerChange
     */
    handleTimePickerButtonCancelClick(event) {
        this.emit("onTimePickerButtonCancelClick", event);
        this.emit("onTimePickerChange", event);
    }

    /**
     *
     * @fires MDTimePickerComponent#onTimePickerButtonOkClick
     * @fires MDTimePickerComponent#onTimePickerChange
     */
    handleTimePickerButtonOkClick(event) {
        this.emit("onTimePickerButtonOkClick", event);
        this.emit("onTimePickerChange", event);
    }
}

customElements.define("md-time-picker", MDTimePickerComponent);

export { MDTimePickerComponent };
