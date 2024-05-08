import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";

class MDTimePicker extends MDElement {
    static get properties() {
        return {
            value: { type: Date, converter: (value) => {
                const [hour,minute] = value.split(':')
                return new Date(0,0,1,hour,minute)
            } },
            index: { type: Number },
        };
    }

    get hours() {
        return Array.from({ length: 24 }, (v, k) => {
            const date = new Date(0, 0, 1, k);
            const hour = date.getHours();
            return {
                activated: hour == this.current.getHours(),
                selected: hour == this.value.getHours(),
                disabled: false,
                hour12: k < 12,
                label: this.hourDTF.format(date),
                hour,
            };
        });
    }

    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            const date = new Date(0, 0, 1, 0, k);
            const minute = date.getMinutes();
            let label;
            if (k % 5 === 0) {
                label = this.minuteDTF.format(date);
            }
            return {
                activated: minute == this.current.getMinutes(),
                selected: minute == this.value.getMinutes(),
                disabled: false,
                label,
                minute,
            };
        });
    }

    get label() {
        return this.labelDTF.format(this.selected);
    }

    constructor() {
        super();

        this.hourDTF = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false });
        this.minuteDTF = new Intl.DateTimeFormat(undefined, { minute: "numeric", hour12: false });
        this.labelDTF = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit", hour12: false });

        this.current = new Date();
        this.selected = new Date();
        this.value = new Date();

        this.index = 1;

        // console.log(this.hours);
        // console.log(this.minutes);
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-time-picker__header">
                <div @click="${this.handleTimePickerLabelClick}" class="md-time-picker__label">${this.label}</div>
                <!-- <div class="md-time-picker__actions">
                    <md-icon-button @click="${this.handleTimePickerActionBeforeClick}" class="md-time-picker__action" icon="navigate_before"></md-icon-button>
                    <md-icon-button @click="${this.handleTimePickerActionNextClick}" class="md-time-picker__action" icon="navigate_next"></md-icon-button>
                </div> -->
            </div>
            <div class="md-time-picker__body">
                <div class="md-time-picker__inner">
                
                    <div class="md-time-picker__card">
                        
                        <div class="md-time-picker__card-item">

                            <div class="md-time-picker__column md-time-picker__column--minute" style="transform:rotate(${(360/60)*15}deg);">
                                ${this.minutes.map((data,index)=>html`
                                    <div class="${classMap({
                                        'md-time-picker__column-item':true,
                                        'md-time-picker__column-item--minute':true,
                                        'md-time-picker__column-item--selected':data.selected,
                                    })}" style="transform:rotate(${(360/60)*index}deg);">
                                        <div .data="${data}" @click="${this.handleTimePickerColumnLabelMinuteClick}" 
                                            class="${classMap({
                                                'md-time-picker__column-label':true,
                                                'md-time-picker__column-label--minute':true,
                                                'md-time-picker__column-label--activated':data.activated,
                                                'md-time-picker__column-label--selected':data.selected,
                                                'md-time-picker__column-label--disabled':data.disabled,
                                            })}" style="transform:rotate(${(360/60)*(-15-index)}deg);"
                                        >${data.label}</div>
                                    </div>
                                `)}
                            </div>

                        </div>
                        
                        
                        <div class="md-time-picker__card-item">

                            <div class="md-time-picker__column md-time-picker__column--hour" style="transform:rotate(${(360/12)*3}deg);">
                                ${this.hours.map((data,index)=>html`
                                    <div class="${classMap({
                                        'md-time-picker__column-item':true,
                                        'md-time-picker__column-item--hour':true,
                                        'md-time-picker__column-item--selected':data.selected,
                                        'md-time-picker__column-item--hour24':!data.hour12,
                                    })}" style="transform:rotate(${(360/12)*index}deg);">
                                        <div .data="${data}" @click="${this.handleTimePickerColumnLabelHourClick}" 
                                            class="${classMap({
                                                'md-time-picker__column-label':true,
                                                'md-time-picker__column-label--hour':true,
                                                'md-time-picker__column-label--hour24':!data.hour12,
                                                'md-time-picker__column-label--activated':data.activated,
                                                'md-time-picker__column-label--selected':data.selected,
                                                'md-time-picker__column-label--disabled':data.disabled,
                                            })}" style="transform:rotate(${(360/12)*(-3-index)}deg);"
                                        >${data.label}</div>
                                    </div>
                                `)}
                            </div>

                        </div>
                        
                    </div>

                </div>
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
        this.style.setProperty("--md-time-picker-index", this.index);
    }

    handleTimePickerLabelClick(event) {
        if (this.index === 1) {
            this.index = 0;
        } else if (this.index === 0) {
            this.index = 1;
        }
        this.emit("onTimePickerLabelClick", event);
    }
    handleTimePickerActionBeforeClick(event) {
        if (this.index === 1) {
            this.selected.setHours(this.selected.getHours() - 1);
        } else if (this.index === 0) {
            this.selected.setMinutes(this.selected.getMinutes() - 1);
        }
        this.requestUpdate();
        this.emit("onTimePickerActionBeforeClick", event);
    }
    handleTimePickerActionNextClick(event) {
        if (this.index === 1) {
            this.selected.setHours(this.selected.getHours() + 1);
        } else if (this.index === 0) {
            this.selected.setMinutes(this.selected.getMinutes() + 1);
        }
        this.requestUpdate();
        this.emit("onTimePickerActionNextClick", event);
    }

    handleTimePickerColumnLabelMinuteClick(event) {
        this.index = 1;

        const data = event.currentTarget.data;
        this.selected.setMinutes(data.minute);

        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());

        this.requestUpdate();
        this.emit("onTimePickerColumnLabelMinuteClick", event);
    }
    handleTimePickerColumnLabelHourClick(event) {
        this.index = 0;

        const data = event.currentTarget.data;
        this.selected.setHours(data.hour);

        this.requestUpdate();
        this.emit("onTimePickerColumnLabelHourClick", event);
    }
    handleTimePickerButtonCancelClick(event) {
        this.index = 1;

        const date = new Date();
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());

        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());
        this.requestUpdate();
        this.emit("onTimePickerButtonCancelClick", event);
    }
    handleTimePickerButtonOkClick(event) {
        // this.index=1
        // this.value.setHours(this.selected.getHours());
        // this.value.setMinutes(this.selected.getMinutes());
        // this.requestUpdate();
        console.log(this.value);
        this.emit("onTimePickerButtonOkClick", event);
    }
}

customElements.define("md-time-picker", MDTimePicker);

export { MDTimePicker };
