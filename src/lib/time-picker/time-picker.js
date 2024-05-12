import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScroll } from "../virtual-scroll/virtual-scroll";

class MDTimePicker extends MDElement {
    static get properties() {
        return {
            value: {
                type: Date,
                converter: (value, type) => {
                    const [hour,minute] = value.split(':')
                    return new Date(0,0,1,hour,minute);
                },
            },
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

            // if (hour == this.value.getHours()) {
            //     const width = k < 12 ? "216px" : "132px";
            //     this.style.setProperty("--md-time-picker-hour-width", width);
            //     const rotate = (360 / 12) * k + "deg";
            //     this.style.setProperty("--md-time-picker-hour-rotate", rotate);
            // }

            return {
                activated: hour == this.current.getHours(),
                selected: hour == this.value.getHours(),
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

            // if (minute == this.value.getMinutes()) {
            //     const width = k % 5 > 0 ? "256px" : "216px";
            //     this.style.setProperty("--md-time-picker-minute-width", width);
            //     const rotate = (360 / 60) * k + "deg";
            //     this.style.setProperty("--md-time-picker-minute-rotate", rotate);
            // }

            return {
                activated: minute == this.current.getMinutes(),
                selected: minute == this.value.getMinutes(),
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

        this.value = new Date();
        this.selected = new Date();
        this.current = new Date();

        this.index = 0;

        // console.log(this.first);
        // console.log(this.last);
        // console.log(this.years);
        // console.log(this.months);
        // console.log(this.weekdays);
        // console.log(this.days);
        // console.log(this.hours);
        // console.log(this.minutes);
    }

    renderCardItemHours() {
        // prettier-ignore
        return html`
            <div class="md-time-picker__card-inner">
                <div class="md-time-picker__absolute md-time-picker__absolute--hour">
                    ${this.hours.map(data=>html`
                        <div 
                            .data="${data}"
                            @click="${this.handleTimePickerItemHourClick}"
                            class="${classMap({
                                "md-time-picker__absolute-item":true,
                                "md-time-picker__absolute-item--activated":data.activated,
                                "md-time-picker__absolute-item--selected":data.selected,
                                "md-time-picker__absolute-item--disabled":data.disabled,
                                "md-time-picker__absolute-item--error":data.error,
                            })}"
                        >${data.label}</div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-time-picker__card-footer"> -->
                <!-- <md-button class="md-time-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-time-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderCardItemMinutes() {
        // prettier-ignore
        return html`
            <div class="md-time-picker__card-inner">
                <div class="md-time-picker__absolute md-time-picker__absolute--minute">
                    ${this.minutes.map(data=>html`
                        <div 
                            .data="${data}"
                            @click="${this.handleTimePickerItemMinuteClick}"
                            class="${classMap({
                                "md-time-picker__absolute-item":true,
                                "md-time-picker__absolute-item--activated":data.activated,
                                "md-time-picker__absolute-item--selected":data.selected,
                                "md-time-picker__absolute-item--disabled":data.disabled,
                                "md-time-picker__absolute-item--error":data.error,
                                "md-time-picker__absolute-item--small":data.small,
                            })}"
                        >${data.label}</div>
                    `)}
                </div>
            </div>
            <!-- <div class="md-time-picker__card-footer"> -->
                <!-- <md-button class="md-time-picker__card-button" label="Cancel"></md-button> -->
                <!-- <md-button class="md-time-picker__card-button" label="Ok"></md-button> -->
            <!-- </div> -->
        `
    }

    renderInner() {
        // prettier-ignore
        return html`
            <div class="md-time-picker__card">
                <div class="md-time-picker__card-item">${this.renderCardItemHours()}</div>
                <div class="md-time-picker__card-item">${this.renderCardItemMinutes()}</div>
            </div>
        `
    }

    render() {
        // prettier-ignore
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
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-time-picker");
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete;

        this.selected.setHours(this.value.getHours());
        this.selected.setMinutes(this.value.getMinutes());

        this.requestUpdate();
    }

    updated(changedProperties) {
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-time-picker-index", this.index);
        }
    }

    handleTimePickerItemHourClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(data.hour);

        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.index = 1;

        this.emit("onTimePickerItemHourClick", event);
    }

    handleTimePickerItemMinuteClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(this.selected.getHours());
        this.selected.setMinutes(data.minute);

        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());

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

        // this.requestUpdate();

        this.emit("onTimePickerLabelClick", event);
    }

    handleTimePickerActionBeforeClick(event) {
        if (this.index == 0) {
            this.selected.setHours(this.selected.getHours() - 1);
            this.value.setHours(this.selected.getHours());
            this.value.setMinutes(this.selected.getMinutes());
        } else if (this.index == 1) {
            this.selected.setMinutes(this.selected.getMinutes() - 1);
            this.value.setHours(this.selected.getHours());
            this.value.setMinutes(this.selected.getMinutes());
        }

        this.requestUpdate();

        this.emit("onTimePickerActionBeforeClick", event);
    }

    handleTimePickerActionNextClick(event) {
        if (this.index == 0) {
            this.selected.setHours(this.selected.getHours() + 1);
            this.value.setHours(this.selected.getHours());
            this.value.setMinutes(this.selected.getMinutes());
        } else if (this.index == 1) {
            this.selected.setMinutes(this.selected.getMinutes() + 1);
            this.value.setHours(this.selected.getHours());
            this.value.setMinutes(this.selected.getMinutes());
        }

        this.requestUpdate();

        this.emit("onTimePickerActionNextClick", event);
    }

    handleTimePickerButtonCancelClick(event) {
        const date = new Date();

        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());

        this.value.setHours(date.getHours());
        this.value.setMinutes(date.getMinutes());

        this.requestUpdate();

        this.index = 0;

        this.emit("onTimePickerButtonCancelClick", event);
    }

    handleTimePickerButtonOkClick(event) {
        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.index = 0;

        this.emit("onTimePickerButtonOkClick", event);
    }
}

customElements.define("md-time-picker", MDTimePicker);

export { MDTimePicker };
