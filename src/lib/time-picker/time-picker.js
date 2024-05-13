import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScroll } from "../virtual-scroll/virtual-scroll";

class MDTimePicker extends MDElement {
    static get properties() {
        return {
            value: { type: String },
            index: { type: Number },
        };
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

    get label2() {
        return this.label2DTF.format(this.selected);
    }

    constructor() {
        super();

        this.dayDTF = new Intl.DateTimeFormat(undefined, { day: "numeric" });
        this.hourDTF = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false });
        this.minuteDTF = new Intl.DateTimeFormat(undefined, { minute: "numeric" });

        this.label2DTF = new Intl.DateTimeFormat(undefined, { hour: "2-digit", hour12: false, minute: "2-digit" });

        this.currentValue = new Date();
        this.selected = new Date();
        this.current = new Date();

        this.index = 0;
    }

    renderCardItemHours() {
        return html`
            <div class="md-time-picker__card-inner">
                <div class="md-time-picker__absolute md-time-picker__absolute--hour">
                    ${this.hours.map(
                        (data) => html`
                            <div
                                .data="${data}"
                                @click="${this.handleTimePickerItemHourClick}"
                                class="${classMap({
                                    "md-time-picker__absolute-item": true,
                                    "md-time-picker__absolute-item--activated": data.activated,
                                    "md-time-picker__absolute-item--selected": data.selected,
                                    "md-time-picker__absolute-item--disabled": data.disabled,
                                    "md-time-picker__absolute-item--error": data.error,
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
            <div class="md-time-picker__card-inner">
                <div class="md-time-picker__absolute md-time-picker__absolute--minute">
                    ${this.minutes.map(
                        (data) => html`
                            <div
                                .data="${data}"
                                @click="${this.handleTimePickerItemMinuteClick}"
                                class="${classMap({
                                    "md-time-picker__absolute-item": true,
                                    "md-time-picker__absolute-item--activated": data.activated,
                                    "md-time-picker__absolute-item--selected": data.selected,
                                    "md-time-picker__absolute-item--disabled": data.disabled,
                                    "md-time-picker__absolute-item--error": data.error,
                                    "md-time-picker__absolute-item--small": data.small,
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
            <div class="md-time-picker__card">
                <div class="md-time-picker__card-item">${this.renderCardItemHours()}</div>
                <div class="md-time-picker__card-item">${this.renderCardItemMinutes()}</div>
            </div>
        `;
    }

    render() {
        return html`
            <div class="md-time-picker__header">
                <md-button @click="${this.handleTimePickerLabel2Click}" class="md-time-picker__label" .label="${this.label2}"></md-button>
                <div class="md-time-picker__actions">
                    <md-icon-button @click="${this.handleTimePickerActionBeforeClick}" class="md-time-picker__action" icon="navigate_before"></md-icon-button>
                    <md-icon-button @click="${this.handleTimePickerActionNextClick}" class="md-time-picker__action" icon="navigate_next"></md-icon-button>
                </div>
            </div>
            <div class="md-time-picker__body">
                <div class="md-time-picker__inner">${this.renderInner()}</div>
                <div class="md-time-picker__footer">
                    <md-button @click="${this.handleTimePickerButtonCancelClick}" class="md-time-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleTimePickerButtonOkClick}" class="md-time-picker__button" label="Ok"></md-button>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-time-picker");
    }

    async firstUpdated(changedProperties) {}

    async updated(changedProperties) {
        if (changedProperties.has("value")) {
            await this.updateComplete;

            const [hour, minute] = this.value.split(/[^\d]/);
            const value = new Date(0, 0, 1, hour, minute);

            this.currentValue.setHours(value.getHours());
            this.currentValue.setMinutes(value.getMinutes());

            this.selected.setHours(value.getHours());
            this.selected.setMinutes(value.getMinutes());

            this.requestUpdate();
        }
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-time-picker-index", this.index);
        }
    }

    handleTimePickerItemHourClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(data.hour);

        this.currentValue.setHours(this.selected.getHours());
        this.currentValue.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.index = 1;

        this.emit("onTimePickerItemHourClick", event);
    }

    handleTimePickerItemMinuteClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(this.selected.getHours());
        this.selected.setMinutes(data.minute);

        this.currentValue.setHours(this.selected.getHours());
        this.currentValue.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.index = 0;

        this.emit("onTimePickerItemMinuteClick", event);
    }

    handleTimePickerLabel2Click(event) {
        if (this.index == 0) {
            this.index = 1;
        } else if (this.index == 1) {
            this.index = 0;
        }

        this.emit("onTimePickerLabelClick", event);
    }

    handleTimePickerActionBeforeClick(event) {
        if (this.index == 0) {
            this.selected.setHours(this.selected.getHours() - 1);
            this.currentValue.setHours(this.selected.getHours());
            this.currentValue.setMinutes(this.selected.getMinutes());
        } else if (this.index == 1) {
            this.selected.setMinutes(this.selected.getMinutes() - 1);
            this.currentValue.setHours(this.selected.getHours());
            this.currentValue.setMinutes(this.selected.getMinutes());
        }

        this.requestUpdate();

        this.emit("onTimePickerActionBeforeClick", event);
    }

    handleTimePickerActionNextClick(event) {
        if (this.index == 0) {
            this.selected.setHours(this.selected.getHours() + 1);
            this.currentValue.setHours(this.selected.getHours());
            this.currentValue.setMinutes(this.selected.getMinutes());
        } else if (this.index == 1) {
            this.selected.setMinutes(this.selected.getMinutes() + 1);
            this.currentValue.setHours(this.selected.getHours());
            this.currentValue.setMinutes(this.selected.getMinutes());
        }

        this.requestUpdate();

        this.emit("onTimePickerActionNextClick", event);
    }

    handleTimePickerButtonCancelClick(event) {
        const date = new Date();

        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());

        this.currentValue.setHours(date.getHours());
        this.currentValue.setMinutes(date.getMinutes());

        this.requestUpdate();

        this.index = 0;

        this.emit("onTimePickerButtonCancelClick", event);
    }

    handleTimePickerButtonOkClick(event) {
        this.currentValue.setHours(this.selected.getHours());
        this.currentValue.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.index = 0;

        this.emit("onTimePickerButtonOkClick", event);
    }
}

customElements.define("md-time-picker", MDTimePicker);

export { MDTimePicker };
