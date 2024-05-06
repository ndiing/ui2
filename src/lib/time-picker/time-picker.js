import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";

class MDTimePicker extends MDElement {
    static get properties() {
        return {
            value: { type: Date },
            index: { type: Number },
        };
    }

    get hours1() {
        return Array.from({ length: 12 }, (v, k) => {
            return { label: k, hour: k, selected: k === this.selected.getHours() };
        });
    }
    get hours2() {
        return Array.from({ length: 12 }, (v, k) => {
            return { label: k + 12, hour: k + 12, selected: k + 12 === this.selected.getHours() };
        });
    }
    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            let label;
            if (k % 5 === 0) {
                label = k;
            }
            return { label, minute: k, selected: k === this.selected.getMinutes() };
        });
    }

    get label() {
        return new Intl.DateTimeFormat("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
        }).format(this.selected);
    }

    constructor() {
        super();

        this.selected = new Date();
        this.value = new Date();
        this.index = 0;
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-time-picker__header">
                <div class="md-time-picker__label">${this.label}</div>
            </div>
            <div class="md-time-picker__body">
                <div class="md-time-picker__inner">

                    <div class="md-time-picker__card">
                        <div class="md-time-picker__item">
                            <div class="md-time-picker__hours">
                                <div class="md-time-picker__hours1" style="transform: rotate(${(360/12)*3}deg)">
                                    ${this.hours1.map((data,index)=>html`
                                        <div 
                                            class="${classMap({
                                                'md-time-picker__hour1':true,
                                                'md-time-picker__hour1--selected':data.selected,
                                            })}" 
                                            style="transform: rotate(${(360/12)*index}deg)"
                                        >
                                            <div 
                                                .data="${data}"
                                                class="${classMap({
                                                    'md-time-picker__action':true,
                                                    'md-time-picker__action--selected':data.selected,
                                                })}" 
                                                style="transform: rotate(${(360/12)*(-3-index)}deg)"
                                                @click="${this.handleTimePickerActionHourClick}"
                                                title="${data.hour}"
                                            >${data.label}</div>
                                        </div>
                                    `)}
                                </div>
                                <div class="md-time-picker__hours2" style="transform: rotate(${(360/12)*3}deg)">
                                    ${this.hours2.map((data,index)=>html`
                                        <div 
                                            class="${classMap({
                                                'md-time-picker__hour2':true,
                                                'md-time-picker__hour2--selected':data.selected,
                                            })}" 
                                            style="transform: rotate(${(360/12)*index}deg)"
                                        >
                                            <div 
                                                .data="${data}"
                                                class="${classMap({
                                                    'md-time-picker__action':true,
                                                    'md-time-picker__action--selected':data.selected,
                                                })}" 
                                                style="transform: rotate(${(360/12)*(-3-index)}deg)"
                                                @click="${this.handleTimePickerActionHourClick}"
                                                title="${data.hour}"
                                            >${data.label}</div>
                                        </div>
                                    `)}
                                </div>
                            </div>
                        </div>
                        <div class="md-time-picker__item">
                            <div class="md-time-picker__minutes" style="transform: rotate(${(360/60)*15}deg)">
                                ${this.minutes.map((data,index)=>html`
                                    <div 
                                        class="${classMap({
                                            'md-time-picker__minute':true,
                                            'md-time-picker__minute--selected':data.selected,
                                        })}" 
                                        style="transform: rotate(${(360/60)*index}deg)"
                                    >
                                        <div 
                                            .data="${data}"
                                            class="${classMap({
                                                'md-time-picker__action':true,
                                                'md-time-picker__action--selected':data.selected,
                                            })}" 
                                            style="transform: rotate(${(360/60)*(-15-index)}deg)"
                                            @click="${this.handleTimePickerActionMinuteClick}"
                                            title="${data.minute}"
                                        >${data.label}</div>
                                    </div>
                                `)}
                            </div>
                        </div>
                    </div>



                </div>
                <div class="md-time-picker__footer">
                    <md-button class="md-time-picker__button" label="Clear" @click="${this.handleTimePickerButtonClearClick}"></md-button>
                    <md-button class="md-time-picker__button" label="Now" @click="${this.handleTimePickerButtonNowClick}"></md-button>
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

    updated(changedProperties) {
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-time-picker-index", this.index);
        }
    }

    handleTimePickerActionHourClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(data.hour);

        this.index = 1;

        this.requestUpdate();

        this.emit("onTimePickerActionHourClick", event);
    }
    handleTimePickerActionMinuteClick(event) {
        const data = event.currentTarget.data;

        this.selected.setMinutes(data.minute);

        this.index = 0;

        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.emit("onTimePickerActionMinuteClick", event);
    }

    handleTimePickerButtonClearClick(event) {
        this.index = 0;

        this.selected = new Date();
        this.value = new Date();
        this.requestUpdate();

        this.emit("onTimePickerButtonClearClick", event);
    }
    handleTimePickerButtonNowClick(event) {
        this.selected = new Date();
        this.value = new Date();
        this.requestUpdate();

        this.emit("onTimePickerButtonNowClick", event);
    }
}

customElements.define("md-time-picker", MDTimePicker);

export { MDTimePicker };
